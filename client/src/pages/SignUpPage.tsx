import { styled } from 'styled-components';
import OAuthArea from '../components/ui/OAuthArea';
import Form from '../components/form/Form';
import FormInput from '../components/ui/input/FormInput';
import { Button } from '../components/ui/buttons/Button';
import { Numbers } from '../constants/Numbers';
import OAuthButton from '../components/ui/buttons/OAuthButton';
import { OAuth } from '../constants/OAuth';
import { useRef, useState } from 'react';
import checkValid from '../utils/checkValid';
import useSignupMutation from '../queries/useSignupMutation';

const SignUpPage = () => {
  const refName = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  const refPw = useRef<HTMLInputElement>(null);

  const [validObj, setValidObj] = useState({
    isValidName: true,
    isValidEmail: true,
    isValidPassword: true,
    validNameText: '',
    validEmailText: '',
    validPasswordText: '',
  });

  const { validate: validateName } = checkValid();
  const { validate: validateEmail } = checkValid();
  const { validate: validatePassword } = checkValid();

  const signupMutation = useSignupMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (refName.current && refEmail.current && refPw.current) {
      const isNameValid = validateName({ type: 'name', text: refName.current.value });
      const isEmailValid = validateEmail({ type: 'email', text: refEmail.current.value });
      const isPasswordValid = validatePassword({ type: 'password', text: refPw.current.value });

      if (isNameValid && isEmailValid && isPasswordValid) {
        setValidObj({
          isValidName: isNameValid?.isValid,
          isValidEmail: isEmailValid?.isValid,
          isValidPassword: isPasswordValid?.isValid,
          validNameText: isNameValid?.content,
          validEmailText: isEmailValid?.content,
          validPasswordText: isPasswordValid?.content,
        });
      }

      if (isNameValid?.isValid && isEmailValid?.isValid && isPasswordValid?.isValid)
        signupMutation.mutate({
          name: refName.current.value,
          email: refEmail.current.value,
          password: refPw.current.value,
        });
    }
  };

  return (
    <Container>
      <CenterWrapper>
        <LeftSection>
          <TitleDiv>Join the Stack Overflow community</TitleDiv>
          <ContentDiv>
            <svg width={Numbers.SVG_WIDTH} height={Numbers.SVG_HEIGHT}>
              <path
                opacity={Numbers.OPACITY}
                d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"
                fill={Numbers.SVG_FILL_COLOR}
              />
              <path
                d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z"
                fill={Numbers.SVG_FILL_COLOR}
              />
            </svg>{' '}
            Get unstuck — ask a question
          </ContentDiv>
          <ContentDiv>
            <svg width={Numbers.SVG_WIDTH} height={Numbers.SVG_HEIGHT}>
              <path
                d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"
                fill={Numbers.SVG_FILL_COLOR}
              />
              <path
                opacity={Numbers.OPACITY}
                d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"
                fill={Numbers.SVG_FILL_COLOR}
              />
            </svg>{' '}
            Unlock new privileges like voting and commenting
          </ContentDiv>
          <ContentDiv>
            <svg width={Numbers.SVG_WIDTH} height={Numbers.SVG_HEIGHT}>
              <path
                d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"
                fill={Numbers.SVG_FILL_COLOR}
              />
              <path
                opacity={Numbers.OPACITY}
                d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"
                fill={Numbers.SVG_FILL_COLOR}
              />
            </svg>{' '}
            Save your favorite questions, answers, watch tags, and more
          </ContentDiv>
          <ContentDiv>
            <svg width={Numbers.SVG_WIDTH} height={Numbers.SVG_HEIGHT} viewBox="0 0 20 18">
              <path
                d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z"
                fill={Numbers.SVG_FILL_COLOR}
              />
            </svg>{' '}
            Earn reputation and badges
          </ContentDiv>
          <Addition>
            Collaborate and share knowledge with a private group for FREE. <br />
            <LinkStyle>Get Stack Overflow for Teams free for up to 50 users.</LinkStyle>{' '}
          </Addition>
        </LeftSection>
        <RightSection>
          <OAuthArea>
            <OAuthButton
              IconUrl={OAuth.GOOGLE.ICONURL}
              title={OAuth.GOOGLE.SIGNUP}
              color={OAuth.GOOGLE.COLOR}
              hovercolor={OAuth.GOOGLE.HOVER_COLOR}
              fontcolor={OAuth.GOOGLE.FONT_COLOR}
            />
            <OAuthButton
              IconUrl={OAuth.GITHUB.ICONURL}
              title={OAuth.GITHUB.SIGNUP}
              color={OAuth.GITHUB.COLOR}
              hovercolor={OAuth.GITHUB.HOVER_COLOR}
            />
          </OAuthArea>
          <Form onSubmit={handleSubmit}>
            <FormInput
              title="Display name"
              type="text"
              ref={refName}
              isValid={validObj.isValidName}
              warningText={validObj.validNameText}
            />
            <FormInput
              title="Email"
              type="text"
              ref={refEmail}
              isValid={validObj.isValidEmail}
              warningText={validObj.validEmailText}
            />
            <FormInput
              title="Password"
              type="password"
              ref={refPw}
              isValid={validObj.isValidPassword}
              warningText={validObj.validPasswordText}
            />
            <Addition>
              Passwords must contain at least eight characters, including at least 1 letter and 1
              number.
            </Addition>
            <Button type="submit">Sign up</Button>
            <Addition>
              By clicking “Sign up”, you agree to our{' '}
              <LinkStyle
                href="https://stackoverflow.com/legal/terms-of-service/public"
                target="_blank"
                rel="noopener noreferrer"
              >
                terms of service
              </LinkStyle>{' '}
              and acknowledge that you have read and understand our{' '}
              <LinkStyle
                href="https://stackoverflow.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy policy
              </LinkStyle>{' '}
              and{' '}
              <LinkStyle
                href="https://stackoverflow.com/conduct"
                target="_blank"
                rel="noopener noreferrer"
              >
                code of conduct
              </LinkStyle>
              .
            </Addition>
          </Form>
          <BottomQuestion>
            Already have an account?
            <LinkStyle href="http://localhost:5173/auth/login"> Log in</LinkStyle>
          </BottomQuestion>
          <BottomQuestion>
            Are you an employer?<LinkStyle href=""> Sign up on Talent</LinkStyle>
          </BottomQuestion>
        </RightSection>
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
  gap: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftSection = styled.section`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

const RightSection = styled.section`
  width: 18rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomQuestion = styled.div`
  font-size: 0.8rem;
`;

const Addition = styled.p`
  font-size: 0.8rem;
  color: #6a737c;
`;

const LinkStyle = styled.a`
  color: #0374cc;
`;

const TitleDiv = styled.h1`
  font-weight: 400;
  font-size: 2rem;
`;

const ContentDiv = styled.div`
  font-weight: 400;
  gap: 0.5rem;
  display: flex;
  align-items: center;
`;

export default SignUpPage;
