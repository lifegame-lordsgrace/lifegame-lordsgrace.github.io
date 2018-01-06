import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import PhotoUploadForm from './photo_upload_form';

class PersonalInfoForm extends Component {

  render() {
    return (
        <div>
          <h4>个人信息 Basic Infomation</h4>
            <TextField
              id="chineseName"
              floatingLabelText="中文姓名*"
              value={this.props.form.chineseName}
              onChange={(event, newValue) =>
                {this.props.onUpdateChineseName(newValue);}}
            />
            <TextField
              id="englishFirstName"
              floatingLabelText="English First Name *"
              value={this.props.form.englishFirstName}
              onChange={(event, newValue) =>
                {this.props.onUpdateEnglishFirstName(newValue);}}
            />
            <TextField
              id="englishLastName"
              floatingLabelText="English Last Name *"
              value={this.props.form.englishLastName}
              onChange={(event, newValue) =>
                {this.props.onUpdateEnglishLastName(newValue);}}
            />
            <SelectField
              id="gender"
              floatingLabelText="Gender"
              value={this.props.form.gender}
              onChange={(event, newValue) =>
                {this.props.onUpdateGender(newValue)}}
            >
              <MenuItem value={0} key={0} primaryText="男 Male" />
              <MenuItem value={1} key={1} primaryText="女 Female" />
            </SelectField>
            <SelectField
              id="age"
              floatingLabelText="年龄 Age(18岁以下不能参加) *"
              value={this.props.form.age}
              onChange={(event, newValue) =>
                {this.props.onUpdateAge(newValue)}}
            >
              <MenuItem value={0} primaryText="18-20" />
              <MenuItem value={1} primaryText="21-30" />
              <MenuItem value={2} primaryText="31-40" />
              <MenuItem value={3} primaryText="41-50" />
              <MenuItem value={4} primaryText="51-60" />
              <MenuItem value={4} primaryText="above 61" />
            </SelectField>
            <SelectField
              floatingLabelText="婚姻情况 Marriage Status *"
              value={this.props.form.marriageStatus}
              onChange={(event, newValue) =>
                {this.props.onUpdateMarriageStatus(newValue)}}
            >
              <MenuItem value={0} primaryText="单身 Single" />
              <MenuItem value={1} primaryText="已婚 Married" />
            </SelectField>
            <SelectField
              floatingLabelText="信仰状况 Religious Belief *"
              value={this.props.form.religionStatus}
              onChange={(event, newValue) =>
                {this.props.onUpdateReligionStatus(newValue)}}
            >
              <MenuItem value={0} primaryText="慕道友" />
            </SelectField>
          <h4>联络方式 Contact infomation</h4>
          <PhotoUploadForm
            photo={this.props.photo}
            onFileSelected={(file) => {this.props.onUploadPhoto(file);}} />
          <RaisedButton
            label="submit"
            primary={true}
            onClick={ (event) => {this.props.onSubmitForm()} }/>
        </div>
        );
  }
}

PersonalInfoForm.propTypes = {
  form: PropTypes.object,
  photo: PropTypes.object,
  onUpdateChineseName: PropTypes.func,
  onUpdateEnglishFirstName: PropTypes.func,
  onUpdateEnglishLastName: PropTypes.func,
  onUpdateAge: PropTypes.func,
  onUpdateGender: PropTypes.func,
  onUpdateReligionStatus: PropTypes.func,
  onUploadPhoto: PropTypes.func,
  onSubmitForm: PropTypes.func,
}

export default PersonalInfoForm;
