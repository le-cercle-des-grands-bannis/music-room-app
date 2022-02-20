import { clearMessage, Message } from '@redux/message/message.slice';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated, Text, useWindowDimensions, View } from 'react-native';

import { useAppDispatch } from '../../hooks/redux';
import Cross from '../Cross';

interface NotificationPros {
  message: Message;
}

export default function Notification({ message }: NotificationPros) {
  const dispatch = useAppDispatch();
  const anim = useRef(new Animated.Value(0)).current;

  const dimensions = useWindowDimensions();

  useEffect(() => {
    Animated.spring(anim, {
      toValue: 1,
      damping: 10,
      stiffness: 100,
      velocity: 4,
      useNativeDriver: true,
      isInteraction: false,
    }).start();
    const timeout = setTimeout(() => {
      Animated.spring(anim, {
        toValue: 0,
        useNativeDriver: true,
        stiffness: 50,
        damping: 10,
        isInteraction: false,
      }).start(() => {
        dispatch(clearMessage(message.id));
      });
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  const anim2 = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [-dimensions.width, 0],
  });

  const colors: string[] = [];
  if (message.backgroundColor !== undefined) {
    if (Array.isArray(message.backgroundColor)) {
      colors.push(...message.backgroundColor);
    } else {
      colors.push(message.backgroundColor, message.backgroundColor);
    }
  } else {
    colors.push('#18ace3', '#18ace3');
  }

  return (
    <Animated.View
      style={{
        transform: [{ translateX: anim2 }],
        alignSelf: 'center',
        width: '100%',
        borderRadius: 30,
        marginVertical: 10,
      }}>
      <LinearGradient colors={colors} style={{ borderRadius: 30 }}>
        <View style={{ position: 'absolute', height: '100%', right: 10 }}>
          <View
            style={{
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
            }}>
            <Cross
              color={message.crossColor ? message.crossColor : 'red'}
              onPress={() => {
                dispatch(clearMessage(message.id));
              }}
            />
          </View>
        </View>
        <Text
          style={{
            padding: 10,
            paddingLeft: 15,
            paddingRight: 30,
            color: message.textColor ? message.textColor : 'white',
          }}>
          {message.content}
        </Text>
      </LinearGradient>
    </Animated.View>
  );
}
