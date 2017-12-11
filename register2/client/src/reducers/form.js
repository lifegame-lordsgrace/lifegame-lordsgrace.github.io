import dotProp from 'dot-prop-immutable';

const DEFAULT_STATE = {
  inputs: {
    chineseName: "",
    englishFirstName: "",
    englishLastName: "",
    gender: null,
    age: null,
    marriageStatus: null,
    religionStatus: null,
  }
};


export default(state = DEFAULT_STATE, payload) => {
  switch(payload.type) {
    case 'updateChineseName':
      return dotProp.set(state, 'inputs.chineseName', payload.chineseName);
    case 'updateEnglishFirstName':
      return dotProp.set(
          state, 'inputs.englishFirstName', payload.englishFirstName);
    case 'updateEnglishLastName':
      return dotProp.set(
          state, 'inputs.englishLastName', payload.englishLastName);
    case 'updateGender':
      return dotProp.set(state, 'inputs.gender', payload.gender);
    case 'updateAge':
      return dotProp.set(state, 'inputs.age', payload.age);
    case 'updateMarriageStatus':
      return dotProp.set(
          state, 'inputs.marriageStatus', payload.marriageStatus);
    case 'updateReligionStatus':
      return dotProp.set(
          state, 'inputs.religionStatus', payload.religionStatus);
    default:
      return state;
  }
};
