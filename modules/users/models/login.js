class LoginModel {
    username;
    password;
    cashRegister;

    constructor(username, password, cashRegister = '') {
        this.username = username;
        this.password = password;
        this.cashRegister = cashRegister;
    }
}

module.exports = LoginModel;