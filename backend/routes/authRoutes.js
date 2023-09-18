const express = require('express');
const router = express.Router();
const authControllers = require("../controllers/auth/authControllers");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");
// const postChangePassword = require("../controllers/auth/postChange");

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(6).max(12).required(),
    mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
    password: Joi.string().min(6).max(12).required(),
    mail: Joi.string().email().required(),
});

router.post('/register', validator.body(registerSchema), authControllers.controllers.postRegister);
router.post('/login', validator.body(loginSchema), authControllers.controllers.postLogin);
// Router for testing export csv

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


// 添加修改密码路由
// router.post('/change-password', auth, validator.body(changePasswordSchema), authControllers.controllers.changePassword);

// // 添加修改密码的实际处理器

// router.post('/post-change-password', auth, postChangePassword);
router.get("/test", auth, (req, res) => {
    res.send("request passed");
});

module.exports = router;