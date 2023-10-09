const Student = require("../../models/student"); // 假设学生信息的模型为 Student

const postStudentInfo = async (req, res) => {
    try {
        const { name, dob, age, studentId, classnum } = req.body;

        // create student info
        const student = await Student.create({
            name,
            dob,
            age,
            studentId,
            classnum
        });

        // if all above passed return infomation
        res.status(201).json({
            studentDetails: {
                name: student.name,
                dob: student.dob,
                age: student.age,
                studentId: student.studentId,
                classnum: student.classnum
            }
        });
    } catch (err) {
        // 如果出现错误，返回适当的错误响应
        return res.status(500).send('Error. From postStudent.js');
    }
};

module.exports = postStudentInfo;
