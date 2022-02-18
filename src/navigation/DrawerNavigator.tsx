import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';
import { Alert, SafeAreaView, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated';

import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const CustomDrawerItemList = () => {};

function CustomDrawerContent(props: DrawerContentComponentProps) {
  console.log(props);
  return (
    <ScrollView style={{ backgroundColor: 'grey' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <DrawerItemList {...props} />
        <DrawerItem label="Help" onPress={() => Alert.alert('test')} />
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
      {/*<Drawer.Screen name="Settings" component={} />*/}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
