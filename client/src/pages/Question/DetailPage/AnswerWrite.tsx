import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { styled } from 'styled-components';

import Quill from '../../../components/quill/Quill';
import CustomButton from '../../../components/ui/buttons/CustomButton';
import { config } from '../../../utils/axiosConfig';
import { RootState } from '../../../store/store';
import { getAllAnswer } from '../../../store/answerSlice';

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
    // 댓글 추가 로직 작성하기
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/answers`, data, config)
      .then((response) => {
        if (response) {
          axios.get(`${import.meta.env.VITE_SERVER_URL}/answers`).then((response) => {
            const { data } = response;
            dispatch(getAllAnswer({ data }));
          });
          setContent('');
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Container>
      <Title>Your Answer</Title>
      <Quill width="100%" value={content} onChange={handleUpdateContent} />
      <CustomButton onClick={handleCreateAnswerSubmit} content="Post Your Answer" width="9rem" />
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h3`
  margin: 1.25rem 0;
  font-weight: 500;
`;

export default AnswerWrite;
