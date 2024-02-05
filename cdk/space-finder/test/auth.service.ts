import { Amplify, Auth } from "aws-amplify";
import { type CognitoUser } from "@aws-amplify/auth";

const awsRegion = "ap-southeast-1";

Amplify.configure({
  Auth: {
    region: awsRegion,
    userPoolId: "ap-southeast-1_QFCBmtWhd",
    userPoolWebClientId: "htun70156bekpckv7g8cp08ji",
    authenticationFlowType: "USER_PASSWORD_AUTH",
  },
});

export class AuthService {
  public async login(username: string, password: string) {
    const result = (await Auth.signIn(username, password)) as CognitoUser;
    return result;
  }
}
