const Student = require("../../models/student");

const deleteStudentInfo = async (req, res) => {
    try {
        const studentId = req.params.studentId;
        console.log(studentId)
        const deletedStudent = await Student.findOneAndDelete({ studentId });   
        console.log(deletedStudent)         
        if (!deletedStudent) {
            return res.status(404).json({ message: "student not found" });
        }

        // 返回成功响应
        res.status(200).json({ message: "student information delete successfully" });
    } catch (err) {
        // 如果出现错误，返回适当的错误响应
        return res.status(500).send('Error. From deleteStudentInfo.js');
    }
};

module.exports = deleteStudentInfo;
