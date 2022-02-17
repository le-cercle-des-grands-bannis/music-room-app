import axios, { AxiosResponse } from 'axios';

import { UsersLoginPayload, UsersLoginResponse } from './types/api/users/login';
import { UsersMeResponse } from './types/api/users/me';
import {
  UsersPasswordNewPayload,
  UsersPasswordNewResponse,
} from './types/api/users/password/new';
import {
  UsersPasswordResetPayload,
  UsersPasswordResetResponse,
} from './types/api/users/password/reset';
import {
  UsersRegisterPayload,
  UsersRegisterResponse,
} from './types/api/users/register';
import {
  UsersUpdatePayload,
  UsersUpdateResponse,
} from './types/api/users/update';
import { getValueFor } from './utils/authUtils';

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
      payload: UsersRegisterPayload,
    ): Promise<AxiosResponse<UsersRegisterResponse>> => {
      return this.api.post('/users/register', payload);
    },

    login: (
      payload: UsersLoginPayload,
    ): Promise<AxiosResponse<UsersLoginResponse>> => {
      return this.api.post('/users/login', payload);
    },

    me: async (): Promise<AxiosResponse<UsersMeResponse>> => {
      return this.api.get('/users/me', {
        headers: {
          authorization: `Bearer ${await getValueFor('userToken')}`,
        },
      });
    },

    update: (
      payload: UsersUpdatePayload,
    ): Promise<AxiosResponse<UsersUpdateResponse>> => {
      return this.api.patch('/users/update', payload);
    },

    password: {
      reset: (
        payload: UsersPasswordResetPayload,
      ): Promise<AxiosResponse<UsersPasswordResetResponse>> => {
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
