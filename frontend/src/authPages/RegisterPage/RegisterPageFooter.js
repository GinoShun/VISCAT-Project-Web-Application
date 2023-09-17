import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import '../authStyles.css';
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
    return "Username, Password or email is Not valid";
}

const getFormValidMessage = () => {
    return "Press to register";
}

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
    const history = useNavigate();
    
    return (
        <>
        <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
            <div>
                <StyledButton 
                    type = "button"
                    disabled={!isFormValid}
                    onClick={handleRegister}
                >
                    Sign Up
                </StyledButton>
            </div>
        </Tooltip>
        </>
    );
};

export default RegisterPageFooter;