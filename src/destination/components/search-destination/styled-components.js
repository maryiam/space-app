import styled from 'styled-components';

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #ffe818;
  color: white;
  font-weight: bold;
  font-size: .9em;
  font-family: 'Viga', sans-serif;

  :focus {
    outline: none;
  }
  
  ::placeholder {
    color: #8a8894;
  }
`;