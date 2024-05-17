import { useState, useRef } from "react";

export function FormInput({name, type, label,placeholder,isActive, onFocus, register, message, errors}) {
    const input = useRef(null)
    function focusInput() {
        onFocus()
    }

    return (
        <div className="max-w-md mb-3 mx-auto">
            <div role="button" className={`email bg-primary-100  shadow-md rounded-full p-4 text-light-400 ${isActive ? 'border-2 border-primary-200' : 'border-none'} flex items-center`}>
                <label htmlFor={name} className="justify-self-end">
                    {label}:
                </label>
                <input ref={input} onFocus={focusInput} type={type} name={name} id={name} placeholder={placeholder} className={`flex-1 bg-transparent text-base outline-none border-b border-primary-200 border-spacing-2 ml-2 mr-4 -mb-1`}  {...register(name, { required: { value: true, message }, })} aria-describedby={`${name}-error`} aria-invalid={errors[name] ? "true" : "false"} />
                {/* <i className="font-expens expensicons text-primary-200">&#xE959;</i> */}
            </div>
                <p id={`${name}-error`} role="alert" className={`${errors[name] && "text-rose-400"} w-max ml-4`}>{errors[name] && errors[name].message}</p>
            {/* <div className="overflow-hidden">
                <div className={`${isVisible? 'mt-2': ''} transition-all ease-in-out`}>
                </div>
            </div> */}
        </div>
    );
}