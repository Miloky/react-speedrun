import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Tictactoe = props => (
  <div>
    <h1>Tic Tac Toe</h1>
  </div>
  
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tictactoe)