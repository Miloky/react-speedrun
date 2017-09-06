import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const DataMap = props => (
  <div>
    <h1>Data Map</h1>
  </div>
  
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataMap)