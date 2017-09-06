import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, CardActions, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './quote.css';

const Quote = props => (
  <div className="quote">
    <header className="quote__header">
      <h1>Random Quote Machine</h1>
    </header>
    <section className="quote__display">
      <Card className="quote__card">
        <CardText>
          <div className="quote__text">{props.quote.text}</div>
          <div className="quote__author">{props.quote.author}</div>
        </CardText>
        <CardActions>
          <FlatButton label="Tweet" />
          <FlatButton label="Next" />
        </CardActions>
      </Card>
    </section>

  </div>

)

const mapStateToProps = state => ({
  quote: { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                author: "some author"}
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote)