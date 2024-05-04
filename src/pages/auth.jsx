export default function Auth() {
    return (
        <div className="auth-wrapper md:flex max-w-screen ">
            <div className="md:flex flex-col items-center justify-between gap-8 bg-indigo-900 p-4 md:p-12 hidden">
                    <div className="flex-1 flex items-center justify-center">
                        <img src="doreceipt-girl.png" width="500" height="500" alt=""/>
                    </div>
                    <div className="text-white text-center">
                        <h1 className="font-bold ">Little steps, big choices, huge change</h1>
                        <p className="text-sm text-center">Rewrite, transform your financial story.</p>
                </div>
            </div>

        <div className="auth-form  flex-1 flex   flex-col items-center justify-center h-screen">
                {/* <div className="logo text-3xl font-bold">
                    <img src="doreceipt-girl.png" width="200" height="200" alt="" />
                </div> */}
                <h1 className="text-3xl font-bold mt-28 md:mt-12">DoReceipt <span className="text-indigo-800">.</span></h1>
                <form className="flex flex-col items-center justify-center flex-1">
                    <div className="profile flex gap-1 mb-12 w-full items-center justify-center">
                        <span className="border border-gray-300 flex-1"></span>
                        <span><img src="user-icon.svg" alt="" width={30} height={30} /></span>
                        <span className="border border-gray-300 flex-1"></span>
                    </div>
                    <fieldset className="input-wrapper w-96 mb-4">
                        <legend className="text-sm text-gray-500 font-bold mb-1">Username or Email</legend>
                        <label htmlFor="username">
                            {/* <p className="text-xs font-bold mb-2">Username or email</p> */}
                            <input type="text" name="username" placeholder="example@email.com" className="border-b-2 border-gray-300 w-full bg-transparent text-gray-700 focus:bg-transparent focus:outline-none text-gray-600 pb-0.5 mt-0 focus:mt-2 ease-in-out transition-all delay-100 active:outline-none active:bg-transparent active:border-0 hover:outline-none"  />
                        </label>
                    </fieldset>
                    <fieldset className="input-wrapper w-96 mb-4">
                        <legend className="text-sm text-gray-500 font-bold mb-1">Password</legend>
                        <label htmlFor="password">
                            <input type="text" name="password" placeholder="example@email.com" className="border-b-2 border-gray-300 w-full bg-transparent text-gray-700 focus:bg-transparent focus:outline-none text-gray-600 pb-0.5 mt-0 focus:mt-2 ease-in-out transition-all active:outline-none active:bg-transparent active:border-0 hover:outline-none" />
                        </label>
                    </fieldset>
                    <button className="w-96 bg-indigo-900 text-white text-base shadow-gray-800 rounded-full flex flex-col items-center font-bold mt-8 p-4  br-4 hover:bg-indigo-800 hover:px-5 transition-all">Login</button>

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
        </div>

    )
}


// primary: #5F52ED