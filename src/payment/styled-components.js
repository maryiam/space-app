import styled from 'styled-components';
import { styledTextBox } from '../main/styled-components';

export const ContentWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-family: 'Passion One', sans-serif;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const InfoText = styled.span`
  ${styledTextBox}
`;
