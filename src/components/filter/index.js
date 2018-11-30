import React, { Component } from 'react';
import { FiltersListItem } from './FiltersStyles';

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterKey: 'BY_ACTIVE',
    }
  }

  handleClick = () => {
    this.setState({
      filterKey: 'BY_FACILITY'
    });
    console.log(this.state.filterKey);
  }

  render() {
    const { facilities } = this.props;

    return (
      <FiltersListItem>
        {facilities.map((facility, index) => (
          <button key={index} onClick={this.handleClick}>{facility}</button>
        ))}
      </FiltersListItem>
    );
  }
}

export default Filter;
