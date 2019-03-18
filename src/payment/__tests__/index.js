import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { SelectPayment } from '../';

describe('payment/', () => {
  describe('#render', () => {
    it('renders correctly with no information', () => {
      const tree = renderer.create(<SelectPayment actions={{}} />);
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders correctly when loading', () => {
      const tree = renderer.create(<SelectPayment loading actions={{}} />);
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders correctly with currencies available', () => {
      const tree = renderer.create(
        <SelectPayment
          currencies={[
            { id: 0, name: 'currency 1' },
            { id: 1, name: 'currency 2' }
          ]}
          actions={{}}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders correctly with no currency available', () => {
      const tree = renderer.create(
        <SelectPayment currencies={[]} actions={{}} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
