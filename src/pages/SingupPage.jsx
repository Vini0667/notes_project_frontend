import Form from "../components/Utilities/Form";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Utilities/Container";
import Main from "../components/Utilities/Main";
import FormInput from "../components/Utilities/FormInput";
import FormButton from "../components/Utilities/FormButton";
import GoogleSignInButton from "../components/Utilities/GoogleLoginButton";
import { useState } from "react";
import registerUser from "../services/Singup/Singup";

function SingupPage() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const validate = () => {
        const newErrors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.username || formData.username.length < 5) {
            newErrors.username =
                "O nome de usuário deve ter no mínimo 5 caracteres.";
        }

        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = "O e-mail deve conter um endereço válido.";
        }

        if (!formData.password || formData.password.length < 8) {
            newErrors.password = "A senha deve ter mais de 8 caracteres.";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "A confirmação de senha é obrigatória.";
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "As senhas não coincidem.";
        }

        return newErrors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (errors[name]) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
        }

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsLoading(true);

        try {
            const { confirmPassword, ...dataToSubmit } = formData;

            const data = await registerUser(dataToSubmit);
        } catch (error) {
            console.error(`Error with form: ${error}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Container>
                <Navbar />
                <Main>
                    <Form
                        onSubmit={handleSubmit}
                        formName="Cadastro de usuário"
                    >
                        <FormInput
                            label={"Nome de usuário:"}
                            id="username"
                            name="username"
                            placeholder="Digite seu usuário"
                            onChange={handleInputChange}
                            value={formData.username}
                            required
                            error={errors.username}
                        />
                        <FormInput
                            label={"E-mail:"}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                            onChange={handleInputChange}
                            value={formData.email}
                            required
                            error={errors.email}
                        />
                        <FormInput
                            label={"Senha:"}
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Digite sua senha"
                            onChange={handleInputChange}
                            value={formData.password}
                            required
                            error={errors.password}
                        />

                        <FormInput
                            label={"Confirme sua senha:"}
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Digite novamente sua senha"
                            onChange={handleInputChange}
                            value={formData.confirmPassword}
                            required
                            error={errors.confirmPassword}
                        />

                        <FormButton key={1} type="submit" disabled={isLoading}>
                            {isLoading ? "Enviando..." : "Enviar"}
                        </FormButton>
                        <GoogleSignInButton />
                    </Form>
                </Main>
            </Container>
        </>
    );
}

export default SingupPage;
