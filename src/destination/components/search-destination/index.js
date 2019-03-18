import React from 'react';

import { Input } from './styled-components';

const SearchDestination = ({ handleChange }) => (
  <Input
    placeholder="Search for a planet"
    type="text"
    onChange={handleChange}
  />
);

export default SearchDestination;
