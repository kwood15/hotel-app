import React, { Component, Fragment } from 'react';
import { Flex } from '@rebass/grid';

import Facilities from '../facilities';
import Sort from '../sort';
import HotelItem from './HotelItem';

import { Title } from '../shared/SharedStyles';

class HotelList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotels: [],
      filteredHotels: [],
      starRatingValue: 0,
      facilitySelected: false,
      facilityChosen: ''
    }
  }

  componentDidMount() {
    this.loadData();
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

  handleClick = event => {
    const facilityChosen = event.target.textContent;
    this.setState({
      facilitySelected: true,
      facilityChosen
    }, () => this.filterHotels());
  }

  handleChange = event => {
    if (event.target.value === 'High Rating') {
      this.sortByRatingDesc();
    } else {
      this.sortByRatingAsc();
    }
    this.setState({
      starRatingValue: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  sortByRatingAsc = () => {
    this.setState({
      hotels: this.state.hotels
        .slice(0)
        .sort((a, b) => (a.starRating - b.starRating))
    });
  }

  sortByRatingDesc = () => {
    this.setState({
      hotels: this.state.hotels
        .slice(0)
        .sort((a, b) => (b.starRating - a.starRating))
    });
  }

  filterHotels() {
    let { hotels, filteredHotels, facilityChosen } = this.state;

    hotels.map(hotel => {
      if (hotel.facilities.length && hotel.facilities.indexOf(facilityChosen) === -1) {
        filteredHotels.push(hotel);
        filteredHotels
          .map(filteredItem => filteredItem)
          .filter((filteredItem, filteredId, arr) => arr.indexOf(filteredItem) === filteredId);
          this.setState({
            hotels: filteredHotels
          });
      }
      return filteredHotels;
    });
  }

  renderData(hotels) {
    const { starRatingValue } = this.state;
    return (
      <Flex flexDirection="column" px={4}>
        <Title>Search results for ...</Title>
        <Facilities hotels={hotels} handleClick={this.handleClick} />
        <Sort
          starRatingValue={starRatingValue}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Flex justifyContent="center">
          {hotels.map(hotel => (
            <Flex key={hotel.name} width={[ 1, 1/2, 1/4 ]} justifyContent="center">
              <HotelItem {...hotel} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  }

  renderLoading() {
    return <p>Loading...</p>
  }

  render() {
    const { hotels } = this.state;

    return (
      <Fragment>
        {hotels && hotels.length ? this.renderData(hotels) : this.renderLoading()}
      </Fragment>
    );
  }
}

export default HotelList;
