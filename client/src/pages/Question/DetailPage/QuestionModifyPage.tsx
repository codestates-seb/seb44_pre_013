import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Quill from '../../../components/quill/Quill';
import { IQuestionsData } from '../../../types/question';
import { getQuestionAPI, modifyQuestionAPI } from '../../../apis/questionApi';
import { Input } from '../../../components/ui/input/Input';
import Label from '../../../components/ui/label/Label';
import CustomButton from '../../../components/ui/buttons/CustomButton';

const QuestionModifyPage = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState<IQuestionsData | null>(null);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tags, setTags] = useState<string>('');

  const handleUpdateTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleUpdateContent = (value: string) => {
    setContent(value);
  };

  const handleUpdateTags = (e: ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  };

  const handleModifyQuestionSubmit = () => {
    const data = {
      title,
      content: `${content}myQuestionsTags:${tags}`,
    };
    modifyQuestionAPI(questionId, data)
      .then((response) => {
        if (response) {
          navigate(`/questions/${questionId}`);
        }
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  useEffect(() => {
    getQuestionAPI(questionId)
      .then((response) => {
        if (response) {
          const data = response.data;
          setQuestion(data);
          setTitle(data?.title);
          setContent(data?.content.split('myQuestionsTags:')[0]);
          setTags(data?.content.split('myQuestionsTags:')[1]);
        }
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  }, [questionId]);

  return (
    <Container>
      <FormWrapper>
        <Label htmlFor="title" content="Title" type="title" />
        <Input
          id="title"
          padding="0.563rem"
          focusmode="true"
          value={title}
          onChange={handleUpdateTitle}
        />
      </FormWrapper>
      <FormWrapper>
        <Label htmlFor="content" content="Body" type="title" />
        <Quill width="100%" height="50vh" value={content} onChange={handleUpdateContent} />
      </FormWrapper>
      <FormWrapper>
        <Label htmlFor="tags" content="Tags" type="title" />
        <Input
          id="tags"
          padding="0.563rem"
          focusmode="true"
          value={tags}
          onChange={handleUpdateTags}
        />
      </FormWrapper>
      <ButtonWrapper>
        <CustomButton content="save edits" onClick={handleModifyQuestionSubmit} />
        <CustomButton
          content="Cancel"
          $backgroundcolor="#F8F9F9"
          $color="#0b95ff"
          onClick={() => navigate(`/questions/${questionId}`)}
        />
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  & > div:nth-child(2) > div {
    margin-top: 0.7rem;
  }
`;

const FormWrapper = styled.div`
  margin-bottom: 1.5rem;
  & > input {
    margin-top: 0.7rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
`;
export default QuestionModifyPage;
