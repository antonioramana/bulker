import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ 
    type = 'text', 
    className = '', 
    isFocused = false, 
    ...props 
}, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={`
                border border-gray-300 
                focus:border-indigo-500 
                focus:ring focus:ring-indigo-200 
                focus:ring-opacity-50 
                rounded-lg 
                shadow-sm 
                px-4 py-2
                transition-all
                ease-in-out 
                duration-150 
                hover:border-indigo-400
                placeholder-gray-400
                ${className}
            `}
            ref={input}
        />
    );
});
