import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";



export async function signupwithEmail({email, password}) {
        await createUserWithEmailAndPassword(auth, email, password)
}


export async function signupWithGoogle() {
        
}

export function login(email, password) {
        console.log("Login", email, password)
}

export function logout() {
        
}
