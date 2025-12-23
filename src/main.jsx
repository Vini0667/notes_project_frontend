import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.jsx";
import SingupPage from "./pages/SingupPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/singup",
        Component: SingupPage,
    },
    {
        path: "/home",
        Component: HomePage,
    },
]);

createRoot(document.getElementById("root")).render(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_API}>
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    </GoogleOAuthProvider>,
);
