const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer'); // 用于发送邮件
const crypto = require('crypto'); // 用于生成重置密码令牌

const forgotPassword = async (req, res) => {
    try {
        const { mail } = req.body;

        // 查找用户是否存在
        const userExists = await User.exists({ mail: mail.toLowerCase() });
        const user = await User.findOne({ mail: mail.toLowerCase() });

        if (!userExists) {
            return res.status(404).json({ message: "用户不存在" });
        }

        // 生成重置密码令牌
        const resetToken = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 3600000; // 令牌有效期1小时

        // 保存用户对象，包括重置密码令牌和有效期
        await user.save();

        // 发送包含令牌的邮件到用户邮箱
        const transporter = nodemailer.createTransport({
            service: 'gmail', // 使用Gmail服务
            auth: {
                user: 'kesoku5@gmail.com', // 你的Gmail邮箱地址
                pass: 'usoc xhzo xhas eonv', // 你的Gmail密码或应用程序密码
            },
        });

        const mailOptions = {
            from: 'kesoku5@gmail.com',
            to: mail,
            subject: 'Reset Password',
            text: `Click to reset your password: http://localhost:3000/reset-password/${resetToken}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ message: 'Failed to send email' });
            }else{
                return res.send({Status: "Success"})
            }
            
        });
    } catch (err) {
        console.error('忘记密码请求处理错误:', err);
        res.status(500).json({ message: '服务器错误' });
    }
};

module.exports = forgotPassword;
