import * as SecureStore from 'expo-secure-store';

import SecureStoreConstant from '../constants/SecureStoreConstant';

export default async function authHeader(): Promise<{
  Authorization?: string;
}> {
  const userToken: string | null = await SecureStore.getItemAsync(
    SecureStoreConstant.API_USER_TOKEN,
  );
  if (userToken !== null) {
    return { Authorization: `Bearer ${userToken}` };
  } else {
    return {};
  }
}
