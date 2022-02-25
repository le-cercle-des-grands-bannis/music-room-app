import React from 'react';
import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

const DiamondIcon = ({ size, color }: { size: number, color: string }) => {
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
        <Path d="M16 0 6 16l10 16 10 -16z" />
      </Svg>
    </View>
  );
};

export default DiamondIcon;
