import React, { Component } from 'react';
import HotelItem from './HotelItem';

import { HotelsWrapper, HotelsList } from './HotelsStyles';
import { FiltersWrapper, FiltersList, FiltersListItem } from '../filter/FiltersStyles';

class HotelList extends Component {
  constructor(props) {
  super(props)
    this.state = {
      hotels: [],
      starRatingValue: 0,
      filterKey: 'BY_ACTIVE',
      filterValue: ''
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
    })
  }

  handleClick = event => {
    this.setState({
      filterKey: 'BY_FACILITY',
      filterValue: event.target.value
    });
    // console.log(this.state.filterValue);
  }

  handleChange = event => {
    this.setState({
      starRatingValue: event.target.value
    });
    // console.log(event.target);
  }

  handleSubmit = event => {
    event.preventDefault();
    alert(`star rating: ${this.state.starRatingValue}`);
  }

  renderData(hotels) {
    const { starRatingValue } = this.state;
    return (
      <HotelsWrapper className="search-results hotels">
        <h1>Search results for ...</h1>

        <FiltersWrapper className="filters">
          <FiltersList>
            {hotels.map(hotel => (
              <FiltersListItem key={hotel.name}>
                {hotel.facilities.map((facility, index) => (
                  <button key={index} onClick={this.handleClick} value={facility}>{facility}</button>
                ))}
              </FiltersListItem>
            ))}
          </FiltersList>
        </FiltersWrapper>

        <div className="sort-by">
          <form onSubmit={this.handleSubmit}>
            <label>Sort by:</label>
            <select value={starRatingValue} onChange={this.handleChange}>
              {hotels.map(hotel => (
                <option key={hotel.name} value={hotel.starRating}>{hotel.starRating}</option>
              ))}
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>

        <HotelsList className="hotels-list">
          {hotels.map(hotel => (
            <HotelItem key={hotel.name} {...hotel} />
          ))}
        </HotelsList>
      </HotelsWrapper>
    );
  }

  renderLoading() {
    return <p>Loading...</p>
  }

  render() {
    const { hotels } = this.state;

    // const HOTEL_FILTERS = {
    //   'BY_ACTIVE': hotels.map(hotel => hotel.name),
    //   'BY_FACILITY': hotels.map(hotel => hotel.facilities)
    // };

    // const filteredHotels = HOTEL_FILTERS[filterKey];
    // console.log(filteredHotels)

    return (
      hotels && hotels.length ? this.renderData(hotels) : this.renderLoading()
    );
  }
}

export default HotelList;
