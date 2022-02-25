import PremiumService from '@services/PremiumService';
import authHeader from '@services/authHeader';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import * as SecureStore from 'expo-secure-store';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

import SecureStoreConstant from '../../constants/SecureStoreConstant';
import { Premium } from '../../types/services/PremiumService/getPremiums';
import { Button } from '../Button';
import { clamp } from '../MusicTimeline';

export default function PremiumCard(props: { data: Premium }) {
  const [process, setProcess] = useState<boolean>(false);
  const [token, setToken] = useState<any>(undefined);
  useEffect(() => {
    (async () => {
      setToken(await authHeader());
    })();
  }, []);

  const onClick = async () => {
    setProcess(true);
  };
  return (
    <>
      {!process ? (
        <SafeAreaView
          style={{
            padding: 20,
            backgroundColor: 'rgb(21,21,21)',
            height: '100%',
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'gray',
              padding: 20,
              borderRadius: 10,
              borderTopLeftRadius: 150,
              borderBottomRightRadius: 150,
              paddingBottom: 30,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontWeight: '700',
                margin: 40,
                textAlign: 'center',
              }}>
              {props.data.name}
            </Text>
            <Text style={styles.price}>{props.data.price} &euro;</Text>
            {props.data.have_discount && (
              <View>
                <View
                  style={{
                    position: 'absolute',
                    width: 90,
                    height: 5,
                    borderRadius: 10,
                    backgroundColor: 'red',
                    transform: [{ translateY: -20 }, { rotate: '-15deg' }],
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    color: 'orange',
                    fontSize: 20,
                    fontWeight: '700',
                    transform: [{ translateY: -17 }, { translateX: 90 }],
                  }}>
                  -{props.data.discount}%
                </Text>
                <Text style={styles.price}>
                  {clamp(
                    props.data.price -
                      props.data.price * (props.data.discount / 100),
                    0,
                    props.data.price,
                  ).toFixed(2)}{' '}
                  &euro;
                </Text>
              </View>
            )}
            <Text style={styles.text}>{props.data.description}</Text>
            <Text style={styles.text}>{props.data.advantages.join(' ')}</Text>
            <View style={{ width: 200, margin: 20 }}>
              <Button name="Acheter" onPress={onClick} />
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <WebView
          onMessage={event => {
            console.log(JSON.stringify(event.nativeEvent, null, 2));
          }}
          onLoad={(event => {
            console.log(event.nativeEvent);
          })}
          source={{
            uri: `https://dev.api.musicroom.benjaminnoufel.com/premium?id=${
              props.data.id
            }&redirectUrl=${Linking.createURL('/')}`,
            headers: {
              'Accept-language': 'fr',
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'X-AUTH': 'api',
              ...token,
            },
          }}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 0,
    textAlign: 'center',
  },
  price: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 0,
    textAlign: 'center',
  },
});
