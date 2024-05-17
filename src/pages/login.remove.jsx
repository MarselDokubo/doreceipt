import { useForm } from "react-hook-form"
import { login } from "../service/authService"

function Form() {
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    function handleForm({email, password}) {
        login(email, password)
    }
    return (
              <div className="auth-form p-4 max-w-md w-full h-full mx-auto flex flex-col ">
                <h1 className="text-2xl font-bold w-max mx-auto my-4">DoReceipt<span className="text-[120%] text-primary-200">.</span></h1>
                <form className="w-full flex-1 flex flex-col justify-center" onSubmit={handleSubmit(handleForm)}>
                    <div className="profile flex items-center my-4 w-full">
                        <span className="h-0.5 flex-1 bg-gray-400"></span>
                        <span><img src="user-icon.svg" alt="" width={30} height={30} /></span>
                        <span className="h-0.5 flex-1 bg-gray-400"></span>
                    </div>
                    <div className="input-wrapper my-3 w-full">
                        <label htmlFor="email">
                            <p className="text-sm text-gray-500 font-bold mb-1">Email</p>
                        <input type="email" name="email" placeholder="example@email.com" className="w-full border-b-2 border-gray-300 bg-transparent text-gray-700 focus:bg-transparent focus:outline-none text-gray-600 pb-0.5 mt-0 focus:mt-2 focus:placeholder:text-transparent ease-in-out transition-all delay-100 active:outline-none active:bg-transparent active:border-0 hover:outline-none "  {...register("email", { required: {value:true, message:"Please type your email"}, })} aria-describedby="username-error" aria-invalid={errors.email ? "true" : "false"} />
                        <p id="username-error" role="alert" className="">{errors?.email?.message}</p>
                        </label>
                    </div>
                    <div className="input-wrapper">
                    <label htmlFor="password">
                        <p className="text-sm text-gray-500 font-bold mb-1">Password</p>
                        <input type="password" name="password" placeholder="*****" className="w-full border-b-2 border-gray-300 bg-transparent text-gray-700 focus:bg-transparent focus:outline-none focus:placeholder:text-transparent text-gray-600 pb-0.5 mt-0 focus:mt-2 ease-in-out transition-all active:outline-none active:bg-transparent active:border-0 hover:outline-none" {...register("password", { required: {value: true, message:"Please type your password!"}, minLength: {value: 4, message: "Password must be more than 4 characters" }})} aria-labelledby="password-error" aria-invalid={errors.password ? "true" : "false"} />
                        <p id="password-error" role="alert" className="text-red-600 text-sm mt-1">{errors?.password?.message}</p>
                        </label>
                </div>
                <div className="btn w-full flex items-center justify-center mb-5">
                    <button className="w-48 bg-primary-200 text-white text-base shadow-gray-800 rounded-full font-bold mt-6 px-3 py-2  br-4 hover:bg-primary-300 hover:px-5 transition-all" >Login</button>
                </div>

                <div className="flex items-center gap-2">
                        <span className="h-0.5 bg-gray-400 flex-1"></span>
                        <span className="text-gray-500">or</span>
                        <span className="h-0.5 bg-gray-400 flex-1"></span>
                    </div>
                        <div className="signin__google text-gray-500 mt-4">
                        <button href="#" className="flex gap-1.5 mx-auto text-sm items-center hover:text-gray-600 hover:underline transition-all"><img src="google.svg" /> Sign in with Google</button>
                    </div>
                </form>
                <div className="tos mt-8 text-center">
                    <p className="text-xs">By loggin in, you agree to our <a href="#" className="text-blue-800 hover:underline">terms of service</a> and <a href="#" className="text-blue-800 hover:underline">privacy policy</a></p>
                </div>
            </div>
    )
}
export function Login() {
    return (
        <Form />
    )
}




// primary: #5F52ED

