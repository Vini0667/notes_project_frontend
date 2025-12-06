function FormInput({ label, id, type = "text", ...props }) {
    return (
        <div className="mb-4">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
                {label}
            </label>
            <input
                id={id}
                type={type}
                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                           text-gray-900 dark:text-white bg-white dark:bg-gray-700
                           focus:outline-none focus:ring-i  ndigo-500 focus:border-indigo-500
                           transition-colors duration-300 sm:text-sm"
                {...props}
            />
        </div>
    );
}

export default FormInput;
