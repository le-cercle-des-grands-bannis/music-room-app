import {
  ApiConfig,
  SpotifySession,
  auth as SpotifyAuth,
  remote as SpotifyRemote,
  ApiScope,
} from 'react-native-spotify-remote';

const spotifyConfig: ApiConfig = {
  clientID: '58bba967925f4423b63ec29b9ae0ba51',
  redirectURL: '',
  tokenRefreshURL: 'http://10.0.2.2:3000/refresh',
  tokenSwapURL: 'http://10.0.2.2:3000/swap',
  scopes: [ApiScope.AppRemoteControlScope, ApiScope.UserFollowReadScope],
};

export default class SpotifyService {
  static session: SpotifySession;

  static async init() {
    this.session = await SpotifyAuth.authorize(spotifyConfig);
    await SpotifyRemote.connect(this.session.accessToken);
  }

  async play() {
    await SpotifyRemote.playUri('spotify:playlist:37i9dQZF1DX2sUQwD7tbmL');
  }
}
