import { AuthService } from "./auth.service";

async function testAuth() {
  const service = new AuthService();
  const loginResult = await service.login("jqka", "@Newyork2024");
  console.log(loginResult.getSignInUserSession().getIdToken().getJwtToken());
}

testAuth();
