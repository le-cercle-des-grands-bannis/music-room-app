import React from 'react';
import {StyleSheet, Text, Animated} from 'react-native';
import {fonts, viewSizes} from '../config/styles';

const AlertHandler: React.FC<{message: string; alertType: string}> = ({
  message,
  alertType,
}) => {
  const translationY = new Animated.Value(0);

  const background = {
    backgroundColor:
      alertType === 'error'
        ? '#FF0000'
        : alertType === 'success'
        ? '#32CD32'
        : alertType === 'warning'
        ? '#f7b500'
        : '#FF0000',
  };

  const translationOn = () => {
    Animated.sequence([
      Animated.timing(translationY, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translationY, {
        toValue: 0,
        delay: 4000,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View
      onLayout={translationOn}
      style={[
        styles.errorWrapper,
        background,
        {
          transform: [
            {
              translateY: translationY.interpolate({
                inputRange: [0, 1],
                outputRange: [-110, 0],
              }),
            },
          ],
        },
      ]}>
      <Text style={styles.errorText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  errorWrapper: {
    position: 'absolute',
    width: viewSizes.full,
    justifyContent: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    height: '15%',
    zIndex: 1,
  },
  errorText: {
    padding: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.futuraBTMedium,
  },
});

export default AlertHandler;
