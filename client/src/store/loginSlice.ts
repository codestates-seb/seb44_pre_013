import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../utils';

export interface ILogin {
  accessToken: string | null;
  refreshToken?: string;
  memberId?: string | null;
}

export interface IStorage extends ILogin {
  isLogin: boolean;
  isValid?: boolean;
}

const initialState: IStorage = getLocalStorage('token', {
  isLogin: false,
  isValid: true,
  accessToken: '',
  memberId: '',
});

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<ILogin>) => {
      const loginData = {
        ...state,
        isLogin: true,
        accessToken: action.payload.accessToken,
        memberId: action.payload.memberId,
      };
      setLocalStorage('token', loginData);
      return loginData;
    },

    setLogout: () => {
      const logoutData = initialState;
      localStorage.clear();
      return logoutData;
    },
    setValid: (state, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;
    },
  },
});

export const { setLogin, setLogout, setValid } = loginSlice.actions;

export default loginSlice.reducer;
