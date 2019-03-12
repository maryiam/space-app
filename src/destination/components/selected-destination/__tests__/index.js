import renderer from 'react-test-renderer';
import React from 'react';
import SelectedDestination from '../index';

describe('selected-destination/', () => {
  describe('#render', () => {
    it('renders correctly with default props', () => {
      const tree = renderer.create(<SelectedDestination />);
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders correctly with selected destination data', () => {
      const tree = renderer.create(
        <SelectedDestination
          name="toto"
          climate="tropical"
          gravity="1 standard"
          img="/assets/planets/thumb/yavin4@x2.png"
          population="100"
          price={45}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
