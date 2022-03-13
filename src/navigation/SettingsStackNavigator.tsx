import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import SettingsHomeScreen from '../screens/AppScreen/Settings/SettingsHomeScreen';
import SettingsAccountScreen from '../screens/AppScreen/Settings/SettingsAccountScreen';

type SettingsStackParamsList = {
  SettingsHome: undefined;
  SettingsAccount: undefined;
};

export type SettingsHomeProps = StackScreenProps<
  SettingsStackParamsList,
  'SettingsHome'
>;

const Stack = createStackNavigator<SettingsStackParamsList>();

export default function SettingsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsHome"
        component={SettingsHomeScreen}
        options={{ title: 'Paramètres' }}
      />
      <Stack.Screen
        name="SettingsAccount"
        component={SettingsAccountScreen}
        options={{ title: 'Paramètres' }}
      />
    </Stack.Navigator>
  );
}
