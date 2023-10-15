const Score = require("../../models/score");

const postScore = async (req, res) => {
    try {
        const { studentId, testScore } = req.body;
        const userExists = await Score.exists({ studentId: studentId });

        if (userExists) {
            return res.status(409).send("student already exist");
        }
        // create student info
        const score = await Score.create({
            studentId,
            testScore
        });


        // if all above passed return infomation
        res.status(201).json({
            scoreDetails: {
                studentId: score.studentId,
                testScore: score.testScore
            }
        });
    } catch (err) {
        // 如果出现错误，返回适当的错误响应
        return res.status(500).send('Error.');
    }
};

module.exports = postScore;
