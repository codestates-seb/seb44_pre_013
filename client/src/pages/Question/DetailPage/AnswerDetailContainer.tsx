import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { IAnswer } from '../../../types/answer';
import { getAllAnswer } from '../../../store/answerSlice';
import { RootState } from '../../../store/store';
import Voting from './Vote';
import Answer from './Answer';
import AnswerWrite from './AnswerWrite';
import { getAllAnswerAPI } from '../../../apis/answerApi';

const AnswerDetailContainer = () => {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const { data } = useSelector((state: RootState) => state.answers);

  const handleAnswerRender = () => {
    return data?.map((answer: IAnswer, idx: number) => (
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
    getAllAnswerAPI().then((response) => {
      const { data } = response;
      dispatch(getAllAnswer({ data }));
    });
  }, []);

  return (
    <Container>
      <Title>{data.length} Answers</Title>
      {handleAnswerRender()}
      <AnswerWrite questionId={questionId} />
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
