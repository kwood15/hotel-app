import React, { Component } from 'react';
import { Flex } from '@rebass/grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchInput, SearchButton } from './SearchStyles';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
  }

  setSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <Flex as="form" onSubmit={this.handleSubmit} className="Search">
        <SearchInput
          onChange={this.setSearchTerm}
          type="search"
          placeholder="Find a hotel..."
          value={searchTerm}
        />
        <SearchButton type="submit">
          <FontAwesomeIcon icon="search" size="sm" color="white" />
        </SearchButton>
      </Flex>
    );
  }
}

export default Search;
