import React from 'react';
import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

const MessageIcon = ({ size, color }: { size: number, color: string }) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill={color}
      >
        <G />
        <Path d="M16 2c8.837 0 16 5.82 16 13S24.837 28 16 28c-0.849 0 -1.682 -0.054 -2.494 -0.158C10.069 31.279 5.966 31.895 2 31.986v-0.841c2.142 -1.049 4 -2.961 4 -5.145 0 -0.305 -0.024 -0.604 -0.068 -0.897C2.314 22.72 0 19.08 0 15 0 7.82 7.163 2 16 2z" />
      </Svg>
    </View>
  );
};

export default MessageIcon;
