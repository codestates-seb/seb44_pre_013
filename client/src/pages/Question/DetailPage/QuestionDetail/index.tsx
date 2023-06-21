import styled from 'styled-components';

import Voting from '../Voting';
import Post from '../Post';

const QuestionDetailContainer = () => {
  return (
    <Container>
      <Voting />
      <Post />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0 1rem 0 0;
`;

export default QuestionDetailContainer;
