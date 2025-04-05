import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "@/assets/images/auth/logo_sin.png";
import { z } from "zod";
import './style.css';

// Définir le schéma de validation avec Zod
const loginSchema = z.object({
    email: z.string().email("Veuillez entrer un email valide."),
    password: z.string().min(6, "Le mot de passe doit comporter au moins 6 caractères."),
});

const LoginForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const result = loginSchema.safeParse({ email, password });

        if (!result.success) {
            const newErrors: { email?: string; password?: string } = {};
            result.error.errors.forEach((err) => {
                if (err.path[0] === "email") newErrors.email = err.message;
                if (err.path[0] === "password") newErrors.password = err.message;
            });
            setErrors(newErrors);
        } else {
            setErrors({});
            console.log("Formulaire valide !");
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-cover bg-center relative bg">
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="relative z-10 flex w-full max-w-6xl">
                <div className="w-1/2 text-white px-10 flex items-center shadow">
                    <h1 className="text-6xl font-bold shadow">
                        Rejoignez SING Fusion et démarrez votre aventure chez nous !
                    </h1>
                </div>
                <div className="w-1/2 p-8 rounded-lg shadow-lg h-full">
                    <div className="text-center mb-6 py-20">
                        <img src={logo} alt="SING Logo" className="mx-auto" width={300} height={300} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                        </div>
                        <div className="mb-4 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Mot de passe"
                                className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
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
                                Créez un compte &nbsp;
                                <a href="/register" className="text-[#85105a] hover:underline">
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

export default LoginForm;
