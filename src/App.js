import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
<<<<<<< HEAD
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CitySearch />
                <EventList />
            </div>
        );
    }
=======

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList />
        <NumberOfEvents />
      </div>
    );
  }
>>>>>>> 35bba28c40bff285db1e83a3da5b1d5e764c6a2e
}

export default App;