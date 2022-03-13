import authReducer from '@redux/auth/auth.slice';
import createPlaylistReducer from '@redux/createPlaylist/createPlaylist.slice';
import messageReducer from '@redux/message/message.slice';
import playerReducer from '@redux/player/player.slice';
import timelineTimerReducer from '@redux/timelineTimer/timelineTime.slice';
import { configureStore } from '@reduxjs/toolkit';

const reducers = {
  auth: authReducer,
  message: messageReducer,
  player: playerReducer,
  timelineTimer: timelineTimerReducer,
  createPlaylist: createPlaylistReducer,
};

const store = configureStore({
  reducer: reducers,
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
