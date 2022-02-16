export interface UsersRegisterPayload {
  username: string;
  email: string;
  email_confirmation: string;
  password: string;
  password_confirmation: string;
}

export interface UsersRegisterResponse {
  payload: string;
}
