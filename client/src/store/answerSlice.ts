import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IAnswer } from '../types/answer';

type stateType = {
  data: IAnswer[];
};

const initialState: stateType = {
  data: [],
};

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    getAllAnswer: (state, action: PayloadAction<{ data: IAnswer[] }>) => {
      state.data = action.payload.data;
    },
    modifyAnswer: (state, action) => {
      const index = state.data.findIndex((answer) => answer.answerId === action.payload.answerId);
      state.data[index] = action.payload;
      return state;
    },
    deleteAnswer: (state, action) => {
      state.data = state.data.filter((answer) => answer.answerId !== action.payload);
    },
  },
});

export const { getAllAnswer, modifyAnswer, deleteAnswer } = answerSlice.actions;

export default answerSlice.reducer;
