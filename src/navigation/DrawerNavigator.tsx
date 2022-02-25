import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';
import { logout } from '@redux/auth/auth.slice';
import { SafeAreaView, ScrollView } from 'react-native';

import { useAppDispatch } from '../hooks/redux';
import BottomTabNavigator from './BottomTabNavigator';
import PremiumStackNavigator from './PremiumStackNavigator';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const dispatch = useAppDispatch();
  return (
    <ScrollView style={{ backgroundColor: 'grey' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <DrawerItemList {...props} />
        <DrawerItem label="Déconnexion" onPress={() => dispatch(logout())} />
      </SafeAreaView>
    </ScrollView>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      detachInactiveScreens
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerType: 'slide',
        drawerStatusBarAnimation: 'slide',
      }}
      drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Premium" component={PremiumStackNavigator} />
      {/*<Drawer.Screen name="Settings" component={} />*/}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
