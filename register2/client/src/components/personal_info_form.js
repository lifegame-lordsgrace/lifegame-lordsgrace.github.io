import React, { Component } from 'react';

import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

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
            />
            <TextField
              id="englishLastName"
              floatingLabelText="English Last Name *"
            />
            <SelectField
              floatingLabelText="Gender"
            >
              <MenuItem value={0} primaryText="男 Male" />
              <MenuItem value={1} primaryText="女 Female" />
            </SelectField>
            <SelectField
              floatingLabelText="年龄 Age(18岁以下不能参加) *"
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
            >
              <MenuItem value={0} primaryText="单身 Single" />
              <MenuItem value={1} primaryText="已婚 Married" />
            </SelectField>
            <SelectField
              floatingLabelText="信仰状况 Religious Belief *"
            >
              <MenuItem value={0} primaryText="慕道友" />
            </SelectField>
          <h4>联络方式 Contact infomation</h4>
        </div>
        );
  }
}

export default PersonalInfoForm;
