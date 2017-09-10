import React, { Component } from 'react';
import './style.scss';

class Pomodoro extends Component {
  constructor() {
    super();

    this.state = {
      sessionLength: 25 * 60,
      breakLength: 5 * 60,
      remainingTime: 25 * 60,
      interval: null,
      activity: 'session',
    };
  }

  displayRemainingTime = () => {
    const remainingTime = this.state.remainingTime;
    const h = Math.floor(+remainingTime / 3600).toString().padStart(2, '0');
    const m = Math.floor((+remainingTime % 3600) / 60).toString().padStart(2, '0');
    const s = Math.floor((+remainingTime % 3600) % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  }

  resumeCountdown = () => {
    this.setState({
      interval: setInterval(() => {
        this.setState({ remainingTime: this.state.remainingTime -= 1 });
        if (this.state.remainingTime === 0) {
          if (this.state.activity === 'session') {
            this.setState({ remainingTime: this.state.breakLength, activity: 'break' });
          } else {
            this.setState({ remainingTime: this.state.sessionLength, activity: 'session' });
          }
        }
      }, 1000),
    });
  }

  pauseCountdown = () => {
    clearInterval(this.state.interval);
  }

  resetCountdown = () => {
    clearInterval(this.state.interval);
    this.setState({ remainingTime: this.state.sessionLength, activity: 'session' });
  }

  increaseSessionLength = () => {
    this.setState({
      sessionLength: this.state.sessionLength += 60,
      remainingTime: (this.state.activity === 'session' ? this.state.remainingTime += 60 : this.state.remainingTime),
    });
  };

  decreaseSessionLength = () => {
    if (this.state.sessionLength > 60) {
      this.setState({
        sessionLength: this.state.sessionLength -= 60,
        remainingTime: (this.state.activity === 'session' ? this.state.remainingTime -= 60 : this.state.remainingTime),
      });
    }
  }

  increaseBreakLength = () => {
    this.setState({
      breakLength: this.state.breakLength += 60,
      remainingTime: (this.state.activity === 'break' ? this.state.remainingTime += 60 : this.state.remainingTime),
    });
  };

  decreaseBreakLength = () => {
    if (this.state.breakLength > 60) {
      this.setState({
        breakLength: this.state.breakLength -= 60,
        remainingTime: (this.state.activity === 'break' ? this.state.remainingTime -= 60 : this.state.remainingTime),
      });
    }
  }

  render() {
    return (
      <section>
        <header className="content__heading">
          <h1>Pomodoro Clock</h1>
        </header>
        <div className="pomodoro">
          <div className="pomodoro__heading">
            Pomodoro Clock
          </div>
          <div className="">
            <h3 className="">{`${this.state.activity}`} - {this.displayRemainingTime()}</h3>
            <div className="pomodoro__actions">
              <button onClick={this.resumeCountdown} className="">Start</button>
              <button onClick={this.pauseCountdown} className="">Pause</button>
              <button onClick={this.resetCountdown} className="">Reset</button>
            </div>
            <div>
              <h3>Session</h3>
              <button onClick={this.increaseSessionLength} className="">+</button>
              <span className="pomodoro__label">{this.state.sessionLength / 60}</span>
              <button onClick={this.decreaseSessionLength} className="">-</button>
            </div>
            <div>
              <h3>Break</h3>
              <button onClick={this.increaseBreakLength} className="">+</button>
              <span className="pomodoro__label">{this.state.breakLength / 60}</span>
              <button onClick={this.decreaseBreakLength} className="">-</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Pomodoro;
