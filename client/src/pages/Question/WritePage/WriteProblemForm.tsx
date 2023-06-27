import { MouseEvent } from 'react';
import styled from 'styled-components';

import Quill from '../../../components/quill/Quill';
import Label from '../../../components/ui/label/Label';

interface IProps {
  value: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  handleUpdateProblemContent: (value: string) => void;
}

const WriteProblemForm = ({ value, onClick, handleUpdateProblemContent }: IProps) => {
  return (
    <Container onClick={onClick} data-type="problem-form">
      <Label content="What are the details of your problem?" type="title" />
      <Label
        content="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
        type="description"
      />
      <Quill
        width="100%"
        height="17.875rem"
        value={value}
        handleUpdateProblemContent={handleUpdateProblemContent}
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

  & > label {
    margin: 0.125rem 0 0.125rem 0;
  }

  & > label:nth-child(2) {
    margin-bottom: 0.675rem;
  }
`;

export default WriteProblemForm;
