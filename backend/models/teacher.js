const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
<<<<<<< HEAD
    name: String,
    class: Number,
    grade: String,
=======
    name: { type: String },
    classnum: { type: String },
    grade: { type: String },
>>>>>>> main
});

module.exports = mongoose.model("teacher", teacherSchema);
