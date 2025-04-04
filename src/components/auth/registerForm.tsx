import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import logo from "@/assets/images/auth/logo_sin.png";
import './style.css';

const RegisterForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="h-screen flex items-center justify-center bg-cover bg-center relative bg">
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="relative z-10 flex w-full max-w-6xl">
                {/* Left side: Text */}
                <div className="w-1/2 text-white px-10 flex items-center shadow">
                    <h1 className="text-6xl font-bold shadow">
                        Rejoignez SING Fusion et démarrez votre aventure chez nous !
                    </h1>
                </div>

                {/* Right side: Form */}
                <div className="w-1/2 p-8 rounded-lg shadow-lg h-full">
                    <div className="text-center mb-6 py-20">
                        <img src={logo} alt="SING Logo" className="mx-auto" width={300} height={300} />
                    </div>
                    <form>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            />
                        </div>
                        <div className="mb-4 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Mot de passe"
                                className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <div className="text-right mb-4">
                            <a href="#" className="text-white text-sm hover:underline">
                                Mot de passe oublié ?
                            </a>
                        </div>
                        <div className="flex justify-center mb-4">
                            <button className="w-30 bg-gradient-to-r from-[#85105a] to-[#057389] text-white py-3 rounded-md">
                                Connexion
                            </button>
                        </div>
                        <div className="text-center mt-4 text-sm text-white">
                            <p>
                                Vous n'êtes pas encore inscrit ?<br />
                                Creez un compte &nbsp;
                                <a href="#" className="text-[#85105a] hover:underline">
                                    ici
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
