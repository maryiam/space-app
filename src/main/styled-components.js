import styled, { keyframes, css } from 'styled-components';
import { connect } from 'react-redux';

const MainLeaving = keyframes`
  from { transform: rotateX(0) translateY(0); opacity: 1;}
  to { transform: rotateX(45deg) translateY(-1000px); opacity: 0;}
`;

const _Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  padding: 2rem;

  color: #fff;
  font-family: 'Viga', sans-serif;
  overflow: hidden;
  animation-name: ${props => (props.departing ? MainLeaving : null)};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
`;

const mapStateToProps = state => ({
  departing: state.order.departing
});
export const Main = connect(mapStateToProps)(_Main);

export const Title = styled.h1.attrs({
  title: props => props.children
})`
  font-family: 'Passion One', sans-serif;
  color: #ffe818;
  word-spacing: 100vw;
  text-align: center;
  font-size: 3em;
  line-height: 0.85;
  text-transform: uppercase;

  -moz-text-fill-color: #06031c;
  -webkit-text-fill-color: #06031c;
  -moz-text-stroke-color: #ffe818;
  -webkit-text-stroke-color: #ffe818;
  -moz-text-stroke-width: 2px;
  -webkit-text-stroke-width: 2px;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 18rem;
  @media (min-width: 40rem) {
    flex-direction: row;

    > * {
      flex-basis: 50%;
    }

    > * + * {
      margin-left: 2rem;
    }
  }
`;

export const Placeholder = styled.div`
  border: .5rem dashed red;
  color: red;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const styledTextBox = css`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8a8894;
  margin-bottom: 1rem;
`;
