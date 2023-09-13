import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const authActions = {
    SET_USER_DETAILS: "AUTH.SET_USER_DETAILS"
};

export const getActions = (dispatch) => {
    return {
        login: (userDetails, history) => dispatch(login(userDetails, history)),
        register: (userDetails, history) => dispatch(register(userDetails, history)),
    }
}
const setUserDetails = (userDetails) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails,
    }
} 

const login = (userDetails, history) => {
    return async (dispatch) => {
        const response = await api.login(userDetails);
        console.log(response);
        if(response.error) {
            //show error message
            dispatch(openAlertMessage(response?.exception?.response?.data))
        } else {
            const { userDetails } = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));
            
            dispatch(setUserDetails(userDetails));
            history('/dashboard');
        }
    }
}


const register = (userDetails, history) => {
    return async (dispatch) => {
        const response = await api.register(userDetails);
        console.log(response);
        if(response.error) {
            //show error message
            dispatch(openAlertMessage(response?.exception?.response?.data))

        } else {
            const { userDetails } = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));

            dispatch(setUserDetails(userDetails));
            history('/dashboard');
        }
    }
}