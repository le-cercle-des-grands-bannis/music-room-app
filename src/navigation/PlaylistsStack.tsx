import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import Playlist from '../screens/AppScreen/Playlists/Playlist';
import Playlists from '../screens/AppScreen/Playlists/Playlists';

type CreatePlaylistStackParamList = {
  PlaylistsLibrary: undefined;
  Playlist: { playlistId: string };
};

export type PlaylistsProps = StackScreenProps<
  CreatePlaylistStackParamList,
  'PlaylistsLibrary'
>;

export type PlaylistProps = StackScreenProps<
  CreatePlaylistStackParamList,
  'Playlist'
>;

const Stack = createStackNavigator<CreatePlaylistStackParamList>();

export default function CreatePlaylistStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PlaylistsLibrary" component={Playlists} />
      <Stack.Screen name="Playlist" component={Playlist} />
    </Stack.Navigator>
  );
}
