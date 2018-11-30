import React, { Component } from 'react';
import HotelItem from './HotelItem';

import { HotelsWrapper, HotelsList } from './HotelsStyles';
import { FiltersWrapper, FiltersList, FiltersListItem } from '../filter/FiltersStyles';

class HotelList extends Component {
  constructor(props) {
  super(props)
    this.state = {
      hotels: [],
      filterValue: '',
      starRatingValue: 0
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
      hotels: this.state.hotels.filter(x => x)
    });
    console.log(this.state.hotels);
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
            <button onClick={this.sortByRatingDesc}>High Rating</button>
            <button onClick={this.sortByRatingAsc}>Low Rating</button>
          </form>
        </div>

        <div className="sort-by">
          <form onSubmit={this.handleSubmit}>
            <label>Sort by:</label>
            <select value={starRatingValue} onChange={this.handleChange}>
              <option value="High Rating">High Rating</option>
              <option value="Low Rating">Low Rating</option>
            </select>
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

    return (
      hotels && hotels.length ? this.renderData(hotels) : this.renderLoading()
    );
  }
}

export default HotelList;
