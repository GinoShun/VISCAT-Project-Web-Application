const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    username: { type: String },
    result: { type : String},
    stuclass: { type: String},
    age: { type : String},
    description : {type: String}
    
})

module.exports = mongoose.model("student", studentSchema);
