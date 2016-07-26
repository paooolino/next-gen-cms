/*
    external imports
*/

import expect from 'expect';

/*
    internal imports
*/

import reducer from '../src/reducers/reducerLogin.js';
import * as types from '../src/actionTypes.js';

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
    tests
*/

describe("[reducerLogin]", () => {
    
  it('should return the initial state', () => {
    const nextState = reducer(undefined, {});
    expect(nextState).toEqual(initialState);
  });
    
  it('should handle CHANGE_FIELD_USER_INPUT action', () => {
    const state = {
      ...initialState,
      fieldUserInput: ''
    };      
    const action = {
      type: types.CHANGE_FIELD_USER_INPUT,
      value: 'admin'
    };
    const expectedState = {
      ...initialState,
      fieldUserInput: 'admin'
    };
    const nextState = reducer(state, action);
    expect(nextState).toEqual(expectedState);
  });
  
  it('should handle CHANGE_FIELD_PASS_INPUT action', () => {
    const state = {
      ...initialState,
      fieldPassInput: ''
    };      
    const action = {
      type: types.CHANGE_FIELD_PASS_INPUT,
      value: 'admin123'
    };
    const expectedState = {
      ...initialState,
      fieldPassInput: 'admin123'
    };
    const nextState = reducer(state, action);
    expect(nextState).toEqual(expectedState);
  });
  
  it('should handle LOGIN_REQUEST', () => {
    const state = {
      ...initialState
    };
    const action = {
      type: types.LOGIN_REQUEST
    };
    const expectedState = {
      ...initialState,
      requestingLogin: true
    };
    const nextState = reducer(state, action);
    expect(nextState).toEqual(expectedState);
  });
      
  it('should handle LOGIN_FAILURE', () => {
    const state = {
      ...initialState,
      requestingLogin: true
    };
    const action = {
      type: types.LOGIN_FAILURE,
      errorMessage: 'Whatever error message'
    };
    const expectedState = {
      ...initialState,
      loggedIn: false,
      requestingLogin: false,
      loginError: 'Whatever error message'
    };
    const nextState = reducer(state, action);
    expect(nextState).toEqual(expectedState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const state = {
      ...initialState,
      requestingLogin: true
    };      
    const action = {
      type: types.LOGIN_SUCCESS,
      authCode: 'whatever_auth_code'
    };
    const expectedState = {
      ...initialState,
      loggedIn: true,
      requestingLogin: false,
      authCode: 'whatever_auth_code'
    };
    const nextState = reducer(state, action);
    expect(nextState).toEqual(expectedState);
  });

});
