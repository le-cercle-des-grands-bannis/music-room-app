import SpotifyWebApi from 'spotify-web-api-node';

export default class SpotifyWebApiService {
  static spotifyApi: SpotifyWebApi = new SpotifyWebApi();

  static setAccessToken(accessToken: string) {
    this.spotifyApi.setAccessToken(accessToken);
  }
}
