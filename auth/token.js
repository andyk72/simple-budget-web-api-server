const shortid = require('shortid');

const createToken = () => {
    return shortid.generate();
};

module.exports = {
    createToken
}