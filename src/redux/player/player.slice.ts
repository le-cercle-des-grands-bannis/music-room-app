import { RootState } from '@redux/store';
import { createAsyncThunk, createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { PlayerState as SpotifyPlayerState } from 'react-native-spotify-remote';

interface PlayerState {
  title: string;
  artist: string;
  duration: number;
  currentDuration: number;
  timelinePosition: number;
  isPaused: boolean;
}

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    artist: '',
    title: '',
    timelinePosition: 0,
    currentDuration: 0,
    duration: 0,
    isPaused: false,
  } as PlayerState,
  reducers: {
    setPlayerState: (
      state: Draft<PlayerState>,
      action: PayloadAction<SpotifyPlayerState>,
    ) => {
      state.artist = action.payload.track.artist.name;
      state.title = action.payload.track.name;
      state.duration = action.payload.track.duration;
      state.currentDuration = action.payload.playbackPosition;
      state.timelinePosition = state.currentDuration / state.duration;
      state.isPaused = action.payload.isPaused;
    },
  },
});

const { reducer, actions } = playerSlice;
export const { setPlayerState } = actions;

export const selectPlayerState = (state: RootState) => state.player;

export default reducer;
