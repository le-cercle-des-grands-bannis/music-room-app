import {
  TouchableOpacity,
  View,
  GestureResponderEvent,
  ColorValue,
} from 'react-native';

export default function Cross({
  onPress,
  color,
}: {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  color: ColorValue;
}) {
  return (
    <TouchableOpacity
      style={{ width: 15, height: 15, zIndex: 9999 }}
      onPress={onPress}>
      <View>
        <View
          style={{
            width: 15,
            height: 2,
            transform: [{ translateY: 6 }, { rotate: '45deg' }],
            backgroundColor: color,
            position: 'absolute',
          }}
        />
        <View
          style={{
            width: 15,
            height: 2,
            transform: [{ translateY: 6 }, { rotate: '-45deg' }],
            backgroundColor: color,
            position: 'absolute',
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
