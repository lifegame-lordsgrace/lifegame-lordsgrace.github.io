import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

import FlatButton from 'material-ui/FlatButton';

class PhotoUploadForm extends Component {

  _openFileUploadDialog() {
    ReactDom.findDOMNode(this.refs.imageUpload).click();
  }

  render() {
    return (
      <div>
        <img src={this.props.photo.url} alt="" />
        <FlatButton
            label="Choose an Image"
            primary={true}
            onClick={() => {this._openFileUploadDialog();}}
            >
          <input
            ref="imageUpload"
            id="imageUploadButton" type="file"
            style={{display: "none"}}
            onChange={(e) => {
              if (e.target.files.length === 0) { return; }
              this.props.onFileSelected(e.target.files[0]);}}/>
        </FlatButton>
      </div>
    );
  }
}

PhotoUploadForm.propType = {
  photo: PropTypes.object,
  onFileSelected: PropTypes.func,
}

export default PhotoUploadForm;
