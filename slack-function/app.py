import json
import boto3
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

# Create an SSM Client to access parameter store
ssm = boto3.client('ssm')

# Define the lambda handler function
def lambda_handler(event, context):
    try:
        # Retrieve message from event when lambda is triggered from SNS
        print(json.dumps(event))
        
        message = json.loads(event['Records'][0]['Sns']['Message'])
        print(json.dumps(message))
        
        # Retrieve JSON variables from message
        alarm_name = message['AlarmName']
        new_state = message['NewStateValue']
        reason = message['NewStateReason']
        
        # Create format for slack message
        slack_message = {
            'text': f':fire: {alarm_name} state is now {new_state}: {reason} from Nesq\n'
                    f'```\n{json.dumps(message)}```'
        }
        
        # Retrieve webhook URL from parameter store
        webhook_url = ssm.get_parameter(Name='webhookUrl', WithDecryption=True)['Parameter']['Value']
        
        # Make request to the API
        req = Request(webhook_url, json.dumps(slack_message).encode('utf-8'))
        
        try:
            response = urlopen(req)
            response.read()
            print("Message posted to Slack")
        except HTTPError as e:
            print(f'Request failed: {e.code} {e.reason}')
        except URLError as e:
            print(f'Server Connection failed: {e.reason}')
    
    except Exception as e:
        print(f'Error: {e}')