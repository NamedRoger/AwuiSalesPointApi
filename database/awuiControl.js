const {createPool} = require('mysql2');
const config = require('../config/config');

const connection = createPool({
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
    return new Promise((resolve, reject) => {
        connection.getConnection((err, conn) => {
            if(err) return reject(err);
            conn.query(query, parameters, (err, rows, fields) => {
                resolve(rows);
            });
            conn.release();
        });
    });
}

const database = {
    connection,
    query,
}


module.exports = database;