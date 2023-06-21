import { MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

import Tooltip from '../../../components/ui/tooltip/Tooltip';
import WriteProblemForm from './WriteProblemForm';
import NoticeWritingQuestion from './NoticeWritingQuestion';
import TitleForm from './TitleForm';
import WriteExpectForm from './WriteExpectingForm';
import Tags from './Tags';
import { DataType } from '../../../types/question';

const titleConten: DataType[] = [
  {
    icon: faPencil,
    size: '2xl',
    subtitle: 'Your title should summarize the problem.',
    content:
      'You might find that you have a better idea of your title after writing out the rest of the question',
  },
];

const problemConten: DataType[] = [
  {
    icon: faPencil,
    size: '2xl',
    subtitle:
      'Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.',
  },
];

const expandContent: DataType[] = [
  {
    icon: faPencil,
    size: '2xl',
    subtitle: 'Show what you’ve tried, tell us what happened, and why it didn’t meet your needs.',
    content:
      'Not all questions benefit from including code, but if your problem is better understood with code you’ve written, you should include a minimal, reproducible example.',
    subContent:
      'Please make sure to post code and errors as text directly to the question (and not as images), and format them appropriately.',
  },
];

const tagContent: DataType[] = [
  {
    icon: faPencil,
    size: '2xl',
    subtitle: 'Tags help ensure that your question will get attention from the right people.',
    content:
      'Tag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used.',
    subContent: 'Learn more about tagging',
  },
];

const QuestionPage = () => {
  const [selectSection, setSelectSection] = useState<string | undefined>('title-form');

  const handleChangeSection = (e: MouseEvent<HTMLElement>) => {
    const { type } = e.currentTarget.dataset;
    setSelectSection(type);
  };

  const renderContent = (data: DataType[]) => {
    return (
      <TooltipContentStyle>
        {data.map((item, idx) => (
          <div key={idx}>
            <FontAwesomeIcon icon={item.icon as IconProp} size={item.size as SizeProp} />
            <div>
              <p>{item.subtitle}</p>
              <p>{item.content}</p>
              <span>{item.subContent}</span>
            </div>
          </div>
        ))}
      </TooltipContentStyle>
    );
  };

  const renderSideContainer = () => {
    if (selectSection === 'title-form') {
      return (
        <Tooltip title="Writing a good title" $marginTop="398" $theme="dark">
          {renderContent(titleConten)}
        </Tooltip>
      );
    } else if (selectSection === 'problem-form') {
      return (
        <Tooltip title="Introduce the problem" $marginTop="550" $theme="dark">
          {renderContent(problemConten)}
        </Tooltip>
      );
    } else if (selectSection === 'expect-form') {
      return (
        <Tooltip title="Expand on the problem" $marginTop="952" $theme="dark">
          {renderContent(expandContent)}
        </Tooltip>
      );
    } else if (selectSection === 'tags-form') {
      return (
        <Tooltip title="Adding tags" $marginTop="1357" $theme="dark">
          {renderContent(tagContent)}
        </Tooltip>
      );
    }
  };

  return (
    <Container>
      <Img src="../../../public/question_img.png" alt="robot img" />
      <MainContainer>
        <Title>Ask a public question</Title>
        <NoticeWritingQuestion />
        <TitleForm onClick={handleChangeSection} />
        <WriteProblemForm onClick={handleChangeSection} />
        <WriteExpectForm onClick={handleChangeSection} />
        <Tags onClick={handleChangeSection} />
      </MainContainer>
      <SideContainer>{renderSideContainer()}</SideContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1.5rem;
  background-color: #f8f9f9;
  margin-bottom: 3rem;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4.2;
`;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  flex: 1.8;
`;

const TooltipContentStyle = styled.div<{ $theme?: string }>`
  color: #3b4045;
  font-size: 0.813rem;
  display: flex;
  & svg {
    color: #3b4045;
    margin-right: 1rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
  }
  & > div > p:not(:last-child) {
    margin-bottom: 0.6rem;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  margin: 1.5rem 0 1.688rem 0;
  margin-bottom: 80px;
`;

const Img = styled.img`
  width: 850px;
  height: 150px;
  position: absolute;
  top: 0;
  right: 0;
`;

export default QuestionPage;
