import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IQuestionsData } from './../types/question';

type stateType = {
  list: IQuestionsData[];
  questionId: string;
};

const initialState: stateType = {
  list: [],
  questionId: '',
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    getAllQuestion: (state) => {
      return state;
    },
    getQuestion: (state) => {
      return state;
    },
    crateQuestion: (state, action: PayloadAction<number>) => {
      return state;
    },
    modifyQuestion: (state, action) => {
      return state;
    },
    setQuestionId: (state, action: PayloadAction<{ questionId: string }>) => {
      state.questionId = action.payload.questionId;
    },
  },
});

export const { getAllQuestion, getQuestion, crateQuestion, modifyQuestion, setQuestionId } =
  questionSlice.actions;

export default questionSlice.reducer;
