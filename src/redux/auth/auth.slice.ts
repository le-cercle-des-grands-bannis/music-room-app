import { RootState } from '@redux/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from '@services/AuthService';
import UserService from '@services/UserService';
import axios, { AxiosError } from 'axios';

import { LoginPayload } from '../../types/services/authService/login';
import { RegisterPayload } from '../../types/services/authService/register';
import { ResetPasswordPayload } from '../../types/services/authService/reset';
import { addMessage } from '../message/message.slice';

// interface AuthState {
//   isLoggedIn: boolean;
// }

const isAxiosError = <T = any>(error: any): error is AxiosError<T> => {
  return axios.isAxiosError(error);
};

function handleApiErrorThunk(error: any, thunkAPI: any) {
  if (isAxiosError<{ errors: string[] }>(error)) {
    if (error.response?.data?.errors !== undefined) {
      error.response.data.errors.forEach((value: string) => {
        thunkAPI.dispatch(
          addMessage({
            content: value,
            backgroundColor: ['red', 'rgb(68,0,0)'],
            crossColor: 'black',
          }),
        );
      });
    } else {
      console.error(error);
      thunkAPI.dispatch(
        addMessage({
          content: 'Une erreur inconnue est survenu',
          backgroundColor: ['red', 'rgb(68,0,0)'],
          crossColor: 'black',
        }),
      );
    }
  }
}

export const register = createAsyncThunk(
  'auth/register',
  async (payload: RegisterPayload, thunkAPI) => {
    try {
      await new AuthService().register(payload);
    } catch (error) {
      handleApiErrorThunk(error, thunkAPI);
      return thunkAPI.rejectWithValue(undefined);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (payload: LoginPayload, thunkAPI) => {
    try {
      await new AuthService().login(payload);
    } catch (error) {
      handleApiErrorThunk(error, thunkAPI);
      return thunkAPI.rejectWithValue(undefined);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await new AuthService().logout();
});

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (payload: ResetPasswordPayload, thunkAPI) => {
    try {
      const response = await new AuthService().resetPassword(payload);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.errors);
      handleApiErrorThunk(error, thunkAPI);
      return thunkAPI.rejectWithValue(undefined);
    }
  },
);

export const autoLogin = createAsyncThunk(
  'auth/autoLogin',
  async (props, thunkAPI) => {
    try {
      await new UserService().getUserInfo();
    } catch (error) {
      return thunkAPI.rejectWithValue(undefined);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(register.fulfilled, state => {
      state.isLoggedIn = true;
    });
    builder.addCase(register.rejected, state => {
      state.isLoggedIn = false;
    });
    builder.addCase(login.fulfilled, state => {
      state.isLoggedIn = true;
    });
    builder.addCase(login.rejected, state => {
      state.isLoggedIn = false;
    });
    builder.addCase(logout.fulfilled, state => {
      state.isLoggedIn = false;
    });
    builder.addCase(autoLogin.fulfilled, state => {
      state.isLoggedIn = true;
    });
    builder.addCase(autoLogin.rejected, state => {
      state.isLoggedIn = false;
    });
  },
});

export const selectAuth = (state: RootState) => state.auth;

const { reducer } = authSlice;
export default reducer;
