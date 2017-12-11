export const updateChineseName = (chineseName) => {
  return {
    type: 'updateChineseName',
    chineseName,
  };
}

export const updateEnglishFirstName = (englishFirstName) => {
  return {
    type: 'updateEnglishFirstName',
    englishFirstName,
  };
}

export const updateEnglishLastName = (englishLastName) => {
  return {
    type: 'updateEnglishLastName',
    englishLastName,
  };
}

export const updateGender = (gender) => {
  return {
    type: 'updateGender',
    gender,
  };
}

export const updateAge = (age) => {
  return {
    type: 'updateAge',
    age,
  };
}

export const updateMarriageStatus = (marriageStatus) => {
  return {
    type: 'updateMarriageStatus',
    marriageStatus,
  };
}

export const updateReligionStatus = (religionStatus) => {
  return {
    type: 'updateReligionStatus',
    religionStatus,
  };
}
