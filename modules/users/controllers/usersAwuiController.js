const databaseControl = require('../../../database/awuiControl');

exports.getAllUsers = async (req, res) => {
    res.json(databaseControl.query('SELECT * FROM usuarios'));
}

exports.getUserByUsername = (req, res) => {}

