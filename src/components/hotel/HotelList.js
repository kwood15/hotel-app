import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Sort from '../sort';
import Filter from '../filter';
import HotelItem from './HotelItem';

import { HotelsWrapper, HotelsList } from './HotelsStyles';
import { FiltersWrapper, FiltersList } from '../filter/FiltersStyles';

// import hotels from '../../data/hotels';

class HotelList extends Component {
  state = {
    hotels: [],
    starRatingValue: 0
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

  handleChange = event => {
    this.setState({
      starRatingValue: event.target.value
    });
    console.log(event.target);
  }

  handleSubmit = event => {
    event.preventDefault();
    alert('star rating' + this.state.starRatingValue);
  }

  renderData(hotels) {
    const { starRatingValue } = this.state;
    const { filterKey } = this.props;

    const HOTEL_FILTERS = {
      'BY_ACTIVE': hotels.map(x => x.name),
      'BY_FACILITY': hotels.map(x => x.facilities.map(y => y))
    };

    const filteredHotels = hotels.filter(hotel => HOTEL_FILTERS[filterKey]);

    if (hotels && hotels.length) {
      return (
        <HotelsWrapper className="search-results hotels">
          <h1>Search results for ...</h1>

          <FiltersWrapper className="hotels__filters">
            <FiltersList>
              {hotels.map(hotel => (
                <Filter key={hotel.name} {...hotel} />
              ))}
            </FiltersList>
          </FiltersWrapper>

          <div className="hotels__sort-by">
            <form onSubmit={this.handleSubmit}>
              <label>Sort by:</label>
              <select value={starRatingValue} onChange={this.handleChange}>
                {hotels.map(hotel => (
                  <option value={hotel.starRating}>{hotel.starRating}</option>
                ))}
              </select>
              <input type="submit" value="Submit" />
            </form>
          </div>

          <HotelsList className="hotels__list">
            {filteredHotels.map(hotel => (
              <HotelItem key={hotel.name} {...hotel} />
            ))}
          </HotelsList>
        </HotelsWrapper>
      );
    }
  }

  renderLoading() {
    return <p>Loading...</p>
  }

  render() {
    const { hotels } = this.state;

    return (
      hotels && hotels.length ? this.renderData(hotels) : this.renderLoading()
    );
  }
}

export default HotelList;
