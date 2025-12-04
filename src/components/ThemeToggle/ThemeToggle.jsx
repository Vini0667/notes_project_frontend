import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme === "dark";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        const html = document.documentElement;

        if (darkMode) {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <>
            <button
                data-testid="theme-toggle"
                onClick={toggleTheme}
                aria-label={
                    darkMode
                        ? "Trocar para o modo claro"
                        : "Trocar para o modo escuro"
                }
                className="p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
                {darkMode ? (
                    <MdLightMode className="w-6 h-6" />
                ) : (
                    <MdDarkMode className="w-6 h-6" />
                )}
            </button>
        </>
    );
};

export default ThemeToggle;
