import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import FormTabs from './form_tabs';

class FormContainer extends Component {

  render() {
    return (
      <div>
        <AppBar
          title={"LIFEgame™"}
        />
        <h1>
          LIFEgame™ 2018 Bay Area Camp Registration
        </h1>
        <FormTabs />
      </div>
        );
  }
}

export default FormContainer;
