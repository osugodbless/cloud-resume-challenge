import boto3
import json

# Get the DynamoDB client
dynamodb = boto3.client('dynamodb')

def lambda_handler(event, context):
    try:
        # Update the count in DynamoDB
        dynamodb.update_item(
            TableName='Count_Table',
            Key={'Count': {'S': 'Visitors'}},  # Assuming 'Count' is the primary key
            UpdateExpression='SET visitor_count = if_not_exists(visitor_count, :initial) + :increment',
            ExpressionAttributeValues={
                ':initial': {'N': '1'},  # Initialize the count to 1 if it doesn't exist
                ':increment': {'N': '1'}  # Increment the count by 1
            },
            ReturnValues='UPDATED_NEW'
        )

        # Construct API Gateway Proxy response
        api_gateway_response = {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': 'https://osu-resume.com.ng',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': '*'
            },
            'body': 'Visitor count updated successfully'
        }

    except Exception as e:
        # Handle any exceptions
        api_gateway_response = {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }

    return api_gateway_response
