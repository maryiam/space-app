import renderer from 'react-test-renderer';
import React from 'react';
import PossibleDestination from '../index';

describe('possible-destination/', () => {
  describe('#render', () => {
    it('renders correctly with default props', () => {
      const tree = renderer.create(<PossibleDestination />);
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders correctly with provided destination data', () => {
      const tree = renderer.create(
        <PossibleDestination
          onChange={jest.fn}
          destination={{
            id: 10,
            thumb: '/assets/planets/thumb/yavin4@x2.png',
            name: 'destination 1',
          }}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('callback invocation', () => {
    it('invokes the function with the id passed as prop when on the click action', () => {
      const mockFn = jest.fn();
      const tree = renderer.create(
        <PossibleDestination
          onChange={mockFn}
          destination={{
            id: 10,
            thumb: '/assets/planets/thumb/yavin4@x2.png',
            name: 'destination 1',
          }}
        />
      );

      const rootInstance = tree.root;
      const div = rootInstance.findByType('div');

      div.props.onClick();

      expect(mockFn).toBeCalledWith(10);
    });
  });
});
