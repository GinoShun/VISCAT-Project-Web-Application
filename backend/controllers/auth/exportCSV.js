const mongoose = require('mongoose');
const json2csv = require('json2csv').Parser;
const fs = require('fs');
const Teacher = require('../../models/teacher');
const Student = require('../../models/student');
const Score = require('../../models/score');
const User = require("../../models/user");

const exportCSV = async (req, res) => {
    try {
        // const user = await User.find();
        // const fields = ['mail', 'username', 'password'];
        // const json2csvParser = new json2csv({ fields });
        // const csvData = json2csvParser.parse(user);
        // return csvData; 

        const student = await Student.find();
        const score = await Score.find();

        const studentMap = new Map();
        student.forEach(student => {
            studentMap.set(student.studentId, student);
        });

        // 合并数据
        const mergedData = score.map(score => ({
            studentId: score.studentId,
            testScore: score.testScore,
            name: studentMap.get(score.studentId).name,
            dob: studentMap.get(score.studentId).dob,
            age: studentMap.get(score.studentId).age,
            classnum: studentMap.get(score.studentId).classnum,
        }));

        const fields = ["studentId", "testScore", "name", "dob", "age", "classnum"];
        const json2csvParser = new json2csv({ fields });
        const csvData = json2csvParser.parse(mergedData);
        return csvData; 
        // return csv


    } catch (err) {
        // console.error('Merge or export error:', err);
        // res.status(500).send('Internal server error');
    }
}

module.exports = exportCSV;
exportCSV();
// test run