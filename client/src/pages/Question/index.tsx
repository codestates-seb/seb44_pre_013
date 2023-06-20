import { MouseEvent, useState } from 'react';
import styled from 'styled-components';

import WriteProblemForm from './WriteProblemForm';
import NoticeWritingQuestion from '../Question/Notice/NoticeWritingQuestion';
import NoticeWritingSection from '../Question/Notice/NoticeWritingSection';
import TitleForm from './TitleForm';
import WriteExpectForm from './WriteExpectingForm';
import Tags from './Tags';

const Question = () => {
  const [selectSection, setSelectSection] = useState<string | undefined>('title-form');

  const handleChangeSection = (e: MouseEvent<HTMLElement>) => {
    const { type } = e.currentTarget.dataset;
    setSelectSection(type);
  };

  const renderSideContainer = () => {
    if (selectSection === 'title-form') {
      return (
        <NoticeWritingSection
          title="Writing a good title"
          subtitle="Your title should summarize the problem."
          content="You might find that you have a better idea of your title after writing out the rest of
        the question."
          margintop="398"
        />
      );
    } else if (selectSection === 'problem-form') {
      return (
        <NoticeWritingSection
          title="Introduce the problem"
          subtitle="Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself."
          margintop="550"
        />
      );
    } else if (selectSection === 'expect-form') {
      return (
        <NoticeWritingSection
          title="Expand on the problem"
          subtitle="Show what you’ve tried, tell us what happened, and why it didn’t meet your needs."
          content="Not all questions benefit from including code, but if your problem is better understood with code you’ve written, you should include a minimal, reproducible example. Please make sure to post code and errors as text directly to the question (and not as images), and format them appropriately."
          margintop="952"
        />
      );
    } else if (selectSection === 'tags-form') {
      return (
        <NoticeWritingSection
          title="Adding tags"
          subtitle="Tags help ensure that your question will get attention from the right people."
          content="Tag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used."
          margintop="1357"
        />
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

export default Question;
