'use strict';

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

exports.query = query;
exports.execute = execute;