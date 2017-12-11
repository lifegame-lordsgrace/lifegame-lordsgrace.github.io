import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './logo.svg';
import './App.css';
import FormContainer from './components/form_container';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <FormContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
