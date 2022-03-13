import SpotifyService from '@services/SpotifyService';
import SpotifyWebApiService from '@services/SpotifyWebApiService';
import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  FlatList,
  FlatListProps,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Surface from '../../../components/Surface';
import ThreeLines from '../../../components/ThreeLines';
import PlaylistCard from '../../../components/playlists/PlaylistCard';
import Color from '../../../constants/Colors';
import usePromise from '../../../hooks/usePromise';
import { PlaylistProps } from '../../../navigation/PlaylistsStack';

export default function Playlist({ navigation, route }: PlaylistProps) {
  const [data, setData] = useState<{ trackId: string }[] | undefined>();

  useEffect(() => {
    (async () => {
      const response = await SpotifyWebApiService.spotifyApi.searchTracks(
        'artist:vald',
        {
          limit: 50,
        },
      );
      console.log(response.body.tracks.total);
      setData((prev) => {
        const data = response.body.tracks?.items.map((value) => {
          // console.log(value.);
          return { trackId: value.uri };
        });
        if (data === undefined) return [];
        return [...data, ...data, ...data, ...data];
      });
    })();
  }, []);

  const renderItem: FlatListProps<
    NonNullable<typeof data>[0]
  >['renderItem'] = ({ item, index }) => {
    console.log(index);
    return (
      <View style={{ margin: 10 }}>
        <Surface depth={4}>
          <Text style={{ color: 'white' }}>{item.trackId}</Text>
        </Surface>
      </View>
    );
  };

  const keyExtractor: FlatListProps<
    NonNullable<typeof data>[0]
  >['keyExtractor'] = (item, index) => {
    return String(index);
  };

  // const [isLoading, data] = usePromise(() => {});
  return (
    <SafeAreaView style={styles.mainContainer}>
      {data !== undefined ? (
        <>
          <Text style={{ color: 'white' }}>DATA{data.length}</Text>
          <FlatList
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
        </>
      ) : undefined}
    </SafeAreaView>
  );
}

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
