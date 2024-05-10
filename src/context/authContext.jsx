import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import {  createContext, useContext } from "react";
import { auth } from "../service/config";

const authContext = createContext()

export function useAuth() {
    return useContext(authContext)
}


export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null)
    // onAuthStateChanged(auth, )
    
    return (
        <authContext.Provider value={currentUser}>
            {children}
        </authContext.Provider>
        )
}

