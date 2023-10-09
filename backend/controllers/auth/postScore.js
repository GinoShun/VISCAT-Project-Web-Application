const Score = require("../../models/score"); // 假设学生信息的模型为 Student

const postScore = async (req, res) => {
    try {
        const { studentId, testScore } = req.body;

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
        return res.status(500).send('Error. From postTeacher.js');
    }
};

module.exports = postScore;
