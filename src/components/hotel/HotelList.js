import React, { Component, Fragment } from 'react';
import { Flex } from '@rebass/grid';

import Sort from '../sort';
import HotelItem from './HotelItem';
import Container from '../shared/Container';
import Checkbox from '../form/Checkbox';

import { Title, Form } from '../shared/SharedStyles';
import { FacilityGroup, FacilityLabel } from '../facilities/FacilityStyles';
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
        return filteredHotels.push(hotel);
      }
      return false;
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
          <Flex as="section" className="hotel-results">
            <Flex width={[1, 1/4]}  mr={4}>
              <h3>Facilities</h3>
              <Form className="facilities">
                {hotels.map(hotel => (
                  <Fragment key={hotel.name}>
                    {hotel.facilities.map((facility, index) => (
                      <FacilityGroup className="facilities__group" key={index}>
                        <div className="checkbox">
                          <Checkbox id={facility} name={facility} checked={checkedItems.get(facility)} onChange={this.handleFacilityChange} />
                          <FacilityLabel className="facilities__label checkbox__label" htmlFor={facility} key={index} aria-label={facility}>
                            {facility}
                          </FacilityLabel>
                        </div>
                      </FacilityGroup>
                    ))}
                  </Fragment>
                ))}
              </Form>
            </Flex>
            <Flex width={[1, 3/4]} flexDirection="column">
              <HotelListSection className="hotel-results">
                <Title>Hotels in Manchester</Title>
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
