import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import SelectPayment from '../payment';
import OrderRecap from '../order';
import SelectDestination from '../destination';

import { Main, Title, Content } from './styled-components';

const App = () => (
  <Provider store={store}>
    <Main>
      <Title>Pilote Privé</Title>
      <Content>
        <SelectDestination />
        <SelectPayment />
      </Content>
      <OrderRecap />
    </Main>
  </Provider>
);

export default App;
