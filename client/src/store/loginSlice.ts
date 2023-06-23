import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../utils';

export interface ILogin {
  accessToken: string | null;
  refreshToken?: string;
}

interface IInitialState extends ILogin {
  isLogin: boolean;
  isValid?: boolean;
}

const initialState: IInitialState = getLocalStorage('login', {
  isLogin: false,
  isValid: true,
  accessToken: '',
});

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<ILogin>) => {
      const loginData = { ...state, isLogin: true, accessToken: action.payload.accessToken };
      setLocalStorage('login', loginData);
      return loginData;
    },
    setLogout: (state) => {
      const logoutData = { ...state, isLogin: false };
      return logoutData;
    },
    setValid: (state, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;
    },
  },
});

export const { setLogin, setLogout, setValid } = loginSlice.actions;

export default loginSlice.reducer;