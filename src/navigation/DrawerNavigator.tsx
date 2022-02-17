import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false, swipeEnabled: false}}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      {/*<Drawer.Screen name="Settings" component={} />*/}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
