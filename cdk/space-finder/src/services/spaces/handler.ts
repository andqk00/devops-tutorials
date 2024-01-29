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

const dynamoDbClient = new DynamoDBClient({ region: "ap-southeast-1" });

async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  let message: string;

  try {
    switch (event.httpMethod) {
      case "GET":
        const getResponse = await getSpaces(event, dynamoDbClient);
        return getResponse;
      case "POST":
        const postResponse = await postSpaces(event, dynamoDbClient);
        return postResponse;
      case "PUT":
        const putResponse = await updateSpaces(event, dynamoDbClient);
        return putResponse;
      case "DELETE":
        const delResponse = await deleteSpaces(event, dynamoDbClient);
        return delResponse;
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

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(message),
  };

  return response;
}

export { handler };
