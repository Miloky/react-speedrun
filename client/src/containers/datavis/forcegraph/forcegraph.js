import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ForceGraph = props => (
  <div>
    <h1>Force Directed Graph</h1>
  </div>
  
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForceGraph)