const postLogin = require("./postLogin");
const postRegister = require("./postRegister");
const exportCSV = require("./exportCSV");
const postChange = require("./postChange");
const forgotPassword = require("./forgotPassword");
const forgotPasswordChange = require('./forgotPasswordChange');

const postStudentInfo = require('./postStudentInfo');
const postTeacher = require('./postTeacher');
const postScore = require('./postScore');

exports.controllers = {
    postLogin,
    postRegister,
    exportCSV,
    postChange,
    forgotPassword,
    forgotPasswordChange,
    postStudentInfo,
    postTeacher,
    postScore,
};


