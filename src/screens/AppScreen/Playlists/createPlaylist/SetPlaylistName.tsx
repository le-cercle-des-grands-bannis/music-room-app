import { clearData, setName } from '@redux/createPlaylist/createPlaylist.slice';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import BasicPressableText from '../../../../components/BasicPressableText';
import { useAppDispatch } from '../../../../hooks/redux';
import { SetPlaylistNameProps } from '../../../../navigation/CreatePlaylistStack';

export default function SetPlaylistName({ navigation }: SetPlaylistNameProps) {
  const dispatch = useAppDispatch();
  const name = useRef<string>('');

  useEffect(() => {
    dispatch(clearData());
  }, []);

  const onCancel = () => {
    const parent = navigation.getParent();
    if (parent !== undefined) {
      parent.goBack();
    } else {
      navigation.goBack();
    }
  };

  const onSubmit = () => {
    dispatch(setName(name.current));
    navigation.navigate('SetPlaylistDescription');
  };

  return (
    <LinearGradient colors={['grey', 'black']} style={styles.mainContainer}>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
        Donnez un nom à votre playlist.
      </Text>
      <View
        style={{
          marginVertical: 50,
          width: '100%',
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}>
        <TextInput
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            padding: 10,
          }}
          onChangeText={(value) => (name.current = value)}
        />
      </View>
      <View style={{ width: '100%' }}>
        <View style={styles.buttonContainer}>
          <BasicPressableText
            color="rgb(250,250,250)"
            pressedColor="rgb(180,180,180)"
            text="ANNULER"
            onPress={onCancel}
          />
          <BasicPressableText
            color="rgb(0,187,210)"
            pressedColor="rgb(0,119,133)"
            text="SUIVANT"
            onPress={onSubmit}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%',
  },
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
