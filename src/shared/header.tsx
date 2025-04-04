import { FaSignInAlt } from "react-icons/fa";
import logo from '@/assets/images/icons/logo_sing.png'

function Header() {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
            <div className="flex items-center space-x-2">
                <img
                    src={logo}
                    alt="SING Logo"
                    className="h-10"
                />
                {/* <div className="text-xs text-pink-600">
                    Société d'Incubation <br /> Numérique du Gabon
                </div> */}
            </div>
            <nav className="flex space-x-40 text-teal-700 font-medium">
                <a href="/" className="hover:text-teal-900">Accueil</a>
                <a href="#" className="hover:text-teal-900">Fonctionnalités</a>
                <a href="#" className="hover:text-teal-900">FAQ</a>
                <a href="#" className="hover:text-teal-900">Contact</a>
            </nav>
            <button className="flex items-center space-x-2 border border-gradient-to-r from-[#85105a] to-[#057389] rounded-full px-4 py-2 bg-white text-[#85105a] hover:opacity-90">
                <FaSignInAlt />
                <a href="/login" className="text-transparent bg-clip-text bg-gradient-to-r from-[#85105a] to-[#057389]">Se connecter</a>
            </button>
        </header>
    );
}

export default Header;