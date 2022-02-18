import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';

import DiamondIcon from '../components/icons/DiamondIcon';
import MessageIcon from '../components/icons/MessageIcon';
import PlaylistIcon from '../components/icons/PlaylistIcon';
import Playlists from '../screens/AppScreen/Playlists';
import Rooms from '../screens/AppScreen/Rooms';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Playlists"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          // backgroundColor: 'transparent',
          borderTopWidth: 0,
          position: 'absolute',
          // left: 50,
          // right: 50,
          bottom: 20,
          // height: 100,
          // paddingTop: 20,
          shadowColor: 'transparent',
        },
        tabBarBackground: () => {
          return (
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.9)']}
              style={{ height: 80, marginTop: -10 }}
            />
          );
        },
      }}>
      <Tab.Screen
        name="Rooms"
        component={Rooms}
        options={{
          tabBarIcon: ({ color }) => {
            return <DiamondIcon size={16} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Playlists"
        component={Playlists}
        options={{
          tabBarIcon: ({ color }) => {
            return <PlaylistIcon size={16} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Rooms}
        options={{
          tabBarIcon: ({ color }) => {
            return <MessageIcon size={16} color={color} />;
          },
          tabBarBadge: 10,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
