const mongoose = require("mongoose");

const testScoreSchema = new mongoose.Schema({
    studentId: Number,
    testScore: Number,
});

module.exports = mongoose.model("score", testScoreSchema);