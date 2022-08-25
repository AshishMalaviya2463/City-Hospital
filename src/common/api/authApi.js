import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export const signupapi = (data) => {
    // console.log("api : ", data)

    return new Promise((res, rej) => {
        try {
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    sendEmailVerification(user)
                        .then(() => {
                            res({ payload: "Registration Successfull. Please check your mail" })
                        })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode === "auth/email-already-in-use") {
                        rej({ payload: "This E-mail is Already Registered." })
                    }
                });
        } catch (error) {
            const errorCode = error.code;
            rej({ payload: errorCode })
        }
    })
}

export const signinapi = (data) => {
    // console.log("api : ", data)

    return new Promise((res, rej) => {
        try {
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if (user.emailVerified) {
                        res({ payload: "Log In Successfull." })
                    } else {
                        rej({ payload: "Please check your mail" })
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode)
                    if (errorCode === "auth/wrong-password") {
                        rej({ payload: "Wrong E-mail or password." })
                    } else if (errorCode === "auth/user-not-found") {
                        rej({ payload: "E-mail not found." })
                    }
                });
        } catch (error) {
            const errorCode = error.code;
            rej({ payload: errorCode })
        }
    })
}