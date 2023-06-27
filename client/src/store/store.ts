import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './loginSlice';
import answerReducer from './answerSlice';

export const store = configureStore({
  reducer: { answers: answerReducer, login: loginReducer },
});

export type RootState = ReturnType<typeof store.getState>;
