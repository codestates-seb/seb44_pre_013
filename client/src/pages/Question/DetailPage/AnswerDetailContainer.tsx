import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Voting from './Vote';
import Answer from './Answer';
import { IAnswer } from '../../../types/answer';

const AnswerDetailContainer = () => {
  /**
   * 답변 가져오는 함수 useEffect 실행
   * 답변 가져와서 상태값 저장하고, render하기 (map 돌리기)
   */
  const [answers, setAnswers] = useState<IAnswer[] | null>(null);

  const handleAnswerRender = () => {
    return answers?.map((answer: IAnswer, idx: number) => (
      <div key={idx}>
        <AnswerWrapper key={idx}>
          <Voting />
          <Answer answer={answer} />
        </AnswerWrapper>
        <Line />
      </div>
    ));
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/answers`).then((response) => {
      const { data } = response;
      setAnswers(data.data);
    });
  }, []);

  return (
    <Container>
      <Title>5 Answers</Title>
      {handleAnswerRender()}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
`;

const Title = styled.h3`
  font-weight: 500;
`;

const AnswerWrapper = styled.div`
  display: flex;
`;

const Line = styled.div`
  border-bottom: 0.1rem solid #d6d8d8;
  margin: 0 0 1rem;
`;

export default AnswerDetailContainer;
