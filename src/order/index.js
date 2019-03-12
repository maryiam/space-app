import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getOrder } from '../store/selectors';
import { startTrip } from '../store/actions';

import { Price, PriceValue, Button, Wrapper } from './styled-components';

const mapStateToProps = state => ({
  order: getOrder(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      startTrip,
    },
    dispatch
  ),
});

export const OrderRecap = ({ order, actions }) => {
  if (!order.destination || !order.payment) return null;
  const { destination, payment } = order;
  const price = Math.floor(destination.price * payment.rate)
    .toString()
    .replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,');
  return (
    <Wrapper>
      <Price>
        Price:{' '}
        <PriceValue>
          {price} {payment.symbol}
        </PriceValue>
      </Price>
      <Button onClick={actions.startTrip}>let's go</Button>
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderRecap);
