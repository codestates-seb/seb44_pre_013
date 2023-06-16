import { styled } from 'styled-components';
import OAuthButton from './buttons/OAuthButton';
import { OAuth } from '../../constants/OAuth';

const OAuthArea = () => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export default OAuthArea;
