import React from 'react';
import { useNavigate } from "react-router-dom";
import { Tooltip, styled } from '@mui/material';

const StyledButton = styled('button')({
    borderRadius: '20px',
    border: '1px solid #005086',
    backgroundColor: '#005086',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '12px 45px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'transform 80ms ease-in',
    '&:active': {
        transform: 'scale(0.95)',
    },
    '&:focus': {
        outline: 'none',
    },
    '&.ghost': {
        backgroundColor: 'transparent',
        borderColor: '#ffffff',
    },
});

const getFormNotValidMessage = () => {
    return "Password fields are not valid"; // 修改提示消息
}

const getFormValidMessage = () => {
    return "Press to change password"; // 修改提示消息
}

const ChangePasswordPageFooter = ({ handleChangePassword, isFormValid }) => { // 修改函数名
    const history = useNavigate();
    
    return (
        <>
            <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
                <div>
                    <StyledButton
                        type="button"
                        onClick={handleChangePassword}
                    >
                        Change Password {/* 修改按钮文本 */}
                    </StyledButton>
                </div>
            </Tooltip>
        </>
    );
};

export default ChangePasswordPageFooter;
