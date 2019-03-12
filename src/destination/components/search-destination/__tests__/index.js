import renderer from 'react-test-renderer';
import React from 'react';
import SearchDestination from '../index';

describe('search-destination/', () => {
  describe('#render', () => {
    it('renders correctly with provided props', () => {
      const tree = renderer.create(<SearchDestination handleChange={jest.fn} />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('callback invocation', () => {
    it('invokes the function passed as prop when the input value changes', () => {
      const mockFn = jest.fn();
      const tree = renderer.create(<SearchDestination handleChange={mockFn} />);
      const rootInstance = tree.root;
      const input = rootInstance.findByType('input');
      const value = { target: { value: 'abc' } };

      input.props.onChange(value);

      expect(mockFn).toBeCalledWith(value);
    });
  });
});
