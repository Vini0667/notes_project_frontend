import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function GoogleSignInButton() {
    const navigate = useNavigate();

    const handleSuccess = async (credentialResponse) => {
        try {
            const response = await fetch(
                import.meta.env.VITE_API_URL + "/auth/google",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token: credentialResponse.credential,
                    }),
                },
            );

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                navigate("/home");
            } else {
                console.error("Login Failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <GoogleLogin
                text="Login com o Google"
                onSuccess={(credentialResponse) => {
                    handleSuccess(credentialResponse);
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
        </>
    );
}

export default GoogleSignInButton;
