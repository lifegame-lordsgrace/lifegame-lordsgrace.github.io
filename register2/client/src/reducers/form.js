const DEFAULT_STATE = {
  chineseName: "",
  englishFirstName: "",
  englishLastName: "",
  gender: null,
  ageRange: null,
  marriageStatus: null,
  religionStatus: null,
};


export default(state = DEFAULT_STATE, payload) => {
  switch(payload.type) {
    case 'updateChineseName':
      return {...state, chineseName: payload.chineseName};
    case 'updateEnglishFirstName':
      return {...state, englishFirstName: payload.englishFirstName};
    case 'updateEnglishLastName':
      return {...state, englishLastName: payload.englishLastName};
    case 'updateGender':
      return {...state, gender: payload.gender};
    case 'updateAge':
      return {...state, age: payload.age};
    case 'updateMarriageStatus':
      return {...state, marriageStatus: payload.marriageStatus};
    case 'updateReligionStatus':
      return {...state, religionStatus: payload.religionStatus};
    default:
      return state;
  }
};
