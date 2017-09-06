import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const RequestHeader = props => (
  <div>
    <h1>Request Header Microservice</h1>
  </div>
  
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestHeader)