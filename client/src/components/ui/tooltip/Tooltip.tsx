import { styled, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import { DataType } from '../../../pages/Question/DetailPage/SidebarWidget';
import { typeGuard } from '../../../util/typeGuard';

interface IProps {
  title: string;
  subtitle?: string;
  content?: string | DataType[];
  $marginTop?: string;
  $theme: string;
  icon?: IconDefinition | DataType[];
  size?: SizeProp;
}

const Tooltip = ({ title, subtitle, content, $marginTop, $theme, icon, size }: IProps) => {
  const renderContent = () => {
    if (typeGuard<DataType[]>(content)) {
      return (
        <ContentBox $theme={$theme} $marginBottom={false} $list={true}>
          {content?.map((item: DataType, idx: number) => {
            return (
              <Item key={idx} $postId={item.postId}>
                {item.icon && <FontAwesomeIcon icon={item.icon} size={size} />}
                <span>{item.postId}</span>
                <div>
                  <p>{item.content}</p>
                </div>
              </Item>
            );
          })}
        </ContentBox>
      );
    } else {
      return (
        <ContentBox $theme={$theme} $marginBottom={true} $list={false}>
          <FontAwesomeIcon icon={icon as IconDefinition} size={size} />
          <div>
            <p>{subtitle}</p>
            <p>{content}</p>
          </div>
        </ContentBox>
      );
    }
  };

  return (
    <Container $marginTop={$marginTop} $theme={$theme}>
      <TitleBox $theme={$theme}>
        <p>{title}</p>
      </TitleBox>
      {renderContent()}
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

const ContentBox = styled.div<{ $theme?: string; $marginBottom: boolean; $list: boolean }>`
  display: flex;
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
  ${(props) =>
    props.$list &&
    css`
      display: flex;
      flex-direction: column;
      & > div > div {
        margin-left: 0.5rem;
      }
    `}
  & > :first-child {
    margin-right: 1rem;
  }
  & > :last-child > :first-child {
    margin-bottom: ${(props) => props.$theme === 'dark' && props.$marginBottom && '0.5rem'};
  }
`;

const Item = styled.div<{ $postId?: number }>`
  display: flex;
  ${(props) =>
    props.$postId &&
    css`
      & > span {
        min-width: 1rem;
      }
      margin: 0.35rem 0;
    `}
`;

export default Tooltip;
