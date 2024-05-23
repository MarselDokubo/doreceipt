import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Form } from "react-router-dom";

export function NewExpense({onClose}) {

    return (
        <div className={`flex items-center justify-center absolute top-0 left-0 z-20 px-2  h-screen w-full bg-black-alpha text-[15px] min-w-[270px]`}>
            <div className={`new__expense w-full max-w-max bg-light-300 rounded-lg mt-24`}>
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
                    <div className="flex-1 img__wrapper hidden md:flex items-center justify-center p-8 max-w-60 border border-gray-300 rounded-lg">
                        <img src="/src/assets/img/doreceipt/emptystate__addexpense.svg" alt="" className="w-full"/>
                    </div>
                </div>
                <div className="savebtn text-right">
                    <Button  label={"Save"} type="submit" form="new__expense" className={`py-2 px-5 mx-8 my-4`}/>
                </div>
            </div>
        </div>
    )
}
function ExpenseForm() {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    function handleExpense() {
        console.log("Create expense form")
    }
    return (
    <div className="w-[500px] flex-1">
        <Form id="new__expense" onSubmit={handleSubmit(handleExpense)}>
            <div className="input__wrapper gap-1 mb-3">
                <label htmlFor="Merchant" className="md:w-full md:max-w-24 text-right inline-flex justify-end">
                    <span className=" md:w-full md:max-w-24 text-right inline-flex justify-end">Merchant*</span> 
                </label>
                    <Input  type="text" name="merchant" id="merchant" placeholder="Merchant name" className="flex-1 min-w-max max-w-96 w-full bg-transparent" register = {() => register("merchant", {required: { value: true, message: "Field cannot be empty" },})} errors={errors}/>
            </div>
            <div className="input__wrapper gap-1 mb-3">
                <label className="md:w-full md:max-w-24 text-right inline-flex justify-end" htmlFor="date">
                    <span className="">Date*</span> 
                </label>
                    <Input type="date" name="date" id="date" className="bg-transparent max-w-32" register = {() => register("date")} errors={errors}/>
            </div>
            <div className="input__wrapper flex flex-wrap gap-1 mb-3">
                <label className="md:w-full md:max-w-24 text-right inline-flex justify-end mt-2" htmlFor="total">
                    <span className="">Total*</span>  
                    </label>
                    <div>
                    <Input type="text" name="total" id="total" className={ `max-w-32 bg-transparent`} register = {() => register("total", {required: { value: true, message: "Field cannot be empty" },})} errors={errors}/>
                    </div>

                    <div className="max-w-32 w-full">
                        <select name="currency" id="currency" className="flex-1 rounded-md border border-gray-300  bg-transparent w-full py-2.5">
                            
                        <option value="NGN">NGN ₦</option>
                        <option value="USD">USD $</option>
                        </select>
                    </div>
                        
                </div>
                <div className="input__wrapper">
                    <input type="checkbox" name="reimbursable" id="reimbursable" className="md:ml-24 ml-10 mr-1"/>
                    <label htmlFor="reimbursable">Reimbursable</label>
                </div>
            <br />
            <br />
            <div className="input__wrapper mb-3">
                <label className="md:w-full md:max-w-24 text-right inline-flex justify-end" htmlFor="category">
                    <span className="">Category*</span> 
                </label>
                    <Input type="search" name="category" id="category" placeholder="Type to search" className="flex-1 min-w-max max-w-96 w-full bg-transparent" register = {() => register("category", {required: { value: true, message: "Field cannot be empty" },})} errors={errors}/>
            </div>
            <div className="input__wrapper mb-3">
                <label className="md:w-full md:max-w-24 text-right inline-flex justify-end" htmlFor="description">
                    <span className="">Description </span> 
                </label>
                    <Input type="text" name="description" id="description" className="flex-1 min-w-max max-w-96 w-full bg-transparent" register = {() => register("description", {required: { value: true, message: "Field cannot be empty" },})} errors={errors}/>
            </div>
        </Form>
    </div>        
    )

}


function Input({className = "",name,register, errors, ...attributes}) {
    return (
        <>
            <input {...attributes} aria-describedby={`${name}-error`} aria-invalid={errors[name] ? "true" : "false"} className={`rounded border border-gray-300 p-2 outline-none ${className}`} {...register()} />
              <p id={`${name}-error`} role="alert" className={`${errors[name] && "text-rose-400"} text-xs text-right  ml-1 md:mr-5 `}>{errors[name] && errors[name].message}</p>
        </>
    )
}