const postLogin = require("./postLogin");
const postRegister = require("./postRegister");
const exportCSV = require("./exportCSV");
const postChange = require("./postChange");
const forgotPassword = require("./forgotPassword");
const forgotPasswordChange = require('./forgotPasswordChange');

const postStudentInfo = require('./postStudentInfo');
const postTeacher = require('./postTeacher');
const postScore = require('./postScore');

const getStudentInfo = require('./getStudentInfo');
const deleteStudentInfo = require('./deleteStudentInfo');
const getScore = require('./getScore');

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
    getStudentInfo,
    deleteStudentInfo,
    getScore,
};


