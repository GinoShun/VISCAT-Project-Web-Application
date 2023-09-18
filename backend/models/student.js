const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    dob: Date,
    age: Number,
    studentId: {type: Number, unique: true},
    class: Number,
});

module.exports = mongoose.model("student", studentSchema);
