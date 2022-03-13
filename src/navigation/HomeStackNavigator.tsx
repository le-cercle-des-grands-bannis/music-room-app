import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import CreatePlaylistStack from './CreatePlaylistStack';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={BottomTabNavigator} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="AddPlaylist" component={CreatePlaylistStack} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
