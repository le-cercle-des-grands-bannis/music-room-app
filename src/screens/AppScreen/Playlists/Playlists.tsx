import SpotifyService from '@services/SpotifyService';
import * as Linking from 'expo-linking';
import React, { useEffect } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { io } from 'socket.io-client';

import ThreeLines from '../../../components/ThreeLines';
import PlaylistCard from '../../../components/playlists/PlaylistCard';
import Color from '../../../constants/Colors';
import GlobalConstant from '../../../constants/GlobalConstant';
import useGetPlaylists from '../../../hooks/useGetPlaylists';
import { PlaylistsProps } from '../../../navigation/PlaylistsStack';
import SpotifyWebApiService from '@services/SpotifyWebApiService';

const Playlists: React.FC = ({ navigation }: PlaylistsProps) => {
  const playlists = new Array(4).fill(undefined).map((value, index) => {
    return { name: `Playlist ${index + 1}` };
  });

  const [isLoading, playlistsData] = useGetPlaylists();

  useEffect(() => {
    (async () => {
      await SpotifyService.init();
      const spotify = new SpotifyService();
      await spotify.play();
      const data = await SpotifyWebApiService.spotifyApi.searchTracks(
        'Sur un nouvel', { limit: 15, market: 'FR' }
      );

    })();
    // const socket = io(GlobalConstant.API_URL, { path: '/ws' });
    // socket.on('connect', () => {
    //   const engine = socket.io.engine;
    //   console.log(engine.transport.name); // in most cases, prints "polling"
    //
    //   engine.once('upgrade', () => {
    //     // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)
    //     console.log(engine.transport.name); // in most cases, prints "websocket"
    //   });
    //
    //   engine.on('packet', ({ type, data }) => {
    //     console.log(type, data);
    //     // called for each packet received
    //   });
    //
    //   engine.on('packetCreate', ({ type, data }) => {
    //     // called for each packet sent
    //   });
    //
    //   engine.on('drain', () => {
    //     // called when the write buffer is drained
    //   });
    //
    //   engine.on('close', (reason) => {
    //     // called when the underlying connection is closed
    //   });
    //   socket.emit('join:playlist', {
    //     playlistId: '46bf7e05-a054-4c6c-b396-c989859015a7',
    //   });
    // });
    //
    // socket.on('disconnect', () => {
    //   console.log(socket.connected); // false
    // });
  }, []);

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
        <Button
          title="Add"
          onPress={() => navigation.navigate('AddPlaylist')}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}>
        {!isLoading &&
          playlistsData &&
          playlistsData.map((playlist, index) => {
            return (
              <PlaylistCard
                key={index}
                playlistName={playlist.name}
                id={playlist.id}
              />
            );
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
