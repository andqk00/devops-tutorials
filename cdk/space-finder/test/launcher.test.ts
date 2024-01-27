import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "ap-southeast-1";
process.env.TABLE_NAME = "spaces-table-fe4bdef0";

handler(
  {
    httpMethod: "GET",
    queryStringParameters: {
      id: "a83bbf09-c954-4c32-853f-ee885156cef6",
    },
  } as any,
  {} as any
);
// handler(
//   {
//     httpMethod: "POST",
//     body: JSON.stringify({
//       location: "Vomir",
//     }),
//   } as any,
//   {} as any
// );
