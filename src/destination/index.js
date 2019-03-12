import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { resetDestination, setSearch, setDestination } from '../store/actions';

import { Content, StatementText } from './styled-components';
import {
  getFoundDestinations,
  isDestinationLoading,
  getSelectedDestination,
  getSearchKeyword,
} from '../store/selectors';
import PossibleDestination from './components/possible-destination';
import SearchDestination from './components/search-destination';
import SelectedDestination from './components/selected-destination';

const mapStateToProps = state => ({
  matchingDestinations: getFoundDestinations(state),
  destination: getSelectedDestination(state),
  loading: isDestinationLoading(state),
  search: getSearchKeyword(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setSearch,
      setDestination,
      resetDestination,
    },
    dispatch
  ),
});

export class SelectDestination extends Component {
  constructor() {
    super();
    this.filterSearchedDestination = this.filterSearchedDestination.bind(this);
    this.selectDestination = this.selectDestination.bind(this);
  }

  filterSearchedDestination(e) {
    this.props.actions.resetDestination();
    this.props.actions.setSearch(e.target.value);
  }

  selectDestination(destinationId) {
    this.props.actions.setDestination(destinationId);
  }

  computeView() {
    const { matchingDestinations, loading, destination, search } = this.props;

    if (loading) {
      return <StatementText>Loading...</StatementText>;
    }

    if (!search) {
      return <StatementText>Please select a planet</StatementText>;
    }

    if (matchingDestinations.length === 0) {
      return <StatementText>No matching planet was found</StatementText>;
    }

    if (destination) {
      return <SelectedDestination {...destination} />;
    }

    return matchingDestinations.map(destination => (
      <PossibleDestination
        key={destination.id}
        destination={destination}
        onChange={this.selectDestination}
      />
    ));
  }

  render() {
    return (
      <Content>
        <SearchDestination handleChange={this.filterSearchedDestination} />
        {this.computeView()}
      </Content>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectDestination);
