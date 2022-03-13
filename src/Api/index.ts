import axios, { AxiosResponse } from 'axios';

import { GetUserInfoResponse } from '../types/api/users/me';
import {
  UsersPasswordNewPayload,
  UsersPasswordNewResponse,
} from '../types/api/users/password/new';
import {
  UsersUpdatePayload,
  UsersUpdateResponse,
} from '../types/api/users/update';
import {
  LoginPayload,
  LoginResponse,
} from '../types/services/authService/login';
import {
  RegisterPayload,
  RegisterResponse,
} from '../types/services/authService/register';
import {
  ResetPasswordPayload,
  ResetPasswordResponse,
} from '../types/services/authService/reset';
import { getFromSecureStore } from '../utils/authUtils';

export default class Api {
  private api = axios.create({
    baseURL: 'https://dev.api.musicroom.benjaminnoufel.com/',
    headers: {
      'Accept-language': 'fr',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-AUTH': 'api',
    },
    timeout: 5000,
  });

  users = {
    register: (
      payload: RegisterPayload,
    ): Promise<AxiosResponse<RegisterResponse>> => {
      return this.api.post('/users/register', payload);
    },

    login: (payload: LoginPayload): Promise<AxiosResponse<LoginResponse>> => {
      return this.api.post('/users/login', payload);
    },

    me: async (): Promise<AxiosResponse<GetUserInfoResponse>> => {
      return this.api.get('/users/me', {
        headers: {
          authorization: `Bearer ${await getValueFor('userToken')}`,
        },
      });
    },

    update: async (
      payload: UsersUpdatePayload,
    ): Promise<AxiosResponse<UsersUpdateResponse>> => {
      return this.api.patch('/users/me', {
        headers: {
          authorization: `Bearer ${await getFromSecureStore('userToken')}`,
        },
      });
    },

    password: {
      reset: (
        payload: ResetPasswordPayload,
      ): Promise<AxiosResponse<ResetPasswordResponse>> => {
        return this.api.post('/users/password/reset', payload);
      },

      new: (
        payload: UsersPasswordNewPayload,
      ): Promise<AxiosResponse<UsersPasswordNewResponse>> => {
        return this.api.post('/users/password/new', payload);
      },
    },
  };
}
