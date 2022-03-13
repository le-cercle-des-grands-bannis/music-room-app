import {
  clearData,
  selectCreatePlaylist,
  setDescription,
  setName,
} from '@redux/createPlaylist/createPlaylist.slice';
import PlaylistService from '@services/PlaylistService';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import BasicPressableText from '../../../../components/BasicPressableText';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { SetPlaylistDescriptionProps } from '../../../../navigation/CreatePlaylistStack';

export default function SetPlaylistDescription({
  navigation,
}: SetPlaylistDescriptionProps) {
  const dispatch = useAppDispatch();
  const description = useRef<string>('');
  const onSubmit = async () => {
    dispatch(setDescription(description.current));
    navigation.navigate('SetPlaylistOtherOption');
  };

  const onCancel = () => {
    const parent = navigation.getParent();
    if (parent !== undefined) {
      parent.goBack();
    } else {
      navigation.goBack();
    }
  };

  return (
    <LinearGradient colors={['grey', 'black']} style={styles.mainContainer}>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
        (Optionnel) Donnez une description à votre playlist.
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
          onChangeText={(value) => (description.current = value)}
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
