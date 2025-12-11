function GoogleSignInButton({ onClick }) {
    return (
        <>
            <button
                onClick={onClick}
                className="
                    flex items-center justify-center
                    w-full py-2.5 px-4
                    bg-gray-50 hover:bg-gray-300
                    text-shadow-black font-semibold text-lg
                    dark:bg-gray-900 dark:text-white
                    dark:hover:bg-gray-500
                    rounded-lg shadow-lg
                    transition duration-300 ease-in-out
                    group
                "
            >
                <div
                    className="
                        flex items-center justify-center
                        h-8 w-8 mr-4
                        bg-white group-hover:bg-gray-700
                        rounded-md
                        transition duration-300 ease-in-out
                    "
                >
                    <svg
                        className="h-5 w-5"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#4285F4"
                            d="M45.188 20.358H24V27.64H36.31c-.51 3.235-2.7 5.755-6.052 7.575l6.3 4.908c3.55-3.328 5.618-7.9 5.618-13.882 0-1.74-.15-3.418-.437-5.043z"
                        />
                        <path
                            fill="#34A853"
                            d="M24 45.188c6.12 0 11.38-2.025 15.17-5.462l-6.3-4.908c-1.896 1.15-4.32 1.83-7.57 1.83-5.842 0-10.748-3.92-12.515-9.255H4.275l-6.3 4.908C5.8 40.852 14.398 45.188 24 45.188z"
                        />
                        <path
                            fill="#FBBC04"
                            d="M11.485 27.64c-.385-1.15-.6-2.368-.6-3.64s.215-2.49.6-3.64V16.37H4.275c-.71 1.41-.95 3.03-.95 4.63s.24 3.22.95 4.63l7.21 5.64z"
                        />
                        <path
                            fill="#EA4335"
                            d="M24 10.812c3.345 0 6.32 1.345 8.448 3.528l4.47-4.47c-2.92-2.73-6.938-4.52-12.918-4.52C14.398 5.35 5.8 9.68 1.975 16.37l7.21 5.64c1.767-5.335 6.673-9.255 12.515-9.255z"
                        />
                    </svg>
                </div>

                <span className="grow text-center pr-12 dark">
                    Login com o Google
                </span>
            </button>
        </>
    );
}

export default GoogleSignInButton;
