import React, { useState } from "react";
import { z } from "zod";
import logo from "@/assets/images/footer/logo_sing.png";
import ConfirmationPage from "./confirmationPage";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const emailSchema = z.object({
    email: z.string().email("Veuillez entrer un email valide."),
});

const passwordSchema = z.object({
    password: z.string().min(6, "Le mot de passe doit comporter au moins 6 caractères."),
    confirmPassword: z.string().min(6, "Le mot de passe doit comporter au moins 6 caractères."),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Les mots de passe ne correspondent pas.",
});

const MotDePasseOublier: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [step, setStep] = useState(1);
    const [error, setError] = useState<{ email?: string; password?: string, confirmPassword?: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        const result = emailSchema.safeParse({ email: value });

        if (result.success) {
            setError((prevError) => ({ ...prevError, email: undefined }));
        } else {
            const newErrors: { email?: string } = {};
            result.error.errors.forEach((err) => {
                if (err.path[0] === "email") newErrors.email = err.message;
            });
            setError(newErrors);
        }
    };

    const handlePasswordChange = (e: React.FormEvent) => {
        e.preventDefault();

        const result = passwordSchema.safeParse({ password, confirmPassword });

        if (!result.success) {
            const newErrors: { password?: string; confirmPassword?: string } = {};
            result.error.errors.forEach((err) => {
                if (err.path[0] === "password") newErrors.password = err.message;
                if (err.path[0] === "confirmPassword") newErrors.confirmPassword = err.message;
            });
            setError(newErrors);
        } else {
            setError({});
            setIsSubmitted(true);
            console.log("Formulaire valide !");
        }

        console.log("Email envoyé :", email);
    };

    const handleNextStep = () => {
        if (!error.email || error.password || error.confirmPassword) {
            setStep(2);
        }
    };

    if (isSubmitted) {
        return <ConfirmationPage text={"Un lien de réinitialisation a été envoyé à votre adresse e-mail. Veuillez vérifier votre boîte de réception et suivez les instructions pour réinitialiser votre mot de passe."} link={"/login"} linkText={"connexion"} />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="absolute top-16 left-6">
                <div className="flex flex-col items-start py-5">
                    <img src={logo} alt="Logo" width={250} height={250} />
                </div>
            </div>

            {step === 1 && (
                <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md mx-auto">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                        Mot de passe oublié ?
                    </h2>
                    <div className="text-center my-10 px-6">
                        <p className="text-md text-gray-600">
                            Entrez l’adresse e-mail que vous utilisez sur SING Fusion.
                            Nous vous enverrons un lien pour réinitialiser votre mot de passe.
                        </p>
                    </div>
                    <form onSubmit={handleNextStep} className="space-y-4 flex flex-col items-center">
                        <div className="mb-6 w-full">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-4 text-lg rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                            {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
                        </div>
                        <button
                            type="button"
                            onClick={handleNextStep}
                            className="w-full py-2 rounded-md text-white font-medium shadow-md bg-gradient-to-r from-[#85105a] to-[#057389] hover:opacity-90 transition"
                        >
                            Réinitialise mot de passe
                        </button>
                    </form>
                </div>
            )}

            {step === 2 && (
                <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md mx-auto">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                        Réinitialiser le mot de passe
                    </h2>
                    <p className="text-sm text-gray-600 text-center mb-6">
                        Entrez votre nouveau mot de passe.
                    </p>
                    <form onSubmit={handlePasswordChange} className="space-y-4 w-full flex flex-col items-center">
                        <div className="mb-6 relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Mot de passe"
                                className="w-full p-4 text-lg rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-4 flex items-center text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                            {error.password && <div className="text-red-500 text-sm mt-1">{error.password}</div>}
                        </div>
                        <div className="mb-6 relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Confirmer le mot de passe"
                                className="w-full p-4 text-lg rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-4 flex items-center text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                            {error.confirmPassword && <div className="text-red-500 text-sm mt-1">{error.confirmPassword}</div>}
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 rounded-md text-white font-medium shadow-md bg-gradient-to-r from-[#85105a] to-[#057389] hover:opacity-90 transition"
                        >
                            Réinitialiser le mot de passe
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default MotDePasseOublier;
