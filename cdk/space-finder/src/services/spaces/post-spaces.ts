import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
// import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { validateSpaceEntry } from "../shared/validator";
import { createRandomId, parseJson } from "../shared/utils";

export async function postSpaces(
  event: APIGatewayProxyEvent,
  dynamoDbClient: DynamoDBClient
): Promise<APIGatewayProxyResult> {
  // const ddbDocClient = DynamoDBDocumentClient.from(dynamoDbClient);

  const randomId = createRandomId();
  const item = parseJson(event.body);
  item.id = randomId;
  validateSpaceEntry(item);

  const result = await dynamoDbClient.send(
    new PutItemCommand({
      TableName: process.env.TABLE_NAME,
      Item: marshall(item),
    })
  );
  // const result = await ddbDocClient.send(
  //   new PutItemCommand({
  //     TableName: process.env.TABLE_NAME,
  //     Item: item,
  //   })
  // );

  return {
    statusCode: 201,
    body: JSON.stringify({ id: randomId }),
  };
}
