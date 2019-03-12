import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const PriceValue = styled.span`
  margin-left: 0.5rem;
  font-size: 1.5em;
  color: #ffe818;
`;

export const Button = styled.button`
  background: transparent;
  border: 2px solid #ffe818;
  padding: 1rem 2rem;
  font-size: 2em;
  text-transform: uppercase;
  color: #ffe818;
  font-family: 'Passion One', sans-serif;
`;
