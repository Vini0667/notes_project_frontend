function Form({ children, onSubmit = () => {}, formName }) {
    return (
        <>
            <div className="mt-10 mb-10">
                <div className="max-w-xl mx-auto">
                    <div className="bg-gray-50 dark:bg-gray-800 shadow-xl rounded-xl p-8 sm:p-10 transition-colors duration-500">
                        <form onSubmit={onSubmit} className="space-y-6">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                                {formName}
                            </h2>
                            {children}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;
