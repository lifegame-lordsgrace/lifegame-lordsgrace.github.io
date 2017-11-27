const DEFAULT_STATE = {
  chineseName: "",
  englishFirstName: "",
  englishLastName: "",
  gender: null,
  ageRange: null,
  marriageStatus: null,
  religiousStatus: null,
};


export default(state = DEFAULT_STATE, payload) => {
  switch(payload.type) {
    case 'updateChineseName':
      return {...state, chineseName: payload.chineseName};
    default:
      return state;
  }
};
