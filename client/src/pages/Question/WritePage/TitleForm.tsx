import { ChangeEvent, MouseEvent } from 'react';
import styled from 'styled-components';

import Label from '../../../components/ui/label/Label';
import { Input } from '../../../components/ui/input/Input';

interface IProps {
  value: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  handleUpdateTitle: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TitleForm = ({ value, onClick, handleUpdateTitle }: IProps) => {
  return (
    <Container onClick={onClick} data-type="title-form">
      <Label type="title" content="Title" htmlFor="title" />
      <Label
        type="content"
        content="Be specific and imagine you’re asking a question to another person."
        htmlFor="title"
      />
      <Input
        id="title"
        placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
        padding="0.563rem"
        focusmode="true"
        value={value}
        onChange={handleUpdateTitle}
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
  margin-bottom: 1rem;

  & > label {
    margin: 0.125rem 0 0.125rem 0;
  }

  & > label:nth-child(2) {
    margin-bottom: 0.675rem;
  }
`;

export default TitleForm;
