/*
  internal imports
*/

import * as types from '../actionTypes';

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
  reducer
*/

export default (state=initialState, action) => {
  switch(action.type) {
    
    case types.CHANGE_FIELD_NEW_ITEM_NAME_INPUT:
      return {
        ...initialState,
        fieldNewItemNameInput: action.value
      };    
      break;
      
    case types.ADD_ITEM_REQUEST:
      return {
        ...initialState,
        requesting: true
      };  
      break;

    case types.ADD_ITEM_FAILURE:
      return {
        ...initialState,
        requesting: false,
        errorMessage: action.errorMessage
      };  
      break;
      
    case types.ADD_ITEM_SUCCESS:
      return {
        ...initialState,
        selectedId: action.lastInsertedId,
        requesting: false,
        errorMessage: '',
        invalidated: true
      };
      break;
      
    default:
      return state;
  }
};
