import { styled } from 'styled-components';
import FormInput from './FormInput';
import { Button } from '../ui/buttons/Button';

const LoginForm = () => {
  return (
    <FormContainer>
      <FormInput title="Email" type="text" />
      <FormInput title="Password" type="password" />
      <Button>Log in</Button>
    </FormContainer>
  );
};

const FormContainer = styled.div`
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

export default LoginForm;
