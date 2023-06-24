import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getHeader, isStatusOK } from '../utils';
import { setLogin, setValid } from '../store/loginSlice';
import { CONFIG } from '../constants/config';

interface IAccountType {
  id: string;
  password: string;
}

const checkLogin = async (account: IAccountType) => {
  try {
    const response: Response = await axios.post(`${CONFIG.BASE_URL}/auth/login`, account);
    const header = getHeader(response, 'Authorization');
    const status = isStatusOK(response);

    return { header, status };
  } catch (error) {
    console.log(error);
  }
};

const useLoginMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginMutation = useMutation(checkLogin, {
    onSuccess: (data) => {
      if (!data?.status) {
        dispatch(setValid(false));
        return;
      }

      dispatch(setValid(true));
      dispatch(
        setLogin({
          accessToken: data?.header,
        })
      );

      navigate('/');
    },
  });

  return loginMutation;
};

export default useLoginMutation;
