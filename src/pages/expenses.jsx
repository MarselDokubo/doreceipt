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
    const [category, setCategory] = useState("All Category")
    const [categoryIsVisible, setCategoryIsVisible] = useState(false)
    function changeCategory({ target }) {
        setCategory(target.dataset.value)
    }
    function revealCategory() {
        setCategoryIsVisible(prev => !prev)
    }
    return (
        <div className="px-4">
            <div className="date">
                <i className="font-expens expensicons  mr-1 text-xl text-slate-400 align-[-4px]">&#xE94E;</i>
                <span className="bg-white p-2 border rounded-md ml-2"><label htmlFor="from-date">From <input type="date" name="from-date" id="from-date"  className="border-l ml-1 pl-2 p-1 text-transparent focus:text-gray-600 focus:outline-none"/></label></span>
                <span className="bg-white p-2 border rounded-md ml-2"><label htmlFor="to-date">To <input type="date" name="to-date" id="to-date"  className="border-l ml-1 pl-2 p-1 text-transparent focus:text-gray-600 focus:outline-none"/></label></span>
            </div>
            <div className="merchant mt-4">
                <i className="font-expens expensicons  mr-1 text-xl text-slate-400 align-[-4px]">&#xE977;</i>
                <span className="bg-white border rounded-md p-2 ml-2">
                    <label htmlFor="merchant">
                        <input type="text" id="merchant" placeholder="Merchant" className="focus:text-gray-600 focus:outline-none border-r-2" />
                        <span className="font-expens expensicons text-slate-400 ml-[6px] align-[-1px] ">&#xE93C;</span>
                    </label>
                </span>
                <span className="billable rounded-full bg-slate-300 ml-2 py-[8px]">
                    <button role="button" autoFocus className="focus:outline-none focus:bg-primary-400 text-sm font-light focus:text-base text-[13px] rounded-full text-slate-900 focus:text-slate-200 hover:text-cyan-600 p-[5px] px-3">All</button>
                    <button role="button" className="focus:outline-none focus:bg-primary-400 text-sm font-light focus:text-base text-[13px] rounded-full text-slate-900 focus:text-slate-200 hover:text-cyan-600 p-[5px] px-3">Billable</button>
                    <button role="button" className="focus:outline-none focus:bg-primary-400 text-sm font-light focus:text-base text-[13px] rounded-full text-slate-900 focus:text-slate-200 hover:text-cyan-600 p-[5px] px-3">Reimbursable</button>
                </span>
                <span className="p-2 ml-2 bg-white rounded-md border">
                    <select name="" id="" className="">
                        <option value="-1">All types</option>
                        <option value="expenses">Expenses</option>
                        <option value="receipts">Receipts</option>
                        <option value="documents">Documents</option>
                    </select>
                </span>
            </div>
            <div className="search mt-4">
                <i className="font-expens expensicons  mr-1 text-xl text-slate-400 align-[-4px]">&#xE93C;</i>
                <span className="bg-white p-2 pl-1 border rounded-md ml-2">
                    <input type="text" value={category} onFocus={() => {!categoryIsVisible && revealCategory()}} onChange={({target}) => setCategory(target.value)} className="ml-1 pl-2 text-slate-900 focus:outline-none" />
                    <i role="button" className="font-expens expensicons text-sm text-slate-400" onClick={revealCategory}>&#xE921;</i>
                </span>
                <ul className={`${!categoryIsVisible && "hidden"} dropdown-menu expensify-dropdown text-slate-900 ml-8 mt-1 border border-t-0 max-h-72 max-w-max overflow-y-scroll absolute bg-light-400`}>
                    <li className={`active li-compact p-2 pr-2 border hover:bg-primary-100`} role="button" onClick={changeCategory} data-value="All Category">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="All categories">
                            <span>
                                <i className="expensicons expensicons-checkmark"></i>
                            </span>All categories
                        </a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Uncategorized">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Uncategorized">Uncategorized</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Advertising">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Advertising">Advertising</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Benefits">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Benefits">Benefits</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Car">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Car">Car</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Equipment">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Equipment">Equipment</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Fees">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Fees">Fees</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Home Office">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Home Office">Home Office</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Insurance">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Insurance">Insurance</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Interest">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Interest">Interest</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Labor">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Labor">Labor</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Maintenance">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Maintenance">Maintenance</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Materials">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Materials">Materials</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Meals and Entertainment">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Meals and Entertainment">Meals and Entertainment</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Office Supplies">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Office Supplies">Office Supplies</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Other">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Other">Other</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Professional Services">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Professional Services">Professional Services</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Rent">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Rent">Rent</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Taxes">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Taxes">Taxes</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Travel">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Travel">Travel</a>
                    </li>
                    <li className="li-compact p-2 pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Utilities">
                        <a href="#" role="button" tabIndex="-1" data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Utilities">Utilities</a>
                    </li>
                </ul>
            </div>
            <div className="type mt-4">
                <i className="font-expens expensicons  mr-1 text-xl text-slate-400 align-[-4px]">&#xE958;</i>
                <button role="button" className="ml-2 focus:outline-none bg-primary-400 text-sm font-light text-[13px] rounded-full text-slate-200 p-[5px] px-3">Unreported</button>
                <button role="button" className="ml-2 focus:outline-none bg-primary-400 text-sm font-light text-[13px] rounded-full text-slate-200 p-[5px] px-3">Open</button>
                <button role="button" className="ml-2 focus:outline-none bg-primary-400 text-sm font-light text-[13px] rounded-full text-slate-200 p-[5px] px-3">Processing</button>
                <button role="button" className="ml-2 focus:outline-none bg-primary-400 text-sm font-light text-[13px] rounded-full text-slate-200 p-[5px] px-3">Approved</button>
                <button role="button" className="ml-2 focus:outline-none bg-primary-400 text-sm font-light text-[13px] rounded-full text-slate-200 p-[5px] px-3">Reimbursed</button>
                <button role="button" className="ml-2 focus:outline-none bg-primary-400 text-sm font-light text-[13px] rounded-full text-slate-200 p-[5px] px-3">Closed</button>
                <button role="button" className="ml-2 focus:outline-none bg-primary-400 text-sm font-light text-[13px] rounded-full text-slate-200 p-[5px] px-3">Deleted</button>
            </div>
        </div>
    )
}