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

export default class PlaylistMusicService extends MusicRoomApiService {
  async getPlaylistMusic(): Promise<AxiosResponse<GetPlaylistsResponse>> {
    return this.api.get<GetPlaylistsResponse>('/playlist/music', {
      headers: await authHeader(),
    });
  }

  async addMusicTo(
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
