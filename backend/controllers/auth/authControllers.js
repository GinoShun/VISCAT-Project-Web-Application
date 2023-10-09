const postLogin = require("./postLogin");
const postRegister = require("./postRegister");
<<<<<<< HEAD
const exportCsv = require("./exportCsv");
=======
const exportCSV = require("./exportCSV");
const postChange = require("./postChange");
const forgotPassword = require("./forgotPassword");
const forgotPasswordChange = require('./forgotPasswordChange');

const postStudentInfo = require('./postStudentInfo');
const postTeacher = require('./postTeacher');
const postScore = require('./postScore');
>>>>>>> main

exports.controllers = {
    postLogin,
    postRegister,
<<<<<<< HEAD
    exportCsv,
=======
    exportCSV,
    postChange,
    forgotPassword,
    forgotPasswordChange,
    postStudentInfo,
    postTeacher,
    postScore,
>>>>>>> main
};


