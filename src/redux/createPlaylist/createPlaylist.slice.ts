import { handleApiErrorThunk } from '@redux/auth/auth.slice';
import { RootState } from '@redux/store';
import {
  createAsyncThunk,
  createSlice,
  Draft,
  PayloadAction,
} from '@reduxjs/toolkit';
import PlaylistService from '@services/PlaylistService';

import { Playlist } from '../../types/services/playlistService/Playlist';

type CreatePlaylistState = Omit<Playlist, 'id' | 'userId'> & { data?: { id: string | null } };

export const createPlaylist = createAsyncThunk<
  string,
  void,
  { state: RootState }
>('createPlaylist/createPlaylist', async (payload, thunkAPI) => {
  const state = thunkAPI.getState().createPlaylist;
  try {
    const response = await new PlaylistService().createPlaylist({
      name: state.name,
      description: state.description,
      isPublic: true,
      isRestricted: false,
    });
    console.log(response.data);
    return response.data.playlist.id;
  } catch (error) {
    handleApiErrorThunk(error, thunkAPI);
    return thunkAPI.rejectWithValue(undefined);
  }
});

const createPlaylistSlice = createSlice({
  name: 'createPlaylist',
  initialState: {
    name: '',
    isPublic: true,
    isRestricted: false,
  } as CreatePlaylistState,
  reducers: {
    setName: (
      state: Draft<CreatePlaylistState>,
      action: PayloadAction<string>,
    ) => {
      state.name = action.payload;
    },
    setDescription: (
      state: Draft<CreatePlaylistState>,
      action: PayloadAction<string>,
    ) => {
      state.description = action.payload;
    },
    setPublic: (
      state: Draft<CreatePlaylistState>,
      action: PayloadAction<boolean>,
    ) => {
      state.isPublic = action.payload;
    },
    setRestricted: (
      state: Draft<CreatePlaylistState>,
      action: PayloadAction<boolean>,
    ) => {
      state.isRestricted = action.payload;
    },
    clearData: (state: Draft<CreatePlaylistState>) => {
      return {
        name: '',
        isPublic: true,
        isRestricted: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPlaylist.fulfilled, (state, action) => {
      state.data = {
        id: action.payload,
      };
    });
    builder.addCase(createPlaylist.rejected, (state, action) => {
      state.data = {
        id: null,
      };
    });
  },
});

const { reducer, actions } = createPlaylistSlice;
export const { setName, clearData, setPublic, setRestricted, setDescription } =
  actions;

export const selectCreatePlaylist = (state: RootState) => state.createPlaylist;

export default reducer;
