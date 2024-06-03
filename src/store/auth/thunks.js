// acciones que despachan pero internamiente son asincronas
import { checkingCredentials } from './';

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        // console.log(email, password);
        dispatch(checkingCredentials())
    };
}

export const startGoogleSingIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    };
}