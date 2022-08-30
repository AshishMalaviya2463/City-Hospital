import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";
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
                        res({ payload: user })
                    } else {
                        rej({ payload: "Please check your mail" })
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    // console.log(errorCode)
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

export const signOutApi = () => {
    return new Promise((res, rej) => {
        try {
            signOut(auth)
                .then(() => {
                    res({ payload: "LogOut Successfull." })
                })
                .catch((e) => {
                    rej({ payload: e })
                })
        } catch (e) {
            rej({ payload: e })
        }
    })
}

export const forgotApi = (data) => {
    // console.log("forgot api : ", data)
    const user = auth.currentUser;

    return new Promise((res, rej) => {
        try {
            updatePassword(user, data.password)
                .then(() => {
                    res({ payload: "Password Updated." })
                })
                .catch((e) => {
                    console.log(e)
                    rej(e.message)
                });
        } catch (e) {
            console.log(e)
            rej(e.message)
        }
    })
}