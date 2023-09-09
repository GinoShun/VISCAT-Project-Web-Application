const Student = require("../../models/student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postStudent = async (req, res) => {
    try {
        const { username, result, stuclass, age, description } = req.body;



        //如果以上都通过入库
        const user = await Student.create({
            username: username.toLowerCase(),
            result: result,
            stuclass: stuclass,
            age: age,
            description: description,
        })

        // 创建token
        const token = jwt.sign({
        },
            process.env.TOKEN_KEY,
            {
                expiresIn: "24h",
            }
        );


        res.status(201).json({
            userDetails: {
              username: user.username,
              result: user.result,
              stuclass: user.stuclass,
              age: user.age,
              description: user.description,
              token: token,
            }
          });
          
    } catch (err) {
        return res.status(500).send('Error. From postStudent.js');
    }
};

module.exports = postStudent;