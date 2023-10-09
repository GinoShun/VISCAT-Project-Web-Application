const express = require('express');
const router = express.Router();
const authControllers = require("../controllers/auth/authControllers");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");
const exportCsvTest = require('../controllers/auth/test');

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(6).max(12).required(),
    mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
    password: Joi.string().min(6).max(12).required(),
    mail: Joi.string().email().required(),

});

const changePasswordSchema = Joi.object({
  mail: Joi.string().email().required(),
  oldPassword: Joi.string().min(6).max(12).required(),
  newPassword: Joi.string().min(6).max(12).required(),
});

const sendMailSchema = Joi.object({
  mail: Joi.string().email().required(),
});
const resetPasswordSchema = Joi.object({
  oldPassword: Joi.string().min(6).max(12).required(),
  newPassword: Joi.string().min(6).max(12).required(),
})

router.post('/register', validator.body(registerSchema), authControllers.controllers.postRegister);
router.post('/login', validator.body(loginSchema), authControllers.controllers.postLogin);

const exportCSV = authControllers.controllers.exportCSV;

// 添加路由
router.get('/exportCSV', async (req, res) => {
  try {
    // 调用导出 CSV 的函数
    const csvData = await exportCSV();

    // 设置响应头，告诉浏览器尝试在浏览器中打开文件而不是下载它
    res.setHeader('Content-Disposition', 'inline; filename="user.csv"');
    res.setHeader('Content-Type', 'text/csv');

    // 将 CSV 数据发送到客户端
    res.send(csvData);
  } catch (err) {
    console.error('Error exporting CSV:', err);
    res.status(500).send('Internal server error');
  }
});

router.post('/change-password', validator.body(changePasswordSchema), authControllers.controllers.postChange);
router.post('/send-email', validator.body(sendMailSchema), authControllers.controllers.forgotPassword);
router.post('/reset-password/:token', validator.body(resetPasswordSchema), authControllers.controllers.forgotPasswordChange);


router.post('/studentInfo', authControllers.controllers.postStudentInfo);
router.post('/teacherInfo', authControllers.controllers.postTeacher);
router.post('/score', authControllers.controllers.postScore);

router.get("/test", auth, (req, res) => {
    res.send("request passed");
});

module.exports = router;