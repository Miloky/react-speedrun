import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import greenSound from '../../../assets/audio/simonGreen.mp3';
import yellowSound from '../../../assets/audio/simonYellow.mp3';
import blueSound from '../../../assets/audio/simonBlue.mp3';
import redSound from '../../../assets/audio/simonRed.mp3';

const colors = ['Red', 'Yellow', 'Blue', 'Green'];
const soundGreen = new Audio(greenSound);
const soundRed = new Audio(redSound);
const soundYellow = new Audio(yellowSound);
const soundBlue = new Audio(blueSound);

class Simon extends Component {
  constructor() {
    super();
    soundGreen.load();
    soundRed.load();
    soundYellow.load();
    soundBlue.load();
    this.state = {
      colors: this.getRandomColors(),
    };
  }

  getRandomColors = () => {
    const result = [];
    for (let i = 0; i < 20; i += 1) {
      result.push(colors[Math.floor(Math.random() * 4)]);
    }
    return result;
  }

  render() {
    return (
      <section>
        <header className="content__heading">
          <h1>Simon Game</h1>
        </header>
        <section className="simon">

          <div className="simon__game">
            <div className="simon__controls">
              <button className="simon__controls__start">Start</button>
            </div>
            <SimonButton color="Green" />
            <SimonButton color="Yellow" />
            <SimonButton color="Red" />
            <SimonButton color="Blue" />
          </div>
        </section>
      </section>
    );
  }
}
const SimonButton = (props) => {
  const playSound = () => {
    switch (props.color) {
      case 'Green':
        soundGreen.play();
        break;
      case 'Yellow':
        soundYellow.play();
        break;
      case 'Red':
        soundRed.play();
        break;
      case 'Blue':
        soundBlue.play();
        break;
      default:
        break;
    }
  };
  const selected = () => {
    const toAnimate = document.getElementById(`simon__button--${props.color.toLowerCase()}`);
    toAnimate.classList.add('simon__button--animate');
    playSound();
    setTimeout(() => {
      toAnimate.classList.remove('simon__button--animate');
    }, 500);
  };
  const keyPress = (event) => {
    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      selected();
    }
  };
  return (
    <div
      id={`simon__button--${props.color.toLowerCase()}`}
      className={`simon__button ${props.color.toLowerCase()}`}
      onClick={selected}
      role="button"
      aria-pressed="false"
      onKeyDown={keyPress}
      tabIndex={0}
    />
  );
}
SimonButton.propTypes = {
  color: PropTypes.string.isRequired,
};

SimonButton.defaultProps = {
  color: null,
};
export default Simon;
