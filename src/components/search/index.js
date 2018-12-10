import React, { Component } from 'react';
import { Flex } from '@rebass/grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchInput, SearchButton } from './SearchStyles';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      apiKey: '12345',
      searchTerm: '',
      searchUrl: ''
    };
  }

  handleKeyUp = (event) => {
    const { searchTerm } = this.state;
    if (event.key === 'Enter' && searchTerm !== '') {
      const searchUrl = `search/multi?query=${searchTerm}&api_key=${this.apiKey}`;
      this.setState({
        searchUrl
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    event.preventDefault();
    alert(`submitted: ${searchTerm}`);
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <Flex as="form" onSubmit={this.handleSubmit} className="Search">
        <SearchInput
          onKeyUp={this.handleKeyUp}
          onChange={this.handleChange}
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
