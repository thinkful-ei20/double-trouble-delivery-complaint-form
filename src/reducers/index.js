import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import submitReducer from './submitReducer';

const rootReducer = combineReducers({
  post: submitReducer,
  form: formReducer
});

export default rootReducer;