export function Button({label, className, onClick, ...attributes}) {
    return (
        <button {...attributes} className={`bg-primary-200 rounded-full text-light-300 font-bold focus:outline-primary-200 ${className}`} onClick={onClick}>
            {label || "Button"}
        </button>
    )
}