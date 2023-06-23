import { PropsWithChildren } from 'react';
import { styled, css } from 'styled-components';
interface IProps {
  title: string;
  $marginTop?: string;
  $theme?: string;
}

const Tooltip = ({ title, $marginTop, $theme, children }: PropsWithChildren<IProps>) => {
  return (
    <Container $marginTop={$marginTop} $theme={$theme}>
      <TitleBox $theme={$theme}>
        <p>{title}</p>
      </TitleBox>
      <ContentBox $theme={$theme}>{children}</ContentBox>
    </Container>
  );
};

const Container = styled.div<{
  $marginTop?: string;
  $theme?: string;
}>`
  margin-top: ${(props) => props.$marginTop && `${props.$marginTop}px`};
  width: ${(props) => (props.$theme === 'light' ? '18.75rem' : '100%')};
  & > div {
    padding: 1rem;
  }
  & > div:first-child {
    border-bottom: none;
  }
`;

const TitleBox = styled.div<{ $theme?: string }>`
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
  ${(props) =>
    props.$theme === 'dark'
      ? css`
          background-color: #f8f9f9;
          border: 1px solid #d6d8dc;
        `
      : css`
          color: #525960;
          font-size: 0.75rem;
          font-weight: bold;
          background-color: #fbf3d5;
          border: 0.075rem solid#F1E5BC;
        `}
`;

const ContentBox = styled.div<{
  $theme?: string;
  $marginBottom?: boolean;
}>`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${(props) =>
    props.$theme === 'dark'
      ? css`
          background-color: #f8f9f9;
          border: 1px solid #d6d8dc;
        `
      : css`
          color: #3b4045;
          font-size: 0.813rem;
          background-color: #fdf7e2;
          border: 0.075rem solid #f1e5bc;
        `}
`;

export default Tooltip;
