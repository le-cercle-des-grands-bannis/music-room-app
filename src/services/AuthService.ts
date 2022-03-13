import MusicRoomApiService from '@services/MusicRoomApiService';
import { AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';

import SecureStoreConstant from '../constants/SecureStoreConstant';
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

export default class AuthService extends MusicRoomApiService {
  async register(
    payload: RegisterPayload,
  ): Promise<AxiosResponse<RegisterResponse>> {
    const response = await this.api.post<RegisterResponse>(
      '/register',
      payload,
    );
    if (response.data.oat.token !== undefined) {
      await SecureStore.setItemAsync(
        SecureStoreConstant.API_USER_TOKEN,
        response.data.oat.token,
      );
    }
    return response;
  }

  async login(payload: LoginPayload): Promise<AxiosResponse<LoginResponse>> {
    const response = await this.api.post<LoginResponse>('/login', payload);
    if (response.data?.oat?.token !== undefined) {
      await SecureStore.setItemAsync(
        SecureStoreConstant.API_USER_TOKEN,
        response.data.oat.token,
      );
    }
    return response;
  }

  async logout(): Promise<void> {
    await this.api.delete('/logout');
    return SecureStore.deleteItemAsync(SecureStoreConstant.API_USER_TOKEN);
  }

  async resetPassword(
    payload: ResetPasswordPayload,
  ): Promise<AxiosResponse<ResetPasswordResponse>> {
    return this.api.post('/users/password/reset', payload);
  }
}
