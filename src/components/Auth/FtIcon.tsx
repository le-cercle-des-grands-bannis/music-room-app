import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';

const FtIcon: React.FC = props => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -14.583 70 70"
        width={70}
        height={70}
        fill="#000"
        {...props}
      >
        <Path d="M2.333 30.085h24.07V42.146h12.009V20.351H14.386L38.413 -3.726H26.403L2.333 20.351zm41.264 -21.758L55.614 -3.726H43.597zm12.017 0L43.597 20.351v12.017h12.017V20.351L67.667 8.327V-3.726H55.614z" />
        <Path d="M67.667 20.351 55.614 32.368H67.667z" />
      </Svg>
    </View>
  );
};

export default FtIcon;
