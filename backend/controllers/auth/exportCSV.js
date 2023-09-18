const mongoose = require('mongoose');
const json2csv = require('json2csv').Parser;
const fs = require('fs');
const Teacher = require('../../models/teacher');
const Student = require('../../models/student');
const TestScore = require('../../models/score');
const User = require("../../models/user");

const exportCSV = async (req, res) => {
    try {
        const user = await User.find();
        const fields = ['mail', 'username', 'password'];
        const json2csvParser = new json2csv({ fields });
        const csvData = json2csvParser.parse(user);
        return csvData; // 返回 CSV 数据

        // const teachers = await Teacher.find().lean();
        // const students = await Student.find().lean();
        // const testScores = await TestScore.find().lean();

        // merge logic
        // asscoiate student with test score by studentId; associate teacher with student by class
        // merge student and test score
        // const mergedStudentTestScore = [];
        // for (let i = 0; i < students.length; i++) {
        //     const student = students[i];
        //     const testScore = testScores.find((testScore) => testScore.studentId === student.studentId);
        //     if (testScore) {
        //         mergedStudentTestScore.push({
        //             ...student,
        //             testScore: testScore.testScore,
        //         });
        //     }
        // }

        // // merge teacher and student
        // const mergedTeacherStudent = [];
        // for (let i = 0; i < teachers.length; i++) {
        //     const teacher = teachers[i];
        //     const student = mergedStudentTestScore.find((student) => student.class === teacher.class);
        //     if (student) {
        //         mergedTeacherStudent.push({
        //             ...teacher,
        //             ...student,
        //         });
        //     }
        // }


        // // transfer json data to csv data
        // // TODO: need to map fields
        // const fields = ['teacher', 'class', 'grade', 'student_first_name', 'student_middle_name', 
        //                 'student_last_name', 'student_dob', 'student_age', 'test_score'];
        // const json2csvParser = new json2csv({ fields });
        // const csvData = json2csvParser.parse(mergedTeacherStudent);

        // // write to csv
        // fs.writeFileSync('mergedData.csv', csvData);

    } catch (err) {
        // console.error('Merge or export error:', err);
        // res.status(500).send('Internal server error');
    }
}

module.exports = exportCSV;
exportCSV();
// test run