import React, { Component } from 'react';
import './style.scss';

class Weather extends Component {
  constructor() {
    super();

    this.state = {
      weather: null,
      tempUnit: 'C',
      temp: '',
    };
    this.fetchWeather();
  }

  fetchWeather = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const weatherAPI = `https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
      const response = await fetch(weatherAPI);
      const weather = await response.json();
      this.setState({
        weather,
        temp: `${weather.main.temp} C`,
      });
    }, () => {
      this.setState({ error: 'your ad-blocker is blocking the app from finding your location' });
    });
  }

  switchTempUnit = () => {
    if (this.state.tempUnit === 'F') {
      this.setState({ tempUnit: 'C', temp: `${this.state.weather.main.temp} C` });
    } else {
      this.setState({ tempUnit: 'F', temp: `${Math.round(((this.state.weather.main.temp * 9) / 5) + 32)} F` });
    }
  }

  render() {
    return (
      <section>
        <header className="content__heading">
          <h1>Local Weather</h1>
        </header>
        {this.state.weather &&
          <section className="weather">

            <h2>{this.state.weather.name}</h2>
            <img
              src={this.state.weather.weather[0].icon}
              alt={this.state.weather.weather[0].description}
            />
            <p>{this.state.weather.weather[0].description}</p>
            <p>{this.state.temp}</p>
            <button onClick={this.switchTempUnit} className="btn-secondary">Switch C/F</button>
          </section>}
        {this.state.error &&
          <section className="weather">{this.state.error}</section>
        }
      </section>
    );
  }
}

export default Weather;
