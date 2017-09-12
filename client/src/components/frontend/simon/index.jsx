import React, { Component } from 'react';
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

  playSound = (input) => () => {
    switch (input) {
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
  }
  playGreen() {
    this.playSound('Green');
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
            <div className="simon__button green" onClick={this.playSound('Green')} role="button" tabIndex={0} />
            <div className="simon__button yellow" onClick={this.playSound('Yellow')} role="button" tabIndex={0} />
            <div className="simon__button red" onClick={this.playSound('Red')} role="button" tabIndex={0} />
            <div className="simon__button blue" onClick={this.playSound('Blue')} role="button" tabIndex={0} />
          </div>
        </section>
      </section>
    );
  }
}


export default Simon;
