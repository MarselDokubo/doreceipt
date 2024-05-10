import { useForm } from "react-hook-form"
import { login } from "../service/authService"

function Form() {
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    function handleForm(state) {
        console.log("form state", state)
    }
    return (
              <div className="auth-form  flex-1 flex   flex-col items-center justify-center h-screen">
                {/* <div className="logo text-3xl font-bold">
                    <img src="doreceipt-girl.png" width="200" height="200" alt="" />
                </div> */}
                <h1 className="text-3xl font-bold mt-28 md:mt-12">DoReceipt<span className="text-indigo-800">.</span></h1>
                <form className="flex flex-col items-center justify-center flex-1" onSubmit={handleSubmit(handleForm)}>
                    <div className="profile flex gap-1 mb-12 w-full items-center justify-center">
                        <span className="border border-gray-300 flex-1"></span>
                        <span><img src="user-icon.svg" alt="" width={30} height={30} /></span>
                        <span className="border border-gray-300 flex-1"></span>
                    </div>
                    <div className="input-wrapper w-96 mb-4">
                        <label htmlFor="username">
                            <p className="text-sm text-gray-500 font-bold mb-1">Username</p>
                        <input type="text" name="username" placeholder="John" className="border-b-2 border-gray-300 w-full bg-transparent text-gray-700 focus:bg-transparent focus:outline-none text-gray-600 pb-0.5 mt-0 focus:mt-2 focus:placeholder:text-transparent ease-in-out transition-all delay-100 active:outline-none active:bg-transparent active:border-0 hover:outline-none "  {...register("username", { required: {value:true, message:"Name cannot be empty! Please type your name"}, })} aria-describedby="username-error" aria-invalid={errors.username ? "true" : "false"} />
                        <p id="username-error" role="alert" className="text-red-600 text-sm mt-1">{errors?.username?.message}</p>
                        </label>
                    </div>
                    <div className="input-wrapper w-96 mb-4">
                        <label htmlFor="email">
                            <p className="text-sm text-gray-500 font-bold mb-1">Email</p>
                        <input type="email" name="email" placeholder="example@email.com" className="border-b-2 border-gray-300 w-full bg-transparent text-gray-700 focus:bg-transparent focus:outline-none text-gray-600 pb-0.5 mt-0 focus:mt-2 focus:placeholder:text-transparent ease-in-out transition-all delay-100 active:outline-none active:bg-transparent active:border-0 hover:outline-none "  {...register("username", { required: {value:true, message:"Email cannot be empty! Please type your name"}, })} aria-describedby="username-error" aria-invalid={errors.email ? "true" : "false"} />
                        <p id="username-error" role="alert" className="text-red-600 text-sm mt-1">{errors?.email?.message}</p>
                        </label>
                    </div>
                    <div className="input-wrapper w-96 mb-4">
                    <label htmlFor="password">
                        <p className="text-sm text-gray-500 font-bold mb-1">Password</p>
                        <input type="password" name="password" placeholder="*****" className="border-b-2 border-gray-300 w-full bg-transparent text-gray-700 focus:bg-transparent focus:outline-none focus:placeholder:text-transparent text-gray-600 pb-0.5 mt-0 focus:mt-2 ease-in-out transition-all active:outline-none active:bg-transparent active:border-0 hover:outline-none" {...register("password", { required: {value: true, message:"Password field cannot be empty! Please type your password!"}, minLength: {value: 4, message: "Password must be more than 4 characters" }})} aria-labelledby="password-error" aria-invalid={errors.password ? "true" : "false"} />
                        <p id="password-error" role="alert" className="text-red-600 text-sm mt-1">{errors?.password?.message}</p>
                        </label>
                    </div>
                    <button className="w-96 bg-indigo-900 text-white text-base shadow-gray-800 rounded-full flex flex-col items-center font-bold mt-8 p-4 br-4 hover:bg-indigo-800 hover:px-5 transition-all">Signup</button>

                     <div className="m-14  flex gap-2 w-full items-center justify-center">
                        <span className="border border-gray-300 flex-1"></span>
                        <span className="text-gray-500">or</span>
                        <span className="border border-gray-300 flex-1"></span>
                    </div>

                        <div className="flex gap-2 text-gray-500 w-full items-center justify-center">
                        <a href="#" className="flex text-sm items-center gap-1 hover:text-gray-600 hover:underline transition-all"><img src="google.svg" /> Sign in with Google</a>
                        
                    </div>

                 
                  
                </form>
                <div className="tos m-4 md:mt-14 ">
                    <p className="text-xs">By loggin in, you agree to our <a href="#" className="text-blue-800 hover:underline">terms of service</a> and <a href="#" className="text-blue-800 hover:underline">privacy policy</a></p>
                </div>
            </div>
    )
}
export function SignUp() {
    return (
        <Form />
    )
}




// primary: #5F52ED