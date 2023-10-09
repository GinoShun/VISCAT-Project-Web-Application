const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    studentId: { type: String },
    testScore: { type: String },
});

module.exports = mongoose.model("score", scoreSchema);