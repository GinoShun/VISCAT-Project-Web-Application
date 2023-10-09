import React, { useState, useEffect } from 'react';
import AuthBox from '../../../shared/components/AuthBox';
import { validateChangeForm } from '../../../shared/utils/validators';

import { useNavigate } from 'react-router-dom';
import ChangePageInputs from './ChangePInput';
import ChangePasswordPageFooter from './ChangePasswordPageFooter';
import { connect } from "react-redux";
import { getActions } from '../../../store/actions/authActions';

// 修改组件名称为以大写字母开头
const ChangeP = ({ changeP }) => {
    const history = useNavigate();

    const [mail, setMail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);

    // 修改处理函数的名称
    const handleChangePassword = () => {
        const userDetails = {
            mail,
            oldPassword,
            newPassword,
        }
        // 修改处理函数的名称
        changeP(userDetails, history);
    }

    useEffect(() => {
        setIsFormValid(
            validateChangeForm({
                mail,
                oldPassword,
                newPassword,
            })
        )
    }, [mail, oldPassword, newPassword, setIsFormValid]);

    return (
        <AuthBox>
            <ChangePageInputs
                mail={mail}
                setMail={setMail}
                oldPassword={oldPassword}
                setOldPassword={setOldPassword}
                newPassword={newPassword}
                setNewPassword={setNewPassword}
            />
            <ChangePasswordPageFooter
                // 修改传递给子组件的处理函数名称
                handleChangePassword={handleChangePassword}
                isFormValid={isFormValid}
            />
        </AuthBox>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}
export default connect(null, mapActionsToProps)(ChangeP);
