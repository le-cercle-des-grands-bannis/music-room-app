import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import SetPlaylistDescription from '../screens/AppScreen/Playlists/createPlaylist/SetPlaylistDescription';
import SetPlaylistName from '../screens/AppScreen/Playlists/createPlaylist/SetPlaylistName';
import SetPlaylistOtherOption from '../screens/AppScreen/Playlists/createPlaylist/SetPlaylistOtherOption';

type CreatePlaylistStackParamList = {
  SetPlaylistName: undefined;
  SetPlaylistDescription: undefined;
  SetPlaylistOtherOption: undefined;
};

export type SetPlaylistNameProps = StackScreenProps<
  CreatePlaylistStackParamList,
  'SetPlaylistName'
>;

export type SetPlaylistDescriptionProps = StackScreenProps<
  CreatePlaylistStackParamList,
  'SetPlaylistDescription'
>;

export type SetPlaylistPublicProps = StackScreenProps<
  CreatePlaylistStackParamList,
  'SetPlaylistOtherOption'
>;

const Stack = createStackNavigator<CreatePlaylistStackParamList>();

export default function CreatePlaylistStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SetPlaylistName" component={SetPlaylistName} />
      <Stack.Screen
        name="SetPlaylistDescription"
        component={SetPlaylistDescription}
      />
      <Stack.Screen
        name="SetPlaylistOtherOption"
        component={SetPlaylistOtherOption}
      />
    </Stack.Navigator>
  );
}
