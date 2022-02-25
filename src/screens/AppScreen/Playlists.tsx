import React, { useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import * as Linking from 'expo-linking'

import ThreeLines from '../../components/ThreeLines';
import PlaylistCard from '../../components/playlists/PlaylistCard';
import Color from '../../constants/Colors';
import SpotifyService from '@services/SpotifyService';

const Playlists: React.FC = ({ navigation }) => {
  const playlists = new Array(4).fill(undefined).map((value, index) => {
    return { name: `Playlist ${index + 1}` };
  });
  console.log(Linking.createURL('/'));

  // useEffect(() => {
  //   (async () => {
  //     await SpotifyService.init();
  //     const spotify = new SpotifyService();
  //     await spotify.play();
  //   })();
  // }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          height: 100,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={{ marginLeft: 30, marginRight: 20 }}>
          <ThreeLines
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </View>
        <Text style={{ fontSize: 50, color: 'white' }}>Playlists</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}>
        {playlists.map((playlist, index) => {
          return <PlaylistCard key={index} playlistName={playlist.name} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.background,
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    // paddingVertical: 40,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Playlists;
