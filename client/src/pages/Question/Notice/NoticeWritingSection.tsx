import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

interface IProps {
  title: string;
  subtitle?: string;
  content?: string;
  margintop?: string;
}

const NoticeWritingSection = ({ title, subtitle, content, margintop }: IProps) => {
  return (
    <Container margintop={margintop}>
      <TitleBox>
        <p>{title}</p>
      </TitleBox>
      <ContentBox>
        <FontAwesomeIcon icon={faPencil} size="2xl" />
        <div>
          <p>{subtitle}</p>
          <p>{content}</p>
        </div>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div<{
  margintop?: string;
}>`
  margin-top: ${(props) => `${props.margintop}px` || '400px'};
  width: 100%;
  height: 10.25rem;
  & > div {
    padding: 1rem;
  }
  & > div:first-child {
    border-bottom: none;
  }
`;

const TitleBox = styled.div`
  font-weight: 500;
  background-color: #f8f9f9;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
  border: 1px solid #d6d8dc;
`;

const ContentBox = styled.div`
  display: flex;
  font-size: 0.9rem;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 1px solid #d6d8dc;
  & > :first-child {
    margin-right: 1rem;
  }
  & > :last-child > :first-child {
    margin-bottom: 1rem;
  }
`;

export default NoticeWritingSection;
