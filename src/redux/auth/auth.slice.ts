import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';
import { save } from '../../utils/authUtils';

interface AuthState {
  isLoggedIn: boolean;
}

const authSetToken = createAsyncThunk(
  'auth/setToken',
  async (token: string, thunkApi) => {
    try {
      await save('userToken', token);
      return true;
    } catch (e) {
      return false;
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: true,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authSetToken.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
