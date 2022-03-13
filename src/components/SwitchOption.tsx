import { useState } from 'react';
import { Switch, Text, View } from 'react-native';

export default function SwitchOption({
  titre,
  textOnTrue,
  textOnFalse,
  defaultValue,
}: {
  titre: string;
  textOnTrue: string;
  textOnFalse: string;
  defaultValue?: boolean;
}) {
  const [activated, setActivated] = useState(defaultValue ?? false);
  return (
    <View style={{ display: 'flex'}}>
      <Text>{titre}</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
        <Switch
          value={activated}
          onValueChange={(value) => setActivated(value)}
        />
        <Text style={{backgroundColor: 'red'}}>{activated ? textOnTrue : textOnFalse}</Text>
      </View>
    </View>
  );
}
