import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, connectAuthEmulator, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./config";

let user = sessionStorage.getItem("userCredential") || null;

onAuthStateChanged(auth, userCredential => {
        console.log("Auth state changed!!", userCredential)
        sessionStorage.setItem("userCredential", userCredential)
        user = userCredential;
})


export function isAuthenticated() {
        return user;
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