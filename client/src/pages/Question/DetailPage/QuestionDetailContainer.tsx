import styled from 'styled-components';

import Voting from './Vote';
import Question from './Question';
import { Line } from './QuestionHeader';
interface IProps {
  questionId: string | undefined;
}

const QuestionDetailContainer = ({ questionId }: IProps) => {
  return (
    <>
      <Container>
        <Voting />
        <Question questionId={questionId} />
      </Container>
      <Line />
    </>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0 1rem 0 0;
  margin-bottom: 2rem;
`;

export default QuestionDetailContainer;
