import { Button } from '../components/ui/buttons/Button';
import { styled } from 'styled-components';

const MainPageContainer = styled.div`
  padding: 24px 24px 0px 24px;
`;

const MainTopTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  > h1 {
    font-size: 27px;
    font-weight: 400;
  }
`;

const MainRightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainTopBtnGather = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

const MainFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > p {
    font-size: 17px;
    color: rgb(35, 38, 41);
  }
`;

const MainTopButton = styled.div`
  cursor: pointer;
  padding: 9.6px;
  margin: 0;
  color: #6a737c;
  border: 1px solid rgb(159, 166, 173);
  font-weight: 300;
  font-size: 13px;
  &:hover {
    background-color: #e3e6e8;
    color: #525960;
  }
`;

const MainFilterButton = styled.div`
  cursor: pointer;
  margin: 15px 0px 15px 15px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid rgb(159, 166, 173);
  background-color: rgb(225, 236, 244);
  color: rgb(57, 115, 157);
  font-weight: 300;
  font-size: 13px;
`;

const QuestionContainer = styled.div`
  padding: 16px;
  display: flex;
  border-top: 1px solid rgb(227, 230, 232);
`;

const QuestionCount = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 108px;
  text-align: right;
  margin: 0 16px 4px 0;
  > p {
    padding-bottom: 10px;
    font-size: 13px;
  }
`;

const Question = styled.div`
  width: 100%;
  white-space: normal;
  text-decoration: none;
  color: rgb(0, 116, 204);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  > div {
    margin: -2px 0 5px 0;
    white-space: normal;
    text-decoration: none;
    color: rgb(0, 116, 204);
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

const QuestionTextContainer = styled.div`
  > div {
    max-height: 73px;
    white-space: normal;
    font-size: 13px;
    margin-bottom: 4px;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: rgb(82, 89, 96);
  }
`;

const QuestionBottom = styled.div`
  display: flex;
  align-items: center;
`;

const TagContainer = styled.div`
  cursor: pointer;
  display: flex;
  width: 70px;
  height: 30px;
  padding: 6px;
  font-size: 12px;
  background-color: rgb(225, 236, 244);
  color: rgb(57, 115, 157);
  border-radius: 4px;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: right;
  font-size: 13px;
  a {
    cursor: pointer;
    margin: 0 5px;
    text-decoration: none;
    color: rgb(0, 116, 204);
  }
  span {
    margin: 0 2px;
    color: rgb(82, 89, 96);
  }
`;

const MainPage = () => {
  return (
    <div>
      <MainPageContainer>
        <MainTopTitle>
          <h1>All Questions</h1>
          <MainRightContainer>
            <Button>Ask Question</Button>
          </MainRightContainer>
        </MainTopTitle>

        <MainFilterContainer>
          <p>23,762,310 questions</p>
          <MainTopBtnGather>
            <MainTopButton>Newest</MainTopButton>
            <MainTopButton>Active</MainTopButton>
            <MainTopButton>Bountied</MainTopButton>
            <MainTopButton>Unanswered</MainTopButton>
            <MainTopButton>More</MainTopButton>
            <MainFilterButton>Filter</MainFilterButton>
          </MainTopBtnGather>
        </MainFilterContainer>
      </MainPageContainer>

      <QuestionContainer>
        <QuestionCount>
          <p>0 votes</p>
          <p>3 answers</p>
          <p>529 views</p>
        </QuestionCount>
        <Question>
          <div>How to return promise from fs.unlink</div>
          <QuestionTextContainer>
            <div>
              I want to delete a file and wait for the deletion to succeed before moving forward. I
              have used unlink function inside a promise to get the result, but when unlink done
              su...
            </div>
          </QuestionTextContainer>
          <QuestionBottom>
            <TagContainer>typeScript</TagContainer>
            <UserContainer>
              <a>Ella</a>
              <span>asked 20 secs ago</span>
            </UserContainer>
          </QuestionBottom>
        </Question>
      </QuestionContainer>
    </div>
  );
};

export default MainPage;
