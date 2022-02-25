import { useRef, useState } from 'react';
import {
  Animated,
  TouchableOpacity,
  View,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

import PauseIcon from './icons/PauseIcon';
import PlayIcon from './icons/PlayIcon';

export const clamp = (value: number, min: number, max: number): number => {
  return Math.max(Math.min(value, max), min);
};

export default function MusicTimeline() {
  const timeline = useRef(new Animated.Value(0)).current;
  const [isPaused, setIsPaused] = useState<boolean>(true);

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
      <View
        style={{
          height: 45,
          // backgroundColor: '',
          width: '100%',
          position: 'absolute',
        }}>
        <PanGestureHandler
          hitSlop={{
            top: 30,
            bottom: 30,
            right: 30,
            left: 30,
          }}
          onGestureEvent={event => {
            console.log(event.nativeEvent);
            timeline.setValue(
              (clamp(event.nativeEvent.x, 0, width) / width) * 100,
            );
          }}>
          <View
            onLayout={event => {
              width = event.nativeEvent.layout.width;
              console.log('width: ', event.nativeEvent.layout);
            }}
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
          </View>
        </PanGestureHandler>
        <View style={{ position: 'absolute', alignSelf: 'center', top: 40 }}>
          <TouchableOpacity
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            onPress={() => {
              setIsPaused(prevState => {
                return !prevState;
              });
            }}>
            {isPaused ? <PauseIcon /> : <PlayIcon />}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
