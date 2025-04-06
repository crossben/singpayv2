import { FC } from "react";
import logo from "@/assets/images/footer/logo_sing.png";

interface ConfirmationPageProps {
    text: string;
    link: string;
    linkText: string;
}
const ConfirmationPage: FC<ConfirmationPageProps> = ({ text, link, linkText }) => {
    return (
        <div className="min-h-150 flex flex-col items-center justify-center bg-white py-20 text-center">
            <div className="absolute top-15 left-6">
                <div className="flex flex-col items-start">
                    <img src={logo} alt="" width={250} height={250} />
                </div>
            </div>
            <div className="bg-[#800060] h-120 w-full text-white rounded-md shadow-md border-t-4 py-10 mt-32 flex items-center justify-center">
                <p className="text-2xl font-bold text-center w-1/2 mx-auto">
                    {text}
                </p>
            </div>
            <div className="mt-8 text-sm text-gray-700">
                Retour à{" "}
                <a href={link} className="text-blue-500 underline hover:text-blue-700">
                    {linkText}
                </a>
            </div>
        </div>
    );
}

export default ConfirmationPage;