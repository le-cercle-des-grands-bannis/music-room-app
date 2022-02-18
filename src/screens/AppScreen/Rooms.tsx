import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ThreeLines from '../../components/ThreeLines';
import PlaylistCard from '../../components/playlists/PlaylistCard';
import Color from '../../constants/Colors';

const Rooms: React.FC = props => {
  const rooms = new Array(10).fill(undefined).map((value, index) => {
    return { name: `Room ${index + 1}` };
  });
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
        {rooms.map((room, index) => {
          return <PlaylistCard key={index} playlistName={room.name} />;
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
    justifyContent: 'center',
  },
});

export default Rooms;
