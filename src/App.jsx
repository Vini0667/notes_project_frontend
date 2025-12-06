import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Utilities/Container";
import Main from "./components/Utilities/Main";

function App() {
    return (
        <>
            <Container>
                <Navbar />
                <Main>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Seja bem vindos(as)!!!
                    </h1>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Tente trocar a cor do site
                    </p>
                </Main>
            </Container>
        </>
    );
}

export default App;
