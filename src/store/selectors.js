function getCurrencyById(id, state) {
  return state.payment.list.find(item => item.id === id);
}

export function getDestinationById(state, destinationId = null) {
  if (destinationId === null) {
    return null;
  }

  return state.destination.list.find(({ id }) => id === destinationId);
}

export function getAvailableCurrencies(state) {
  const destination = getDestinationById(state, state.order.destination);
  if (!destination || !state.payment.list.length) return null;
  return destination.currencies.map(id => getCurrencyById(id, state));
}

export function isPaymentLoading(state) {
  return state.payment.loading;
}

export function getOrder(state) {
  return {
    destination: getDestinationById(state, state.order.destination),
    payment: getCurrencyById(state.order.payment, state),
  };
}

export function hasTripStarted(state) {
  return state.order.departing;
}

export function getFoundDestinations(state) {
  return state.destination.list;
}

export function isDestinationLoading(state) {
  return state.destination.loading;
}

export function getSelectedDestination(state) {
  const destId = state.order.destination;
  const destination = getDestinationById(state, destId);

  if (!destination) {
    return null;
  }

  return destination;
}

export function getSearchKeyword(state) {
  return state.destination.search;
}
