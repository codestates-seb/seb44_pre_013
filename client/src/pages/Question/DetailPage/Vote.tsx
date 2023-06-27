import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretUp,
  faCaretDown,
  faBookmark,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';

const Voting = () => {
  return (
    <Container>
      <IconBox>
        <FontAwesomeIcon icon={faCaretUp} size="xl" color="#484849" />
      </IconBox>
      <Span>0</Span>
      <IconBox>
        <FontAwesomeIcon icon={faCaretDown} size="xl" color="#484849" />
      </IconBox>
      <FontAwesomeIcon icon={faBookmark} size="lg" color="#c5c5c8" />
      <FontAwesomeIcon icon={faClockRotateLeft} size="lg" color="#c5c5c8" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 0 0;
  & > * {
    margin-bottom: 0.9rem;
  }
  &:hover:not(span) {
    cursor: pointer;
  }
`;

const IconBox = styled.div`
  padding: 0.65rem 1rem;
  margin: 0.125rem 0.125rem 0.9rem;
  background-color: #fff;
  border: 1px solid #e8ecee;
  border-radius: 50%;
`;

const Span = styled.span`
  font-size: 1.188rem;
  font-weight: bold;
  margin: 0.125rem;
  padding: 0.25rem 0;
  text-align: center;
`;

export default Voting;
