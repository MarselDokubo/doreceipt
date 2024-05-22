import { redirect } from "react-router-dom"
import { signInGoogle } from "../service/authService"
import { useNavigate } from "react-router-dom"


export function GoogleSignIn ({onSignin}) {
    let navigate = useNavigate()
    async function handleSigninGoogle() {
        await signInGoogle();
        navigate("/inbox", {replace:true})
    }

    return (
        <button className={`bg-white p-4 w-full rounded-full font-bold text-slate-900 my-4
            flex gap-3 items-center justify-center`} onClick={handleSigninGoogle}>
                <i className=""><img src="/src/assets/img/google.svg" alt="" className="w-5"/></i>
                <span>Continue with Google</span>
        </button>
    )
}