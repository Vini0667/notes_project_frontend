import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Seja bem vindos(as)!!!
                    </h1>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Tente trocar a cor do site
                    </p>
                </main>
            </div>
        </>
    );
}

export default App;
