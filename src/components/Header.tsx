import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  BackHandler,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {viewSizes} from '../config/styles';

import arrowRight from '../../assets/icons/arrowRight.png';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.buttonGoBack}
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              } else {
                BackHandler.exitApp();
              }
            }}>
            <Image style={styles.imgArrow} source={arrowRight} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: viewSizes.full,
    alignContent: 'flex-start',
    padding: 20,
    height: 100,
  },
  headerWrapper: {
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  buttonWrapper: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonGoBack: {
    height: 28,
    width: 28,
  },
  logo: {
    width: 83,
    height: 47,
  },
  imgArrow: {
    height: 28,
    width: 28,
    backgroundColor: 'white',
    borderRadius: 14,
  },
  chat: {
    height: 28,
    width: 28,
  },
});

export default Header;
