import { configureStore } from '@reduxjs/toolkit';
import postReducer from './post/postSlice';
import loginReducer from './loginSlice';

export const store = configureStore({
  reducer: { post: postReducer, login: loginReducer },
});

export type RootState = ReturnType<typeof store.getState>;
