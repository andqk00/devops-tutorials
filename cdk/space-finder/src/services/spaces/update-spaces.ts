import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { parseJson } from "../shared/utils";

export async function updateSpaces(
  event: APIGatewayProxyEvent,
  dynamoDbClient: DynamoDBClient
): Promise<APIGatewayProxyResult> {
  if (event.queryStringParameters) {
    if ("id" in event.queryStringParameters && event.body) {
      const spaceId = event.queryStringParameters["id"];
      const parseBody = parseJson(event.body);
      const requestBodyKey = Object.keys(parseBody)[0];
      const requestBodyValue = parseBody[requestBodyKey];

      const updateResult = await dynamoDbClient.send(
        new UpdateItemCommand({
          TableName: process.env.TABLE_NAME,
          Key: {
            id: {
              S: spaceId,
            },
          },
          UpdateExpression: "set #zzzNew = :new",
          ExpressionAttributeValues: {
            ":new": {
              S: requestBodyValue,
            },
          },
          ExpressionAttributeNames: {
            "#zzzNew": requestBodyKey,
          },
          ReturnValues: "UPDATED_NEW",
        })
      );

      return {
        statusCode: 204,
        body: JSON.stringify(updateResult.Attributes),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify("Please provide appropriate args!"),
      };
    }
  }
}
