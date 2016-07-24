/*
    external imports
*/

import expect from 'expect';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

/*
    internal imports
*/

import * as creators from '../src/actionCreators';
import * as types from '../src/actionTypes';
import { ENDPOINT_HOST, ENDPOINT_PATH } from '../config';

/*
    setup
*/

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

/*
    tests
*/

describe('[actionCreators]', () => {
  
  describe('login', () => {

    it('defines changeFieldUserInput action creator', () => {
      const action = creators.changeFieldUserInput('admin');
      expect(action).toEqual({
        type: types.CHANGE_FIELD_USER_INPUT,
        value: 'admin'
      });                
    });

    it('defines changeFieldPassInput action creator', () => {
      const action = creators.changeFieldPassInput('admin123');
      expect(action).toEqual({
        type: types.CHANGE_FIELD_PASS_INPUT,
        value: 'admin123'
      });                
    });
    
    it("defines loginRequest action creator", () => {
      const action = creators.loginRequest();
      expect(action).toEqual({
        type: types.LOGIN_REQUEST
      });
    });
    
    it("defines loginFailure action creator", () => {
      const action = creators.loginFailure('Whatever error message');
      expect(action).toEqual({
        type: types.LOGIN_FAILURE,
        errorMessage: 'Whatever error message'
      });
    });
    
    it("defines loginSuccess action creator", () => {
      const action = creators.loginSuccess('whatever_auth_code');
      expect(action).toEqual({
        type: types.LOGIN_SUCCESS,
        authCode: 'whatever_auth_code'
      });
    });
    
    describe('async actions', () => {
      
      afterEach(() => {
        nock.cleanAll()
      })
      
      it("async LOGIN action passes the correct parameters to the server", () => {
        let passedData;
        nock(ENDPOINT_HOST).post(ENDPOINT_PATH)
          .reply(200, function(uri, requestBody){
            passedData = requestBody;
          });
            
        const store = mockStore({});
        
        const user = 'admin';
        const pass = 'admin123';
        return store.dispatch(creators.login(user, pass))
          .then(() => {
            expect(passedData.action).toBe('login');
            expect(passedData.user).toBe(user);
            expect(passedData.pass).toBe(pass);
          });
      });
      
    });
    
  });
  
  describe('tree management', () => {
    
    describe('add item', () => {});
    
  });
    
});
