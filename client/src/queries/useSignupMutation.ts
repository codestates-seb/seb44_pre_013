import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getHeader, isStatusOK } from '../utils';
import { setLogin, setValid } from '../store/loginSlice';
import authInstance from '../apis/ApiController';

interface IAccountType {
  name: string;
  email: string;
  password: string;
}

const checkSignup = async (account: IAccountType) => {
  try {
    const response: Response = await authInstance.post(`/members/signup`, account);
    const header = getHeader(response, 'Authorization');
    const status = isStatusOK(response);

    return { header, status };
  } catch (error) {
    console.log(error);
  }
};

const useSignupMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupMutation = useMutation(checkSignup, {
    onSuccess: (data) => {
      if (!data?.status) {
        dispatch(setValid(false));
        alert('닉네임 또는 이메일이 중복되었습니다.');
        return;
      }
      // 헤더로 토큰이 올 경우
      // dispatch(setValid(true));
      // dispatch(
      //   setLogin({
      //     accessToken: data?.header,
      //   })
      // );
      // navigate('/');

      // 헤더로 토큰이 안올 경우
      dispatch(setValid(true));
      navigate('/login');
    },
  });

  return signupMutation;
};

export default useSignupMutation;
