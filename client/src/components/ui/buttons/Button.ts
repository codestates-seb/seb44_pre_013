import { styled, css } from 'styled-components';

interface ButtonProps {
  color?: string;
  hovercolor?: string;
  fontcolor?: string;
}

export const Button = styled.button<ButtonProps>`
  font-weight: 100;
  width: 100%;
  border: 1px solid #d6d9dc;
  border-radius: 6px;
  background-color: ${(props) => (props.color ? props.color : '#0b95ff')};
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 0.7rem;
  ${(props) =>
    props.hovercolor &&
    css`
      &:hover {
        background-color: ${props.hovercolor};
      }
    `}
  ${(props) =>
    props.fontcolor &&
    css`
      color: ${props.fontcolor};
    `}
`;
