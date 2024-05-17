import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, connectAuthEmulator } from "firebase/auth";
import { auth } from "./config";

// onAuthStateChanged()

export function isAuthenticated() {

        return false
}


export async function signupwithEmail(username,email, password) {
        console.log("Signup",username, email, password)
        // await createUserWithEmailAndPassword(auth, email, password)
}


export async function signupWithGoogle() {
        
}

export async function loginEmailPassword(email, password) {
        const userCredential = await signInWithEmailAndPassword("Login", email, password)
        console.log(userCredential.user)
}

export function logout() {
        
}

connectAuthEmulator(auth, "http://localhost:9099");