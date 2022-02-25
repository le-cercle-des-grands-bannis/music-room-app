import authHeader from '@services/authHeader';
import axios, { AxiosResponse } from 'axios';

import GlobalConstant from '../constants/GlobalConstant';
import { GetPremiumsResponse } from '../types/services/PremiumService/getPremiums';
import {
  SubscribePayload,
  SubscribeResponse,
} from '../types/services/PremiumService/subscribe';

export default class PremiumService {
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

  async getPremiums(): Promise<AxiosResponse<GetPremiumsResponse>> {
    return this.api.get<GetPremiumsResponse>('/premiums');
  }

  async subscribe(
    payload: SubscribePayload,
    redirectUrl: string,
  ): Promise<AxiosResponse<SubscribeResponse>> {
    return this.api.get<SubscribeResponse>(
      `/premium?id=${payload.id}&redirectUrl=${redirectUrl}`,
      {
        headers: await authHeader(),
      },
    );
  }
}
