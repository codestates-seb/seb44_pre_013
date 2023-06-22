import { forwardRef } from 'react';
import { styled } from 'styled-components';
import { Input } from './Input';

interface PropsType {
  title: string;
  type: string;
  isValid?: boolean;
  warningText?: string;
}

const FormInput = forwardRef<HTMLInputElement, PropsType>(
  ({ title, type, isValid, warningText }, ref) => {
    return (
      <Container>
        <TitleStyle>{title}</TitleStyle>
        <Input type={type} ref={ref} padding="0.563rem" focusmode="true" isValid={isValid} />
        {!isValid && <NotValid>{warningText}</NotValid>}
      </Container>
    );
  }
);

const Container = styled.div`
  font-weight: 400;
  width: 100%;
  gap: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleStyle = styled.div`
  font-weight: 400;
`;

const NotValid = styled.div`
  font-size: 0.8rem;
  color: #dd5054;
`;

export default FormInput;
