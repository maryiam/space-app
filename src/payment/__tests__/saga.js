import * as paymentService from '../../services/payment';
import * as actions from '../../store/actions';
import { recordSaga } from '../../testing-utils/test-utils';
import { findPayment, onDestinationSet } from '../saga';
import * as selectors from '../../store/selectors';

describe('payment saga', () => {
  describe('onDestinationSet', () => {
    selectors.getDestinationById = jest.fn();

    beforeEach(() => {
      jest.resetAllMocks();
    });

    const initialAction = { destinationId: 1 };

    it('should get the currencies from selected destination and call find payment request action', async () => {
      selectors.getDestinationById.mockImplementation(() => ({
        name: 'Yavin IV',
        id: 1,
        currencies: [1, 2]
      }));

      const dispatched = await recordSaga(onDestinationSet, initialAction);

      expect(selectors.getDestinationById).toHaveBeenCalled();
      expect(dispatched).toContainEqual({
        type: actions.FIND_PAYMENT.REQUEST,
        currencies: [1, 2]
      });
    });

    describe('findPayment', () => {
      const list = [
        { id: 0, name: 'Imperial Credit' },
        { id: 1, name: 'Republic Credit' }
      ];
      const initialAction = { currencies: [0, 1] };

      paymentService.find = jest.fn();

      beforeEach(() => {
        jest.resetAllMocks();
      });

      it('should get the matching payment from API and call find payment success action', async () => {
        paymentService.find.mockImplementation(() => Promise.resolve(list));

        const dispatched = await recordSaga(findPayment, initialAction);

        expect(paymentService.find).toHaveBeenCalledWith(
          initialAction.currencies
        );
        expect(dispatched).toContainEqual({
          type: actions.FIND_PAYMENT.SUCCESS,
          list
        });
      });

      it('should fails when error and call fin payment failure action', async () => {
        paymentService.find.mockImplementation(() =>
          Promise.reject({ message: 'error' })
        );

        const dispatched = await recordSaga(findPayment, initialAction);

        expect(paymentService.find).toHaveBeenCalledWith(
          initialAction.currencies
        );
        expect(dispatched).toContainEqual({
          type: actions.FIND_PAYMENT.FAILURE,
          error: 'error'
        });
      });

      it('should execute with default currencies value if not defined', async () => {
        paymentService.find.mockImplementation(() => Promise.resolve([]));
        await recordSaga(findPayment, {});
        expect(paymentService.find).toHaveBeenCalledWith([]);
      });
    });
  });
});
