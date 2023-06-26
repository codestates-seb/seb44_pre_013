import { IStorage } from '../store/loginSlice';

const getHeader = (response: Response, str: string) => {
  return response ? response.headers.get(str) : '';
};

const isStatusOK = (response: Response) => {
  const isOK = response.status.toString()[0];
  return isOK === '2' ? true : false;
};

const setLocalStorage = (key: string, token: IStorage) => {
  localStorage.setItem(key, JSON.stringify(token));
};

const getLocalStorage = <T>(key: string, initialValue: T) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : initialValue;
};

export { getHeader, isStatusOK, setLocalStorage, getLocalStorage };
