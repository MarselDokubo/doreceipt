export function Button({label, className, onClick}) {
    return (
        <button className={`bg-primary-200 rounded-full text-light-300 font-bold ${className}`} onClick={onClick}>
            {label || "Button"}
        </button>
    )
}