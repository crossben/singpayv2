import logo from "@/assets/images/footer/logo_sing.png";
import facebook from '@/assets/images/icons/facebook.png';
import x from '@/assets/images/icons/x.png';
import linkedin from '@/assets/images/icons/linkedin.png';
import instagram from '@/assets/images/icons/instagram.png';
import youtube from '@/assets/images/icons/youtube.png';

const Footer = () => {
    return (
        <footer className="border-t border-gradient-to-r from-pink-500 to-blue-500 py-6 px-7">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col items-start justify-between md:flex-row md:items-center space-x-20 md:space-y-0">
                    <div>
                        <img src={logo} alt="SING Logo" className="h-16" />
                    </div>
                </div>
                <div className="flex flex-col  mt-4">
                    <p className="text-sm text-gray-600 font-semibold mb-2 py-5">
                        <span className="font-bold">SING Fusion :</span> votre compagnon <br /> digital pour une intégration <br />réussie à la SING.
                    </p>
                    <div className="flex space-x-3">
                        <img src={facebook} className="text-xl text-gray-700 hover:text-pink-500 cursor-pointer" />
                        <img src={x} className="text-xl text-gray-700 hover:text-pink-500 cursor-pointer" />
                        <img src={linkedin} className="text-xl text-gray-700 hover:text-pink-500 cursor-pointer" />
                        <img src={instagram} className="text-xl text-gray-700 hover:text-pink-500 cursor-pointer" />
                        <img src={youtube} className="text-xl text-gray-700 hover:text-pink-500 cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-blue-900 font-semibold mt-6 md:mt-0">
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-pink-500">Accueil</a>
                        <a href="#" className="hover:text-pink-500">Fonctionnalités</a>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-pink-500">FAQ</a>
                        <a href="#" className="hover:text-pink-500">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
