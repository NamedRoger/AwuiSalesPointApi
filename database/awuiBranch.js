const database = require('./database');
const config = require('../config/config');

function createBranchConnecion(nameDatabase){
    return database.createConnection({
        host: config.DB_HOST,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        database: nameDatabase
    });
}

const databaseBranch = {
    createBranchConnecion,
    query: database.query,
    execute: database.execute
};

module.exports = databaseBranch;