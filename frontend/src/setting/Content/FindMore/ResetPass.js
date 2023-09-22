import React, { useState } from 'react'
import axios from 'axios'

const ResetPass = () => {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const handleChangePassword = async () => {
        try {
            await axios.post('/api/auth/change-password', {
                currentPassword,
                newPassword,
            })
            alert('Password changed successfully')
        } catch (error) {
            alert('Failed to change password')
        }
    }

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
    )
}

export default ResetPass
