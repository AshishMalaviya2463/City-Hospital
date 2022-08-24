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
                            res({ payload: user })
                            console.log("please check your mail")
                        })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    rej({ payload: errorCode })
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
                        res(user)
                    } else {
                        res("check your mail")
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    rej({ payload: errorCode })
                });
        } catch (error) {
            const errorCode = error.code;
            rej({ payload: errorCode })
        }
    })
}