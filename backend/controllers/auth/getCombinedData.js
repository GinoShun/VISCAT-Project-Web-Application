const Score = require("../../models/score") // 假设学生信息的模型为 Student

const getCombinedData = async (req, res) => {
    try {
        const scores = await Score.find()
            .populate({
                path: 'studentId',
                model: 'student'
            })

        res.status(200).json(scores)
    } catch (err) {
        res.status(500).send('Error fetching combined data.')
    }
}
module.exports = getCombinedData
