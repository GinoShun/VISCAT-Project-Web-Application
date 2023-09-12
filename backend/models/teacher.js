const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: String,
    class: Number,
    grade: String,
});

module.exports = mongoose.model("teacher", teacherSchema);
