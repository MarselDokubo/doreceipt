import { useState } from "react";
import { ChatIcon } from "../components/chat-icon";
import { Button } from "../ui/button";

export function Expenses() {
    const [isVisible, setIsVisible] = useState(false)
    function toggleVisibility() {
        setIsVisible(prev => !prev)
    }
    return (
        <div className="bg-light-400 h-screen">
            <div className="font-serif font-bold text-xl md:text-2xl px-6 py-4 md:py-6 border-b-2 flex items-center justify-between ">
                <p>Expenses</p>
            </div>
            <div className="border-b-2 p-4">
            <div className=" p-4 flex items-center justify-between relative">
                <div className="filter">
                    <button className="text-cyan-600">
                        <i className="font-expens expensicons expensicons-inbox mr-1 text-cyan-600 align-[-2px]">&#xE94a;</i>
                        <span>Show Filters</span>
                    </button>
                </div>
                <div className={`${!isVisible && "hidden"} expense-options bg-light-300 py-2 w-64 rounded-md absolute right-5 top-[60px] pb-6 shadow-sm`}>
                    <h2 className="mb-4 mx-4 uppercase text-xs font-bold">Expense</h2>
                    <p className="hover:bg-primary-100 px-4"><i className="font-expens expensicons  mr-1 text-xl text-primary-200 align-[-4px]">&#xE955;</i> Manually Create</p>
                    <p className="hover:bg-primary-100 px-4 "><i className="font-expens expensicons  mr-1 text-xl text-primary-200 align-[-4px]">&#xE955;</i> Scan Receipt</p>
                    <p className="hover:bg-primary-100 px-4 "><i className="font-expens expensicons  mr-1 text-xl text-primary-200 align-[-4px]">&#xE955;</i> Create Multiple</p>
                    <p className="hover:bg-primary-100 px-4 "><i className="font-expens expensicons  mr-1 text-xl text-primary-200 align-[-4px]">&#xE955;</i> Time</p>

                </div>
                <div className="new-expense">
                    <Button label="New Expense" className={`py-2 px-4`} onClick={toggleVisibility}/>
                </div>
                </div>
                <FilterOptions />
            </div>
            <div className="main mx-auto md:max-w-4xl mt-4 md:mt-24 md:flex-1 px-4 ">
                <div className="tuxy p-8 bg-light-300 rounded-t-xl border-b-2 pb-4 shadow-md">
                    <p className="font-serif font-bold text-base">Tuxedo</p>
                </div>
                <div className="flex flex-col items-center rounded-b-xl bg-light-300 p-8 shadow-md md:p-14 md:pt-0 pt-0 md:mx-auto ">
                    <div className="flex-1 w-56">
                        <img src="/src/assets/img/doreceipt/emptystate__expenses.svg" alt="" width="620" height="565" className="object-cover "/>
                    </div>
                    <div className="text-center">
                        <h2 className="font-bold text-xl mb-2 ">You have no expenses </h2>
                        <p className="font-normal text-md">Drag a receipt onto this page or create a new expense using the button above.
                        </p>
                    </div> 
                </div>
            </div>
            <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8">
                <ChatIcon />
            </div>
        </div>
    )
}


function FilterOptions() {
    return (
        <div className="px-4">
            <div className="date">
                <i className="font-expens expensicons  mr-1 text-xl text-slate-400 align-[-4px]">&#xE94E;</i>
                <span className="bg-white p-2 border rounded-md ml-2"><label htmlFor="from-date">From <input type="date" name="from-date" id="from-date"  className="border-l ml-1 pl-2 p-1 text-transparent focus:text-gray-600 focus:outline-none"/></label></span>
                <span className="bg-white p-2 border rounded-md ml-2"><label htmlFor="from-date">To <input type="date" name="from-date" id="from-date"  className="border-l ml-1 pl-2 p-1 text-transparent focus:text-gray-600 focus:outline-none"/></label></span>
            </div>
            <div className="merchant">
                <i className="font-expens expensicons  mr-1 text-xl text-slate-400 align-[-4px]">&#xE94E;</i>
                <span className="bg-white p-2 border rounded-md ml-2"><label htmlFor="from-date"> <input type="text" name="from-date" id="from-date"  className="border-l ml-1 pl-2 p-1 focus:text-gray-600 focus:outline-none"/></label></span>
                <span className="bg-white p-2 border rounded-md ml-2"><label htmlFor="from-date">To <input type="date" name="from-date" id="from-date"  className="border-l ml-1 pl-2 p-1 text-transparent focus:text-gray-600 focus:outline-none"/></label></span>
            </div>
        </div>
    )
}