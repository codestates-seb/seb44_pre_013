import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GoodWritingGuide = () => {
  return (
    <Container>
      <Title>Writing a good question</Title>
      <Content>
        You’re ready to
        <Link to="https://stackoverflow.com/help/how-to-ask">
          <LinkStyle> ask </LinkStyle>
        </Link>
        a
        <Link to="https://stackoverflow.com/help/on-topic">
          <LinkStyle> programming-related question </LinkStyle>
        </Link>
        and this form will help guide you through the process. Looking to ask a non-programming
        question? See
        <Link to="https://stackexchange.com/sites#technology-traffic">
          <LinkStyle> the topics here </LinkStyle>
        </Link>
        to find a relevant site.
      </Content>
      <Ul>
        <h5>Steps</h5>
        <List>Steps Summarize your problem in a one-line title.</List>
        <List>Describe your problem in more detail.</List>
        <List>Describe what you tried and what you expected to happen.</List>
        <List>Add “tags” which help surface your question to members of the community.</List>
        <List>Review your question and post it to the site.</List>
      </Ul>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ebf4fb;
  border: 1px solid #a6ceed;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const Content = styled.p`
  font-size: 1rem;
  margin-bottom: 0.938rem;
`;

const Ul = styled.ul`
  & > h5 {
    margin-bottom: 0.7rem;
  }
`;

const List = styled.li`
  margin-left: 1.875rem;
  font-size: 0.8rem;
  color: #2e2e2e;
`;

const LinkStyle = styled.span`
  color: #0675c9;
`;

export default GoodWritingGuide;
