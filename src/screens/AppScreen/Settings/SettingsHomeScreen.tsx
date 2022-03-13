import { Pressable, ScrollView, Text, View } from 'react-native';

import { SettingsHomeProps } from '../../../navigation/SettingsStackNavigator';

export default function SettingsHomeScreen({ navigation }: SettingsHomeProps) {
  return (
    <ScrollView>
      <Pressable
        style={{
          margin: 10,
          paddingVertical: '5%',
          borderWidth: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('SettingsAccount')}>
        <Text>Mon compte</Text>
      </Pressable>
    </ScrollView>
  );
}
