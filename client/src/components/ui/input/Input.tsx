import { styled } from 'styled-components';

interface InputProps {
  placeholder?: string;
  type?: string;
  color?: string;
  id?: string;
  padding?: string;
  width?: string;
  display?: string;
  border?: string;
  focusmode?: string;
  isValid?: boolean;
}

export const Input = styled.input<InputProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  border: ${(props) =>
    props.isValid === false
      ? '1px solid #dd5054'
      : props.border
      ? props.border
      : '1px solid #c1c3c3'};
  border-radius: 3px;
  color: ${(props) => !props.color && '#000'};
  padding-left: 0.5rem;
  padding: ${(props) => props.padding && props.padding};
  display: ${(props) => props.display && props.display};

  &:focus {
    border: ${(props) => props.focusmode === 'true' && '1px solid #0077ff'};
    box-shadow: ${(props) =>
      props.focusmode === 'true' && '0px 0px 5px 3px rgba(46, 139, 245, 0.3)'};
    outline: ${(props) => props.focusmode === 'true' && 'none'};
  }
`;
