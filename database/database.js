'use strict';
const mysql2 = require('mysql2');


function createConnection({host,database, user, password}){
    const connection = mysql2.createPool({
        host,
        database,
        user,
        password
    });

    return connection;
}

/**
 * @param {any} connection
 * @param {string}  query 
 * @param {Array} parameters 
 */
 function query(connection, query, parameters = []) {
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

/**
 * @param {any} connection
 * @param {string}  query 
 * @param {Array} parameters 
 */
function execute(connection,query, parameters = []){
    return new Promise((resolve, reject) => {
        connection.getConnection((err, conn) => {
            if(err) return reject(err);
            conn.execute(query, parameters, (err, results, fields) => {
                resolve(results);
            });
            conn.release();
        });
    });
}

exports.createConnection = createConnection;
exports.query = query;
exports.execute = execute;