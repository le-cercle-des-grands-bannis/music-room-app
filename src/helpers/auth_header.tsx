import AsyncStorage from '@react-native-async-storage/async-storage';

export async function authHeader() {
  // return authorization header with jwt token
  const token = await AsyncStorage.getItem('TOKEN');

  if (token) {
    return { Authorization: `Bearer ${JSON.parse(token)}`, 'Content-Type': 'application/json' };
  } else {
    return { 'Content-Type': 'application/json' };
  }
}

export async function uploadHeader() {
  // return authorization header with jwt token
  const token = await AsyncStorage.getItem('TOKEN');

  if (token) {
    return {
      Authorization: `Bearer ${JSON.parse(token)}`,
      'Content-Type': 'multipart/form-data',
    };
  } else {
    return {'Content-Type': 'multipart/form-data'};
  }
}
