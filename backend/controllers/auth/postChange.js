const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postChange = async (req, res) => {
    try {
        const { mail, oldPassword, newPassword } = req.body;

        //防止用户已经存在的判断
        const userExists = await User.exists({ mail: mail.toLowerCase() });
        const user = await User.findOne({ mail: mail.toLowerCase() });

        if (!userExists) {
            return res.status(404).json({ message: "用户不存在" });
        }

        // 验证旧密码
        if (user && (await bcrypt.compare(oldPassword, user.password))) {

            // 加密新密码
            const encryptedPassword = await bcrypt.hash(newPassword, 10);
            // 更新用户密码
            user.password = encryptedPassword;
            await user.save();
            // 创建新的 JWT 令牌（可选，如果您希望用户在修改密码后保持登录状态）
            const token = jwt.sign(
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
                message: "密码已成功更改",
                userDetails: {
                    mail: user.mail,
                    token: token,
                    username: user.username,
                },
            });
        }else{
            return res.status(401).json({ message: "旧密码不正确" });
        }

        // const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);
        // if (!isPasswordMatch) {
        //     return res.status(401).json({ message: "旧密码不正确" });
        // }
    } catch (err) {
        console.error(err);
        res.status(500).send("服务器错误");
    }
};

module.exports = postChange;
