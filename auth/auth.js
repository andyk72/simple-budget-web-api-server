const token = require('./token');
const users = require('./users-data');

/**
 * Authenticates user
 * @param {Object} user
 *  .username {String}
 *  .password {String}
 * @returns {Object}
 *  .isAuthenticated {Boolean}
 *  .user {Object|null}
 *      .username {String}
 *      .token {String}
 */
const authenticate = (user) => {
    const auth = isAuthenticated(user);
    return {
        isAuthenticated: auth,
        user: auth
            ? getAuthenticatedUser(user)
            : null
    }
};

/**
 * Returns if the passed in user is authenticated
 * @param {Object} user
 *  .username {String}
 *  .password {String}
 * @returns {Boolean}
 */
const isAuthenticated = ({username, password}) => {
    const found = users.find(user => user.username === username && user.password === password);
    return found !== undefined;
};

/**
 * Returns the passed in user in authenticated format for the frontend:
 *  1. Removes password field from user object
 *  2. Adds token field to user object
 * @param {Object} user
 *  .username {String}
 *  .password {String}
 * @returns {object}
 *  .username {String}
 *  .token {String}
 */
const getAuthenticatedUser = ({username, password}) => {
    return {
        username,
        token: token.createToken()
    };
};

module.exports = {
    authenticate,
    isAuthenticated,
    getAuthenticatedUser
};