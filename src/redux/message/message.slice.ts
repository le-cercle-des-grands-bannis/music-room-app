import { RootState } from '@redux/store';
import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { ColorValue } from 'react-native';

export interface Message {
  id: number;
  content: string;
  backgroundColor?: string | string[];
  textColor?: ColorValue;
  crossColor?: ColorValue;
}

type MessagePayload = Omit<Message, 'id'>;

let messageIndex = 0;

function getMessageIndex(): number {
  return messageIndex++;
}

const messageSlice = createSlice({
  name: 'message',
  initialState: [] as Message[],
  reducers: {
    addMessage: (
      state: Draft<Message[]>,
      action: PayloadAction<MessagePayload>,
    ) => {
      return [
        ...state,
        {
          id: getMessageIndex(),
          content: action.payload.content,
          backgroundColor: action.payload.backgroundColor,
          textColor: action.payload.textColor,
          crossColor: action.payload.crossColor,
        },
      ];
    },
    clearMessages: () => {
      return [];
    },
    clearMessage: (state: Draft<Message[]>, action: PayloadAction<number>) => {
      return state.filter(value => value.id !== action.payload);
    },
  },
});

const { reducer, actions } = messageSlice;
export const { addMessage, clearMessages, clearMessage } = actions;

export const selectMessage = (state: RootState) => state.message;

export default reducer;
