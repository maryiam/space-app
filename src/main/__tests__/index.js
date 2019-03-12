import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Main from '../';

describe('Main', () => {
  describe('#render', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Main />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
