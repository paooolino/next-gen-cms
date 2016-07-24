/*
    external imports
*/

import expect from 'expect';

/*
    internal imports
*/

import * as types from '../src/actionTypes';

/*
    tests
*/

describe('[actionTypes]', () => {
    
  describe('login', () => {
    
    it('defines action types', () => {
      expect(types.CHANGE_FIELD_USER_INPUT).toBe('CHANGE_FIELD_USER_INPUT');
      expect(types.CHANGE_FIELD_PASS_INPUT).toBe('CHANGE_FIELD_PASS_INPUT');
      expect(types.LOGIN_REQUEST).toBe('LOGIN_REQUEST');
      expect(types.LOGIN_FAILURE).toBe('LOGIN_FAILURE');
      expect(types.LOGIN_SUCCESS).toBe('LOGIN_SUCCESS');
    });
    
  });
    
  describe('tree management', () => {
    
    describe('add item', () => {
    
      it('defines action types', () => {
        expect(types.CHANGE_FIELD_NEW_ITEM_NAME_INPUT).toBe('CHANGE_FIELD_NEW_ITEM_NAME_INPUT');
        expect(types.ADD_ITEM_REQUEST).toBe('ADD_ITEM_REQUEST');
        expect(types.ADD_ITEM_FAILURE).toBe('ADD_ITEM_FAILURE');
        expect(types.ADD_ITEM_SUCCESS).toBe('ADD_ITEM_SUCCESS');
      });
    
    });
    
  });
    
});
