import { styled } from 'styled-components';

interface Props {
  children: JSX.Element[];
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const Form = ({ children, onSubmit }: Props) => {
  return <FormStyle onSubmit={onSubmit}>{children}</FormStyle>;
};

const FormStyle = styled.form`
  background-color: #ffffff;
  border-radius: 8px;
  gap: 1rem;
  width: 100%;
  padding: 2rem 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Form;
