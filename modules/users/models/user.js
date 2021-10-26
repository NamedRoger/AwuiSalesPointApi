class UserModel {
    username;
    password;
    company;
    dataBase;

    /**
     * @param {string} username The string
     * @param {string} password The string
    */
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

module.exports = UserModel;