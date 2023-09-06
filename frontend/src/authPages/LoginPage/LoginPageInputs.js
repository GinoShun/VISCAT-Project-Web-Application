import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const LoginPageInputs = ({ mail, setMail, password, setPassword }) => {
    return (
        <>
            <InputWithLabel 
            value={mail}
            setValue={setMail}
            label="Email"
            type="text"
            placeholder="Enter email"
            />
            <InputWithLabel 
            value={password}
            setValue={setPassword}
            label="Password"
            type="password"
            placeholder="Enter password"
            />
        </>
    );
};

export default LoginPageInputs;