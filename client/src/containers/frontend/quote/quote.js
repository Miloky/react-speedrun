import React, { Component } from 'react';
import { Card, CardActions, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './quote.css';

class Quote extends Component {
  state = {
    source: 'https://quotes.rest/qod.json?category=',
    quote: { text: '', author: '', twitterLink: ''}
    }
  async getQuote() {
    const catagories = ['inspire', 'funny', 'students', 'life', 'management', 'sports'];
    const randomCategory = Math.floor((Math.random() * (catagories.length - 1) + 0));

    const response = await fetch(this.state.source + catagories[randomCategory]);
    const data = await response.json();
    this.setState({
      quote: { 
        text: data.contents.quotes[0].quote,
        author: data.contents.quotes[0].author,
        twitterLink: this.tweetThis(data.contents.quotes[0].quote)
      }
    })
  }
  async componentDidMount() {
    this.getQuote();
  }
  tweetThis(quote) {
    let value = 'https://twitter.com/intent/tweet?via=P1xt&hashtags=FreeCodeCamp&text=' + quote;
    const num = 185;
    if (value.length > num) {
      if (value.length < 3 || num < 3) {
        value = value.substr(0,num) + '...';
      } else {
        value = value.substr(0,num-3) + '...';
      }
    }
    return value;
  }
  render() {
    return (
      <div className='quote'>
        <header className='quote__header'>
          <h1>Random Quote Machine</h1>
        </header>
        <section className='quote__display'>
          <Card className='quote__card'>
            <CardText className='quote__card__text'>
              <div className='quote__text'>{this.state.quote.text}</div>
              <div className='quote__author'>Author - {this.state.quote.author}</div>
            </CardText>
            <CardActions className='quote__card__actions'>
              <RaisedButton target='_blank' 
                            href={this.state.quote.twitterLink} 
                            label='Tweet' 
                            primary={true} />
              <RaisedButton onClick={e => { e.preventDefault(); this.getQuote(); }} 
                            label='Next' 
                            secondary={true}/>
            </CardActions>
          </Card>
        </section>
        <section className='citations'>
          <p>Source available on <a href='https://github.com/P1xt/react-speedrun'>Github</a></p>
          <p>Uses the <a href='https://quotes.rest/'>Quotes REST API</a></p>
        </section>
      </div>
    )
  }
}
export default Quote;
