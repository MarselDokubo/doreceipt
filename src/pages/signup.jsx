import { FormInput } from "../components/form-input";
import { useState,useRef } from "react";
import { Button } from "../ui/button";
import { Logo } from "../components/logo";
import { isAuthenticated, signupEmailPassword } from "../service/authService";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSubmit } from "react-router-dom";
import { useActionData } from "react-router-dom";
import { redirect } from "react-router-dom";
import { GoogleSignIn } from "../components/google-signin";

export async function action({ params, request }) {
    let formData = await request.formData()
    let email = formData.get("email")
    let username = formData.get("username")
    let password = formData.get("password")
    console.log("action ran!!", email, username, password)

    try {
        const user = await signupEmailPassword(email, password)
        return redirect("/inbox")
    }
    catch(e) {
        return e;
    }
}

export function SignUp() {
    const loginError = useActionData();
    const submit = useSubmit()
    const [activeIndex, setActiveIndex] = useState("")
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    function handleForm(userInfo) {
        submit(userInfo, {
            method: "post",
        })
    }
    function focusInput(name) {
        setActiveIndex(name)
    }
    return (
        <div onClick={() => focusInput("")} className="bg-primary-300 min-h-screen min-w-max md:max-w-sm text-light-400 flex flex-col justify-center">
            <div className="img_wrapper max-w-56 mx-auto md:hidden ">
                <img src="/src/assets/img/signup/sign-up-8044445-6430846.png" alt="" height="450" width="450" className="w-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-end mt-6 md:mb-12">
                <div className="self-start mb-10 ml-6 logo text-4xl text-primary-200 font-black md:block hidden">
                    Sign up
                </div>
                <form className="justify-self-end form__wrapper px-8" onSubmit={handleSubmit(handleForm)} onClick={(e) => e.stopPropagation()}>
                    <p className="intro mb-4 -ml-3">Welcome! How would you like to connect?</p>
                    <FormInput type="text" name="username" label="Username" placeholder="john doe" isActive={activeIndex === "username"} onFocus={() => focusInput("username")} register={register} message={"Please provide a username"} errors={errors}/>
                    <FormInput type="email" name="email" label="Email" placeholder="username@example.com" isActive={activeIndex === "email"} onFocus={() => focusInput("email")} register={register} message={"Please provide a correct email"} errors={errors}/>
                    <FormInput type="password" name="password" label="Password" placeholder="*******" isActive={activeIndex === "password"} onFocus={() => focusInput("password")} register={register} message={"Please provide a password"} errors={errors} />
                    <button  className={`bg-primary-200 p-4 rounded-full font-bold w-full mt-1`}>Sign up</button>
                    <br />
                    <br />
                    <p className="text-xs -mt-6 text-end">Already registered? <Link to=".." className="underline underline-offset-2 text-base mr-3">Login</Link></p>
                </form>
                <div className="h-1 w-12 mt-8 mx-auto bg-primary-200 rounded-full border border-primary-200 mb-5"></div>
                <div className="px-8">
                    <GoogleSignIn />
                </div>

            </div>
             <div className="tos mt-8 text-center text-xs">
                    <p className="text-[90%]">By registering, you agree to our <a href="#" className="text-cyan-300 hover:underline">terms of service</a> and <a href="#" className="text-cyan-300 hover:underline">privacy policy</a></p>
                </div>
            <div className="py-4 font-black text-primary-100 text-xl">
                <Logo />
            </div>

        </div>
    )
}