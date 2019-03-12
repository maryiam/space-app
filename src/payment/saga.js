import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import * as a from '../store/actions';

import * as paymentService from '../services/payment';
import { getDestinationById } from '../store/selectors';

export function* onDestinationSet({ destinationId }) {
  const { currencies } = yield select(getDestinationById, destinationId);

  yield put({
    type: a.FIND_PAYMENT.REQUEST,
    currencies,
  });
}

export function* findPayment({ currencies = [] }) {
  try {
    const list = yield call(paymentService.find, currencies);
    yield put({
      type: a.FIND_PAYMENT.SUCCESS,
      list,
    });
  } catch (e) {
    yield put({
      type: a.FIND_PAYMENT.FAILURE,
      error: e.message,
    });
  }
}

export default all([
  takeLatest(a.SET_DESTINATION, onDestinationSet),
  takeLatest(a.FIND_PAYMENT.REQUEST, findPayment),
]);
