export interface RegisterPayload {
  username: string;
  email: string;
  email_confirmation: string;
  password: string;
  password_confirmation: string;
}

export interface RegisterResponse {
  oat: {
    token: string;
  };
}
