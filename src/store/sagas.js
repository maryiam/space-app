import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import paymentSaga from '../payment/saga';
import destinationsSaga from '../destination/saga';

export const sagaMiddleware = createSagaMiddleware();

export function* mainSaga() {
  yield all([paymentSaga, destinationsSaga]);
}
