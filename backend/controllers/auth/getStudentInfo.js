const Student = require("../../models/student");

const getStudentInfo = async (req, res) => {
    try {
        // 在这里编写逻辑来获取学生信息，这可以根据你的需求来查询数据库
        const students = await Student.find(); // 假设你想获取所有学生信息

        // 将获取到的学生信息返回给客户端
        res.status(200).json({
            students: students.map(student => {
                return {
                    name: student.name,
                    dob: student.dob,
                    age: student.age,
                    studentId: student.studentId,
                    classnum: student.classnum
                };
            })
        });
    } catch (err) {
        // 如果出现错误，返回适当的错误响应
        return res.status(500).send('Error. From getStudentInfo.js');
    }
};

module.exports = getStudentInfo;
