import * as SecureStore from 'expo-secure-store';

async function setInSecureStore(key: string, value: string): Promise<void> {
  await SecureStore.setItemAsync(key, value);
}

async function getFromSecureStore(key: string): Promise<string | null> {
  return SecureStore.getItemAsync(key);
}

async function deleteFromSecureStore(key: string): Promise<void> {
  return SecureStore.deleteItemAsync(key);
}

export { setInSecureStore, getFromSecureStore, deleteFromSecureStore };
