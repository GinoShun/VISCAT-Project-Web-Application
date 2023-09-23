const Teacher = require("../../models/teacher"); // 假设学生信息的模型为 Student

const postTeacher = async (req, res) => {
    try {
        const { name, classnum, grade } = req.body;

        // create student info
        const teacher = await Teacher.create({
            name,
            classnum,
            grade
        });

        // if all above passed return infomation
        res.status(201).json({
            teacherDetails: {
                name: teacher.name,
                classnum: teacher.classnum,
                grade: teacher.grade
            }
        });
    } catch (err) {
        // 如果出现错误，返回适当的错误响应
        return res.status(500).send('Error. From postTeacher.js');
    }
};

module.exports = postTeacher;
