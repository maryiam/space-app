import React from 'react';

import { Avatar, Destination, Name } from './styled-components';

const PossibleDestination = ({ destination = {}, onChange }) => {
  const { id = null, thumb = null, name = 'unknown' } = destination;

  return (
    <Destination onClick={() => onChange(id)}>
      <Avatar src={thumb} />
      <Name>{name}</Name>
    </Destination>
  );
};

export default PossibleDestination;
