const databaseControl = require('../../../database/awuiControl');

/**
 * 
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise<boolean>}
 */
exports.existUser = async function (username, password) {
    const userFound = (await databaseControl.query(
        'SELECT * FROM usuarios WHERE usuario=? AND usuariopas=?',
        [username,password]
    ))[0];

    return userFound !== undefined;
}

/**
 * the function return the first user 
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise}   
 */
exports.getUserByName = async function(username, password) {
    const userFound = (await databaseControl.query(
        'SELECT * FROM usuarios WHERE usuario=? AND usuariopas=?',
        [username,password]
    ))[0];

    return userFound;
}