// 导入所需的模块和库
import React, { useState } from 'react';
import axios from 'axios';

const ResetPass = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleChangePassword = async () => {
        try {
            // 发送修改密码请求到后端
            await axios.post('/api/auth/change-password', {
                currentPassword,
                newPassword,
            });

            // 处理成功后的操作，例如显示成功消息
            alert('Password changed successfully');
        } catch (error) {
            // 处理错误，例如显示错误消息
            alert('Failed to change password');
        }
    };

    return (
        <div>
            <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleChangePassword}>Change Password</button>
        </div>
    );
};

export default ResetPass;
