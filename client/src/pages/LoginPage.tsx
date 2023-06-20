import { styled } from 'styled-components';
import OAuthArea from '../components/ui/OAuthArea';
import LoginForm from '../components/form/LoginForm';
import FormInput from '../components/form/FormInput';
import { Button } from '../components/ui/buttons/Button';
import OAuthButton from '../components/ui/buttons/OAuthButton';
import { OAuth } from '../constants/OAuth';

const LoginPage = () => {
  return (
    <Container>
      <CenterWrapper>
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
        <LoginForm>
          <FormInput title="Email" type="text" />
          <FormInput title="Password" type="password" />
          <Button>Log in</Button>
        </LoginForm>
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

export default LoginPage;
