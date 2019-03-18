import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { SelectDestination } from '../index';

describe('destination/', () => {
  describe('#render', () => {
    it('renders correctly with no information', () => {
      const tree = renderer.create(<SelectDestination actions={{}} />);
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders correctly when loading', () => {
      const tree = renderer.create(
        <SelectDestination loading={true} actions={{}} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders correctly with destinations available', () => {
      const tree = renderer.create(
        <SelectDestination
          search={'abc'}
          matchingDestinations={[
            { id: 0, name: 'destination 1', currencies: [0, 1] },
            { id: 1, name: 'destination 2', currencies: [2] }
          ]}
          actions={{}}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders correctly with no matching destinations', () => {
      const tree = renderer.create(
        <SelectDestination
          search={'abc'}
          matchingDestinations={[]}
          actions={{}}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders correctly with a selected destination', () => {
      const tree = renderer.create(
        <SelectDestination
          search={'abc'}
          matchingDestinations={[
            { id: 0, name: 'destination 1', currencies: [0, 1] },
            { id: 1, name: 'destination 2', currencies: [2] }
          ]}
          destination={{ id: 0, name: 'destination 1', currencies: [0, 1] }}
          actions={{}}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('actions invocation', () => {
    it('invokes setDestination action when a destination is selected', () => {
      const mockFn = jest.fn();
      const tree = renderer.create(
        <SelectDestination
          search={'abc'}
          matchingDestinations={[
            { id: 0, name: 'destination 1', currencies: [0, 1] },
            { id: 1, name: 'destination 2', currencies: [2] }
          ]}
          actions={{
            setDestination: mockFn
          }}
        />
      );

      const rootInstance = tree.root;
      const destinations = rootInstance.findAll(
        element => element.type === 'div'
      );

      destinations[0].props.onClick();
      expect(mockFn).toBeCalled();
    });

    it('invokes setDestination action when a destination is selected', () => {
      const resetActionMock = jest.fn();
      const searchActionMock = jest.fn();
      const tree = renderer.create(
        <SelectDestination
          actions={{
            resetDestination: resetActionMock,
            setSearch: searchActionMock
          }}
        />
      );

      const rootInstance = tree.root;
      const input = rootInstance.findByType('input');
      const value = 'testing';

      input.props.onChange({ target: { value } });
      expect(resetActionMock).toBeCalled();
      expect(searchActionMock).toBeCalledWith(value);
    });
  });
});
