import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "ap-southeast-1";
process.env.TABLE_NAME = "spaces-table-fe4bdef0";

// handler(
//   {
//     httpMethod: "GET",
//     queryStringParameters: {
//       id: "a83bbf09-c954-4c32-853f-ee885156cef6",
//     },
//   } as any,
//   {} as any
// );
// handler(
//   {
//     httpMethod: "POST",
//     body: JSON.stringify({
//       location: "Vomir",
//     }),
//   } as any,
//   {} as any
// );
// handler(
//   {
//     httpMethod: "PUT",
//     queryStringParameters: {
//       id: "ed9fd54c-c6ce-4f75-90c3-fe1a637a3668",
//     },
//     body: JSON.stringify({
//       location: "Midgard",
//     }),
//   } as any,
//   {} as any
// );
handler(
  {
    httpMethod: "DELETE",
    queryStringParameters: {
      id: "ed9fd54c-c6ce-4f75-90c3-fe1a637a3668",
    },
  } as any,
  {} as any
);
