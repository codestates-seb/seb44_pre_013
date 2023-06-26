import styled from 'styled-components';
import { IAnswer } from '../../../types/answer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

interface IProps {
  answer: IAnswer;
}

const Answer = ({ answer }: IProps) => {
  const { isLogin } = useSelector((state: RootState) => state.login);
  console.log(answer);
  const { content, createdAt, modifiedAt } = answer;

  return (
    <Container>
      <ContentWrapper>
        <div>{content}</div>
      </ContentWrapper>
      <ProfileWrapper>
        <PostMenuWrapper>
          <button>Share</button>
          {isLogin && <button>Edit</button>}
          <button>Follow</button>
        </PostMenuWrapper>
        {/* <Time>answered Jun 2 at 10:07</Time> */}
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
export default Answer;
