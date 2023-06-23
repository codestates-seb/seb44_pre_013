import { useState, ChangeEvent, MouseEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

import { IDataType } from '../../../types/question';
import Tooltip from '../../../components/ui/tooltip/Tooltip';
import GoodWritingGuide from './GoodWritingGuide';
import TitleForm from './TitleForm';
import WriteProblemForm from './WriteProblemForm';
import WriteExpectForm from './WriteExpectingForm';
import Tags from './Tags';
import Banner from '../../../../public/question_img.png';

const titleContent: IDataType[] = [
  {
    icon: faPencil,
    size: '2xl',
    subtitle: 'Your title should summarize the problem.',
    content:
      'You might find that you have a better idea of your title after writing out the rest of the question',
  },
];

const problemContents: IDataType[] = [
  {
    icon: faPencil,
    size: '2xl',
    subtitle:
      'Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.',
  },
];

const expandContent: IDataType[] = [
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

const tagContent: IDataType[] = [
  {
    icon: faPencil,
    size: '2xl',
    subtitle: 'Tags help ensure that your question will get attention from the right people.',
    content:
      'Tag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used.',
    subContent: 'Learn more about tagging',
  },
];

const QuestionWritePage = () => {
  const [selectSection, setSelectSection] = useState<string | undefined>('title-form');
  // title, problem, expecting, tags 상태값들 담을 변수 선언 - 1개의 state로 둘 것인지? 4개의 state로 둘 것인지 체크
  const [title, setTitle] = useState('');
  const [problemContent, setProblemContent] = useState('');
  const [expectingContent, setExpectingContent] = useState('');
  const [tagValue, setTagValue] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  // 각 폼에서 값들이 잘 입력되었는 지 체크 후 - 4개의 값들이 다 입력되었을 때 -> 서버로 요청 보내기
  // update하는 함수 selectSection 값을 활용하거나 해서 1개로 줄일 수 있을 거 같음

  const handleUpdateTitle = (value: string, type: string) => {
    console.log(type);

    if (type === 'title') {
      console.log(value);
      setTitle(value);
    } /* else if (type.problemForm) {
    } else if (type.expectingForm) {
    } else if (type.tags) {
    } */
  };

  const handleUpdateProblemContent = (value: string) => {
    console.log(selectSection);
    setProblemContent(value);
  };

  const handleUpdateExpectContent = (value: string) => {
    console.log(selectSection);
    setExpectingContent(value);
  };

  const handleUpdateTagValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTagValue(value.trim());
  };

  const handleAddTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (tags.findIndex((tag) => tag === tagValue) !== -1) {
      return;
    }
    if (tags.length === 5) {
      setTagValue('');
      return;
    }
    if (['Space', 'Enter'].includes(e.code) && tagValue.length) {
      setTags([...tags, tagValue]);
      setTagValue('');
    }
  };

  const handleDeleteTag = (tag: string) => {
    const updatedTags = tags.filter((value: string) => value !== tag);
    setTags(updatedTags);
  };

  // data 값 title, content로 묶어서 서버로 요청 보내기,
  // 서버 응답 결과에 따라 성공/실패 로직 구현하기

  const handleChangeSection = (e: MouseEvent<HTMLElement>) => {
    const { type } = e.currentTarget.dataset;
    setSelectSection(type);
  };

  const renderContent = (data: IDataType[]) => {
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
          {renderContent(titleContent)}
        </Tooltip>
      );
    } else if (selectSection === 'problem-form') {
      return (
        <Tooltip title="Introduce the problem" $marginTop="550" $theme="dark">
          {renderContent(problemContents)}
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
      <Img src={Banner} alt="robot img" />
      <MainContainer>
        <Title>Ask a public question</Title>
        <GoodWritingGuide />
        <TitleForm
          value={title}
          onClick={handleChangeSection}
          handleUpdateTitle={handleUpdateTitle}
        />
        <WriteProblemForm
          value={problemContent}
          onClick={handleChangeSection}
          handleUpdateProblemContent={handleUpdateProblemContent}
        />
        <WriteExpectForm
          value={expectingContent}
          onClick={handleChangeSection}
          handleUpdateExpectContent={handleUpdateExpectContent}
        />
        <Tags
          tags={tags}
          tagValue={tagValue}
          onClick={handleChangeSection}
          handleUpdateTagValue={handleUpdateTagValue}
          handleAddTag={handleAddTag}
          handleDeleteTag={handleDeleteTag}
        />
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
  }
  & > div > div > p:not(:last-child) {
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

export default QuestionWritePage;
