import React from "react";

// Arrow Function format me convert kiya gaya hai
const Button = ({
    children,
    type = "button",
    bgColor = "bg-rose-700 hover:bg-rose-800", 
    textColor = "text-stone-50",             
    className = "",
    ...props
}) => {
    return (
        <button 
            type={type}
            className={`px-5 py-2.5 rounded-xl font-medium tracking-wide shadow-sm active:scale-[0.98] transition-all duration-200 ease-in-out cursor-pointer ${bgColor} ${textColor} ${className}`} 
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;