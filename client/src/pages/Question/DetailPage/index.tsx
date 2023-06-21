import styled from 'styled-components';

import QuestionHeader from './QuestionHeader';
import QuestionDetailContainer from './QuestionDetail';
import AnswerDetailContainer from './AnswerDetail';
import SideWidget from './SidebarWidget';

const QuestionDetail = () => {
  return (
    <Container>
      <QuestionHeader />
      <MainContainer>
        <MainQuestionBar>
          <QuestionDetailContainer />
          <AnswerDetailContainer />
        </MainQuestionBar>
        <SideQuestionBar>
          <SideWidget />
        </SideQuestionBar>
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 1.5rem;
`;

const MainContainer = styled.main`
  padding: 1rem;
  display: flex;
`;

const MainQuestionBar = styled.div`
  flex: 3.5;
`;

const SideQuestionBar = styled.div`
  flex: 1.3;
`;

export default QuestionDetail;
