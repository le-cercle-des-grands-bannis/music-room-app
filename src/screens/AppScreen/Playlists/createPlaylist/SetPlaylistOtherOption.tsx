import {
  createPlaylist,
  selectCreatePlaylist,
  setDescription,
  setPublic,
  setRestricted,
} from '@redux/createPlaylist/createPlaylist.slice';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef } from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';

import BasicPressableText from '../../../../components/BasicPressableText';
import SwitchOption from '../../../../components/SwitchOption';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { SetPlaylistPublicProps } from '../../../../navigation/CreatePlaylistStack';

export default function SetPlaylistOtherOption({
  navigation,
}: SetPlaylistPublicProps) {
  const dispatch = useAppDispatch();
  const isPublic = useRef<boolean>(false);
  const isRestricted = useRef<boolean>(false);

  const onSubmit = async () => {
    dispatch(setPublic(isPublic.current));
    dispatch(setRestricted(isRestricted.current));
    await dispatch(createPlaylist());
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
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center',
        }}>
        Configurer les droites que les autres personnes ont sur votre playlist.
      </Text>
      <View style={{ width: '100%' }}>
        <SwitchOption
          titre="Visibilité de votre playlist"
          textOnTrue="Votre playlist est publique"
          textOnFalse="Votre playlist est privé"
          defaultValue
        />
        <SwitchOption
          titre="Restriction de votre playlist"
          textOnTrue="Seul les personnes autorisés peuvent modifier la playlist"
          textOnFalse="Toute les personnes voyant votre playlist peuvent la modifier"
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
