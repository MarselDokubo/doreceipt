import { useState } from "react";
import { ChatIcon } from "../components/chat-icon";
import { Button } from "../ui/button";
import { useRef } from "react";
import { isAuthenticated } from "../service/authService";
import { redirect } from "react-router-dom";

export function loader() {
    const userCredentials = isAuthenticated()
    if (!userCredentials) return redirect("/")
    return userCredentials;
}

export function Expenses() {
    const [isVisible, setIsVisible] = useState(false)
    const [filterIsVisible, setFilterIsVisible] = useState(false);

    function toggleVisibility() {
        setIsVisible(prev => !prev)
    }
    function revealFilter() {
        setFilterIsVisible(prev => !prev)
    }

    return (
        <div className="bg-light-400 h-screen min-w-min overflow-x-hidden">
            <div className="font-serif font-bold text-xl md:text-2xl px-4 md:px-6 py-4 md:py-6 border-b-2 flex items-center justify-between ">
                <p>Expenses</p>
            </div>
            <div className="border-b-2 p-4">
                <div className=" md:p-4 flex items-center justify-between relative">
                    <div className="filter min-w-max">
                        <button className="text-cyan-600" onClick={revealFilter}>
                            <i className="font-expens expensicons expensicons-inbox mr-1 text-cyan-600 align-[-2px]">&#xE94a;</i>
                            {filterIsVisible? "Hide Filters": "Show Filters"}
                        </button>
                    </div>
                    <div className={`${!isVisible && "hidden"} expense-options bg-light-300 py-2 w-64 rounded-md absolute right-5 top-[60px] pb-6 shadow-sm`}>
                        <h2 className="mb-4 mx-4 uppercase text-xs font-bold">Expense</h2>
                        <p className="hover:bg-primary-100 px-4"><i className="font-expens expensicons  mr-1 text-xl text-primary-200 align-[-4px]">&#xE955;</i> Manually Create</p>
                        <p className="hover:bg-primary-100 px-4 "><i className="font-expens expensicons  mr-1 text-xl text-primary-200 align-[-4px]">&#xE955;</i> Scan Receipt</p>
                        <p className="hover:bg-primary-100 px-4 "><i className="font-expens expensicons  mr-1 text-xl text-primary-200 align-[-4px]">&#xE955;</i> Create Multiple</p>
                        <p className="hover:bg-primary-100 px-4 "><i className="font-expens expensicons  mr-1 text-xl text-primary-200 align-[-4px]">&#xE955;</i> Time</p>

                    </div>
                    <div className= "new-expense min-w-max">
                        <Button label="New Expense" className={`py-2 px-4`} onClick={toggleVisibility}/>
                    </div>
                </div>
                    {filterIsVisible && <FilterOptions />}
            </div>
            <div className="main mx-auto md:max-w-4xl mt-24 md:flex-1 px-4 ">
                <div className="tuxy p-8 bg-light-300 rounded-t-xl border-b-2 pb-4 shadow-md">
                    <p className="font-serif font-bold text-base">Tuxedo</p>
                </div>
                <div className="rounded-b-xl bg-light-300 p-8 shadow-md md:p-14 pt-0 md:mx-auto ">
                    <div className="flex-1 max-w-52 mx-auto">
                        <img src="/src/assets/img/doreceipt/emptystate__expenses.svg" alt="" width="620" height="565" className="object-cover"/>
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
    const list = useRef(null)
    function changeCategory({ target }) {
        setCategory(target.dataset.value)
          

    }
    function revealCategory(e) {
        e && console.log("Child", e), e.stopPropagation();
        setCategoryIsVisible(prev => !prev)
    }
    return (
        <div className="md:px-4 mt-6" onClick={(e) => {
            console.log("Parent")
            categoryIsVisible && setCategoryIsVisible(false)
        }}>
            <div className="date relative pl-6 md:pl-8 md:flex gap-2">
                <i className="absolute left-0 top-0 font-expens expensicons  mr-1 md:text-xl text-slate-400 align-[-4px]">&#xE94E;</i>
                <div className="flex-1 flex items-center px-2 bg-white max-w-96 w-full rounded-md mb-2">
                    <label htmlFor="from-date" className="border-r pr-2">From
                    </label>
                        <input type="date" name="from-date" id="from-date" className="flex-1 text-transparent focus:text-gray-600 focus:outline-none" />
                </div>
                <div className="flex items-center px-2 flex-1 bg-white rounded-md mb-2 max-w-96">
                    <label htmlFor="to-date" className="border-r pr-2">To
                    </label>
                        <input type="date" name="to-date" id="to-date" className="flex-1 text-transparent focus:text-gray-600 focus:outline-none" />
                </div>
            </div>
            <div className="merchant mt-5 relative pl-6 md:pl-8 items-center md:flex gap-2 ">
                <i className="absolute left-0 top-1 font-expens expensicons  mr-1 md:text-xl text-slate-400 align-[-4px]">&#xE977;</i>
                <div className="bg-white rounded-md max-w-96 mb-2 md:mb-0 px-2 p-0.5 flex-1 relative">
                        <input type="text" id="merchant" placeholder="Merchant" className="focus:text-gray-600 focus:outline-none border-r-2 w-full" />
                        <span className="font-expens expensicons text-slate-400 ml-[6px] align-[-1px] absolute right-1">&#xE93C;</span>
                </div>
                <div className="md:flex-1 billable rounded-full bg-slate-300 mb-2 md:mb-0 max-w-80 w-full text-xs">
                    <div className="flex items-center justify-between w-full">
                        <button tabIndex="0" autoFocus className=" focus:outline-none focus:bg-primary-400  font-light focus:font-bold rounded-full text-slate-900 focus:text-slate-200 hover:text-cyan-600 py-1.5  px-4 ">All</button>
                        <button className="focus:outline-none focus:bg-primary-400 font-light focus:font-bold rounded-full text-slate-900 focus:text-slate-200 hover:text-cyan-600 py-1.5  px-7 ">Billable</button>
                        <button className="flex-1 focus:outline-none focus:bg-primary-400 font-light focus:font-bold rounded-full text-slate-900 focus:text-slate-200 hover:text-cyan-600 py-1.5 px-8">Reimbursable</button>
                    </div>
                </div>
                <div className="px-1 py-0.5 bg-white max-w-96 rounded-md border flex-1">
                    <select name="" id="" className="w-full focus:outline-none">
                        <option value="-1" className="w-full focus:outline-none">All types</option>
                        <option value="expenses">Expenses</option>
                        <option value="receipts">Receipts</option>
                        <option value="documents">Documents</option>
                    </select>
                </div>
            </div>
            <div className="search mt-5 relative pl-6 md:pl-8">
                <i className="absolute left-0 top-1 font-expens expensicons  mr-1 md:text-xl text-slate-400 align-[-4px]">&#xE93C;</i>
                <div className="bg-white px-1 py-0.5 pl-1 border max-w-96  rounded-md relative" onClick={(e) => { !categoryIsVisible && revealCategory(e) }}>
                    <input type="text" value={category} onChange={({target}) => setCategory(target.value)} className="w-full px-1  text-slate-900 focus:outline-none" />
                    <i role="button" className="font-expens expensicons absolute right-2 top-1.5 text-sm text-slate-400">&#xE921;</i>
                </div>
                <ul ref={list} className={`${!categoryIsVisible && "hidden"} dropdown-menu expensify-dropdown text-slate-900 mt-1 border border-t-0 max-h-72 max-w-96 w-full overflow-y-scroll absolute bg-light-400 z-10`}>
                    <li className={`active li-compact p-2 md:pr-2 border hover:bg-primary-100`} role="button" onClick={changeCategory} data-value="All Category">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="All categories">
                            <span>
                                <i className="expensicons expensicons-checkmark"></i>
                            </span>All categories
                        </a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Uncategorized">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Uncategorized">Uncategorized</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Advertising">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Advertising">Advertising</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Benefits">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Benefits">Benefits</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Car">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Car">Car</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Equipment">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Equipment">Equipment</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Fees">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Fees">Fees</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Home Office">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Home Office">Home Office</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Insurance">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Insurance">Insurance</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Interest">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Interest">Interest</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Labor">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Labor">Labor</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Maintenance">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Maintenance">Maintenance</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Materials">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Materials">Materials</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Meals and Entertainment">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Meals and Entertainment">Meals and Entertainment</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Office Supplies">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Office Supplies">Office Supplies</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Other">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Other">Other</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Professional Services">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Professional Services">Professional Services</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Rent">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Rent">Rent</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Taxes">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="" data-original-title="Taxes">Taxes</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Travel">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Travel">Travel</a>
                    </li>
                    <li className="li-compact p-2 md:pr-2 border hover:bg-primary-100" role="button" onClick={changeCategory} data-value="Utilities">
                        <a href="#" role="button"  data-toggle="tooltip" data-container="body" data-delay="{&quot;show&quot;:1000, &quot;hide&quot;:100}" title="Utilities">Utilities</a>
                    </li>
                </ul>
            </div>
            <div className="type mt-5 relative pl-6 md:pl-8 flex flex-wrap gap-2">
                <i className="absolute left-0 top-1 font-expens expensicons mr-1 md:text-xl text-slate-400 align-[-4px]">&#xE958;</i>
                <button role="button" className="focus:outline-none border border-primary-400 text-sm font-light text-[13px] rounded-full text-slate-900 p-[4px] px-3">Unreported</button>
                <button role="button" className=" focus:outline-none bg-[#0185ff] text-sm font-light text-[13px] rounded-full text-slate-200 p-[5px] px-3">Open</button>
                <button role="button" className=" focus:outline-none bg-[#003c73] text-sm font-light text-[13px] rounded-full text-slate-200 p-[5px] px-3">Processing</button>
                <button role="button" className=" focus:outline-none bg-[#03d47c] text-sm font-light text-[13px] rounded-full text-slate-200 p-[5px] px-3">Approved</button>
                <button role="button" className=" focus:outline-none bg-[#002e22] text-sm font-light text-[13px] rounded-full text-slate-200 p-[5px] px-3">Reimbursed</button>
                <button role="button" className=" focus:outline-none bg-[#ebe6df] text-sm font-light text-[13px] rounded-full text-[#002e22] p-[5px] px-3">Closed</button>
                <button role="button" className=" focus:outline-none bg-[#f25730] text-sm font-light text-[13px] rounded-full text-slate-200 p-[5px] px-3">Deleted</button>
            </div>
        </div>
    )
}