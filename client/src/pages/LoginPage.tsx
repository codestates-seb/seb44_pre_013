import { styled } from 'styled-components';
import OAuthArea from '../components/ui/OAuthArea';
import Form from '../components/form/Form';
import FormInput from '../components/ui/input/FormInput';
import { Button } from '../components/ui/buttons/Button';
import OAuthButton from '../components/ui/buttons/OAuthButton';
import { OAuth } from '../constants/OAuth';
import { useRef } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

interface AccountType {
  email: string;
  password: string;
}

const LoginPage = () => {
  const refId = useRef<HTMLInputElement>(null);
  const refPw = useRef<HTMLInputElement>(null);

  const checkLogin = async (account: AccountType) => {
    const response = await axios.post<AccountType>(
      `http://localhost:3001/member?email=${refId.current?.value}&password=${refPw.current?.value}`,
      account
    );
    console.log(response);

    return response;
  };

  const { mutate, isError } = useMutation((account: AccountType) => checkLogin(account));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (refId.current && refPw.current)
      mutate({ email: refId.current.value, password: refPw.current.value });
    isError ? alert('아이디 또는 비밀번호가 틀렸습니다.') : alert('로그인 성공');
  };

  return (
    <Container>
      <CenterWrapper>
        <Icon src="/stackoverflow_Icon.svg" alt="아이콘" />
        <OAuthArea>
          <OAuthButton
            iconUrl={OAuth.GOOGLE.ICONURL}
            title={OAuth.GOOGLE.LOGIN}
            color={OAuth.GOOGLE.COLOR}
            hoverColor={OAuth.GOOGLE.HOVER_COLOR}
            fontColor={OAuth.GOOGLE.FONT_COLOR}
          />
          <OAuthButton
            iconUrl={OAuth.GITHUB.ICONURL}
            title={OAuth.GITHUB.LOGIN}
            color={OAuth.GITHUB.COLOR}
            hoverColor={OAuth.GITHUB.HOVER_COLOR}
          />
        </OAuthArea>
        <Form onSubmit={handleSubmit}>
          <FormInput title="Email" type="text" ref={refId} />
          <FormInput title="Password" type="password" ref={refPw} />
          <Button type="submit">Log in</Button>
        </Form>
        <BottomQuestion>
          Don’t have an account?<a href="http://localhost:5173/members/signup"> Sign up</a>
        </BottomQuestion>
        <BottomQuestion>
          Are you an employer?<a href=""> Sign up on Talent</a>
        </BottomQuestion>
      </CenterWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f1f2f3;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterWrapper = styled.section`
  width: 18rem;
  height: 90%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomQuestion = styled.div`
  font-size: 0.8rem;
  > a {
    color: #0374cc;
  }
`;

const Icon = styled.img`
  width: 2rem;
`;

export default LoginPage;
