import React, { useState } from "react";
import logo from "@/assets/images/auth/logo_sing_blanc.png";
import './style.css';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { z } from 'zod';
import ConfirmationPage from "./confirmationPage";

const step1Schema = z.object({
    firstName: z.string().min(1, "Nom est requis"),
    lastName: z.string().min(1, "Prénom est requis"),
});

const step2Schema = z.object({
    email: z.string().email("Email invalide").min(1, "Email est requis"),
    password: z.string()
        .min(8, "Le mot de passe doit contenir au moins 8 caractères")
        .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
        .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
        .regex(/[^a-zA-Z0-9]/, "Le mot de passe doit contenir au moins un caractère spécial"),
    phoneNumber: z.string().min(1, "Numéro de téléphone est requis").regex(/^\d+$/, "Numéro de téléphone invalide"),
});

const step3Schema = z.object({
    accountType: z.string().min(1, "Type de compte est requis"),
    jobTitle: z.string().min(1, "Titre du poste est requis"),
});

const step4Schema = z.object({
    startDate: z.string().min(1, "Date de début est requise"),
    endDate: z.string().min(1, "Date de fin est requise"),
});

const RegisterForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<any>({});
    const [errors, setErrors] = useState<any>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleNext = () => {
        let schema;
        if (step === 1) schema = step1Schema;
        else if (step === 2) schema = step2Schema;
        else if (step === 3) schema = step3Schema;
        else if (step === 4) schema = step4Schema;

        const validationResult = schema?.safeParse(formData);

        if (validationResult?.success) {
            if (step < 4) {
                setStep(step + 1);
                setErrors({});
            } else if (step === 4) {
                setStep(5);
            }
        } else {
            const newErrors: any = {};
            validationResult?.error.errors.forEach((err: any) => {
                newErrors[err.path[0]] = err.message;
            });
            setErrors(newErrors);
        }
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    if (step === 5) {
        return <ConfirmationPage text={"Merci d’avoir rempli vos informations. Vous recevrez un e-mail vous informant de l’accès à votre espace une fois votre profil validé par un administrateur."} link={"/"} linkText={"l'Accueil"} />;
    }

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
                                        name="firstName"
                                        placeholder="Nom"
                                        value={formData.firstName || ""}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    />
                                    {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                                </div>
                                <div className="mb-4 w-full max-w-md">
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Prénom"
                                        value={formData.lastName || ""}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    />
                                    {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="flex flex-col justify-center items-center mx-auto align-middle">
                                <div className="mb-4 w-full max-w-md">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email || ""}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    />
                                    {errors.email && <span className="text-red-500">{errors.email}</span>}
                                </div>
                                <div className="mb-4 w-full max-w-md">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Mot de passe"
                                        value={formData.password || ""}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    />
                                    {errors.password && <span className="text-red-500">{errors.password}</span>}
                                </div>
                                <span className="text-white mx-auto justify-center align-middle items-center flex p-10 py-4">
                                    Votre mot de passe doit contenir au moins 8 caractères, inclure une majuscule, un chiffre et un caractère spécial
                                </span>
                                <div className="mb-4 w-full max-w-md pt-3">
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        placeholder="Numéro de téléphone"
                                        value={formData.phoneNumber || ""}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    />
                                    {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div className="flex flex-col justify-center items-center mx-auto align-middle">
                                <div className="mb-4 w-full max-w-md">
                                    <select
                                        name="accountType"
                                        value={formData.accountType || ""}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-center"
                                    >
                                        <option value="" disabled selected>
                                            Type de compte
                                        </option>
                                        <option value="personal">Stagiaire</option>
                                        <option value="business">Consultant</option>
                                        <option value="business">Employé CDD</option>
                                        <option value="business">Employé CDI</option>
                                    </select>
                                    {errors.accountType && <span className="text-red-500">{errors.accountType}</span>}
                                </div>
                                <div className="mb-4 w-full max-w-md">
                                    <select
                                        name="jobTitle"
                                        value={formData.jobTitle || ""}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-center"
                                    >
                                        <option value="" disabled selected>
                                            Titre du poste
                                        </option>
                                        <option value="personal">Chef comptable</option>
                                        <option value="business">Responsable administratif</option>
                                        <option value="business">Assistant de gestion</option>
                                        <option value="business">Responsable technique</option>
                                    </select>
                                    {errors.jobTitle && <span className="text-red-500">{errors.jobTitle}</span>}
                                </div>
                            </div>
                        )}
                        {step === 4 && (
                            <div className="flex flex-col justify-center items-center mx-auto align-middle">
                                <div className="mb-4 w-full max-w-md">
                                    <input
                                        type="date"
                                        name="startDate"
                                        placeholder="Date de début"
                                        value={formData.startDate || ""}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    />
                                    {errors.startDate && <span className="text-red-500">{errors.startDate}</span>}
                                </div>
                                <div className="mb-4 w-full max-w-md">
                                    <input
                                        type="date"
                                        name="endDate"
                                        placeholder="Date de fin"
                                        value={formData.endDate || ""}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                    />
                                    {errors.endDate && <span className="text-red-500">{errors.endDate}</span>}
                                </div>
                            </div>
                        )}
                        <div className="flex justify-between mb-4 py-10">
                            <button
                                style={{ borderRadius: "15px" }}
                                type="button"
                                className="w-30 bg-white text-black py-3 rounded-md flex items-center justify-center gap-2"
                                onClick={handleBack}
                                disabled={step === 1}
                            >
                                <span className="flex items-center justify-center">
                                    <BsArrowLeft />&nbsp; Retour
                                </span>
                            </button>
                            <button
                                style={{ borderRadius: "15px" }}
                                type="button"
                                className={`w-30 py-3 flex items-center justify-center gap-2 ${step === 4
                                    ? "bg-gradient-to-r from-[#85105a] to-[#057389] text-white"
                                    : "bg-white text-black"
                                    }`}
                                onClick={() => {
                                    if (step > 4) {
                                        setStep(5);
                                    } else {
                                        handleNext();
                                    }
                                }}
                                disabled={step > 4}
                            >
                                <span className="flex items-center justify-center">
                                    Suivant &nbsp; <BsArrowRight />
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
