import React, { useId } from 'react'

const Input = React.forwardRef(({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId()
    
    return (
        <div className='w-full'>
            {label && (
                <label 
                    className='inline-block mb-2 pl-1 text-sm font-medium text-stone-700 font-sans' 
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`px-4 py-2.5 rounded-xl bg-white text-stone-900 outline-none border border-stone-200/80 w-full text-sm font-sans transition-all duration-200 shadow-sm focus:border-rose-700/50 focus:ring-4 focus:ring-rose-700/5 ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

Input.displayName = "Input"

export default Input