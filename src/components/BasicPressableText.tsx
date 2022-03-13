import React from 'react';
import {
  ColorValue,
  Pressable,
  PressableProps,
  Text,
} from 'react-native';

interface BasicPressableTextProps {
  onPress?: PressableProps['onPress'];
  color: ColorValue;
  pressedColor: ColorValue;
  text: string;
}

export default function BasicPressableText(props: BasicPressableTextProps) {
  return (
    <Pressable onPress={props.onPress}>
      {({ pressed }) => {
        return (
          <Text
            style={{
              color: !pressed ? props.color : props.pressedColor,
            }}>
            {props.text}
          </Text>
        );
      }}
    </Pressable>
  );
}
