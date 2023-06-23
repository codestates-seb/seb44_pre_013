import styled from 'styled-components';

import Voting from './Vote';
import Question from './Question';

const QuestionDetailContainer = () => {
  return (
    <Container>
      <Voting />
      <Question />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0 1rem 0 0;
`;

export default QuestionDetailContainer;
