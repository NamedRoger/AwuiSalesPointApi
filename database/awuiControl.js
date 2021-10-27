const config = require('../config/config');
const database = require('./database');

const connection = database.createConnection({
    host:config.DB_HOST,
    database: config.DB_AWUI_DATABASE,
    user: config.DB_USER,
    password: config.DB_PASSWORD
});

/**
 * 
 * @param {string}  query 
 * @param {Array} parameters 
 */
function query(query, parameters = []) {
    return database.query(connection,query,parameters);
}

/**
 * 
 * @param {string}  query 
 * @param {Array} parameters 
 */
function execute(query, parameters = []){
    return execute(connection, query, parameters);
}

const databaseControl = {
    connection,
    query,
    execute
}


module.exports = databaseControl;