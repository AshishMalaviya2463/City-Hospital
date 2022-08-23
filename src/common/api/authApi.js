import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export const signupapi = (data) => {
    // console.log("api : ", data)

    return new Promise((res, rej) => {
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
    })
}