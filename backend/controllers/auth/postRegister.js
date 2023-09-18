const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
    try {
        const { username, mail, password } = req.body;

        //防止用户已经存在的判断
        const userExists = await User.exists({ mail: mail.toLowerCase() });

        if (userExists) {
            return res.status(409).send("E-mail already in use from postRegister.js");
        }

        // 加密密码 用hash
        const encryptedPassword = await bcrypt.hash(password, 10);

        //如果以上都通过入库
        const user = await User.create({
            username,
            mail: mail.toLowerCase(),
            password: encryptedPassword
        })

        // 创建token
        const token = jwt.sign({
            userId: user._id,
            mail
        },
            process.env.TOKEN_KEY,
            {
                expiresIn: "24h",
            }
        );


        res.status(201).json({
            userDetails: {
                mail: user.mail,
                token: token,
                username: user.username,
            }
        })
    } catch (err) {
        return res.status(500).send('Error. From postRegister.js');
    }
};

module.exports = postRegister;