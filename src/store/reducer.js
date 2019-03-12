import * as a from './actions';
import uniqBy from 'lodash/uniqBy';
import map from 'lodash/map';
import { combineReducers } from 'redux';

const initialPayment = {
  list: [],
};

export function payment(state = initialPayment, action) {
  switch (action.type) {
    case a.FIND_PAYMENT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case a.FIND_PAYMENT.SUCCESS:
      return {
        ...state,
        loading: false,
        list: uniqBy([...state.list, ...action.list], 'id'),
        found: map(action.list, 'id'),
      };
    case a.FIND_PAYMENT.FAILURE:
      return {
        ...state,
        loading: false,
        found: [],
      };
    default:
      return state;
  }
}

export function order(state = {}, action) {
  switch (action.type) {
    case a.RESET_DESTINATION:
      return {
        ...state,
        destination: null,
      };
    case a.SET_DESTINATION:
      return {
        ...state,
        destination: action.destinationId,
      };
    case a.SET_PAYMENT:
      return {
        ...state,
        payment: action.paymentId,
      };
    case a.SUBMIT:
      return {
        ...state,
        departing: true,
      };
    default:
      return state;
  }
}

export function destination(state = { list: [] }, action) {
  switch (action.type) {
    case a.SET_SEARCH:
      return {
        ...state,
        search: action.searchCriteria,
        loading: true,
      };
    case a.FIND_DESTINATION.SUCCESS:
      return {
        ...state,
        loading: false,
        list: uniqBy(action.list, 'id'),
      };
    case a.FIND_DESTINATION.FAILURE:
      return {
        ...state,
        loading: false,
        list: [],
      };
    default:
      return state;
  }
}

export default combineReducers({
  destination,
  payment,
  order,
});
