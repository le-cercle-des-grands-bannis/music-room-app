import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

import MusicPlayer from '../components/MusicPlayer';
import DiamondIcon from '../components/icons/DiamondIcon';
import MessageIcon from '../components/icons/MessageIcon';
import PlaylistIcon from '../components/icons/PlaylistIcon';
import Rooms from '../screens/AppScreen/Rooms';
import Playlists from '../screens/AppScreen/Playlists/Playlists';

type CreatePlaylistStackParamList = {
  Rooms: undefined;
  Playlists: undefined;
  Messages: undefined;
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Playlists"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            borderTopWidth: 0,
            position: 'absolute',
            bottom: 20,
            shadowColor: 'transparent',
          },
          tabBarBackground: () => {
            return (
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,1)']}
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
      <MusicPlayer />
    </>
  );
};

export default BottomTabNavigator;
