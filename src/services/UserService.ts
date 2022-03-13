import MusicRoomApiService from '@services/MusicRoomApiService';
import { AxiosResponse } from 'axios';

import { GetUserInfoResponse } from '../types/api/users/me';
import authHeader from './authHeader';

export default class UserService extends MusicRoomApiService {
  async getUserInfo(): Promise<AxiosResponse<GetUserInfoResponse>> {
    return this.api.get('/users/me', { headers: await authHeader() });
  }
}
