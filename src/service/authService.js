import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, connectAuthEmulator } from "firebase/auth";
import { auth } from "./config";

let user = null;

onAuthStateChanged(auth, userCredential => {
        user = userCredential;
})


export function isAuthenticated() {
        return user;
}


export async function signupEmailPassword(email, password) {
        try {
                const user = await createUserWithEmailAndPassword(auth, email, password)
                console.log("signed up" , user)
        }
        catch (e) {
                console.log("error", e)
        }
}


export async function signupWithGoogle() {
        
}

export async function loginEmailPassword(email, password) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
}

export function logout() {
        
}

connectAuthEmulator(auth, "http://localhost:9099");