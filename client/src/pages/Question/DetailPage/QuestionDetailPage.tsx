import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import QuestionHeader from './QuestionHeader';
import QuestionDetailContainer from './QuestionDetailContainer';
import AnswerDetailContainer from './AnswerDetailContainer';
import SideToolTip from '../../../components/ui/tooltip/SideToolTip';

const QuestionDetailPage = () => {
  const { questionId } = useParams();

  return (
    <Container>
      <QuestionHeader />
      <MainContainer>
        <MainQuestionBar>
          <QuestionDetailContainer questionId={questionId} />
          <AnswerDetailContainer />
        </MainQuestionBar>
        <SideQuestionBar>
          <SideToolTip />
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
export default QuestionDetailPage;
