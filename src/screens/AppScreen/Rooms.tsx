import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ThreeLines from '../../components/ThreeLines';
import PlaylistCard from '../../components/playlists/PlaylistCard';

const Rooms: React.FC = props => {
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
          <ThreeLines />
        </View>
        <Text style={{ fontSize: 50, color: 'white' }}>Rooms</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}>
        <PlaylistCard playlistName="playlist 1" />
        <PlaylistCard playlistName="playlist 2" />
        <PlaylistCard playlistName="playlist 3" />
        <PlaylistCard playlistName="playlist 4" />
        <PlaylistCard playlistName="playlist 5" />
        <PlaylistCard playlistName="playlist 6" />
        <PlaylistCard playlistName="playlist 7" />
        <PlaylistCard playlistName="playlist 8" />
        <PlaylistCard playlistName="playlist 9" />
        <PlaylistCard playlistName="playlist 10" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#333',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    // paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Rooms;
