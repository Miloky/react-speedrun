import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const FileMetadata = props => (
  <div>
    <h1>File Metadata</h1>
  </div>
  
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileMetadata)