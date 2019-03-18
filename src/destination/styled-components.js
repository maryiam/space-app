import styled from 'styled-components';
import { styledTextBox } from '../main/styled-components';

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StatementText = styled.span`
  ${styledTextBox}
  margin-top: 1rem;
`;
