import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  state = { apiText: '' }

  async componentDidMount() {
    const response = await fetch('/api');
    const apiText = await response.json();

    this.setState({ apiText: apiText });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
        <p>{this.state.apiText}</p>
      </div>
    );
  }
}

export default App;