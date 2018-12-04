import React, { Component, Fragment } from 'react';
import { Flex, Box } from '@rebass/grid';

import Sort from '../sort';
import HotelItem from './HotelItem';
import Container from '../shared/Container';
import Checkbox from '../form/Checkbox';

import { Title } from '../shared/SharedStyles';
import { HotelListSection } from './HotelStyles';

class HotelList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotels: [],
      filteredHotels: [],
      starRatingValue: 0,
      checkedItems: new Map()
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

  handleFacilityChange = event => {
    const facility = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(facility, isChecked)
    }));
   this.filterHotels(facility);
  }

  handleSortByChange = event => {
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

  filterHotels(facility) {
    const { hotels, filteredHotels } = this.state;
    hotels.map(hotel => {
      if (hotel.facilities.includes(facility)) {
        filteredHotels.push(hotel);
      }
      return filteredHotels;
    });
    this.setState({
      hotels: filteredHotels
    });
  }

  renderData(hotels) {
    const { starRatingValue, checkedItems } = this.state;
    return (
      <Container>
        <Flex flexDirection="column" px={4}>
          <Flex justifyContent="flex-end" alignItems="center" my={4}>
            <Sort
              starRatingValue={starRatingValue}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleSortByChange}
            />
          </Flex>
          <Flex>
            <Flex width={[1, 1/4]}  mr={4}>
              {hotels.map(hotel => (
                <Box as="form" key={hotel.name}>
                  {hotel.facilities.map((facility, index) => (
                    <label key={index}>
                      {facility}
                      <Checkbox name={facility} checked={checkedItems.get(facility)} onChange={this.handleFacilityChange} />
                    </label>
                ))}
                </Box>
              ))}
            </Flex>
            <Flex width={[1, 3/4]} flexDirection="column">
              <HotelListSection className="hotel-results">
                <Title>Search results for ...</Title>
                {hotels.map(hotel => (
                  <HotelItem key={hotel.name} {...hotel} />
                ))}
              </HotelListSection>
            </Flex>
          </Flex>
        </Flex>
      </Container>
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
