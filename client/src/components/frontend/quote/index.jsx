import React, { Component } from 'react';
import './style.scss';

class Quote extends Component {
  constructor() {
    super();

    this.state = {
      quoteAPI: 'https://random-quote-generator.herokuapp.com/api/quotes/random',
      tweet: 'https://twitter.com/intent/tweet?via=p1xt&hashtags=ChinguCohorts&text=',
      trimmedTweet: '',
      quote: {},
    };
    this.fetchQuote();
  }
  getTweet = () => {
    let tweet = this.state.tweet + this.state.quote.quote;
    const num = 184;
    if (tweet.length > num) {
      if (tweet.length < 3 || num < 3) {
        tweet = tweet.substr(0, num);
        tweet += '...';
      } else {
        tweet = tweet.substr(0, num - 3);
        tweet += '...';
      }
    }
    return tweet;
  }

  fetchQuote = async () => {
    const response = await fetch(this.state.quoteAPI);
    const quote = await response.json();
    if (quote.quote.length > 0) {
      this.setState({ quote });
      const trimmedTweet = this.getTweet();
      this.setState({ trimmedTweet });
    }
  }


  render() {
    return (
      <section>
        <header className="content__heading">
          <h1>Random Quote Machine</h1>
        </header>
        <section className="quoteMachine">
          <div>
            <button className="btn-secondary" onClick={this.fetchQuote}>Get Quote</button>
            <button className="btn-primary quoteMachine__tweet"><a href={this.state.trimmedTweet} target="_blank">Tweet</a></button>
          </div>
          <blockquote>
            {this.state.quote.quote}
          </blockquote>
          <p>{this.state.quote.author}</p>
        </section>
      </section>
    );
  }
}

export default Quote;
