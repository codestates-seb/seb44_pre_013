import styled from 'styled-components';

import Voting from '../Voting';
import Answer from '../Answer';

const AnswerDetailContainer = () => {
  return (
    <Container>
      <AnswerWrapper>
        <Voting />
        <Answer />
      </AnswerWrapper>
      <AnswerWrapper>
        <Voting />
        <Answer />
      </AnswerWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
`;

const AnswerWrapper = styled.div`
  display: flex;
`;

export default AnswerDetailContainer;
