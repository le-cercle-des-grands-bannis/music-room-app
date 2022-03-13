import { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Color from '../constants/Colors';

export type SurfaceProps = {
  surfaceStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  depth?: SurfaceDepth;
};

type SurfaceDepth = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24;

function getOpacityFromDepth(depth: SurfaceDepth): number {
  switch (depth) {
    case 0:
      return 0.0;
    case 1:
      return 0.05;
    case 2:
      return 0.07;
    case 3:
      return 0.08;
    case 4:
      return 0.09;
    case 6:
      return 0.11;
    case 8:
      return 0.12;
    case 12:
      return 0.14;
    case 16:
      return 0.15;
    case 24:
      return 0.16;
  }
}

export default function Surface(props: PropsWithChildren<SurfaceProps>) {
  const depth = props.depth ?? 1;
  return (
    <View
      style={[
        props.surfaceStyle ?? { borderRadius: 10 },
        { backgroundColor: 'rgb(18,18,18)' },
        { overflow: 'hidden', shadowColor: 'black', elevation: depth },
      ]}>
      <View
        style={{
          opacity: getOpacityFromDepth(depth),
          backgroundColor: 'white',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      <View style={props.contentContainerStyle}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgb(18,18,18)',
  },
  overlay: {
    backgroundColor: 'white',
    opacity: 0.05,
  },
  text: {
    color: 'white',
  },
});
