export function Button({label, className, onClick}) {
    return (
        <button className={`bg-primary-200 w-full md:w-max rounded-full text-md text-light-300 font-bold ${className}`} onClick={onClick}>{label || "Button"}</button>
    )
}