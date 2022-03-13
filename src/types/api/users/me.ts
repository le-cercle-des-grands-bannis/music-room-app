export interface UsersMePayload {}

export interface GetUserInfoResponse {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  status: number;
  loginGithub: string;
  loginDiscord: string;
  loginFt: string;
  emailFacebook: string;
  emailGoogle: string;
}
