/*
  internal imports
*/

import { createAsyncAction } from './utils';
import * as types from './actionTypes';

/*
  creators
*/

export const changeFieldUserInput = (value) => {
  return {
    type: types.CHANGE_FIELD_USER_INPUT,
    value
  }
};

export const changeFieldPassInput = (value) => {
  return {
    type: types.CHANGE_FIELD_PASS_INPUT,
    value
  }
};

export const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST
  }
};

export const loginFailure = (errorMessage) => {
  return {
    type: types.LOGIN_FAILURE,
    errorMessage
  }
};

export const loginSuccess = (authCode) => {
  return {
      type: types.LOGIN_SUCCESS,
      authCode
    }
};

export const login = (user, pass) => {
  return createAsyncAction(
    'login',
    {user, pass},
    loginRequest, loginFailure, loginSuccess
  );
};

export const fetchItemsRequest = () => {
  return {
    type: types.FETCH_ITEMS_REQUEST
  }
};

export const fetchItemsFailure = (errorMessage) => {
  return {
    type: types.FETCH_ITEMS_FAILURE,
    errorMessage
  }
};

export const fetchItemsSuccess = (items) => {
  return {
    type: types.FETCH_ITEMS_SUCCESS,
    items
  }
};

export const fetchItems = (item_id) => {
  return createAsyncAction(
    'fetchItems',
    {item_id},
    fetchItemsRequest, fetchItemsFailure, fetchItemsSuccess
  );
};

export const changeFieldNewItemNameInput = (value) => {
  return {
    type: types.CHANGE_FIELD_NEW_ITEM_NAME_INPUT,
    value
  }
};

export const addItemRequest = () => {
  return {
    type: types.ADD_ITEM_REQUEST
  }
};

export const addItemFailure = (errorMessage) => {
  return {
    type: types.ADD_ITEM_FAILURE,
    errorMessage
  }
};

export const addItemSuccess = (lastId) => {
  return {
    type: types.ADD_ITEM_SUCCESS,
    lastId
  }
};

export const addItem = (itemName) => {
  return createAsyncAction(
    'addItem',
    {itemName},
    addItemRequest, addItemFailure, addItemSuccess
  );
};

