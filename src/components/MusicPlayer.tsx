import { selectPlayerState } from '@redux/player/player.slice';
import SpotifyService from '@services/SpotifyService';
import { Duration } from 'luxon';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import PauseIcon from './icons/PauseIcon';
import PlayIcon from './icons/PlayIcon';
import SkipTrackIcon from './icons/SkipTrackIcon';

import CompositeAnimation = Animated.CompositeAnimation;

import {
  selectTimelineTimer,
  setTimer,
} from '@redux/timelineTimer/timelineTime.slice';
import Store from '@redux/store';
import Title from './Title';

export const clamp = (value: number, min: number, max: number): number => {
  return Math.max(Math.min(value, max), min);
};

export default function MusicPlayer() {
  const timeline = useRef(new Animated.Value(0)).current;
  const [isPaused, setIsPaused] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const timelineTimer = useAppSelector(selectTimelineTimer);

  const anim = useRef<CompositeAnimation>();

  const player = useAppSelector(selectPlayerState);

  useEffect(() => {
    const id = timeline.addListener(event => {
      const value = parseInt((event.value / 1000).toFixed(0), 10);
      const timer = Store.getState().timelineTimer;
      if (timer !== value) {
        dispatch(setTimer(value));
      }
    });
    return () => timeline.removeListener(id);
  }, []);

  useEffect(() => {
    console.log('change');
    timeline.setValue(player.currentDuration);
    setIsPaused(player.isPaused);
    anim.current = Animated.timing(timeline, {
      duration: player.duration - player.currentDuration,
      toValue: player.duration,
      useNativeDriver: false,
      easing: Easing.linear,
    });
    if (player.isPaused) {
      anim.current?.stop();
    } else {
      anim.current?.start();
    }
  }, [player]);

  const timelineInterpolation = timeline.interpolate({
    inputRange: [0, player.duration],
    outputRange: ['0%', '100%'],
  });

  const width = useRef(0);
  const tmpPosition = useRef(0);
  const prevPosition = useRef(0);

  return (
    <View style={styles.mainContainer}>
      <Title title={player.title} artist={player.artist}/>
      <View style={styles.container}>
        <PanGestureHandler
          minDist={0}
          hitSlop={{
            top: 30,
            bottom: 30,
            right: 30,
            left: 30,
          }}
          shouldCancelWhenOutside
          onEnded={async event => {
            console.log('end');
            await new SpotifyService().seek(
              player.duration * tmpPosition.current,
            );
          }}
          onBegan={() => {
            prevPosition.current = parseFloat(JSON.stringify(timeline));
          }}
          onFailed={() => {
            console.log('failed');
          }}
          onCancelled={() => {
            timeline.setValue(prevPosition.current);
          }}
          onGestureEvent={event => {
            tmpPosition.current =
              clamp(event.nativeEvent.x, 0, width.current) / width.current;
            timeline.setValue(tmpPosition.current);
          }}>
          <TapGestureHandler
            onHandlerStateChange={async event => {
              if (event.nativeEvent.state === 4) {
                tmpPosition.current =
                  clamp(event.nativeEvent.x, 0, width.current) / width.current;
                timeline.setValue(tmpPosition.current);
                await new SpotifyService().seek(
                  player.duration * tmpPosition.current,
                );
              }
            }}
            maxDurationMs={100000}
            hitSlop={{
              top: 30,
              bottom: 30,
              right: 30,
              left: 30,
            }}>
            <View
              onLayout={event => {
                width.current = event.nativeEvent.layout.width;
                console.log('width: ', width);
              }}
              style={styles.timelineBackground}>
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
                <View style={styles.cursor} />
              </Animated.View>
            </View>
          </TapGestureHandler>
        </PanGestureHandler>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{ color: 'white' }}>
            {Duration.fromObject({ seconds: timelineTimer }).toFormat('m:ss')}
          </Text>
          <TouchableOpacity
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            onPress={async () => {
              const isPlayed = await new SpotifyService().togglePLay();
              setIsPaused(isPlayed);
            }}
            style={{ transform: [{ rotate: '180deg' }] }}>
            <SkipTrackIcon />
          </TouchableOpacity>
          <View style={styles.containerPlayButton}>
            <TouchableOpacity
              hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
              onPress={async () => {
                const isPlayed = await new SpotifyService().togglePLay();
                setIsPaused(isPlayed);
              }}>
              {!isPaused ? <PauseIcon /> : <PlayIcon />}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            onPress={async () => {
              const isPlayed = await new SpotifyService().togglePLay();
              setIsPaused(isPlayed);
            }}>
            <SkipTrackIcon />
          </TouchableOpacity>
          <Text style={{ color: 'white' }}>
            {Duration.fromObject({ milliseconds: player.duration }).toFormat(
              'm:ss',
            )}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    backgroundColor: '#1f1f1f',
    height: 130,
    width: '90%',
    bottom: 90,
    alignSelf: 'center',
    borderRadius: 20,
    padding: 20,
  },
  container: {
    width: '100%',
    // position: 'absolute',
  },
  cursor: {
    position: 'absolute',
    top: -3.5,
    height: 10,
    width: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    right: 0,
  },
  containerPlayButton: {
    // position: 'absolute',
    alignSelf: 'center',
    margin: 10,
    // top: 40,
  },
  timelineBackground: {
    backgroundColor: 'gray',
    height: 2,
    // marginHorizontal: 20,
    borderRadius: 10,
  },
});
