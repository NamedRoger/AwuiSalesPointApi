const userBranchService = require('../services/userBranchService');

exports.getAllUsers = async (req, res) => {
    try {
        const database = req.get('Branch-Selected')
        const users = await userBranchService.getUsers(database);
        res.json(users);
    } catch (e) {
        res.status(e.status || 400);
        res.json({
            success: false,
            error: e.message
        });
    }
}

exports.getUserByUsername = (req, res) => {

}

exports.getUserById = (req, res) => {

}

exports.getBranchUserByMAC = (req, res) => {

}
