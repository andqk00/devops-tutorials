import { DeleteItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export async function deleteSpaces(
  event: APIGatewayProxyEvent,
  dynamoDbClient: DynamoDBClient
): Promise<APIGatewayProxyResult> {
  if (event.queryStringParameters) {
    if ("id" in event.queryStringParameters) {
      const spaceId = event.queryStringParameters["id"];

      const deleteResult = await dynamoDbClient.send(
        new DeleteItemCommand({
          TableName: process.env.TABLE_NAME,
          Key: {
            id: {
              S: spaceId,
            },
          },
        })
      );

      return {
        statusCode: 200,
        body: JSON.stringify(`Deleted space with Id ${spaceId}`),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify("Please provide appropriate args!"),
      };
    }
  }
}
