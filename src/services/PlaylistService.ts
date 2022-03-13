import MusicRoomApiService from '@services/MusicRoomApiService';
import authHeader from '@services/authHeader';
import { AxiosResponse } from 'axios';

import {
  CreatePlaylistPayload,
  CreatePlaylistResponse,
  DeletePlaylistPayload,
  DeletePlaylistResponse,
  GetPlaylistsResponse,
} from '../types/services/playlistService/Playlist';

export default class PlaylistService extends MusicRoomApiService {
  async getPlaylists(): Promise<AxiosResponse<GetPlaylistsResponse>> {
    return this.api.get<GetPlaylistsResponse>('/playlist', {
      headers: await authHeader(),
    });
  }

  async createPlaylist(
    payload: CreatePlaylistPayload,
  ): Promise<AxiosResponse<CreatePlaylistResponse>> {
    return this.api.post<CreatePlaylistResponse>('/playlist', payload, {
      headers: await authHeader(),
    });
  }

  async deletePlaylist(
    payload: DeletePlaylistPayload,
  ): Promise<AxiosResponse<DeletePlaylistResponse>> {
    return this.api.delete<DeletePlaylistResponse>(`/playlist/${payload}`, {
      headers: await authHeader(),
    });
  }


}
