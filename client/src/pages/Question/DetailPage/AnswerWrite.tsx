import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Quill from '../../../components/quill/Quill';
import CustomButton from '../../../components/ui/buttons/CustomButton';
import axios from 'axios';
import { config } from '../../../utils/axiosConfig';

const AnswerWrite = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  const handleUpdateContent = (value: string) => {
    setContent(value);
  };

  const handleCreateAnswerSubmit = () => {
    console.log(content);
    // 댓글 추가 로직 작성하기
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/questions/ask`, { data: content }, config)
      .then((response) => {
        if (response) {
          console.log(response);
          navigate('/questions');
        }
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
