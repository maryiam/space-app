import React from 'react';

import { Label, Input, VisualInput } from './styled-components';

const PaymentOption = ({ currency, name, onChange }) => (
  <Label htmlFor={`${name}-${currency.id}`}>
    <Input
      type="radio"
      id={`${name}-${currency.id}`}
      name={name}
      value={currency.id}
      onChange={onChange}
    />
    <VisualInput>{currency.name}</VisualInput>
  </Label>
);

export default PaymentOption;
