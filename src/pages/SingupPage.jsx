import Form from "../components/Utilities/Form";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Utilities/Container";
import Main from "../components/Utilities/Main";
import FormInput from "../components/Utilities/FormInputText";
import FormButton from "../components/Utilities/FormButton";

function SingupPage() {
    return (
        <>
            <Container>
                <Navbar />
                <Main>
                    <Form onSubmit={() => {}} formName="Cadastro de usuário">
                        <FormInput
                            label={"Nome de usuário:"}
                            id="username"
                            name="username"
                            placeholder="Digite seu usuário"
                        />
                        <FormInput
                            label={"E-mail:"}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                        />
                        <FormInput
                            label={"Senha:"}
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Digite sua senha"
                        />

                        <FormButton key={1} type="submit">
                            Enviar
                        </FormButton>
                    </Form>
                </Main>
            </Container>
        </>
    );
}

export default SingupPage;
