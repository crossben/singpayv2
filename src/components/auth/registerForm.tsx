import React, { useState } from "react";
import logo from "@/assets/images/auth/logo_sin.png";
import './style.css';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const RegisterForm: React.FC = () => {
    const [step, setStep] = useState(1);

    // Handle Next and Back buttons
    const handleNext = () => {
        if (step < 4) setStep(step + 1); // Limit to 3 steps
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1); // Don't go below step 1
    };

    return (
        <div className="h-screen flex items-center justify-center bg-cover bg-center relative bg">
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="relative z-10 flex w-full max-w-6xl justify-center">
                <div className="w-1/2 p-8 rounded-lg shadow-lg h-full">
                    <div className="text-center mb-6 py-20">
                        <img src={logo} alt="SING Logo" className="mx-auto" width={300} height={300} />
                    </div>
                    <form>
                        {step === 1 && (
                            <div className="flex flex-col justify-center items-center mx-auto align-middle">
                                <div className="mb-4 w-full max-w-md">
                                    <input
                                        type="text"
                                        placeholder="Nom"
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    />
                                </div>
                                <div className="mb-4 w-full max-w-md">
                                    <input
                                        type="text"
                                        placeholder="Prénom"
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    />
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="flex flex-col justify-center items-center mx-auto align-middle">
                                <div className="mb-4 w-full max-w-md">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    />
                                </div>
                                <div className="mb-4 w-full max-w-md">
                                    <input
                                        type="password"
                                        placeholder="Mot de passe"
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    />
                                </div>
                                <span className="text-white mx-auto justify-center align-middle items-center flex p-10 py-4">
                                    votre mot de passe doit contenur aumoins 8 caractères
                                    inclure une majiscule un chiffre et un caractères special
                                </span>
                                <div className="mb-4 w-full max-w-md pt-3">
                                    <input
                                        type="Number"
                                        placeholder="Numero de telephone"
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    />
                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div className="flex flex-col justify-center items-center mx-auto align-middle">
                                <div className="mb-4 w-full max-w-md">
                                    <select className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                                        <option value="" disabled selected>
                                            Type de compte
                                        </option>
                                        <option value="personal">Personnel</option>
                                        <option value="business">Professionnel</option>
                                    </select>
                                </div>
                                <div className="mb-4 w-full max-w-md">
                                    <select className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                                        <option value="" disabled selected>
                                            Titre du poste
                                        </option>
                                        <option value="personal">Directeur general</option>
                                        <option value="business">Chanteur</option>
                                    </select>
                                </div>
                            </div>
                        )}
                        {step === 4 && (
                            <div className="flex flex-col justify-center items-center mx-auto align-middle">
                                <div className="mb-4 w-full max-w-md">
                                    <input
                                        type="text"
                                        placeholder="Date de debut"
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    />
                                </div>
                                <div className="mb-4 w-full max-w-md">
                                    <input
                                        type="text"
                                        placeholder="Date de fin"
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    />
                                </div>
                            </div>
                        )}
                        <div className="flex justify-between mb-4 py-10">
                            <button
                                type="button"
                                className="w-30 bg-white text-black py-3 rounded-md flex items-center gap-2"
                                onClick={handleBack}
                                disabled={step === 1}
                            >
                                <BsArrowLeft /> Retour
                            </button>
                            {/* {step == 4 && (
                                <button
                                    type="button"
                                    className="w-30 bg-white text-black py-3 rounded-md flex items-center gap-2"
                                    onClick={handleNext}
                                >
                                    Suivant <BsArrowRight />
                                </button>
                            )} */}
                            <button
                                type="button"
                                className={`w-30 py-3 rounded-md flex items-center gap-2 ${step === 4
                                        ? "bg-gradient-to-r from-[#85105a] to-[#057389] text-white"
                                        : "bg-white text-black"
                                    }`}
                                onClick={handleNext}
                                disabled={step > 3}
                            >
                                Suivant <BsArrowRight />
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default RegisterForm;
