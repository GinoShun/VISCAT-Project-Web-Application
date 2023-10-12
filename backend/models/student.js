const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String },
    dob: { type: Date },
    age: { type: Number },
    studentId: {type: String, unique: true},
    classnum: { type: String },
});

module.exports = mongoose.model("student", studentSchema);
