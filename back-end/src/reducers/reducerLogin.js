/*
  internal imports
*/

import * as types from '../actionTypes';

/*
  setup
*/

const initialState = {
  fieldUserInput: '',
  fieldPassInput: '',
  loggedIn: false,
  authCode: '',
  requestingLogin: false,
  loginError: ''
};

/*
  reducer
*/

export default (state=initialState, action) => {
  switch(action.type) {
    
    case types.CHANGE_FIELD_USER_INPUT:
      return {
        ...initialState,
        fieldUserInput: action.value
      }
      break;
      
    case types.CHANGE_FIELD_PASS_INPUT:
      return {
        ...initialState,
        fieldPassInput: action.value
      }
      break;
      
    case types.LOGIN_REQUEST:
      return {
        ...initialState,
        requestingLogin: true
      }
      break;
      
    case types.LOGIN_FAILURE:
      return {
        ...initialState,
        loggedIn: false,
        requestingLogin: false,
        loginError: action.errorMessage
      }
      break;
      
    case types.LOGIN_SUCCESS:
      return {
        ...initialState,
        loggedIn: true,
        requestingLogin: false,
        authCode: action.authCode
      }
      break;
      
    default:
      return state;
  }
};
