import { MouseEvent } from 'react';
import styled from 'styled-components';

import Quill from '../../../components/quill/Quill';
import Label from '../../../components/ui/label/Label';

interface IProps {
  value: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  handleUpdateExpectContent: (value: string) => void;
}

const WriteExpectForm = ({ value, onClick, handleUpdateExpectContent }: IProps) => {
  return (
    <Container onClick={onClick} data-type="expect-form">
      <Label content="What did you try and what were you expecting?" type="title" />
      <Label
        content="Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
        type="description"
      />
      <Quill
        width="100%"
        height="17.875rem"
        value={value}
        handleUpdateExpectContent={handleUpdateExpectContent}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  background-color: #fff;
  border: 1px solid #e0e2e2;
  margin-top: 1rem;

  & > label {
    margin: 0.125rem 0 0.125rem 0;
  }

  & > label:nth-child(2) {
    margin-bottom: 0.675rem;
  }
`;

export default WriteExpectForm;
