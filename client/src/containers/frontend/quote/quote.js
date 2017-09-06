import React, { Component } from 'react';
import { Card, CardActions, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './quote.css';

class Quote extends Component {
  state = {
    source: "https://quotes.rest/qod.json?category=",
    quote: { text: '', author: ''}
    }
  async getQuote() {
    var catagories = ['inspire', 'funny', 'students', 'life', 'management', 'sports'];
    var randomCategory = Math.floor((Math.random() * (catagories.length - 1) + 0));

    const response = await fetch(this.state.source + catagories[randomCategory]);
    const data = await response.json();;
    this.setState({
      quote: { 
        text: data.contents.quotes[0].quote,
        author: data.contents.quotes[0].author
      }
    })
  }
  async componentDidMount() {
    this.getQuote();
  }
  render() {
    return (
      <div className="quote">
        <header className="quote__header">
          <h1>Random Quote Machine</h1>
        </header>
        <section className="quote__display">
          <Card className="quote__card">
            <CardText className="quote__card__text">
              <div className="quote__text">{this.state.quote.text}</div>
              <div className="quote__author">Author - {this.state.quote.author}</div>
            </CardText>
            <CardActions className="quote__card__actions">
              <RaisedButton label="Tweet" primary={true} />
              <RaisedButton onClick={e => {
                e.preventDefault();
                this.getQuote();
              }} label="Next" secondary={true}/>
            </CardActions>
          </Card>
        </section>

      </div>
    )
  }
}


export default Quote;