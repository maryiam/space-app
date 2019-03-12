import * as selectors from '../selectors';

const state = {
  destination: {
    loading: false,
    list: [
      { id: 0, name: 'destination 1', currencies: [0, 1] },
      { id: 1, name: 'destination 2', currencies: [2] },
      { id: 2, name: 'destination 3', currencies: [0, 1, 2] },
    ],
    search: 'abc',
  },
  payment: {
    loading: true,
    list: [
      { id: 0, name: 'payment 1' },
      { id: 1, name: 'payment 2' },
      { id: 2, name: 'payment 3' },
    ],
    found: [1, 2],
  },
  order: {
    destination: 1,
    payment: 2,
    departing: true,
  },
};

describe('store/selectors', () => {
  describe('getAvailableCurrencies', () => {
    it('returns the available currencies objects', () => {
      const currencies = selectors.getAvailableCurrencies(state);
      expect(currencies).toEqual([{ id: 2, name: 'payment 3' }]);
    });

    it('returns null if no destination was selected', () => {
      const currencies = selectors.getAvailableCurrencies({
        ...state,
        order: {},
      });
      expect(currencies).toEqual(null);
    });
  });

  describe('isPaymentLoading', () => {
    it('returns the loading flag for the payment', () => {
      const isLoading = selectors.isPaymentLoading(state);
      expect(isLoading).toBe(true);
    });
  });

  describe('getOrder', () => {
    it('returns order with full objects', () => {
      const order = selectors.getOrder(state);
      expect(order).toEqual({
        destination: { id: 1, name: 'destination 2', currencies: [2] },
        payment: { id: 2, name: 'payment 3' },
      });
    });
  });

  describe('hasTripStarted', () => {
    it('returns the trip started flag', () => {
      const hasStarted = selectors.hasTripStarted(state);
      expect(hasStarted).toBe(true);
    });
  });

  describe('getFoundDestinations', () => {
    it('returns the destinations which correspond to the searched keyword', () => {
      const destinations = selectors.getFoundDestinations(state);
      expect(destinations).toEqual([
        { id: 0, name: 'destination 1', currencies: [0, 1] },
        { id: 1, name: 'destination 2', currencies: [2] },
        { id: 2, name: 'destination 3', currencies: [0, 1, 2] },
      ]);
    });
  });

  describe('isDestinationLoading', () => {
    it('returns the loading flag for the destinations search phase', () => {
      const isLoading = selectors.isDestinationLoading(state);
      expect(isLoading).toBe(false);
    });
  });

  describe('getSelectedDestination', () => {
    it('returns the selected destination for the trip', () => {
      const destination = selectors.getSelectedDestination(state);
      expect(destination).toEqual({ id: 1, name: 'destination 2', currencies: [2] });
    });
  });

  describe('getSearchKeyword', () => {
    it('returns the search key text', () => {
      const word = selectors.getSearchKeyword(state);
      expect(word).toEqual('abc');
    });
  });

  describe('getDestinationById', () => {
    it('returns the destination by its id', () => {
      const word = selectors.getDestinationById(state, 0);
      expect(word).toEqual({ id: 0, name: 'destination 1', currencies: [0, 1] });
    });
    it('returns null when destination id is null', () => {
      const word = selectors.getDestinationById(state);
      expect(word).toEqual(null);
    });
  });
});
