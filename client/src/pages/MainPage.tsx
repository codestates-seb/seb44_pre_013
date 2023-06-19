import { Button } from '../components/ui/buttons/Button';
import { styled } from 'styled-components';

const MainPageContainer = styled.div`
  padding: 24px;
`;

const MainTopTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  margin-bottom: 12px;
  > h1 {
    font-size: 27px;
    font-weight: 400;
  }
`;

const MainRightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainFilterBtnGather = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

const MainFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  > p {
    font-size: 17px;
    color: rgb(35, 38, 41);
  }
`;

const MainTopButton = styled.div`
  cursor: pointer;
  padding: 6px;
  color: #6a737c;
  border: 1px solid rgb(159, 166, 173);
  margin: 0;
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
          <MainFilterBtnGather>
            <MainTopButton>Newest</MainTopButton>
            <MainTopButton>Active</MainTopButton>
            <MainTopButton>Bountied</MainTopButton>
            <MainTopButton>Unanswered</MainTopButton>
            <MainTopButton>More</MainTopButton>
          </MainFilterBtnGather>
        </MainFilterContainer>
      </MainPageContainer>
    </div>
  );
};

export default MainPage;
