import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Button } from '../shared/SharedStyles';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      apiKey: '12345',
      searchTerm: '',
      searchUrl: ''
    };
  }

  handleKeyUp = event => {
    if (event.key === 'Enter' && this.state.searchTerm !== '') {
      const searchUrl = `search/multi?query=${this.state.searchTerm}&api_key=${this.apiKey}`;
      this.setState({
        searchUrl
      });
    }
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
    console.log(this.state.searchTerm);
  }

  handleSubmit = event => {
    event.preventDefault();
    alert(`submitted: ${this.state.searchTerm}`);
  }

  render() {
    return (
      <form id="search" onSubmit={this.handleSubmit} className="Search">
        <Input
          onKeyUp={this.handleKeyUp}
          onChange={this.handleChange}
          type="search"
          placeholder="Find a hotel..."
          value={this.state.searchTerm}
        />
        <Button type="submit">
          <FontAwesomeIcon icon="search" size="sm" color="white" />
        </Button>
      </form>
    );
  }
}

export default Search;
