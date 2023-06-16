import styled from 'styled-components';

import WriteForm from './WriteForm';

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: palegoldenrod;
`;

const Question = () => {
  return (
    <Container>
      <WriteForm />
    </Container>
  );
};

export default Question;
