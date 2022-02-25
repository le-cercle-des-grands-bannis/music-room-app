import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const PlaylistsIcon = ({ size, color }: { size: number; color: string }) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill={color}>
        <Path d="M0 0h8v8H0zm12 2h20v4H12zM0 12h8v8H0zm12 2h20v4H12zM0 24h8v8H0zm12 2h20v4H12z" />
      </Svg>
    </View>
  );
};

export default PlaylistsIcon;
