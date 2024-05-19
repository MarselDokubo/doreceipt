import { redirect } from "react-router-dom"
import { signInGoogle } from "../service/authService"

async function handleSignIn() {
    try {
        await signInGoogle()
        return redirect("/inbox")
     }
    catch (e) {
        console.log(e)
    }
    
}

export function GoogleSignIn () {
    return (
        <button className={`bg-white p-4 w-full rounded-full font-bold text-slate-900 my-4
            flex gap-3 items-center justify-center`} onClick={handleSignIn}>
                <i className=""><img src="/src/assets/img/google.svg" alt="" className="w-5"/></i>
                <span>Continue with Google</span>
        </button>
    )
}