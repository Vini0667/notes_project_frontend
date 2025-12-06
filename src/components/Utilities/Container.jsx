function Container({ children }) {
    return (
        <>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
                {children}
            </div>
        </>
    );
}

export default Container;
