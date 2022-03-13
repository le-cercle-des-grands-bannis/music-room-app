import { SpotifySession } from 'react-native-spotify-remote';

export default async function authHeader(
  spotifySession: SpotifySession,
): Promise<{
  Authorization?: string;
}> {
  return { Authorization: `Bearer ${spotifySession.accessToken}` };
}
