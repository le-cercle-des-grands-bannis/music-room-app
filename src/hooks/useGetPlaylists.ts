import PlaylistService from '@services/PlaylistService';
import { useEffect, useState } from 'react';

import { Playlist } from '../types/services/playlistService/Playlist';

export default function useGetPlaylist(): [boolean, Playlist[] | null] {
  const [data, setData] = useState<Playlist[] | null>(null);

  useEffect(() => {
    (async () => {
      const response = await new PlaylistService().getPlaylists();
      setData(response.data);
    })();
  }, []);

  return [data === null, data];
}
