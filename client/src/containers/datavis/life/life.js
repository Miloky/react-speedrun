import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Life = props => (
  <div>
    <h1>Game of Life</h1>
  </div>
  
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Life)