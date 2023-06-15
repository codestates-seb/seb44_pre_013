import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyles;
