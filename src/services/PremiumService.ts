import MusicRoomApiService from '@services/MusicRoomApiService';
import authHeader from '@services/authHeader';
import { AxiosResponse } from 'axios';

import { GetPremiumsResponse } from '../types/services/PremiumService/getPremiums';
import {
  SubscribePayload,
  SubscribeResponse,
} from '../types/services/PremiumService/subscribe';

export default class PremiumService extends MusicRoomApiService {
  async getPremiums(): Promise<AxiosResponse<GetPremiumsResponse>> {
    return this.api.get<GetPremiumsResponse>('/premiums');
  }

  async subscribe(
    payload: SubscribePayload,
    redirectUrl: string,
  ): Promise<AxiosResponse<SubscribeResponse>> {
    return this.api.get<SubscribeResponse>(
      `/premiums?id=${payload.id}&redirectUrl=${redirectUrl}`,
      {
        headers: await authHeader(),
      },
    );
  }
}
