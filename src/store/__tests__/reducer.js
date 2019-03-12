import { destination, payment, order } from '../reducer';

describe('store/reducer', () => {
  describe('#payment', () => {
    it('reduces a payment/FIND/REQUEST action', () => {
      const action = {
        type: 'payment/FIND/REQUEST',
        currencies: [0, 1],
      };
      const state = payment(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces a payment/FIND/SUCCESS action', () => {
      const action = {
        type: 'payment/FIND/SUCCESS',
        list: [{ id: 0, name: 'test 1' }, { id: 1, name: 'test 2' }],
      };
      const state = payment(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces a payment/FIND/FAILURE action', () => {
      const action = {
        type: 'payment/FIND/FAILURE',
        error: 'failure',
      };
      const state = payment(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces an unknown action', () => {
      const action = {
        type: 'UNKNOWN',
      };
      const state = payment(undefined, action);
      expect(state).toMatchSnapshot();
    });
  });

  describe('#order', () => {
    it('reduces a order/RESET_DESTINATION action', () => {
      const action = {
        type: 'order/RESET_DESTINATION',
      };
      const state = order(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces a order/SET_DESTINATION action', () => {
      const action = {
        type: 'order/SET_DESTINATION',
        destinationId: 0,
      };
      const state = order(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces a order/SET_PAYMENT action', () => {
      const action = {
        type: 'order/SET_PAYMENT',
        paymentId: 0,
      };
      const state = order(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces a order/SUBMIT action', () => {
      const action = {
        type: 'order/SUBMIT',
      };
      const state = order(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces an unknown action', () => {
      const action = {
        type: 'UNKNOWN',
      };
      const state = order(undefined, action);
      expect(state).toMatchSnapshot();
    });
  });

  describe('#destination', () => {
    it('reduces a destination/SET_SEARCH action', () => {
      const action = {
        type: 'destination/SET_SEARCH',
        searchCriteria: 'Co',
      };
      const state = destination(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces a destination/FIND/SUCCESS action', () => {
      const action = {
        type: 'destination/FIND/SUCCESS',
        list: [
          { id: 0, name: 'test 1', currencies: [0, 1] },
          { id: 1, name: 'test 2', currencies: [2] },
        ],
      };
      const state = destination(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces a destination/FIND/FAILURE action', () => {
      const action = {
        type: 'destination/FIND/FAILURE',
        error: 'failed',
      };
      const state = destination(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces an unknown action', () => {
      const action = {
        type: 'UNKNOWN',
      };
      const state = destination(undefined, action);
      expect(state).toMatchSnapshot();
    });
  });
});
