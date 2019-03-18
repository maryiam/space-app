import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAvailableCurrencies, isPaymentLoading } from '../store/selectors';
import { setPayment } from '../store/actions';

import { ContentWrapper, Title, InfoText } from './styled-components';

import PaymentOption from './components/payment-option';

const mapStateToProps = state => ({
  currencies: getAvailableCurrencies(state),
  loading: isPaymentLoading(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setPayment
    },
    dispatch
  )
});

export class SelectPayment extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.actions.setPayment(+e.target.value);
  }

  renderInnerContent() {
    const { loading, currencies } = this.props;

    if (loading) return <InfoText>Loading...</InfoText>;
    if (!currencies)
      return (
        <InfoText>Select a destination to view available currencies</InfoText>
      );
    if (currencies.length === 0)
      return <InfoText>No currency available for this destination</InfoText>;
    return currencies.map(currency => (
      <PaymentOption
        key={currency.id}
        currency={currency}
        name="currency"
        onChange={this.handleChange}
      />
    ));
  }

  render() {
    return (
      <ContentWrapper>
        <Title>Payment Mean</Title>
        {this.renderInnerContent()}
      </ContentWrapper>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPayment);
