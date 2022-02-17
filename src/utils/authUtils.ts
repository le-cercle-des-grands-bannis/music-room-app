import * as SecureStore from 'expo-secure-store';

async function save(key: string, value: string): Promise<void> {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key: string): Promise<string | null> {
  return SecureStore.getItemAsync(key);
}

export { save, getValueFor };
