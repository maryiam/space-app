import React from 'react';

import { Content, Image, Description, Name, Info } from './styled-components';

const SelectedDestination = ({
  name = 'unknown',
  img = null,
  climate = 'N/A',
  gravity = 'N/A',
  population = 'N/A',
  price = 'N/A'
}) => (
  <Content>
    <Image src={img} />
    <Description>
      <Name>{name}</Name>
      <Info>Climate: {climate}</Info>
      <Info>Gravity: {gravity}</Info>
      <Info>Population: {population}</Info>
      <Info>Price: {price}</Info>
    </Description>
  </Content>
);

export default SelectedDestination;
