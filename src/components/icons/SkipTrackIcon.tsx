import Svg, { Path } from 'react-native-svg';

export default function SkipTrackIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18 7v10M6.972 5.267A.6.6 0 0 0 6 5.738v12.524a.6.6 0 0 0 .972.47l7.931-6.261a.6.6 0 0 0 0-.942L6.972 5.267Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
