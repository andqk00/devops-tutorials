import { Amplify, Auth } from "aws-amplify";
import { type CognitoUser } from "@aws-amplify/auth";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

const awsRegion = "ap-southeast-1";
const userPoolId = "ap-southeast-1_QFCBmtWhd";
const identityPoolId = "ap-southeast-1:ced7da66-fc0a-4200-a96d-6ebaafc0588b";

Amplify.configure({
  Auth: {
    region: awsRegion,
    userPoolId,
    userPoolWebClientId: "htun70156bekpckv7g8cp08ji",
    identityPoolId,
    authenticationFlowType: "USER_PASSWORD_AUTH",
  },
});

export class AuthService {
  public async login(username: string, password: string) {
    const result = (await Auth.signIn(username, password)) as CognitoUser;
    return result;
  }

  public async generateTemporaryCredential(user: CognitoUser) {
    const jwt = user.getSignInUserSession().getIdToken().getJwtToken();
    const cognitoIdentityPool = `cognito-idp.${awsRegion}.amazonaws.com/${userPoolId}`;
    const cognitoIdentity = new CognitoIdentityClient({
      credentials: fromCognitoIdentityPool({
        identityPoolId,
        logins: {
          [cognitoIdentityPool]: jwt,
        },
      }),
    });
    const credential = await cognitoIdentity.config.credentials();
    return credential;
  }
}
