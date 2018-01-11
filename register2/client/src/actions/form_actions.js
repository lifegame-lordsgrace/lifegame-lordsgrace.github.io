const API_SUBMIT_FORM = '/api/form';
const API_UPLOAD_PHOTO = '/api/photo';

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

export const submitForm = () => (dispatch, getState) => {
  dispatch(startSubmitForm());
  return fetch(
      API_SUBMIT_FORM,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(getState().form.inputs),
      })
    .then(() => {dispatch(successSubmitForm())})
    .catch((error) => {dispatch(failSubmitForm(error))});
}

export const startSubmitForm = () => {
  return {
    type: 'startSubmitForm',
  };
}

export const successSubmitForm = () => {
  return {
    type: 'successSubmitForm',
  };
}

export const failSubmitForm = (errorMessage) => {
  return {
    type: 'failSubmitForm',
    errorMessage,
  };
}

export const uploadPhoto = (file) => (dispatch, getState) => {
  dispatch(startUploadPhoto());
  const formData = new FormData();
  formData.append('avatar', file);
  return fetch(
      API_UPLOAD_PHOTO,
      {
        method: 'POST',
        body: formData,
      })
    .then((response) => {
      return response.json();
    }).then((responseJson) => {
      dispatch(successUploadPhoto(responseJson.url));
    }).catch((error) => {dispatch(failUploadPhoto(error));});
}

export const startUploadPhoto = () => {
  return {
    type: 'startUploadPhoto',
  };
}

export const successUploadPhoto = (uploadedUrl) => {
  return {
    type: 'successUploadPhoto',
    uploadedUrl,
  };
}

export const failUploadPhoto = (errorMessage) => {
  return {
    type: 'failUploadPhoto',
    errorMessage,
  }
}
