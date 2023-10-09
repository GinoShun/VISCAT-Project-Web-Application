const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
<<<<<<< HEAD
    firstName: String,
    middleName: String,
    lastName: String,
    dob: Date,
    age: Number,
    studentId: {type: Number, unique: true},
    class: Number,
=======
    name: { type: String },
    dob: { type: Date },
    age: { type: Number },
    studentId: {type: Number, unique: true},
    classnum: { type: String },
>>>>>>> main
});

module.exports = mongoose.model("student", studentSchema);
