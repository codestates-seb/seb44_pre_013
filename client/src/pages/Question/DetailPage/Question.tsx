import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { IQuestionsData } from '../../../types/question';
import { RootState } from '../../../store/store';
import { deleteQuestionAPI, getQuestionAPI } from '../../../apis/questionApi';
interface IProps {
  questionId: string | undefined;
}

const Question = ({ questionId }: IProps) => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState<IQuestionsData | null>(null);
  const [renderedHTML, tags] = question?.content
    ? question?.content?.split('myQuestionsTags:')
    : [];
  const { memberId: loginMemberId } = useSelector((state: RootState) => state.login);

  const handleQuestionDelete = () => {
    deleteQuestionAPI(questionId).then(() => {
      navigate('/');
    });
  };

  useEffect(() => {
    getQuestionAPI(questionId)
      .then((response) => {
        if (response) {
          setQuestion(response.data);
        }
      })
      .catch((error) => alert(error));
  }, [questionId]);

  return (
    <Container>
      <title style={{ marginTop: '3rem' }}>{question?.title}</title>
      <ContentWrapper>{<div dangerouslySetInnerHTML={{ __html: renderedHTML }} />}</ContentWrapper>
      <TagWrapper>
        {tags?.split(',').map((tag: string, idx: number) => (
          <Tag key={idx}>{tag}</Tag>
        ))}
      </TagWrapper>
      <ProfileWrapper>
        <PostMenuWrapper>
          <button>Share</button>
          {loginMemberId === question?.memberId && (
            <button onClick={() => navigate(`/questions/modify/${questionId}`)}>Edit</button>
          )}
          {loginMemberId === question?.memberId && (
            <button onClick={handleQuestionDelete}>Delete</button>
          )}
          <button>Follow</button>
        </PostMenuWrapper>
        <PostSignatureWrapper>
          <Time>asked Jun 2 at 20:03</Time>
          <div>
            <img src="https://source.unsplash.com/random/32x32/?person" alt="profile img" />
            <UserDetailWrapper>
              <UserName>nickname</UserName>
              <div>
                <span>
                  <strong>701</strong>
                </span>
                <span>
                  <Badge color="#ffcc00" /> 1
                </span>
                <span>
                  <Badge color="#9fa6ad" /> 3
                </span>
                <span>
                  <Badge color="#b6704b" /> 7
                </span>
              </div>
            </UserDetailWrapper>
          </div>
        </PostSignatureWrapper>
      </ProfileWrapper>
      <AddCommentBtn>Add a comment</AddCommentBtn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 2rem;
`;

const ContentWrapper = styled.div`
  margin: 0.813rem 0 0;
  & > div > p {
    margin-bottom: 1.031rem;
  }
`;

const TagWrapper = styled.div`
  margin: 0.813rem 0;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 0.25rem 0 0;
`;

const PostMenuWrapper = styled.div`
  & > * {
    color: #838c95;
    font-size: 0.813rem;
    margin-right: 0.5rem;
  }
`;

const PostSignatureWrapper = styled.div`
  background-color: #d9eaf7;
  color: #6a737c;
  width: 12.5rem;
  padding: 0.313rem 0.375rem 0.438rem 0.438rem;
  font-size: 0.813rem;
  border-radius: 0.2rem;
  & > div {
    display: flex;
    margin: 0.5rem 0 0.2rem;
  }
  & > div > img {
    border-radius: 0.2rem;
  }
`;

const Time = styled.span`
  font-size: 0.75rem;
`;

const UserName = styled.span`
  color: #0074cc;
  font-size: 0.813rem;
`;

const UserDetailWrapper = styled.div`
  margin-left: 0.5rem;
  & > div > span {
    margin: 0 0.188rem 0 0.125rem;
  }
`;

const Tag = styled.span`
  color: #39739d;
  background-color: #e1ecf4;
  margin: 0.125rem 0.325rem 0.125rem 0;
  padding: 0.3rem 0.375rem;
  font-size: 0.75rem;
  border-radius: 0.2rem;
  letter-spacing: 0.03rem;
  &:hover {
    color: #2c5877;
    background-color: #d0e3f1;
    cursor: pointer;
  }
`;

const Badge = styled.span<{ color?: string }>`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.color ? props.color : '#2c5877')};
`;

const AddCommentBtn = styled.div`
  font-size: 0.813rem;
  margin: 0 0.188rem 0.125rem;
  color: #838c95;
  &:hover {
    color: #0a95ff;
    cursor: pointer;
  }
`;

export default Question;
