import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";
import { AuthService } from "./auth.service";

async function testAuth() {
  const service = new AuthService();
  const loginResult = await service.login("jqka", "@Newyork2024");
  // console.log(loginResult.getSignInUserSession().getIdToken().getJwtToken());
  const credential = await service.generateTemporaryCredential(loginResult);
  // console.log(credential);
  const buckets = await listBuckets(credential);
  console.log(buckets);
}

async function listBuckets(credentials: any) {
  const client = new S3Client({
    credentials,
  });
  const command = new ListBucketsCommand({});
  const result = await client.send(command);
  return result;
}

testAuth();
