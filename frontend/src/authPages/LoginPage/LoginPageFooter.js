import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import '../authStyles.css';
import { useNavigate } from "react-router-dom";
import { Tooltip, styled, Link } from '@mui/material';


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
    return "Enter correct email and password";
}

const getFormValidMessage = () => {
    return "Press to log in";
}

const LoginPageFooter = ({ handleLogin, isFormValid }) => {

    return (
        <>
            <Link href="#" variant="body2">
                Forgot your password?
            </Link>
            <Tooltip
                title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
            >
                <span> {/* Use span to wrap button to avoid disabled button not showing Tooltip */}
                    <StyledButton 
                        type="button"
                        disabled={!isFormValid}
                        onClick={handleLogin}
                    >
                        Log in
                    </StyledButton>
                </span>
            </Tooltip>
        </>
    );
};

export default LoginPageFooter;