import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const ThreeLines = (props: {onPress?: Function}) => {
  const rotationAnim = useRef(new Animated.Value(0)).current;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onPress = () => {
    if (props.onPress) {
      props.onPress();
    }
    Animated.timing(rotationAnim, {
      toValue: !isOpen ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
    setIsOpen(!isOpen);
  };

  const spin = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const spin2 = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-45deg'],
  });

  const translate = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0],
  });

  const translate2 = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 9],
  });

  const opacity = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <Animated.View
          style={{
            ...styles.line,
            transform: [{ translateY: translate2 }, { rotate: spin }],
          }}
        />
        <Animated.View
          style={{
            ...styles.line,
            transform: [{ translateY: translate }, { rotate: spin2 }],
          }}
        />
        <Animated.View style={{ ...styles.line, opacity }} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  line: {
    borderRadius: 4,
    width: 25,
    height: 3,
    backgroundColor: 'white',
    marginVertical: 3,
  },
});

export default ThreeLines;
