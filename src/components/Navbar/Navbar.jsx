import React, { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import navbarOptions from "../../dataMock/Navbar/NavbarMock.js";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 shadow-md bg-white dark:bg-gray-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                <span className="text-indigo-600"> React </span>
                                Notas
                            </span>
                        </div>

                        {/* Desktop navbar */}
                        <div className="flex items-center">
                            <nav className="hidden md:flex space-x-4 mr-4">
                                {navbarOptions.map((item) => (
                                    <a
                                        {...item.options}
                                        className="px-3 py-2 rounded-md text-sm font-medium
                                            text-gray-600 dark:text-gray-300
                                            hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        {item.description}
                                    </a>
                                ))}
                            </nav>
                            <ThemeToggle />
                            {/* Mobile hamburguer button */}
                            <button
                                className="md:hidden ml-4 p-2 text-gray-800 dark:text-gray-200"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-expanded={isOpen}
                                aria-controls="mobile-menu"
                            >
                                {isOpen ? (
                                    <FaXmark className="w-6 h-6" />
                                ) : (
                                    <FaBars className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    id="mobile-menu"
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? `max-h-96 opacity-100` : `max-h-0 opacity-0`}`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t dark:border-gray-700">
                        {navbarOptions.map((item) => (
                            <a
                                {...item.options}
                                className="block px-3 py-2 rounded-md text-base font-medium
                                text-gray-700 dark:text-gray-200
                                hover:bg-gray-100 dark:hover:bg-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.description}
                            </a>
                        ))}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
