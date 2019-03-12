import styled from 'styled-components';

export const Label = styled.label`
  display: block;

  & + & {
    margin-top: 1rem;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const VisualInput = styled.span`
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: block;
    width: 1em;
    height: 1em;
    background-color: #6f7984;
    box-shadow: inset -3px -5px 15px rgba(0, 0, 0, 0.75);
    border-radius: 50%;
    margin-right: 1rem;
  }

  input:checked + &::before {
    background-image: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.65) 50%,
      #6f7984 50%
    );
    background-repeat: no-repeat;
    background-size: 10px;
    background-position: 1px 0px;
  }
`;
