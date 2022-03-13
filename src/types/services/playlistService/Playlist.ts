export interface Playlist {
  id: string;
  name: string;
  description?: string;
  userId: string;
  isPublic: boolean;
  isRestricted: boolean;
}

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type CreatePlaylistPayload = Optional<
  Omit<Playlist, 'id' | 'userId'>,
  'isPublic' | 'isRestricted'
>;

export interface CreatePlaylistResponse {
  payload: string;
  playlist: Playlist;
}

export type GetPlaylistsResponse = Playlist[];

export type DeletePlaylistPayload = number;

export type DeletePlaylistResponse = {
  playlist: string;
};
