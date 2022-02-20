import { Text } from 'react-native';
import * as Linking from 'expo-linking';
import React, { PropsWithChildren } from 'react';

const Anchor: React.FC = (props: PropsWithChildren<{ href: string, onPress?: Function}>) => {
  const _handlePress = () => {
    Linking.openURL(props.href);
    props.onPress && props.onPress();
  };

  return (
    <Text {...props} onPress={_handlePress}>
      {props.children}
    </Text>
  );
}

export default Anchor;
