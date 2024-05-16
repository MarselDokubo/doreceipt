import { useState, useRef } from "react";

export function FormInput({type, label,placeholder,isActive, onFocus,}) {
    const input = useRef(null)
    function focusInput() {
        onFocus()
        input.current.focus();
    }

    return (
        <div className="max-w-md mb-3 mx-auto">
            <div role="button" className={`email bg-primary-100  shadow-md rounded-full p-4 text-light-400 ${isActive ? 'border-2 border-primary-200' : 'border-none'} flex items-center`}>
                <label htmlFor="email" className="justify-self-end">
                    {label}:
                </label>
                <input ref={input} onFocus={focusInput} type={type} name="email" id="email" placeholder={placeholder} className={`flex-1 bg-transparent text-base outline-none border-b border-primary-200 border-spacing-2 ml-2 mr-4 -mb-1`} />
            </div>
            {/* <div className="overflow-hidden">
                <div className={`${isVisible? 'mt-2': ''} transition-all ease-in-out`}>
                </div>
            </div> */}
        </div>
    );
}