import { useEffect, useState } from 'react';

import { Button } from '../components/ui/buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import axios from 'axios';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

const PageContainer = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 200px 0px 2px;
`;

const MainPageContainer = styled.div`
  width: 680px;
  padding: 0px 0px 0px 28px;
  margin: 30px auto 0;
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

const MainTopButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MainTopButton = styled.button<MainTopButtons & activebutton>`
  cursor: pointer;
  padding: 8px;
  margin: 0;
  color: rgb(106, 115, 124);
  border: 1px solid rgb(159, 166, 173);
  font-weight: 300;
  font-size: 13px;
  border-radius: ${(props) => props.borderradius || '0'};

  &:hover {
    background-color: rgb(227, 230, 232);
    color: rgb(82, 89, 96);
  }
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

const MainFilterText = styled.span`
  margin-left: 8px;
`;

const QuestionContainer = styled.div`
  width: 680px;
  padding: 16px;
  display: flex;
  border-top: 1px solid rgb(227, 230, 232);
  margin: 0 auto;
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

const QuestionsContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

const QuestionContentContainer = styled.div`
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
  justify-content: space-between;
`;

const TagUserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TagContainer = styled.div`
  cursor: pointer;
  display: flex;
  width: 63px;
  height: 27px;
  padding: 6px;
  font-size: 11px;
  background-color: rgb(225, 236, 244);
  color: rgb(57, 115, 157);
  border-radius: 4px;
`;

const UserContainer = styled.div`
  display: flex;
  font-size: 13px;
  margin-left: auto;
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

const PageNationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 45px 0;
  padding-left: 24px;
  font-size: 13px;
  color: rgb(59, 64, 70);
  .pagination {
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      border: 1px solid rgb(214, 217, 220);
      height: 28px;
      border-radius: 3px;
      margin: 0 3px;
      padding: 0 8px;
      background-color: rgb(255, 255, 255);
      &:hover {
        background-color: rgb(213, 217, 220);
      }
      &:active {
        background-color: rgb(244, 130, 37);
        a {
          cursor: pointer;
          color: rgb(255, 255, 255);
        }
      }
    }
  }
`;

const StylePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 200px;
`;

const StylePageButton = styled.div<activebutton>`
  display: flex;
  align-items: center;
  border: 1px solid rgb(214, 217, 220);
  height: 28px;
  border-radius: 3px;
  margin: 0 3px;
  padding: 0 8px;
  font-size: 13px;
  color: rgb(59, 64, 70);
  background-color: ${(props) =>
    props.activebutton ? 'rgb(244, 130, 37);' : 'rgb(255, 255, 255);'};
  &:hover {
    background-color: ${(props) =>
      props.activebutton ? 'rgb(244, 130, 37);' : 'rgb(213, 217, 220);'};
  }
`;

interface MainTopButtons {
  borderradius?: string;
}

interface activebutton {
  activebutton?: boolean;
}

interface IQuestion {
  questionId: number;
  memberId: number;
  title: string;
  content: string;
  votes: number;
  answers: number;
  views: number;
  tags: string;
  name: string;
  createdAt: string;
}

const BeforeLoginMainPage: React.FC = () => {
  const [allQuestion, setAllQuestion] = useState<IQuestion[]>([]);
  const [pageNationData, setPageNationData] = useState({ totalElements: 0 });
  const [activePage, setActivePage] = useState(1);
  const [activePageItemButton, setActivePageItemButton] = useState(15);

  const handlePageItemClick = (buttonNumber: number) => {
    setActivePageItemButton(buttonNumber);
  };

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/questions`, {
        params: {
          page: activePage,
          size: activePageItemButton,
        },
      });
      const { data, pageInfo } = response.data;
      console.log(data);
      console.log(pageInfo);
      setAllQuestion(data);
      setPageNationData(pageInfo);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activePage, activePageItemButton]);

  return (
    <PageContainer>
      <MainPageContainer>
        <MainTopTitle>
          <h1>All Questions</h1>
          <MainRightContainer>
            <Link to="/questions">
              <Button>Ask Question</Button>
            </Link>
          </MainRightContainer>
        </MainTopTitle>

        <MainFilterContainer>
          <p>{pageNationData.totalElements} questions</p>
          <MainTopButtons>
            <MainTopButton borderradius="4px 0 0 4px">Newest</MainTopButton>
            <MainTopButton>Active</MainTopButton>
            <MainTopButton>Bountied</MainTopButton>
            <MainTopButton>Unanswered</MainTopButton>
            <MainTopButton borderradius="0 4px 4px 0">More</MainTopButton>
            <MainFilterButton>
              <FontAwesomeIcon icon={faFilter} style={{ color: 'rgb(10, 149, 255)' }} />
              <MainFilterText>Filter</MainFilterText>
            </MainFilterButton>
          </MainTopButtons>
        </MainFilterContainer>
      </MainPageContainer>

      <QuestionsContainer>
        {allQuestion.map((question) => (
          <QuestionContainer key={question.questionId}>
            <QuestionCount>
              <p>{question.votes}votes</p>
              <p>{question.answers}</p>
              <p>{question.views}</p>
            </QuestionCount>
            <Question>
              <div>{question.title}</div>
              <QuestionContentContainer>
                <h3>{question.content}</h3>
              </QuestionContentContainer>
              <QuestionBottom>
                <TagUserContainer>
                  <TagContainer>{question.tags}</TagContainer>
                  <UserContainer>
                    <a>{question.name}</a>
                    <span>asked {question.createdAt}</span>
                  </UserContainer>
                </TagUserContainer>
              </QuestionBottom>
            </Question>
          </QuestionContainer>
        ))}
      </QuestionsContainer>

      <PageNationContainer>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={15}
          totalItemsCount={pageNationData.totalElements}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
        <StylePageContainer>
          <StylePageButton
            style={{
              backgroundColor:
                activePageItemButton === 15 ? 'rgb(244, 130, 37)' : 'rgb(255, 255, 255)',
            }}
            onClick={() => handlePageItemClick(15)}
          >
            15
          </StylePageButton>
          <StylePageButton
            style={{
              backgroundColor:
                activePageItemButton === 30 ? 'rgb(244, 130, 37)' : 'rgb(255, 255, 255)',
            }}
            onClick={() => handlePageItemClick(30)}
          >
            30
          </StylePageButton>
          <StylePageButton
            style={{
              backgroundColor:
                activePageItemButton === 50 ? 'rgb(244, 130, 37)' : 'rgb(255, 255, 255)',
            }}
            onClick={() => handlePageItemClick(50)}
          >
            50
          </StylePageButton>
          <p style={{ margin: '0 6px' }}>per page</p>
        </StylePageContainer>
      </PageNationContainer>
    </PageContainer>
  );
};

export default BeforeLoginMainPage;
