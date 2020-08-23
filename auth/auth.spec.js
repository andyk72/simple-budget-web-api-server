const users = require('./users-data');
const auth = require('./auth');

describe('auth module', () => {

    it('authenticate() authenticates a valid user', () => {

        const user = {
            username: 'andyk',
            password: 'klaus'
        };

        const authResponse = auth.authenticate(user);

        expect(authResponse.isAuthenticated).toBe(true);
        expect(authResponse.user).not.toBeNull();
        expect(authResponse.user).toHaveProperty('username', 'andyk');
        expect(authResponse.user).toHaveProperty('token');

    });

    it('authenticate() does not authenticate an invalid user', () => {

        const user = {
            username: 'invalid',
            password: 'user'
        };

        const authResponse = auth.authenticate(user);

        expect(authResponse.isAuthenticated).toBe(false);
        expect(authResponse.user).toBeNull();
        
    });

    it('isAuthenticated() authenticates a valid user', () => {

        const user = {
            username: 'andyk',
            password: 'klaus'
        };

        const isAuthenticated = auth.isAuthenticated(user);

        expect(isAuthenticated).toBe(true);

    });

    it('isAuthenticated() does not authenticate an invalid user', () => {

        const user = {
            username: 'invalid',
            password: 'user'
        };

        const isAuthenticated = auth.isAuthenticated(user);

        expect(isAuthenticated).toBe(false);
        
    });

});