import { REQUEST_POST, SUCCESS_POST, ERROR_POST } from '../actions';

const initialState = {
  loading: false,
  message: ''
};

const submitReducer = (state=initialState, action) => {
  if (action.type === REQUEST_POST) {
    return {
      ...state,
      loading: true
    }
  }

  if (action.type === SUCCESS_POST) {
    return {
      ...state,
      loading: false,
      message: action.data.message
    }
  }

  if (action.type === ERROR_POST) {
    return {
      ...state,
      loading: false,
      message: action.data.message
    }
  }


  return state;
};

export default submitReducer;