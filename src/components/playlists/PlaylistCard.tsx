import { Square } from 'native-base';
import React, { PropsWithChildren } from 'react';
import { Pressable, Text, View } from 'react-native';

const PlaylistCard = (props: { playlistName: string; id: string }) => {
  return (
    <Pressable
      style={{
        width: '80%',
        margin: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onLongPress={() => console.log('long press')}
      onPress={() => console.log('press')}>
      <View style={{ width: 60, height: 60, backgroundColor: 'gray' }} />
      <View style={{ width: '80%', paddingHorizontal: 30 }}>
        <Text style={{ fontSize: 20, color: 'white' }}>
          {props.playlistName}
        </Text>
      </View>
    </Pressable>
  );
};

export default PlaylistCard;
