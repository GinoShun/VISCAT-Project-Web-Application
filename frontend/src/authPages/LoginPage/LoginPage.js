import React, { useState, useEffect } from 'react'
import AuthBox from '../../shared/components/AuthBox'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInputs from './LoginPageInputs'
import LoginPageFooter from './LoginPageFooter'
import RegisterPageInputs from '../RegisterPage/RegisterPageInputs'
import RegisterPageFooter from '../RegisterPage/RegisterPageFooter'
import RegisterPageHeader from '../RegisterPage/RegisterPageHeader'
import RedirectInfo from '../../shared/components/RedirectInfo'
import '../authStyles.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { validateLoginForm, validateRegisterForm } from '../../shared/utils/validators'
import { connect } from 'react-redux'
import { getActions } from '../../store/actions/authActions'
import { useNavigate } from 'react-router-dom'

import logo from "../../static/VisCatLogo.png"

const theme = createTheme({
    shape: {
        borderRadius: 28,
    },
})

const LoginPage = ({ login, register }) => {
    const history = useNavigate()
    const [loginMail, setLoginMail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [isLoginFormValid, setIsLoginFormValid] = useState(false)

    const [registerMail, setRegisterMail] = useState('')
    const [registerUsername, setRegisterUsername] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [isRegisterFormValid, setIsRegisterFormValid] = useState(false)

    const [activeTab, setActiveTab] = useState('signIn')

    useEffect(() => {
        setIsLoginFormValid(validateLoginForm({ mail: loginMail, password: loginPassword }))
    }, [loginMail, loginPassword])

    useEffect(() => {
        setIsRegisterFormValid(
            validateRegisterForm({
                mail: registerMail,
                username: registerUsername,
                password: registerPassword,
            })
        )
    }, [registerMail, registerUsername, registerPassword])

    const handleLogin = () => {
        const userDetails = {
            mail: loginMail,
            password: loginPassword,
        }
        login(userDetails, history)
    }

    const handleRegister = () => {
        const userDetails = {
            mail: registerMail,
            username: registerUsername,
            password: registerPassword,
        }
        register(userDetails, history)
    }

    const handleTabChange = (tab) => {
        setActiveTab(tab)
        if (tab === 'signIn') {
            history("/login")
        }
        else if (tab === 'upload') {
            history("/upload")
        }
        else {
            history("/register")
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="auth-wrapper">
                <div className="loginApp">
                    <div className={"container " + (activeTab === "signUp" ? "right-panel-active" : "")} id="container">
                        {activeTab === 'signIn' ? (
                            <div className="form-container sign-in-container">
                                <form>
                                    <LoginPageHeader />
                                    <LoginPageInputs
                                        mail={loginMail}
                                        setMail={setLoginMail}
                                        password={loginPassword}
                                        setPassword={setLoginPassword}
                                    />
                                    <LoginPageFooter isFormValid={isLoginFormValid} handleLogin={handleLogin} />
                                </form>

                            </div>
                        ) : (
                            <div className="form-container sign-up-container">
                                <form>
                                    <RegisterPageHeader />
                                    <RegisterPageInputs
                                        mail={registerMail}
                                        setMail={setRegisterMail}
                                        username={registerUsername}
                                        setUsername={setRegisterUsername}
                                        password={registerPassword}
                                        setPassword={setRegisterPassword}
                                    />
                                    <RegisterPageFooter
                                        isFormValid={isRegisterFormValid}
                                        handleRegister={handleRegister}
                                    />
                                </form>
                            </div>
                        )}
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>To keep connected with us, please login with your personal info</p>
                                    <button
                                        className="ghost"
                                        id="signIn"
                                        onClick={() => handleTabChange('signIn')}
                                    >
                                        <RedirectInfo
                                            redirectText="Log in"
                                            redirectHandler={() => handleTabChange('signIn')}
                                        />
                                    </button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <img
                                        src={logo}
                                        style={{ width: '200px', height: '200px' }}
                                        alt="Logo"
                                    />
                                    <p>Enter your personal details and start your journey with us</p>
                                    <button
                                        className="ghost"
                                        id="signUp"
                                        onClick={() => handleTabChange('signUp')}
                                    >
                                        <RedirectInfo
                                            redirectText="Sign Up"
                                            redirectHandler={() => handleTabChange('signUp')}
                                        />
                                    </button>
                                    <p>You are a teacher? Use this bottom.</p>
                                    <button
                                        className="ghost"
                                        id="upload"
                                        onClick={() => handleTabChange('upload')}
                                    >
                                        <RedirectInfo
                                            redirectText="Upload"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null, mapActionsToProps)(LoginPage)