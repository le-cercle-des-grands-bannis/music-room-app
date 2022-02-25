import { useEffect, useRef } from 'react';
import { Animated, TouchableWithoutFeedback, View } from 'react-native';
import { AnimatedFAB } from 'react-native-paper';

import PlayIcon from './icons/PlayIcon';

const clamp = (value: number, min: number, max: number): number => {
  return Math.max(Math.min(value, max), min);
};

export default function MusicTimeline() {
  const timeline = useRef(new Animated.Value(0)).current;

  const timelineInterpolation = timeline.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  let width = 0;

  console.log(clamp(10, 5, 20));

  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#1f1f1f',
        height: 80,
        width: '90%',
        bottom: 90,
        alignSelf: 'center',
        borderRadius: 20,
      }}>
      <TouchableWithoutFeedback
        style={{
          height: 100,
          backgroundColor: 'red',
          width: 100,
          position: 'absolute',
        }}
        hitSlop={{
          right: 10,
          top: 10,
          left: 10,
          bottom: 10,
        }}
        onLongPress={event => {
          const percentage =
            (clamp(event.nativeEvent.locationX, 0, width) / width) * 100;
          console.log(event.nativeEvent.locationX, width, percentage);
          timeline.setValue(percentage);
        }}
        onLayout={event => {
          width = event.nativeEvent.layout.width;
          console.log('width: ', width);
          event.
        }}>
        <View
          style={{
            backgroundColor: 'gray',
            height: 2,
            marginHorizontal: 30,
            marginTop: 20,
            borderRadius: 10,
          }}>
          <Animated.View
            style={{
              bottom: 0,
              height: 2,
              borderRadius: 10,
              position: 'absolute',
              backgroundColor: 'white',
              width: timelineInterpolation,
              left: 0,
            }}>
            <View
              style={{
                position: 'absolute',
                top: -3.5,
                height: 10,
                width: 10,
                backgroundColor: 'white',
                borderRadius: 5,
                right: 0,
              }}
            />
          </Animated.View>
          <PlayIcon />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
