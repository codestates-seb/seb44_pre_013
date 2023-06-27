import { styled } from 'styled-components';
import OAuthArea from '../components/ui/OAuthArea';
import Form from '../components/form/Form';
import FormInput from '../components/ui/input/FormInput';
import { Button } from '../components/ui/buttons/Button';
import OAuthButton from '../components/ui/buttons/OAuthButton';
import { OAuth } from '../constants/OAuth';
import { useRef } from 'react';
import useLoginMutation from '../queries/useLoginMutation';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const LoginPage = () => {
  const isValid = useSelector((state: RootState) => state.login.isValid);
  const refId = useRef<HTMLInputElement>(null);
  const refPw = useRef<HTMLInputElement>(null);

  const loginMutation = useLoginMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (refId.current && refPw.current) {
      loginMutation.mutate({ id: refId.current.value, password: refPw.current.value });
    }
  };

  return (
    <Container>
      <CenterWrapper>
        <Icon src="https://i.ibb.co/Qb5bWgL/stackoverflow-Icon.png" alt="아이콘" />
        <OAuthArea>
          <OAuthButton
            IconUrl={OAuth.GOOGLE.ICONURL}
            title={OAuth.GOOGLE.LOGIN}
            color={OAuth.GOOGLE.COLOR}
            hovercolor={OAuth.GOOGLE.HOVER_COLOR}
            fontcolor={OAuth.GOOGLE.FONT_COLOR}
          />
          <OAuthButton
            IconUrl={OAuth.GITHUB.ICONURL}
            title={OAuth.GITHUB.LOGIN}
            color={OAuth.GITHUB.COLOR}
            hovercolor={OAuth.GITHUB.HOVER_COLOR}
          />
        </OAuthArea>
        <Form onSubmit={handleSubmit}>
          <FormInput
            title="Email"
            type="text"
            ref={refId}
            isValid={isValid}
            warningText={!isValid ? 'No user found with matching email' : ''}
          />
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
