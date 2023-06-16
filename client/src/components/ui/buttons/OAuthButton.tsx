import { styled } from 'styled-components';
import { Button } from './Button';

interface PropsType {
  title: string;
  iconUrl?: string;
  color?: string;
  hoverColor?: string;
  fontColor?: string;
}

const OAuthButton = ({ iconUrl, title, color, hoverColor, fontColor }: PropsType) => {
  return (
    <Button color={color} hoverColor={hoverColor} fontColor={fontColor}>
      <Img src={iconUrl} />
      {title}
    </Button>
  );
};

const Img = styled.img`
  width: 1rem;
  margin-right: 4px;
`;

export default OAuthButton;
