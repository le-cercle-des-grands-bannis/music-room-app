import axios, { AxiosResponse } from 'axios';

interface RegisterPayload {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  email_confirmation: string;
  password: string;
  password_confirmation: string;
}

interface RegisterResponse {
  payload: string;
}

export default class Api {
  private api = axios.create({
    baseURL: 'http://192.168.1.106:4242',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 5000,
  });

  auth = {
    register: (
      payload: RegisterPayload,
    ): Promise<AxiosResponse<RegisterResponse>> => {
      return this.api.post('/users/register', payload);
    },
  };
}
