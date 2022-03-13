import axios from 'axios';

import GlobalConstant from '../constants/GlobalConstant';

export default class MusicRoomApiService {
  protected api = axios.create({
    baseURL: GlobalConstant.API_URL,
    headers: {
      'Accept-language': 'fr',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-AUTH': 'API',
    },
    timeout: 5000,
  });
}
