const dotenv = require('dotenv').config();

module.exports = {
    NODE_ENV : process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    DB_HOST : process.env.DB_HOST,
    DB_USER : process.env.DB_USER,
    DB_PASSWORD : process.env.DB_PASSWORD,
    DB_AWUI_DATABASE : process.env.DB_AWUI_DATABASE
}