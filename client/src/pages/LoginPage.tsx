import { styled } from 'styled-components';
import OAuthArea from '../components/ui/OAuthArea';
import LoginForm from '../components/form/LoginForm';

const LoginPage = () => {
  return (
    <Container>
      <CenterWrapper>
        <Img src="/stackoverflow_Icon.svg" />
        <OAuthArea />
        <LoginForm />
        <BottomQuestion>
          Don't have an account?<a href=""> Sign up</a>
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

const Img = styled.img`
  width: 2rem;
`;

const BottomQuestion = styled.div`
  font-size: 0.8rem;
`;

export default LoginPage;
