import { redirect } from "react-router-dom";
import { ChatIcon } from "../components/chat-icon";
import { isAuthenticated } from "../service/authService";


export function loader() {
    console.log("Home loader should work")
    const userCredentials = isAuthenticated()
    console.log("userCredentials",userCredentials)
    if (!userCredentials) return redirect("/")
    return userCredentials;
}
export function Home() {
    return (
        <div className="bg-light-400 flex flex-col min-w-[30ch] h-screen px-4">
            <div className="font-serif font-bold text-xl md:text-2xl px-4 py-4 md:py-6 border-b-2 ">
                <p>Home</p>
            </div>
            <div className="main max-w-5xl w-full mx-auto mt-4 md:mt-12 flex-1 ">
                <div className="tuxy p-8 bg-light-300 rounded-t-xl border-b-2 pb-4"><p className="font-serif font-bold text-base">Tuxedo</p></div>
                <div className="flex flex-col justify-evenly md:flex-row items-center rounded-b-xl bg-light-300 px-4">
                    <div className="img__wrapper md:min-w-72 md:min-h-72 max-w-96 max-h-96 w-full h-full flex-1 md:order-1">
                        <img src="/src/assets/img/receipt.jpg" alt="" width="620" height="565" className="object-cover"/>
                    </div>
                    <div className="self-start mt-10 max-w-[50ch] mx-auto text-center md:text-start w-full">
                        <h2 className="font-serif font-bold text-2xl mb-6 ">Upload a receipt, or drag & drop </h2>
                        <p className="">SmartScan automatically transcribes the receipt details, so you don't have to.
                        </p>
                        <br />
                        <p> Prefer to snap photos instead? Download the app!</p>
                        <br />
                        <button className="bg-primary-200 min-w-max w-3/4 md:w-max py-3 px-4 rounded-full text-md text-light-300 mb-4 md:mt-6 font-bold">Add Receipt</button>
                    </div> 
                </div>
            </div>
            <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8">
                <ChatIcon />
            </div>
        </div>
    )
}