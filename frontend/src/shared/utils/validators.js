export const validateLoginForm = ({ mail, password }) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
}

export const validateRegisterForm = ({ mail, password, username }) => {
    return (
        validateMail(mail) && validatePassword(password) && validateUsername(username)
    );
}

export const validateChangeForm = ({mail, oldPassword, newPassword}) => {
    return (
        validateMail(mail) && validatePassword(oldPassword) && validatePassword(newPassword)
    )
}

const validatePassword = (password) => {
    return password.length > 6 && password.length < 12;
}

const validateMail = (mail) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(mail);
}

const validateUsername = (username) => {
    return username.length > 2 && username.length < 13;
}