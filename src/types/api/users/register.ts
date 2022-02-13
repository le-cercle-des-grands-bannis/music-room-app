export interface UsersRegisterPayload {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  email_confirmation: string;
  password: string;
  password_confirmation: string;
}

export interface UsersRegisterResponse {
  payload: string;
}
