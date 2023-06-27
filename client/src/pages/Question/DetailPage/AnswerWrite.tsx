import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';

import Quill from '../../../components/quill/Quill';
import CustomButton from '../../../components/ui/buttons/CustomButton';
import { RootState } from '../../../store/store';
import { getAllAnswer } from '../../../store/answerSlice';
import { createAnswerAPI, getAllAnswerAPI } from '../../../apis/answerApi';

interface IProps {
  questionId: string | undefined;
}

const AnswerWrite = ({ questionId }: IProps) => {
  const dispatch = useDispatch();
  const { memberId } = useSelector((state: RootState) => state.login);
  const [content, setContent] = useState('');

  const handleUpdateContent = (value: string) => {
    setContent(value);
  };

  const handleCreateAnswerSubmit = () => {
    const data = {
      memberId,
      questionId,
      content,
    };
    createAnswerAPI(data)
      .then((response) => {
        if (response) {
          getAllAnswerAPI().then((response) => {
            const { data } = response;
            dispatch(getAllAnswer({ data }));
          });
          setContent('');
        }
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  return (
    <Container>
      <Title>Your Answer</Title>
      <Quill width="90%" value={content} onChange={handleUpdateContent} />
      <CustomButton onClick={handleCreateAnswerSubmit} content="Post Your Answer" width="9rem" />
    </Container>
  );
};

const Container = styled.div`
  & > button {
    margin-top: 2rem;
  }
`;

const Title = styled.h3`
  margin: 1.25rem 0;
  font-weight: 500;
`;

export default AnswerWrite;
