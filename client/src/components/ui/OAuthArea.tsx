import { styled } from 'styled-components';

interface Props {
  children: JSX.Element[];
}

const OAuthArea = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export default OAuthArea;
