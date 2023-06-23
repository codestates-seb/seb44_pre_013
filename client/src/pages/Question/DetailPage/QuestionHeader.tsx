import styled from 'styled-components';

const QuestionHeader = () => {
  return (
    <Container>
      <TitleBox>
        <Title>
          What is causing the warning 'Removing intrinsics.ArrayPrototype.toReversed' in React?
        </Title>
        <Button>Ask Question</Button>
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
`;

const TimeInfoBox = styled.div`
  display: flex;

  padding: 0 0 0.5rem;
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Button = styled.button`
  width: 6.5rem;
  border: 1px solid #d6d9dc;
  border-radius: 6px;
  background-color: #0b95ff;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 0.7rem;
  &:hover {
    background-color: #0074cc;
  }
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

const Line = styled.div`
  border-bottom: 0.1rem solid #d6d8d8;
  margin: 0 0 1rem;
`;

export default QuestionHeader;
