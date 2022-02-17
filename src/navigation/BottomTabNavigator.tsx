import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Playlists from '../screens/AppScreen/Playlists';
import Rooms from '../screens/AppScreen/Rooms';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Playlists" component={Playlists} />
      <Tab.Screen name="Rooms" component={Rooms} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
