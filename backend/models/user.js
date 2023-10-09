const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    mail: { type: String, unique: true },
    username: { type: String },
    password: { type: String },
    resetPasswordToken: { type: String }, // 存储重置密码令牌
    resetPasswordExpires: { type: Date }, // 存储令牌过期时间
})

module.exports = mongoose.model("user", userSchema);
