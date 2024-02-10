import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { postSpaces } from "./post-spaces";
import { getSpaces } from "./get-spaces";
import { updateSpaces } from "./update-spaces";
import { deleteSpaces } from "./delete-spaces";
import { JsonError, MissingFieldError } from "../shared/validator";
import { addCorsHeader } from "../shared/utils";

const dynamoDbClient = new DynamoDBClient({ region: "ap-southeast-1" });

async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  let response: APIGatewayProxyResult;

  try {
    switch (event.httpMethod) {
      case "GET":
        const getResponse = await getSpaces(event, dynamoDbClient);
        response = getResponse;
        break;
      case "POST":
        const postResponse = await postSpaces(event, dynamoDbClient);
        response = postResponse;
        break;
      case "PUT":
        const putResponse = await updateSpaces(event, dynamoDbClient);
        response = putResponse;
        break;
      case "DELETE":
        const delResponse = await deleteSpaces(event, dynamoDbClient);
        response = delResponse;
        break;
      default:
        break;
    }
  } catch (error) {
    if (error instanceof MissingFieldError || error instanceof JsonError) {
      return {
        statusCode: 400,
        body: error.message,
      };
    }
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }

  addCorsHeader(response);
  return response;
}

export { handler };
