import { FormInput } from "../components/form-input";
import { useState,useRef } from "react";
import { Button } from "../ui/button";
import { Logo } from "../components/logo";


export function Login() {
    const [activeIndex, setActiveIndex] = useState("")
    function focusInput(name) {

        setActiveIndex(name)
    }
    return (
        <div onClick={() => focusInput("")} className="bg-primary-300 h-screen min-w-max md:max-w-sm text-light-400 flex flex-col justify-center">
            <div className="img_wrapper max-w-xs md:max-w-64 mx-auto md:hidden ">
                <img src="/src/assets/img/signup/sign-up-4922762-4097209.png" alt="" height="450" width="450" className="w-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
                <div className="self-start mb-10 ml-6 logo text-4xl text-primary-200 font-black md:block hidden">
                    <Logo />
                </div>
                <div className="justify-self-end form__wrapper px-8" onClick={(e) => e.stopPropagation()}>
                    <p className="intro mb-4 -ml-3">Welcome! How would you like to connect?</p>
                    <FormInput type="email" label="Email" placeholder="username@example.com" isActive={activeIndex === "email"} onFocus={() => focusInput("email")}/>
                    <FormInput type="password" label="Password" placeholder="*******" isActive={activeIndex === "password"} onFocus={() => focusInput("password")} />
                    <button  className={`bg-primary-200 p-4 rounded-full font-bold w-full mt-1`}>Login</button>
                    <br />
                    <br />
                    <button className={`bg-white p-4 w-full rounded-full font-bold text-slate-900 my-4
                    flex gap-3 items-center justify-center `}>
                        <i className=""><img src="/src/assets/img/google.svg" alt="" className="w-5"/></i>
                        <span>Continue with Google</span>
                    </button>
                </div>
            </div>
            <span className="h-1 w-12 mx-auto bg-primary-200 rounded-full"></span>
             <div className="tos mt-8 text-center text-xs">
                    <p className="text-[90%]">By loggin in, you agree to our <a href="#" className="text-cyan-300 hover:underline">terms of service</a> and <a href="#" className="text-cyan-300 hover:underline">privacy policy</a></p>
                </div>
            <div className="py-4 font-black text-primary-100 text-xl">
                <Logo />
            </div>

        </div>
    )
}