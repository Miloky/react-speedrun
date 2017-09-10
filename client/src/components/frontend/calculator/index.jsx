import React, { Component } from 'react';
import './style.scss';

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      display: '',
      lastKey: '',
    };

    this.updateResult = (event) => {
      let { display, lastKey } = this.state;
      const input = event.target.value;
      if (display === 'Overflow') {
        display = '';
        lastKey = '';
      }
      switch (input) {
        case 'CLEAR':
          display = '';
          lastKey = '';
          break;
        case '=':
          // eval is a shortcut here I wouldn't use if anything other than
          // a basic non-critical calculation for a demo
          if (!display[display.length - 1].match(/[%/*+-.]/gi)) {
            display = eval(display).toString();// eslint-disable-line no-eval
          }
          if (display.length > 15) {
            display = display.slice(0, 14); // non-production quality kludge
          }
          break;
        case '%':
        case '/':
        case '*':
        case '+':
        case '-':
        case '.':
          if (display.length < 14 && !display[display.length - 1].match(/[%/*+-.]/gi)) {
            display += input;
          }
          break;
        default:
          if (display.length < 14) {
            display += input;
          }
          break;
      }
      this.setState({ display, lastKey });
    };
  }

  render() {
    return (
      <div>
        <header className="content__heading">
          <h1>JavaScript Calculator</h1>
        </header>
        <main className="calculator">
          <div className="calculator__display">
            <div className="calculator__header">
              JavaScript Calculator
            </div>
            <div className="calculator__result">
              <input type="text" disabled value={this.state.display} />
            </div>
            <div className="calculator_buttons">
              <div>
                <button onClick={this.updateResult} value="CLEAR" className="calculator__clear">CLEAR</button>
                <button onClick={this.updateResult} value="/">/</button>
                <button onClick={this.updateResult} value="*">*</button>
              </div>
              <div>
                <button onClick={this.updateResult} value="7">7</button>
                <button onClick={this.updateResult} value="8">8</button>
                <button onClick={this.updateResult} value="9">9</button>
                <button onClick={this.updateResult} value="-">-</button>
              </div>
              <div>
                <button onClick={this.updateResult} value="4">4</button>
                <button onClick={this.updateResult} value="5">5</button>
                <button onClick={this.updateResult} value="6">6</button>
                <button onClick={this.updateResult} value="+">+</button>
              </div>
              <div>
                <button onClick={this.updateResult} value="1">1</button>
                <button onClick={this.updateResult} value="2">2</button>
                <button onClick={this.updateResult} value="3">3</button>
              </div>
              <div>
                <button onClick={this.updateResult} value="0">0</button>
                <button onClick={this.updateResult} value=".">.</button>
                <button onClick={this.updateResult} value="=" className="calculator__equals">=</button>
              </div>
            </div>
          </div>
        </main>
      </div>

    );
  }
}

export default Calculator;
