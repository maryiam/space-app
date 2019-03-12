import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { OrderRecap } from '../';

describe('order/', () => {
  describe('#render', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <OrderRecap
          order={{
            destination: {
              id: 0,
              name: 'destination 1',
              currencies: [0],
              price: 100
            },
            payment: { id: 0, name: 'payment 1', rate: 1.2, symbol: '$' }
          }}
          actions={{
            startTrip: jest.fn()
          }}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
