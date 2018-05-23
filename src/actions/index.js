//Request action
export const REQUEST_POST = 'REQUEST_POST';
export const requestPost = () => {
  return {
  type: REQUEST_POST
  }
};

//Success action
export const SUCCESS_POST = 'SUCCESS_POST';
export const successPost = data => {
  return {
    type: SUCCESS_POST,
    data
  }
};

//Error action
export const ERROR_POST = 'ERROR_POST';
export const errorPost = data => {
  return {
    type: ERROR_POST,
    data
  }
};

//Async action
export const submitPost = values => dispatch => {
  dispatch(requestPost());
  console.log(values);
  // fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
  //   body:
  // })
};
