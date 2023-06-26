import styled from 'styled-components';

interface ButtonProps {
  width?: string;
  content?: string;
  $backgroundcolor?: string;
  $color?: string;
  padding?: string;
  onClick?: () => void;
}

const CustomButton = ({
  width,
  content,
  $backgroundcolor,
  $color,
  padding,
  onClick,
}: ButtonProps) => {
  return (
    <MyButtonStyle
      width={width}
      $backgroundcolor={$backgroundcolor}
      $color={$color}
      onClick={onClick}
      padding={padding}
    >
      {content}
    </MyButtonStyle>
  );
};

const MyButtonStyle = styled.button<ButtonProps>`
  width: ${(props) => (props.width ? `${props.width}` : '6.5rem')};
  border: 1px solid ${(props) => (props.$backgroundcolor ? props.$backgroundcolor : '#d6d9dc')};
  border-radius: 6px;
  background-color: ${(props) => (props.$backgroundcolor ? props.$backgroundcolor : '#0b95ff')};
  color: ${(props) => (props.$color ? props.$color : '#fff')};
  display: flex;
  justify-content: center;
  padding: ${(props) => (props.padding ? props.padding : '0.7rem')};
  &:hover {
    background-color: #0074cc;
  }
`;

export default CustomButton;
