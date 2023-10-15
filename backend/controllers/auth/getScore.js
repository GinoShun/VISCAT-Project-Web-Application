const Score = require("../../models/score");

const getScore = async (req, res) => {
    try {
        // 在这里编写逻辑来获取成绩信息，这可以根据你的需求来查询数据库
        const scores = await Score.find(); // 假设你想获取所有成绩信息

        // 将获取到的成绩信息返回给客户端
        res.status(200).json({
            scores: scores.map(score => {
                return {
                    studentId: score.studentId,
                    testScore: score.testScore
                };
            })
        });
    } catch (err) {
        // 如果出现错误，返回适当的错误响应
        return res.status(500).send('Error. From getScore.js');
    }
};

module.exports = getScore;
