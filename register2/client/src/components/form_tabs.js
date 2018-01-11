import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import PersonalInfoForm from './personal_info_form';
import PaymentForm from './payment_form';

class FormTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Camp Info" value={0} />
          <Tab label="Personal Info" value={1} />
          <Tab label="Payment" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            Swipe to see the next slide
          </div>
          <PersonalInfoForm
            form={this.props.form}
            photo={this.props.photo}
            onUpdateChineseName={(newName) =>
              this.props.onUpdateChineseName(newName)}
            onUpdateEnglishLastName={(newName) =>
              this.props.onUpdateEnglishLastName(newName)}
            onUpdateEnglishFirstName={(newName) =>
              {this.props.onUpdateEnglishFirstName(newName)}}
            onUpdateGender={(gender) => {this.props.onUpdateGender(gender);}}
            onUpdateAge={(age) => {this.props.onUpdateAge(age);}}
            onUpdateMarriageStatus={(marriageStatus) =>
              {this.props.onUpdateMarriageStatus(marriageStatus);}}
            onUpdateReligionStatus={(religionStatus) =>
              {this.props.onUpdateReligionStatus(religionStatus);}}
            onUploadPhoto={(file) => {this.props.onUploadPhoto(file);}}
            onSubmitForm={() => {this.props.onSubmitForm();}}
          />
          <PaymentForm />
        </SwipeableViews>
      </div>
    );
  }
}

FormTabs.propTypes = {
  form: PropTypes.object,
  photo: PropTypes.object,
  onUpdateChineseName: PropTypes.func,
  onUpdateEnglishFirstName: PropTypes.func,
  onUpdateEnglishLastName: PropTypes.func,
  onUpdateGender: PropTypes.func,
  onUpdateAge: PropTypes.func,
  onUpdateMarriageStatus: PropTypes.func,
  onUpdateReligionStatus: PropTypes.func,
  onUploadPhoto: PropTypes.func,
  onSubmitForm: PropTypes.func,
}

export default FormTabs;
