// acciones que despachan pero internamiente son asincronas
import { registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './';

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        // console.log(email, password);
        dispatch(checkingCredentials())
    };
}

export const startGoogleSingIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const result = await singInWithGoogle()

        if(!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    };
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials()) // Cambiar el estado de la autenticación a 'checking'

        const { ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName})

        if(!ok) return dispatch(logout({errorMessage})); // si la response.ok = false, logout cierra la response y muestra el mensaje de error

        dispatch(login({uid, photoURL, email, displayName})) // si la response.ok = true, login cambia el estado de la autenticación a 'authenticated' y almacena los valores de la respuesta
    }
}