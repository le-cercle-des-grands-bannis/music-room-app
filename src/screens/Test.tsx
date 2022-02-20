import { logout } from '@redux/auth/auth.slice';
import { Button, SafeAreaView, View } from 'react-native';

import { useAppDispatch } from '../hooks/redux';

export default function Test() {
  const dispatch = useAppDispatch();

  const submit = async () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Button title="LogOut" onPress={submit} />
      </View>
    </SafeAreaView>
  );
}
