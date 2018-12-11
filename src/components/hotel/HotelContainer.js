import React, { Component } from 'react';
import { Flex } from '@rebass/grid';
import Sort from '../sort';
import Facilities from '../facilities';
import HotelList from './HotelList';

class HotelContainer extends Component {
  constructor() {
    super();
    this.state = {
      hotels: [],
      filteredHotels: [],
      checkedItems: new Map(),
      starRatingValue: ''
    };
  }

  componentDidMount() {
    this.loadData();
  }

  handleFacilityChange = (event) => {
    const facility = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(facility, isChecked)
    }));
    this.filterHotels(facility);
  }

  handleSortByChange = (event) => {
    if (event.target.value === 'High Rating') {
      this.sortByRatingDesc();
    } else {
      this.sortByRatingAsc();
    }
    this.setState({
      starRatingValue: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  sortByRatingAsc = () => {
    const { hotels } = this.state;
    this.setState({
      hotels: hotels.slice(0).sort((a, b) => (a.starRating - b.starRating))
    });
  }

  sortByRatingDesc = () => {
    const { hotels } = this.state;
    this.setState({
      hotels: hotels.slice(0).sort((a, b) => (b.starRating - a.starRating))
    });
  }

  loadData() {
    fetch('/data/hotels.json')
      .then(response => response.json())
      .then(data => this.saveData(data))
      .catch(error => console.error(error));
  }

  saveData(data) {
    this.setState({
      hotels: data
    });
  }

  filterHotels(facility) {
    const { hotels } = this.state;
    const filteredHotels = hotels.filter(hotel => hotel.facilities.indexOf(facility) > -1);
    this.setState({
      filteredHotels
    });
  }

  render() {
    const {
      hotels,
      filteredHotels,
      starRatingValue,
      checkedItems
    } = this.state;
    return (
      <Flex flexDirection="column" alignItems="flex-end" width={1}>
        <Sort
          starRatingValue={starRatingValue}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleSortByChange}
        />
        <Flex width={1}>
          <Facilities
            hotels={hotels}
            handleFacilityChange={this.handleFacilityChange}
            checkedItems={checkedItems}
          />
          <HotelList
            hotels={hotels}
            filteredHotels={filteredHotels}
          />
        </Flex>
      </Flex>
    );
  }
}

export default HotelContainer;