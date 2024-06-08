// proveedores de auth

import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    /* const credentials = GoogleAuthProvider.credentialFromResult(result);
        console.log({credentials}); */

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    // email of user's account used for sign in
    const email = error.customData.email;
    //authcredential type used
    const credential = GoogleAuthProvider.credentialFromError(error);

    return {
      ok: false,
      errorCode,
      errorMessage,
      email,
      credential,
    };
  }
};

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
  try {
    
    const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    
    const {uid,photoURL} = response.user;
    console.log({response});

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    }

  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}
