import React, { useState } from "react";
import { z } from "zod";
import logo from "@/assets/images/footer/logo_sing.png";

const emailSchema = z.string().email("Veuillez entrer un email valide");

const MotDePasseOublier: React.FC = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = emailSchema.safeParse(email);

        if (!result.success) {
            setError(result.error.errors[0].message);
            return;
        }

        console.log("Email envoyé :", email);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="absolute top-16 left-6">
                <div className="flex flex-col items-start py-5">
                    <img src={logo} alt="" width={250} height={250} />
                </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 max-w-md w-full">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                    Mot de passe oublié ?
                </h2>
                <p className="text-sm text-gray-600 text-center mb-6">
                    Entrez l’adresse e-mail que vous utilisez sur SING Fusion. Nous vous
                    enverrons un lien pour réinitialiser votre mot de passe.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full py-2 rounded-md text-white font-medium shadow-md bg-gradient-to-r from-[#85105a] to-[#057389] hover:opacity-90 transition"
                    >
                        Réinitialise mot de passe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MotDePasseOublier;
