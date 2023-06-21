import { forwardRef } from 'react';
import { styled } from 'styled-components';

interface PropsType {
  title: string;
  type: string;
}

const FormInput = forwardRef<HTMLInputElement, PropsType>(({ title, type }, ref) => {
  return (
    <Container>
      <TitleStyle>{title}</TitleStyle>
      <InputStyle type={type} ref={ref} />
    </Container>
  );
});

const Container = styled.div`
  font-weight: 100;
  width: 100%;
  gap: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleStyle = styled.div`
  font-weight: 600;
`;

const InputStyle = styled.input`
  height: 2rem;
  border-radius: 4px;
  border: 0.5px solid #d7d7d7;
  padding: 0 0.5rem;
  &:focus {
    box-shadow: #dfebf8 0px 0px 0px 3px;
    border: 0.5px solid #59a4de;
  }
`;

export default FormInput;
