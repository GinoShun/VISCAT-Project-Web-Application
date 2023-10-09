const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const forgotPasswordChange = async (req, res) => {
    try {
        // 从 URL 中获取 token 参数
        const token = req.params.token;
        if (!token) {
            return res.status(400).json({ message: "未提供有效的令牌" });
        }

        const { newPassword, oldPassword } = req.body;

        // 查找用户是否存在
        const user = await User.findOne({ resetPasswordToken: token });

        if (!user) {
            return res.status(400).json({ message: "未找到用户或令牌无效" });
        }

        // 加密新密码
        if(newPassword !== oldPassword){

            return res.status(404).json({ message: "两次密码不一致" });
        }
        const encryptedPassword = await bcrypt.hash(newPassword, 10);

        // 更新用户密码和重置令牌
        user.password = encryptedPassword;
        user.resetPasswordToken = null; // 清除令牌
        user.resetPasswordExpires = null; // 清除重置密码有效期

        await user.save();

        // 创建新的 JWT 令牌（可选，如果您希望用户在修改密码后保持登录状态）
        const newToken = jwt.sign(
            {
                userId: user._id,
                mail: user.mail,
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: "24h",
            }
        );

        res.status(200).json({
            Status: "Success",
            message: "密码已成功更改",
            userDetails: {
                mail: user.mail,
                token: newToken,
                username: user.username,
            },
        });
        
    } catch (err) {
        console.error(err);
        res.status(500).send("服务器错误");
    }
};

module.exports = forgotPasswordChange;
