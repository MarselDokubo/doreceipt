import { Button } from "./ui/button"

export function NewExpense({onClose}) {

    return (
        <div className={`absolute top-0 left-0 z-20  h-screen w-screen bg-black-alpha text-[15px]`}>
            <div className={`new__expense w-full max-w-max bg-light-300 rounded-lg mx-auto mt-24`}>
                <div className="heading flex items-center justify-between">
                    <h2 className="font-bold my-4 px-4">New Expense</h2>
                    <span role="button" className="font-expens expensicons expensicons-remove font-black text-xl text-slate-500 mr-5" onClick={onClose}>&#xE920;</span>
                </div>
                <div className="border-b  px-4 flex">
                    <span role="button" className="rounded-t-md px-6 -mb-[1px] py-2 bg-light-300 border border-b-0">
                        Expense
                    </span>
                </div>
                <div className="flex gap-2 p-8">
                    <ExpenseForm />
                    <div className="flex-1 img__wrapper flex items-center justify-center p-8 max-w-60 border border-gray-300 rounded-lg">
                        <img src="/src/assets/img/doreceipt/emptystate__addexpense.svg" alt="" className="w-full"/>
                    </div>
                </div>
                <div className="savebtn text-right">
                    <Button label={"Save"} className={`py-2 px-5 mx-8 my-4`}/>
                </div>
            </div>
        </div>
    )
}
function ExpenseForm() {
    return (
    <div className="w-[500px] flex-1">
        <form action="" className="">
            <div className="input__wrapper flex items-center gap-1 mb-3">
                <label htmlFor="Merchant" className="w-24 text-right">
                    <span className=" w-24 text-right">Merchant*</span> 
                </label>
                    <Input type="text" placeholder="Merchant name" className="flex-1 max-w-96 bg-transparent text-slate-700 "/>
            </div>
            <div className="input__wrapper flex items-center gap-1 mb-3">
                <label className="w-24 text-right" htmlFor="date">
                    <span className="">Date*</span> 
                </label>
                    <Input type="date" name="date" id="date" className="bg-transparent" />
            </div>
            <div className="input__wrapper flex items-center gap-1 mb-3">
                <label className="w-24 text-right" htmlFor="total">
                    <span className="">Total*</span>  
                </label>
                    <Input type="text" name="total" id="total" className={ `max-w-32 bg-transparent`} />
                    <select name="currency" id="currency" className="flex-1 rounded-md border border-gray-300 py-2 bg-transparent max-w-32 w-full">
                        <option value="NGN">NGN ₦</option>
                        <option value="USD">USD $</option>
                    </select>
                </div>
                <div className="input__wrapper flex items-center">
                    <input type="checkbox" name="reimbursable" id="reimbursable" className="ml-24 mr-1"/>
                    <label htmlFor="reimbursable">Reimbursable</label>
                </div>
            <br />
            <br />
            <div className="input__wrapper flex items-center gap-1 mb-3">
                <label className="w-24 text-right" htmlFor="category">
                    <span className="">Category*</span> 
                </label>
                    <Input type="search" name="category" id="category" placeholder="Type to search" className="flex-1 max-w-96 w-full bg-transparent"/>
            </div>
            <div className="input__wrapper flex items-center gap-1 mb-3">
                <label className="w-24 text-right" htmlFor="description">
                    <span className="">Description </span> 
                </label>
                    <Input type="text" name="description" id="description" className="bg-transparent"/>
            </div>
        </form>
    </div>        
    )

}


function Input({className = "",...attributes}) {
    return (
        <input {...attributes} className={`rounded border border-gray-300 p-2  ${className}`} />
    )
}