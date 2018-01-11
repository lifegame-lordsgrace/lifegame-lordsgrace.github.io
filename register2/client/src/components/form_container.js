import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import FormTabs from './form_tabs';
import * as FormActions from '../actions/form_actions';

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
        <FormTabs
          form={this.props.form}
          photo={this.props.photo}
          onUpdateChineseName={(newName) =>
            {this.props.formActions.updateChineseName(newName);}}
          onUpdateEnglishFirstName={(newName) =>
            {this.props.formActions.updateEnglishFirstName(newName);}}
          onUpdateEnglishLastName={(newName) =>
            {this.props.formActions.updateEnglishLastName(newName);}}
          onUpdateGender={(newGender) =>
            {this.props.formActions.updateGender(newGender);}}
          onUpdateAge={(newAge) => {this.props.formActions.updateAge(newAge);}}
          onUpdateMarriageStatus={(marriageStatus) =>
            {this.props.formActions.updateMarriageStatus(marriageStatus);}}
          onUpdateReligionStatus={(religionStatus) =>
            {this.props.formActions.updateReligionStatus(religionStatus);}}
          onUploadPhoto={(file) => {this.props.formActions.uploadPhoto(file);}}
          onSubmitForm={() => {this.props.formActions.submitForm();}}
        />
      </div>
        );
  }
}

function mapStateToProps(state, prop) {
  return {
    form: state.form.inputs,
    photo: state.form.photo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    formActions: bindActionCreators(FormActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
