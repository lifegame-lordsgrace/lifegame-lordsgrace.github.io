import React, { Component } from 'react';
import ReactDom from 'react-dom';

import FlatButton from 'material-ui/FlatButton';

class PhotoUploadForm extends Component {

  _openFileUploadDialog() {
    ReactDom.findDOMNode(this.refs.imageUpload).click();
  }

  render() {
    return (
      <FlatButton
          label="Choose an Image"
          primary={true}
          onClick={() => {this._openFileUploadDialog();}}
          >
        <input
          ref="imageUpload"
          id="imageUploadButton" type="file"
          style={{display: "none"}}
          /*TODO: handle file upload here*/
          onChange={() => {}}/>
      </FlatButton>
        );
  }
}

export default PhotoUploadForm;
