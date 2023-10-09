const mongoose = require("mongoose");

<<<<<<< HEAD
const testScoreSchema = new mongoose.Schema({
    studentId: Number,
    testScore: Number,
});

module.exports = mongoose.model("score", testScoreSchema);
=======
const scoreSchema = new mongoose.Schema({
    studentId: { type: String },
    testScore: { type: String },
});

module.exports = mongoose.model("score", scoreSchema);
>>>>>>> main
