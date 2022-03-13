import SpotifyWebApiService from '@services/SpotifyWebApiService';
import { useRef, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import SpotifyWebApi from 'spotify-web-api-node';

import Surface from '../../../components/Surface';
import Color from '../../../constants/Colors';

type TracksArray =
  | NonNullable<
      Awaited<ReturnType<SpotifyWebApi['searchTracks']>>['body']['tracks']
    >['items'];

export default function MusicSearch() {
  const [data, setData] = useState<TracksArray | null>(null);
  const timeout = useRef<NodeJS.Timeout>();
  const onChangeText: TextInputProps['onChangeText'] = (text: string) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = undefined;
    }
    if (text.length === 0) {
      setData(null);
      return;
    }
    timeout.current = setTimeout(async () => {
      console.log(text);
      try {
        const response = await SpotifyWebApiService.spotifyApi.searchTracks(
          text,
          { limit: 10 },
        );
        if (response.body.tracks) {
          console.log(response.body.tracks.items.length);
          setData(response.body.tracks.items);
        }
      } catch (e) {
        setData(null);
      }
    }, 300);
  };

  return (
    <View style={styles.mainContainer}>
      <Surface depth={2} contentContainerStyle={{ padding: 5 }}>
        <Text style={[styles.textColor]}>Recherche</Text>
        <Surface depth={8}>
          <TextInput onChangeText={onChangeText} style={{ color: 'white' }} />
        </Surface>
      </Surface>
      <ScrollView>
        {data?.map((value, index) => {
          return (
            <View style={{ marginVertical: 10 }}>
              <Surface
                key={index}
                depth={4}
                contentContainerStyle={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: 10,
                }}>
                <Image
                  source={{ uri: value.album.images[0].url }}
                  style={{ width: 96, height: 96 }}
                />
                <View>
                  <Text style={{ color: 'white' }}>{value.name}</Text>
                  <Text style={{ color: 'white' }}>
                    {value.artists.map((value) => value.name).join(', ')}
                  </Text>
                </View>
                <Pressable style={{ backgroundColor: Color.primary }}>
                  <Text>Add</Text>
                </Pressable>
              </Surface>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    width: '100%',
    height: '100%',
    backgroundColor: Color.background,
  },
  textColor: {
    color: 'rgb(199,199,199)',
  },
});
