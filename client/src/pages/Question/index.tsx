import styled from 'styled-components';

import WriteForm from './WriteForm';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: palegoldenrod;
`;

const Question = () => {
  return (
    <Container>
      왼쪽 영역
      <div>
        <WriteForm />
      </div>
      <div>오른쪽 영역</div>
    </Container>
  );
};

export default Question;
