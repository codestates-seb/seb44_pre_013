import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CustomButton from '../../../components/ui/buttons/CustomButton';

const QuestionHeader = () => {
  return (
    <Container>
      <TitleBox>
        <Title>
          What is causing the warning 'Removing intrinsics.ArrayPrototype.toReversed' in React?
        </Title>
        <Link to="/questions">
          <CustomButton content="Ask Question" />
        </Link>
      </TitleBox>
      <TimeInfoBox>
        <SpanBox>
          <Span>
            Asked
            <Time>
              <time dateTime="2023-06-02T20:03:59">17 days ago</time>
            </Time>
          </Span>
        </SpanBox>
        <SpanBox>
          <Span>
            Modified <Time title="2023-06-16 12:09:11Z">3 days ago</Time>
          </Span>
        </SpanBox>
        <SpanBox>
          <Span>Viewed</Span>
          <Time>11k times</Time>
        </SpanBox>
      </TimeInfoBox>
      <Line />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  & > h1 {
    flex: 1;
  }
  & > button {
    height: 2.375rem;
    line-height: 2.375rem;
  }
  & > a {
    width: 6.439rem;
    padding: 0.65rem;
  }
`;

const TimeInfoBox = styled.div`
  display: flex;

  padding: 0 0 0.5rem;
`;

const Title = styled.h1`
  font-weight: 400;
`;

const SpanBox = styled.div`
  margin: 0 1rem 0.5rem 0;
`;

const Span = styled.span`
  font-size: 0.813rem;
  color: #6a737c;
`;

const Time = styled.span`
  font-size: 0.813rem;
  color: #232629;
  margin-left: 0.2rem;
`;

export const Line = styled.div`
  border-bottom: 0.1rem solid #d6d8d8;
  margin: 0 0 1rem;
`;

export default QuestionHeader;
