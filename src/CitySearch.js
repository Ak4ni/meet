import React, { Component } from 'react';

class CitySearch extends Component {
<<<<<<< HEAD
  state = {
    query: '',
    suggestions: [],
  }
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
  }
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion
    });
  }
  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
          <ul className="suggestions">
  {this.state.suggestions.map((suggestion) => (
    <li
      key={suggestion}
      onClick={() => this.handleItemClicked(suggestion)}
    >{suggestion}</li>
  ))}
  <li>
    <b>See all cities</b>
  </li>
</ul>
      
=======

    state = {
        query: '',
        suggestions: []
      }

      handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
          });
        this.setState({ 
            query: value,
            suggestions, 
        });
      };

      handleItemClicked = (suggestion) => {
        this.setState({
          query: suggestion
        });
      }
      
  render() {
    return (
      <div className="CitySearch">
          <input
        type="text"
        className="city"
        value={this.state.query}
        onChange={this.handleInputChanged}
      />
      <ul className="suggestions">
        {this.state.suggestions.map((suggestion) => (
          <li
                    key={suggestion}
                    onClick={() => this.handleItemClicked(suggestion)}
                  >{suggestion}</li>
                ))}
            <li key='all'>
                <b>See all cities</b>
            </li>
      </ul>
>>>>>>> 35bba28c40bff285db1e83a3da5b1d5e764c6a2e
      </div>
    );
  }
}

export default CitySearch;