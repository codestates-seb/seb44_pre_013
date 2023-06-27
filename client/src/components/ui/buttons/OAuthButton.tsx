import { styled } from 'styled-components';
import { Button } from './Button';

interface PropsType {
  title: string;
  IconUrl?: string;
  color?: string;
  hovercolor?: string;
  fontcolor?: string;
}

const OAuthButton = ({ IconUrl, title, color, hovercolor, fontcolor }: PropsType) => {
  return (
    <Button color={color} hovercolor={hovercolor} fontcolor={fontcolor}>
      <Img src={IconUrl} />
      {title}
    </Button>
  );
};

const Img = styled.img`
  width: 1rem;
  margin-right: 4px;
`;

export default OAuthButton;
