import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getHeader, isStatusOK } from '../utils';
import { setLogin, setValid } from '../store/loginSlice';
import authInstance from '../apis/ApiController';

interface IAccountType {
  id: string;
  password: string;
}

const checkLogin = async (account: IAccountType) => {
  try {
    const response: Response = await authInstance.post(`/auth/login`, account);
    const header = getHeader(response, 'Authorization');
    const memberId = getHeader(response, 'MemberId');
    const status = isStatusOK(response);

    return { header, status, memberId };
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
          memberId: data?.memberId,
        })
      );
      navigate('/');
    },
  });

  return loginMutation;
};

export default useLoginMutation;
