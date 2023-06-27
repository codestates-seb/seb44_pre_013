import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Quill from '../../../components/quill/Quill';
import { IAnswer } from '../../../types/answer';
import { deleteAnswer, modifyAnswer } from '../../../store/answerSlice';
import { deleteAnswerAPI, modifyAnswerAPI } from '../../../apis/answerApi';

interface IProps {
  answer: IAnswer;
}

const Answer = ({ answer }: IProps) => {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateAnswerId, setUpdateAnswerId] = useState('');
  const [writeContent, setContent] = useState(answer.content);

  const { content, createdAt, modifiedAt } = answer;

  const handleUpdate = (answerId: string) => {
    setUpdateAnswerId(answerId);
    setIsUpdate(!isUpdate);
  };

  const handleContentUpdate = (value: string) => {
    setContent(value);
  };

  const handleDeleteAnswer = () => {
    deleteAnswerAPI(answer.answerId)
      .then((response) => {
        dispatch(deleteAnswer(answer.answerId));
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  const handleUpdateAnswer = () => {
    const data = {
      content: writeContent,
    };
    modifyAnswerAPI(answer.answerId, data)
      .then((response) => {
        if (response) {
          dispatch(modifyAnswer(response.data));
          handleUpdate(`${answer.answerId}`);
        }
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  return (
    <Container>
      <ContentWrapper>
        {!isUpdate && <div dangerouslySetInnerHTML={{ __html: `${content}` }} />}
      </ContentWrapper>
      <ProfileWrapper>
        <PostMenuWrapper>
          <button>Share</button>
          <button onClick={() => handleUpdate(`${answer.answerId}`)}>
            {isUpdate ? 'Cancel' : 'Edit'}
          </button>
          <button onClick={handleDeleteAnswer}>Delete</button>
          {+updateAnswerId === answer.answerId && isUpdate && (
            <Quill
              value={writeContent}
              onChange={handleContentUpdate}
              width="100%"
              height="10rem"
            />
          )}
          {isUpdate && (
            <AnswerModifySubmit onClick={handleUpdateAnswer}>수정 등록하기</AnswerModifySubmit>
          )}
        </PostMenuWrapper>
        <PostSignatureWrapper>
          <Time>answered {createdAt.split('T')[0]}</Time>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0;
`;

const ContentWrapper = styled.div`
  margin: 0.813rem 0 0;
  & > div > p {
    margin-bottom: 1.031rem;
    & > span {
      color: #0074cc;
      cursor: pointer;
    }
  }
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
    height: 2rem;
    border-radius: 0.2rem;
  }
`;

const Time = styled.span`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  color: #0074cc;
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

const Badge = styled.span<{ color?: string }>`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.color ? props.color : '#2c5877')};
`;

const EditCommentBtn = styled.div`
  font-size: 0.813rem;
  margin: 0 0.188rem 0.125rem;
  color: #0074cc;
  &:hover {
    color: #0a95ff;
    cursor: pointer;
  }
`;

const AnswerModifySubmit = styled.button`
  margin-top: 2.4rem;
  &:hover {
    color: #0a95ff;
  }
`;

export default Answer;
