const databaseBranch = require('../../../database/awuiBranch');

exports.getUsers = async function (connection) {
    const users = await databaseBranch.query(
        connection,
        `SELECT * FROM usuarios`
    );
    return users;
}

exports.getUserById = function (connection) {

}

exports.getUserByName = async function (connection, username) {
    const userFound = (await databaseBranch.query(
        connection,
        `SELECT * from usuarios where usuario=? and activo = 1`,
        [username]
    ))[0];
    return userFound;
}

exports.existUser = async function (connection,username) {
    const userFound = (await databaseBranch.query(
        connection,
        `SELECT * from usuarios where usuario=? and activo = 1`,
        [username]
    ))[0];
    return userFound !== undefined;
}

exports.brachAssigned = async function (connection, macAddress){
    // aqui se debe de remplazar por el parametro de macAdress
    const brachAssigned = (await databaseBranch.query(
        connection,
        `SELECT * FROM mac_address WHERE mac_address = ? LIMIT 1`,
        ['AC-E0-10-F4-BC-19']
    ))[0].sucursal;

    const branch = (await databaseBranch.query(
        connection,
        `SELECT * FROM sucursales WHERE id_Sucursal = ?`,
        [brachAssigned]
    ))[0];

    return branch;
}

exports.isCasher = async function (connection, userId) {
    const hasCahserPerfil  = await databaseBranch.query(
        connection,
        "SELECT * FROM auwimx_miembros WHERE Usuario = ? AND Grupo IN (SELECT Id FROM auwimx_grupos WHERE Nombre = 'OPERADOR DE CAJAS' OR Nombre = 'OPERADOR DE CAJAS LIDER')",
        [userId]
    );
    return hasCahserPerfil.length > 0;
}

exports.createLoginFolio = await function (connection) {
    
}