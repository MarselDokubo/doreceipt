import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Form } from "react-router-dom";
import { useSubmit } from "react-router-dom";
import { uploadImage } from "./service/storage";
import { useLoaderData } from "react-router-dom";


export async function action({ request }) {
    let formData = await request.formData();
    let {receipt:image, uid} = Object.fromEntries(formData)
    try {
        await uploadImage(image, uid)
    }
    catch (e) {
        console.log(e)
    }
    return null;
}

export function NewExpense({onClose}) {
    return (
        <div className={`flex items-center justify-center absolute top-0 left-0 z-20 px-2  h-screen w-full bg-black-alpha text-[15px] min-w-[270px]`}>
            <div className={`new__expense w-full max-w-max bg-light-300 rounded-lg`}>
                <div className="heading flex items-center justify-between">
                    <h2 className="font-bold my-4 px-4">New Expense</h2>
                    <span role="button" className="font-expens expensicons expensicons-remove font-black text-xl text-slate-500 mr-5" onClick={onClose}>&#xE920;</span>
                </div>
                <div className="border-b  px-4 flex">
                    <span role="button" className="rounded-t-md px-6 -mb-[1px] py-2 bg-light-300 border border-b-0">
                        Expense
                    </span>
                </div>
                <div className="">
                    <ExpenseForm />
                </div>
                <div className="savebtn text-right">
                    <Button  label={"Save"} type="submit" form="new__expense" className={`py-2 px-5 mx-8 my-4`}/>
                </div>
            </div>
        </div>
    )
}
function ExpenseForm() {
    const currentUser = useLoaderData()
    const submit = useSubmit()
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    function handleExpense(formFields) {
        formFields = {...formFields, receipt:formFields.receipt[0]}
        let formData = new FormData();
        for (let [key, value] of Object.entries(formFields)) {
               formData.append(key, value)
        }
        formData.append("uid", currentUser.uid)
        submit(formData, {
            method: "post",
            encType: "multipart/form-data"
        })

    }
    return (
    <div className="flex-1">
            <Form id="new__expense" className="flex flex-wrap gap-2 p-8" onSubmit={handleSubmit(handleExpense)}>
            <div className="w-[500px]">
                <div className="input__wrapper gap-1 mb-3">
                    <label htmlFor="Merchant" className="md:w-full md:max-w-24 text-right inline-flex justify-end items-center mr-1">
                        <span className=" md:w-full md:max-w-24 text-right inline-flex justify-end items-center mr-1">Merchant*</span> 
                    </label>
                        <Input  type="text" name="merchant" id="merchant" placeholder="Merchant name" className="flex-1 min-w-max max-w-96 w-full bg-transparent" register = {() => register("merchant", {required: { value: true, message: "Field cannot be empty" },})} errors={errors}/>
                </div>
            <div className="input__wrapper gap-1 mb-3">
                <label className="md:w-full md:max-w-24 text-right inline-flex justify-end items-center mr-1" htmlFor="date">
                    <span className="">Date*</span> 
                </label>
                    <Input type="date" name="date" id="date" className="bg-transparent max-w-32" register = {() => register("date")} errors={errors}/>
            </div>
            <div className="input__wrapper flex flex-wrap gap-1 mb-3">
                <label className="md:w-full md:max-w-24 text-right inline-flex justify-end items-center mr-1" htmlFor="total">
                    <span className="">Total*</span>  
                    </label>
                    <div>
                    <Input type="text" name="total" id="total" placeholder="0.00" className={ `max-w-32 bg-transparent`} register = {() => register("total", {required: { value: true, message: "Field cannot be empty" },})} errors={errors}/>
                    </div>

                    <div className="max-w-32 w-full self-end">
                        <select name="currency" id="currency" className="flex-1 rounded-md border border-gray-300  bg-transparent w-full py-2.5">
                            
                        <option value="NGN">NGN ₦</option>
                        <option value="USD">USD $</option>
                        </select>
                    </div>
                        
                </div>
                <div className="input__wrapper">
                        <input type="checkbox" name="reimbursable" id="reimbursable" className="md:ml-24 ml-10 mr-1" {...register("reimbursable")} />
                    <label htmlFor="reimbursable">Reimbursable</label>
                </div>
            <br />
            <br />
            <div className="input__wrapper mb-3">
                <label className="md:w-full md:max-w-24 text-right inline-flex justify-end items-center mr-1" htmlFor="category">
                    <span className="">Category*</span> 
                </label>
                    <Input type="search" name="category" id="category" placeholder="Type to search" className="flex-1 min-w-max max-w-96 w-full bg-transparent" register = {() => register("category", {required: { value: true, message: "Field cannot be empty" },})} errors={errors}/>
            </div>
            <div className="input__wrapper mb-3">
                <label className="md:w-full md:max-w-24 text-right inline-flex justify-end items-center mr-1" htmlFor="description">
                    <span className="">Description </span> 
                </label>
                    <Input type="text" name="description" id="description" className="flex-1 min-w-max max-w-96 w-full bg-transparent" register = {() => register("description", {required: { value: true, message: "Field cannot be empty" },})} errors={errors}/>
            </div>
            </div>
            <label htmlFor="receipt" className="flex-1 img__wrapper flex items-center md:justify-center md:p-8 max-w-60 md:border border-gray-300 rounded-lg cursor-pointer">                    
                    <input type="file" name="receipt" id="receipt" className="hidden" {...register("receipt")} />
                    <img src="/src/assets/img/doreceipt/emptystate__addexpense.svg" alt="upload receipt" className="w-full hidden md:block" />
                <span className="border px-3 py-2 md:hidden rounded-md bg-primary-100">Add Image</span>
            </label>
        </Form>
    </div>        
    )

}


function Input({className = "",name,register, errors, ...attributes}) {
    return (
        <>
            <input {...attributes} aria-describedby={`${name}-error`} aria-invalid={errors[name] ? "true" : "false"} className={`rounded border border-gray-300 p-2 outline-none ${className} mt-1`} {...register()} />
              <p id={`${name}-error`} role="alert" className={`${errors[name] && "text-rose-400"} text-xs text-right  ml-1 md:mr-5 `}>{errors[name] && errors[name].message}</p>
        </>
    )
}