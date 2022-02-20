import axios, { AxiosResponse } from 'axios';

import GlobalConstant from '../constants/GlobalConstant';
import { getUserInfoResponse } from '../types/api/users/me';
import authHeader from './authHeader';

export default class UserService {
  private api = axios.create({
    baseURL: GlobalConstant.API_URL,
    headers: {
      'Accept-language': 'fr',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-AUTH': 'api',
    },
    timeout: 5000,
  });

  async getUserInfo(): Promise<AxiosResponse<getUserInfoResponse>> {
    return this.api.get('/users/me', { headers: await authHeader() });
  }
}
