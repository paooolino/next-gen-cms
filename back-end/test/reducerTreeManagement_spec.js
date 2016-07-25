/*
    external imports
*/

import expect from 'expect';

/*
    internal imports
*/

import reducer from '../src/reducers/reducerTreeManagement.js';
import * as types from '../src/actionTypes.js';

/*
    setup
*/

const initialState = {
  fieldNewItemNameInput: '',
  items: [],
  requesting: false,
  errorMessage: '',
  selectedId: 0,
  invalidated: false
};

/*
    tests
*/

describe("[reducerTreeManagement]", () => {
    
  it('should return the initial state', () => {
    const nextState = reducer(undefined, {});
    expect(nextState).toEqual(initialState);
  });

  it('should handle CHANGE_FIELD_NEW_ITEM_NAME_INPUT action', () => {
    const state = {
      ...initialState,
      fieldNewItemNameInput: ''
    };      
    const action = {
      type: types.CHANGE_FIELD_NEW_ITEM_NAME_INPUT,
      value: 'products'
    };
    const expectedState = {
      ...initialState,
      fieldNewItemNameInput: 'products'
    };
    const nextState = reducer(state, action);
    expect(nextState).toEqual(expectedState);
  });
  
  it('should handle ADD_ITEM_REQUEST action', () => {
    const state = {
      ...initialState
    };      
    const action = {
      type: types.ADD_ITEM_REQUEST
    };
    const expectedState = {
      ...initialState,
      requesting: true
    };
    const nextState = reducer(state, action);
    expect(nextState).toEqual(expectedState);
  });
  
  it('should handle ADD_ITEM_FAILURE action', () => {
    const state = {
      ...initialState,
      requesting: true
    };      
    const action = {
      type: types.ADD_ITEM_FAILURE,
      errorMessage: 'Whatever error message'
    };
    const expectedState = {
      ...initialState,
      requesting: false,
      errorMessage: 'Whatever error message'          
    };
    const nextState = reducer(state, action);
    expect(nextState).toEqual(expectedState);
  });
  
  it('should handle ADD_ITEM_SUCCESS action', () => {
    const state = {
      ...initialState,
      requesting: true
    };      
    const action = {
      type: types.ADD_ITEM_SUCCESS,
      lastInsertedId: 93
    };
    const expectedState = {
      ...initialState,
      selectedId: 93,
      requesting: false,
      errorMessage: '',
      invalidated: true
    };
    const nextState = reducer(state, action);
    expect(nextState).toEqual(expectedState);    
  });

});
