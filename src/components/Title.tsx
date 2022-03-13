import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

import CompositeAnimation = Animated.CompositeAnimation;

export default function Title({
  title,
  artist,
}: {
  title: string;
  artist: string;
}) {
  const value = useRef(new Animated.Value(0)).current;
  const animation = useRef<CompositeAnimation>();
  const textWidth = useRef(0);
  const containerWidth = useRef(0);
  const [layoutChange, setLayoutChange] = useState(0);

  useEffect(() => {
    console.log(textWidth.current, '>', containerWidth.current);
    if (textWidth.current > containerWidth.current) {
      animation.current = Animated.timing(value, {
        duration: title.length * 200,
        useNativeDriver: true,
        toValue: 1,
        easing: Easing.linear,
      });
      Animated.loop(animation.current).start();
    } else {
      animation.current?.stop();
      value.setValue(0);
    }
  }, [layoutChange]);

  const interpolatedAnimation = value.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -textWidth.current],
  });

  return (
    <View style={{ marginBottom: 15 }}>
      <View
        style={{ width: '100%', overflow: 'hidden', height: 20 }}
        onLayout={event => {
          containerWidth.current = event.nativeEvent.layout.width;
          setLayoutChange(prev => prev + 1);
        }}>
        <View style={{ position: 'absolute' }}>
          <Animated.Text
            onLayout={event => {
              textWidth.current = event.nativeEvent.layout.width;
              setLayoutChange(prev => prev + 1);
            }}
            style={{
              position: 'absolute',
              // width: '100%',
              color: 'white',
              fontWeight: '700',
              fontSize: 16,
              transform: [{ translateX: interpolatedAnimation }],
            }}>
            {title}
          </Animated.Text>
        </View>
      </View>
      <Text style={{ color: 'grey' }}>{artist}</Text>
    </View>
  );
}
