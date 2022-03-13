import UserService from '@services/UserService';
import {
  ActivityIndicator,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Surface from '../../../components/Surface';
import Color from '../../../constants/Colors';
import usePromise from '../../../hooks/usePromise';
import { SettingsHomeProps } from '../../../navigation/SettingsStackNavigator';
import { GetUserInfoResponse } from '../../../types/api/users/me';
import { useEffect, useRef } from 'react';

export default function SettingsAccountScreen({
  navigation,
}: SettingsHomeProps) {
  const email = useRef('');

  const [isLoading, data] = usePromise(async () => {
    const response = await new UserService().getUserInfo();
    return response.data;
  });
  useEffect(() => {
    if (data !== null) {
      email.current = data.email;
    }
  }, [data]);
  if (isLoading || data === null) {
    return (
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          backgroundColor: 'rgb(18,18,18)',
        }}>
        <ActivityIndicator color={Color.primary} size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <Surface contentContainerStyle={{ padding: 10 }} depth={2}>
          <Text style={styles.text2}>Email</Text>
          <Surface depth={8} contentContainerStyle={{ paddingHorizontal: 5 }}>
            <TextInput
              placeholder="Ton email"
              placeholderTextColor="rgb(199,199,199)"
              selectionColor={Color.primary}
              style={{ color: 'white' }}
            />
          </Surface>
        </Surface>
      </View>
      <Pressable
        style={{
          backgroundColor: Color.primary,
          width: '20%',
          borderRadius: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[styles.text, { margin: 3 }]}>Valider</Text>
      </Pressable>
      <View style={styles.container}>
        <Surface contentContainerStyle={{ padding: 10 }} depth={2}>
          <Text style={styles.text2}>Changer de mot de passe</Text>
          <View style={{ paddingBottom: 4 }}>
            <Surface depth={8} contentContainerStyle={{ paddingHorizontal: 5 }}>
              <TextInput
                placeholder="Ancien mot de passe"
                placeholderTextColor="rgb(199,199,199)"
                selectionColor={Color.primary}
                secureTextEntry
                style={{ color: 'white' }}
              />
            </Surface>
          </View>
          <View style={{ paddingVertical: 4 }}>
            <Surface depth={8} contentContainerStyle={{ paddingHorizontal: 5 }}>
              <TextInput
                placeholder="Nouveau mot de passe"
                placeholderTextColor="rgb(199,199,199)"
                selectionColor={Color.primary}
                secureTextEntry
                style={{ color: 'white' }}
              />
            </Surface>
          </View>
          <View style={{ paddingTop: 4 }}>
            <Surface depth={8} contentContainerStyle={{ paddingHorizontal: 5 }}>
              <TextInput
                placeholder="Confirmation nouveau mot de passe"
                placeholderTextColor="rgb(199,199,199)"
                selectionColor={Color.primary}
                secureTextEntry
                style={{ color: 'white' }}
              />
            </Surface>
          </View>
          <View
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Pressable
              style={{
                backgroundColor: Color.primary,
                borderRadius: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
                marginBottom: 5,
              }}>
              <Text style={[styles.text, { margin: 3 }]}>
                Changer de mot de passe
              </Text>
            </Pressable>
          </View>
        </Surface>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgb(18,18,18)',
    padding: 20,
    display: 'flex',
  },
  container: {
    paddingVertical: 10,
  },
  field: {
    backgroundColor: 'rgb(30,30,30)',
  },
  overlay: {
    backgroundColor: 'white',
    opacity: 0.05,
  },
  text: {
    color: 'black',
  },
  text2: {
    marginBottom: 10,
    marginLeft: 5,
    color: 'white',
  },
});
