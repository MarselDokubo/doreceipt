import {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        connectAuthEmulator,
        GoogleAuthProvider,
        signInWithPopup
} from "firebase/auth";
import { auth } from "./config";

let user = new Promise((res, rej) => {
        onAuthStateChanged(auth, userCredential => {
                res(userCredential)
        })
})


export async function isAuthenticated() {
        return await user;
}


export async function signupEmailPassword(email, password) {
        try {
                let user = await createUserWithEmailAndPassword(auth, email, password)
        }
        catch (e) {
                console.log("error", e)
        }
}


export async function signInGoogle() {
        const provider = new GoogleAuthProvider();
        let result = await signInWithPopup(auth, provider )
        let credential = GoogleAuthProvider.credentialFromResult(result)
}

export async function loginEmailPassword(email, password) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
}

export function logout() {
        
}

// connectAuthEmulator(auth, "http://localhost:9099");