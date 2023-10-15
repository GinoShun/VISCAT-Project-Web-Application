const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: { type: String },
    school: { type: String},
    classnum: { type: String },
    grade: { type: String },
});

module.exports = mongoose.model("teacher", teacherSchema);
