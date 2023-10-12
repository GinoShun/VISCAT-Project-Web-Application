const mongoose = require('mongoose');
const json2csv = require('json2csv').Parser;
const fs = require('fs');
const Teacher = require('../../models/teacher');
const Student = require('../../models/student');
const Score = require('../../models/score');
const User = require("../../models/user");

const exportCSV = async (req, res) => {
    try {

        const student = await Student.find();
        const score = await Score.find();

        const studentMap = new Map();
        student.forEach(studentData => {
            studentMap.set(studentData.studentId, studentData);
        });

        // 合并数据
        const mergedData = score.map(scoreData => ({
            studentId: scoreData.studentId,
            testScore: scoreData.testScore,
            name: studentMap.get(scoreData.studentId).name,
            dob: studentMap.get(scoreData.studentId).dob,
            age: studentMap.get(scoreData.studentId).age,
            classnum: studentMap.get(scoreData.studentId).classnum,
        }));

        const fields = ['studentId', 'testScore', 'name', 'dob', 'age', 'classnum'];
        const json2csvParser = new json2csv({ fields });
        const csvData = json2csvParser.parse(mergedData);
        return csvData; // 返回 CSV 数据


    } catch (err) {
        // console.error('Merge or export error:', err);
        // res.status(500).send('Internal server error');
    }
}

module.exports = exportCSV;
exportCSV();
// test run