import { configureStore } from '@reduxjs/toolkit';
import postReducer from './post/postSlice';

export const store = configureStore({
  reducer: { postReducer },
});
