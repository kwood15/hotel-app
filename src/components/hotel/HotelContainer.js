import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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
      starRatingValue: '',
      uniqueFacilities: []
      // searchedHotels: []
    };
  }

  componentDidMount() {
    this.loadData();
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

  handleFacilityChange = (event) => {
    const facility = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(facility, isChecked)
    }));
    this.filterHotels(facility);
  }

  filterHotels(facility) {
    const { hotels } = this.state;
    const filteredHotels = hotels.filter(hotel => hotel.facilities.indexOf(facility) > -1);
    this.setState({
      filteredHotels
    });
  }

  filterDuplicateFacilities() {
    const { hotels } = this.state;
    const uniqueFacilities = [];
    hotels.forEach(hotel => hotel.facilities.forEach((facility) => {
      if (!uniqueFacilities.includes(facility)) {
        uniqueFacilities.push(facility);
      }
    }));
    this.setState({
      uniqueFacilities
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
    this.filterDuplicateFacilities();
  }

  // searchHotels = () => {
  //   const { hotels } = this.state;
  //   const { searchTerm } = this.props;
  //   const searchedHotels = hotels.filter((hotel) => {
  //     return hotel.name.toLowerCase().search(searchTerm.toLowerCase()) !== -1;
  //   });
  //   this.setState({
  //     searchedHotels
  //   });
  // }

  render() {
    const {
      hotels,
      filteredHotels,
      starRatingValue,
      checkedItems,
      uniqueFacilities
      // searchedHotels
    } = this.state;

    return (
      <Flex flexDirection="column" alignItems="flex-end" width={1} className="hotel-container">
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
            uniqueFacilities={uniqueFacilities}
          />
          <HotelList
            hotels={hotels}
            filteredHotels={filteredHotels}
             // {searchedHotels={searchedHotels}
          />
        </Flex>
      </Flex>
    );
  }
}

export default HotelContainer;

// HotelContainer.propTypes = {
//   searchTerm: PropTypes.string
// };
