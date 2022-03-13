import { setPlayerState } from '@redux/player/player.slice';
import store from '@redux/store';
import SpotifyWebApiService from '@services/SpotifyWebApiService';
import {
  ApiConfig,
  SpotifySession,
  auth as SpotifyAuth,
  remote as SpotifyRemote,
  ApiScope,
  PlayerState,
} from 'react-native-spotify-remote';

const spotifyConfig: ApiConfig = {
  clientID: '58bba967925f4423b63ec29b9ae0ba51',
  redirectURL: 'myapp://test.com',
  tokenRefreshURL: 'http://10.0.2.2:3000/refresh',
  tokenSwapURL: 'http://10.0.2.2:3000/swap',
  scopes: [ApiScope.AppRemoteControlScope],
  // authType: 'TOKEN',
};

export default class SpotifyService {
  static session: SpotifySession;
  static isInitialized: boolean = false;
  static playerState: PlayerState | null = null;

  static async init() {
    if (this.isInitialized) return;
    try {
      this.session = await SpotifyAuth.authorize(spotifyConfig);
      console.log('after authorize');
      await SpotifyRemote.connect(this.session.accessToken);
      SpotifyWebApiService.setAccessToken(this.session.accessToken);
      await SpotifyRemote.addListener(
        'playerContextChanged',
        (playerContext) => {
          console.log('title:', playerContext.title);
          console.log('uri:', playerContext.uri);
        },
      );
      await SpotifyRemote.addListener('playerStateChanged', (playerState) => {
        this.playerState = playerState;
        store.dispatch(setPlayerState(playerState));
      });
      this.isInitialized = true;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  }

  async play() {
    await SpotifyRemote.playUri('spotify:album:03ZLnEibkBpQxhXKaQiqfU');
  }

  async togglePLay(): Promise<boolean> {
    const playerState = await SpotifyRemote.getPlayerState();
    if (playerState.isPaused) {
      await SpotifyRemote.resume();
      return true;
    } else {
      await SpotifyRemote.pause();
      return false;
    }
  }

  async seek(position: number): Promise<void> {
    await SpotifyRemote.seek(position);
  }

  static async search() {
    this.session.accessToken;
  }
}
