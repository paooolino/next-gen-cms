/*
    external imports
*/

import expect from 'expect';

/*
    internal imports
*/

import { mapDispatchToProps, mapStateToProps } from '../../src/components/AppContainer';

describe('[AppContainer]', () => {
    
    describe('mapDispatchToProps', () => {
        
        xit('should map the correct handlers', () => {
            const handlers = mapDispatchToProps(()=>{});
            expect(handlers.handleChangeUsername).toBeA('function');
            expect(handlers.handleChangePassword).toBeA('function');
            expect(handlers.handleLogin).toBeA('function');
        });
        
    });

    describe('mapStateToProps', () => {
        
        xit('should map the correct props types', () => {
            const props = mapStateToProps({});
            expect(props.user).toExists;
            expect(props.pass).toExists;
            expect(props.loginError).toExists;
        });
        
    });

});
