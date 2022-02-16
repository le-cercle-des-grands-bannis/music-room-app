import React from 'react';
import Svg, { Path, LinearGradient, Stop } from 'react-native-svg';

const FacebookIcon: React.FC = (props) => {
  return (
    <>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={70}
        height={70}
        viewBox="0 0 48 48"
        style={{
          fill: "#000",
        }}
        {...props}
      >
        <LinearGradient
          id="a"
          x1={6.228}
          x2={42.077}
          y1={4.896}
          y2={43.432}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#0d61a9" />
          <Stop offset={1} stopColor="#16528c" />
        </LinearGradient>
        <Path
          fill="url(#a)"
          d="M42 40a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32z"
        />
        <Path
          d="M25 38V27h-4v-6h4v-2.138c0-5.042 2.666-7.818 7.505-7.818 1.995 0 3.077.14 3.598.208l.858.111.039.861V17h-3.635C32.237 17 32 18.378 32 19.535V21h4.723l-.928 6H32v11h-7z"
          opacity={0.05}
        />
        <Path
          d="M25.5 37.5v-11h-4v-5h4v-2.638c0-4.788 2.422-7.318 7.005-7.318 1.971 0 3.03.138 3.54.204l.436.057.02.442V16.5h-3.135c-1.623 0-1.865 1.901-1.865 3.035V21.5h4.64l-.773 5H31.5v11h-6z"
          opacity={0.07}
        />
        <Path
          fill="#fff"
          d="M33.365 16H36v-3.754c-.492-.064-1.531-.203-3.495-.203-4.101 0-6.505 2.08-6.505 6.819V22h-4v4h4v11h5V26h3.938l.618-4H31v-2.465c0-1.874.612-3.535 2.365-3.535z"
        />
      </Svg>
    </>
  );
}

export default FacebookIcon;
