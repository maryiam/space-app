import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from '../store/actions';

import * as destinationService from '../services/destinations';

export function* findDestinations({ searchCriteria }) {
  try {
    const list = yield call(destinationService.find, searchCriteria);
    yield put({
      type: actions.FIND_DESTINATION.SUCCESS,
      list
    });
  } catch (e) {
    yield put({
      type: actions.FIND_DESTINATION.FAILURE,
      error: e.message
    });
  }
}

export default all([takeLatest(actions.SET_SEARCH, findDestinations)]);
