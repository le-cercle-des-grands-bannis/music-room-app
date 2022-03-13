import { RootState } from '@redux/store';
import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

const timelineTimerSlice = createSlice({
  name: 'timelineTimer',
  initialState: 0,
  reducers: {
    setTimer: (state: Draft<number>, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = timelineTimerSlice;
export const { setTimer } = actions;

export const selectTimelineTimer = (state: RootState) => state.timelineTimer;

export default reducer;
