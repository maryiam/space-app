export const FIND_PAYMENT = {
  REQUEST: 'payment/FIND/REQUEST',
  SUCCESS: 'payment/FIND/SUCCESS',
  FAILURE: 'payment/FIND/FAILURE'
};

export const FIND_DESTINATION = {
  SUCCESS: 'destination/FIND/SUCCESS',
  FAILURE: 'destination/FIND/FAILURE'
};

export const SET_SEARCH = 'destination/SET_SEARCH';
export const SET_DESTINATION = 'order/SET_DESTINATION';
export const RESET_DESTINATION = 'order/RESET_DESTINATION';
export const SET_PAYMENT = 'order/SET_PAYMENT';
export const SUBMIT = 'order/SUBMIT';

export function setPayment(paymentId) {
  return {
    type: SET_PAYMENT,
    paymentId
  };
}

export function startTrip() {
  return {
    type: SUBMIT
  };
}

export function setSearch(searchCriteria) {
  return {
    type: SET_SEARCH,
    searchCriteria
  };
}

export function setDestination(destinationId) {
  return {
    type: SET_DESTINATION,
    destinationId
  };
}

export function resetDestination() {
  return {
    type: RESET_DESTINATION
  };
}
