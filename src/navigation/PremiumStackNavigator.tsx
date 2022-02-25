import { createStackNavigator } from '@react-navigation/stack';

import HomePremium from '../screens/AppScreen/Premium/HomePremium';

const Stack = createStackNavigator();

export default function PremiumStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home Premium" component={HomePremium} />
    </Stack.Navigator>
  );
}
