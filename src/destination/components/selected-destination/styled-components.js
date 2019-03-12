import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  position: relative;

  @media (min-width: 40rem) {
    margin: 2rem 1rem 2rem 8rem;
  }
`;

export const Image = styled.img`
  margin: 2rem 0 0 -7rem;
  opacity: 0.5;
  height: 250px;

  @media (min-width: 40rem) {
    margin: 0;
    height: 220px;
    opacity: 1;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 5rem;

  @media (min-width: 40rem) {
    position: relative;
    margin: 0 1rem;
  }
`;

export const Name = styled.h2``;

export const Info = styled.span``;
