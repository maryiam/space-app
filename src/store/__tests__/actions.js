import * as actions from '../actions';

describe('store/actions', () => {
  describe('#setPayment', () => {
    it('creates the correct action', () => {
      const action = actions.setPayment(0);
      expect(action).toMatchSnapshot();
    });
  });
  describe('#startTrip', () => {
    it('creates the correct action', () => {
      const action = actions.startTrip();
      expect(action).toMatchSnapshot();
    });
  });
  describe('#setSearch', () => {
    it('creates the correct action of searching destinations', () => {
      const action = actions.setSearch('Co');
      expect(action).toMatchSnapshot();
    });
  });
  describe('#setDestination', () => {
    it('creates the correct action of setting the selected destination', () => {
      const action = actions.setDestination(10);
      expect(action).toMatchSnapshot();
    });
  });
  describe('#resetDestination', () => {
    it('creates the correct action of resetting the selected destination', () => {
      const action = actions.resetDestination();
      expect(action).toMatchSnapshot();
    });
  });
});
