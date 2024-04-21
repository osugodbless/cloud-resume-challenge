import boto3
import json

# Get the DynamoDB client
dynamodb = boto3.client('dynamodb')

def lambda_handler(event, context):
    try:
        # Get item from DynamoDB
        response = dynamodb.get_item(
            TableName='Count_Table',
            Key={'Count': {'S': 'Visitors'}},  # Assuming 'Count' is the primary key
            ProjectionExpression='visitor_count'  # Specify only the attribute you want to retrieve
        )

        # Check if the item exists
        if 'Item' in response:
            # Extract the numeric value
            numeric_value = response['Item']['visitor_count']['N']

            # Construct API Gateway Proxy response
            api_gateway_response = {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Origin': 'https://osu-resume.com.ng',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Headers': '*'
                },
                'body': numeric_value
            }
        else:
            # If item not found
            api_gateway_response = {
                'statusCode': 404,
                'body': json.dumps({'error': 'Item not found'})
            }

    except Exception as e:
        # Handle any exceptions
        api_gateway_response = {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }

    return api_gateway_response
