import { ChatIcon } from "../components/chat-icon";

export function Home() {
    return (
        <div className="bg-light-400 flex flex-col h-screen">
            <div className="font-serif font-bold text-xl md:text-2xl px-6 py-4 md:py-6 border-b-2 flex items-center justify-between ">
                <p>Home</p>
            </div>
            <div className="main md:w-max md:mx-auto mt-4 md:mt-12 md:flex-1 px-4">
                <div className="tuxy p-8 bg-light-300 rounded-t-xl border-b-2 pb-4"><p className="font-serif font-bold text-base">Tuxedo</p></div>
                <div className="flex flex-col md:flex-row items-center rounded-b-xl bg-light-300 p-4 md:p-14 pt-0 md:w-max md:m-auto ">
                    <div className="flex-1 w-48 md:w-96 md:order-1">
                        <img src="/src/assets/img/receipt.jpg" alt="" width="620" height="565" className="object-cover "/>
                    </div>
                    <div className="self-start mt-8 md:w-[50ch]">
                        <h2 className="font-serif font-bold text-2xl mb-6 text-justify">Upload a receipt, or drag & drop </h2>
                        <p className="text-justify">SmartScan automatically transcribes the receipt details, so you don't have to.
                        </p>
                        <br />
                        <p> Prefer to snap photos instead? Download the app!</p>
                        <br />
                        <button className="bg-primary-200 w-full md:w-max p-4 rounded-full text-md text-light-300 md:mt-4 mb-4 md:mt-6 font-bold">Add Receipt</button>
                    </div> 
                </div>
            </div>
            <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8">
                <ChatIcon />
            </div>
        </div>
    )
}