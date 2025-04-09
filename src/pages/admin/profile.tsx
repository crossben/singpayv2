import { useState } from "react"
import { Bell, Eye, EyeOff, LogOut, PencilLine, User } from "lucide-react"
import logo from '@/assets/images/footer/logo_sing.png';
import cadre from '@/assets/images/icons/cadre.png'
import { LuBookOpenText } from "react-icons/lu";
import { BsBookmarks } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<"personal" | "security">("security")
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const handlePasswordChange = async (e : any) => {
        e.preventDefault();
        const isCurrentPasswordValid = await new Promise<boolean>((resolve) => {
            setTimeout(() => {
                resolve(currentPassword === "12334567");
            }, 1000);
        });

        if (!isCurrentPasswordValid) {
            alert("Le mot de passe actuel est incorrect.");
            return;
        }

        const isPasswordUpdated = await new Promise<boolean>((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        });

        if (isPasswordUpdated) {
            alert("Le mot de passe a été mis à jour avec succès.");
            setCurrentPassword("");
            setNewPassword("");
        } else {
            alert("Une erreur s'est produite lors de la mise à jour du mot de passe.");
        }
    };
    return (
        <div className="flex h-screen bg-[#0e2c40]">
            <div className="w-[190px] flex flex-col border-r border-[#1a3a4e] bg-white">
                <div className="p-4 mb-6">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="w-12 h-10 mr-2" />
                    </div>
                </div>
                <nav className="flex-1 space-y-10 px-2">
                    <button className="flex items-center w-full p-3 rounded-md bg-[#7b1fa2] text-white font-medium">
                        <img src={cadre} color="white" className="w-5 h-5 mr-3" />
                        <span>Tableau de bord</span>
                    </button>
                    <button className="flex items-center w-full p-3 rounded-md text-gray-300 hover:bg-[#1a3a4e] font-medium">
                        <LuBookOpenText className="w-6 h-5 mr-3" />
                        <span>Parcours d'intégration</span>
                    </button>
                    <button className="flex items-center w-full p-3 rounded-md text-gray-300 hover:bg-[#1a3a4e] font-medium">
                        <BsBookmarks className="w-5 h-5 mr-3" />
                        <span>Espace Références</span>
                    </button>
                    <button className="flex items-center w-full p-3 rounded-md text-gray-300 hover:bg-[#1a3a4e] font-medium">
                        <MdOutlineDateRange className="w-5 h-5 mr-3" />
                        <span>Espace FAQ</span>
                    </button>
                    <button className="flex items-center w-full p-3 rounded-md text-gray-300 hover:bg-[#1a3a4e] font-medium">
                        <MdOutlineDateRange className="w-5 h-5 mr-3" />
                        <span>Quiz</span>
                    </button>
                </nav>
                <div className="p-4 mt-auto">
                    <button className="flex items-center w-full p-3 rounded-md text-gray-300 hover:bg-[#1a3a4e] font-medium">
                        <LogOut className="w-5 h-5 mr-3" />
                        <span>Déconnexion</span>
                    </button>
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <header className="h-20 flex items-center justify-between px-8 border-b border-[#1a3a4e]">
                    <h1 className="text-white text-2xl font-semibold">Profil</h1>
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Recherche"
                            className="w-full py-2 px-4 rounded-full bg-white text-gray-800 focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-white">
                            <Bell className="w-6 h-6" />
                        </button>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                            <User className="w-6 h-6 text-gray-400" />
                        </div>
                    </div>
                </header>
                <div className="flex-1 p-8">
                    <div className="flex bg-white rounded-lg overflow-hidden">
                        <div className="w-[300px] bg-gradient-to-b from-[#9c27b0] to-[#00bcd4] p-6 flex flex-col items-center">
                            <div className="relative mt-8">
                                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                                    <User className="w-12 h-12 text-gray-400" />
                                </div>
                                <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full">
                                    <PencilLine className="w-4 h-4 text-gray-600" />
                                </button>
                            </div>
                            <div className="mt-12 bg-white rounded-md p-4 w-full">
                                <h3 className="text-gray-600 mb-2">Niveau</h3>
                                <p className="text-right text-4xl font-bold text-gray-800">1</p>
                            </div>
                        </div>
                        <div className="flex-1 p-6">
                            <div className="flex border-b">
                                <button
                                    className={`px-6 py-3 font-medium ${activeTab === "personal" ? "border-b-2 border-[#9c27b0] text-[#9c27b0]" : "text-gray-600"
                                        }`}
                                    onClick={() => setActiveTab("personal")}
                                >
                                    Informations personnelle
                                </button>
                                <button
                                    className={`px-6 py-3 font-medium ${activeTab === "security" ? "border-b-2 border-[#9c27b0] text-[#9c27b0]" : "text-gray-600"
                                        }`}
                                    onClick={() => setActiveTab("security")}
                                >
                                    Sécurité
                                </button>
                            </div>
                            <div className="py-6">
                                {activeTab === "personal" ? (
                                    <div>
                                        <p>Personal information content</p>
                                    </div>
                                ) : (
                                    <div className="max-w-md">
                                        <h2 className="text-xl font-medium mb-6">Changer le mot de passe</h2>
                                        <form onSubmit={handlePasswordChange} className="space-y-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe actuel</label>
                                                <div className="relative">
                                                    <input
                                                        type={showCurrentPassword ? "text" : "password"}
                                                        value={currentPassword}
                                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                                        className="w-full p-2 border border-gray-300 rounded-md pr-10"
                                                        placeholder="••••••••••"
                                                    />
                                                    <button
                                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                                    >
                                                        {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Nouveau mot de passe</label>
                                                <div className="relative">
                                                    <input
                                                        type={showNewPassword ? "text" : "password"}
                                                        value={newPassword}
                                                        onChange={(e) => setNewPassword(e.target.value)}
                                                        className="w-full p-2 border border-gray-300 rounded-md pr-10"
                                                        placeholder="••••••••••"
                                                    />
                                                    <button
                                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                                    >
                                                        {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <button className="px-6 py-2 bg-[#9c27b0] text-white rounded-md hover:bg-[#7b1fa2] transition-colors">
                                                    Confirmer
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
