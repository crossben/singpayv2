import React from 'react';

import image from '@/assets/images/home/Photo_de_groupe.png';
import circle from '@/assets/images/icons/circle.png';
import Banner from '@/components/home/banner';
import bar from '@/assets/images/icons/bar.png';
import grade from '@/assets/images/icons/grade.png';
import book from '@/assets/images/icons/book.png';
import trophy from '@/assets/images/icons/trophy.png';
import question from '@/assets/images/icons/question.png';
import cadre from '@/assets/images/icons/cadre.png';
import computer from '@/assets/images/home/computer.png';
import { AiOutlineClose } from 'react-icons/ai';
import Header from '@/shared/header';

const IntegrationSection: React.FC = () => {
    const integrations = [
        {
            title: "Mesurez votre avancée",
            description: "Visualisez vos progrès à travers des graphiques intuitifs et suivez vos objectifs.",
            image: bar,
        },
        {
            title: "Apprenez et explorez",
            description: "Accédez à des vidéos, quiz et cours pour mieux comprendre la SING.",
            image: grade,
        },
        {
            title: "Documents essentiels",
            description: "Consultez une collection organisée de documents et guides pratiques.",
            image: book,
        },
        {
            title: "Testez vos connaissances",
            description: "Participez à des quiz et obtenez des badges attestant de vos connaissances.",
            image: trophy,
        },
        {
            title: "Réponses à vos questions",
            description: "Retrouvez des solutions rapides et accédez à notre guide d’aide.",
            image: question,
        },
        {
            title: "Votre espace personnel",
            description: "Un aperçu complet de vos objectifs, badges, et prochaines étapes.",
            image: cadre,
        },
    ];
    return (
        <div>
            <Header />
            <section>
                <Banner />
            </section>
            <section>
                <div className="relative bg-white p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-[#522e76] mb-8">
                        Pourquoi une bonne intégration est essentielle <br />
                        <span className="text-[#a64afc]">pour nos nouveaux collaborateurs?</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/3">
                            <img
                                src={image}
                                alt="Team hands"
                                className="rounded-md object-cover w-full h-auto"
                            />
                        </div>
                        <div className="w-full md:w-2/3 relative">
                            <p className="text-[#00707d] text-base md:text-lg font-medium leading-relaxed">
                                Une bonne intégration permet aux employés de s'adapter rapidement et de se sentir valorisés,
                                ce qui améliore leur productivité et leur engagement. Elle favorise également une meilleure
                                cohésion d'équipe et réduit les risques de turnover.
                            </p>
                            <div className="absolute top-50 -left-20 right-50 bg-[#f5f7fa] shadow-lg rounded-4xl px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-2">
                                    <span className="flex-shrink-0 w-6 h-6">
                                        <img src={circle} alt="" className="w-full h-full object-contain" />
                                    </span>
                                    <p>Adaptation rapide et sereine</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="flex-shrink-0 w-6 h-6">
                                        <img src={circle} alt="" className="w-full h-full object-contain" />
                                    </span>
                                    <p>Performance accrue grâce à une meilleure prise en main des outils et processus</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="flex-shrink-0 w-6 h-6">
                                        <img src={circle} alt="" className="w-full h-full object-contain" />
                                    </span>
                                    <p>Renforcement de l'engagement et de la fidélité à long terme</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="flex-shrink-0 w-6 h-6">
                                        <img src={circle} alt="" className="w-full h-full object-contain" />
                                    </span>
                                    <p>Création de liens sociaux solides, favorisant la collaboration et l'esprit d'équipe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='my-20'></div>
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text mb-8 bg-gradient-to-r from-[#a64afc] to-[#7e51aa]">
                    Découvrez les clés de votre intégration à la SING
                </h2>
                <div className='bg-[#890C58] overflow-hidden'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                        {integrations.map((integration, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg py-20">
                                <div className='bg-white flex items-center justify-center' style={{ borderRadius: '50%', padding: '10px' }}>
                                    <img src={integration.image} alt={integration.title} className="w-12 h-12 mb-4" />
                                </div>
                                <h3 className="text-white text-lg font-semibold">{integration.title}</h3>
                                <p className="text-gray-200 text-center">{integration.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className='py-20 mx-5'>
                    <h2 className="text-5xl md:text-3xl font-bold text-transparent bg-clip-text mb-8 bg-gradient-to-r from-[#a64afc] to-[#003548]">
                        Toutes les réponses à vos questions <br />
                        principales
                    </h2>
                    <div className='flex flex-col md:flex-row gap-6 text-center mx-auto items-center justify-center'>
                        <div className='w-full md:w-1/2 flex flex-col gap-4'>
                            <div className="space-y-4">
                                <details className="group [&_summary::-webkit-details-marker]:hidden w-full max-full mx-auto rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                                    <summary className="flex items-center justify-between gap-1.5 bg-gradient-to-r from-[#890C58] to-[#00778B] p-6 text-white cursor-pointer">
                                        <h2 className="text-lg font-semibold">Comment puis-je m'inscrire sur la plateforme ?</h2>
                                        <AiOutlineClose className="size-5 transition-transform duration-300 group-open:rotate-180" />
                                    </summary>
                                    <div className="bg-white p-6 text-gray-800 text-sm rounded-b-3xl">
                                        Pour vous inscrire, cliquez sur "Créer un compte" sur la page d'accueil, remplissez le formulaire d'inscription avec vos informations personnelles (nom, prénom, e-mail, etc.), puis attendez la validation de votre profil par un administrateur. Une fois validé, vous pourrez accéder à votre tableau de bord personnel.
                                    </div>
                                </details>
                            </div>
                            <div className="space-y-4">
                                <details className="group [&_summary::-webkit-details-marker]:hidden w-full max-full mx-auto rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                                    <summary className="flex items-center justify-between gap-1.5 bg-gradient-to-r from-[#890C58] to-[#00778B] p-6 text-white cursor-pointer">
                                        <h2 className="text-lg font-semibold">Comment puis-je réinitialiser mon mot de passe ?</h2>
                                        <AiOutlineClose className="size-5 transition-transform duration-300 group-open:rotate-180" />
                                    </summary>
                                    <div className="bg-white p-6 text-gray-800 text-sm rounded-b-3xl">
                                        Pour réinitialiser votre mot de passe, cliquez sur "Mot de passe oublié ?" sur la page de connexion, entrez votre adresse e-mail, puis suivez les instructions envoyées par e-mail pour créer un nouveau mot de passe.
                                    </div>
                                </details>
                            </div>
                            <div className="space-y-4">
                                <details className="group [&_summary::-webkit-details-marker]:hidden w-full max-full mx-auto rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                                    <summary className="flex items-center justify-between gap-1.5 bg-gradient-to-r from-[#890C58] to-[#00778B] p-6 text-white cursor-pointer">
                                        <h2 className="text-lg font-semibold">Comment puis-je accéder aux ressources de formation ?</h2>
                                        <AiOutlineClose className="size-5 transition-transform duration-300 group-open:rotate-180" />
                                    </summary>
                                    <div className="bg-white p-6 text-gray-800 text-sm rounded-b-3xl">
                                        Pour accéder aux ressources de formation, connectez-vous à votre compte, allez dans la section "Formation" de votre tableau de bord, et parcourez les cours et documents disponibles.
                                    </div>
                                </details>
                            </div>
                            <div className="space-y-4">
                                <details className="group [&_summary::-webkit-details-marker]:hidden w-full max-full mx-auto rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                                    <summary className="flex items-center justify-between gap-1.5 bg-gradient-to-r from-[#890C58] to-[#00778B] p-6 text-white cursor-pointer">
                                        <h2 className="text-lg font-semibold">Comment puis-je contacter le support technique ?</h2>
                                        <AiOutlineClose className="size-5 transition-transform duration-300 group-open:rotate-180" />
                                    </summary>
                                    <div className="bg-white p-6 text-gray-800 text-sm rounded-b-3xl">
                                        Pour contacter le support technique, allez dans la section "Aide" de votre tableau de bord, remplissez le formulaire de contact, et notre équipe vous répondra dans les plus brefs délais.
                                    </div>
                                </details>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img src={computer} alt="Computer" className='rounded-lg' width={500} height={100} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
                    <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#890C58] to-[#00778B]">
                        Contact
                    </h2>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-5xl">
                        <div className="bg-[#00778B] text-white p-10 rounded-2xl w-full lg:w-1/2 shadow-md relative left-15">
                            <h1 className="text-lg font-bold mb-2">
                                Vous avez encore des questions ?<br />
                                Contactez-nous !
                            </h1>
                            <p className="text-sm">
                                Si vous n'avez pas trouvé la réponse à votre question dans notre FAQ, notre équipe est là pour vous aider et vous apporter une solution.
                            </p>
                        </div>
                        <form className="border-2 border-[#890C58] p-10 rounded-2xl w-full lg:w-1/2 shadow-md space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#890C58] to-[#00778B]" htmlFor="name">Nom</label>
                                <input id="name" type="text" className="w-full px-4 py-2 rounded-full border bg-gray-100 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#890C58] to-[#00778B]" htmlFor="email">Email</label>
                                <input id="email" type="email" className="w-full px-4 py-2 rounded-full border bg-gray-100 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#890C58] to-[#00778B]" htmlFor="message">Message</label>
                                <textarea id="message" rows={4} className="w-full p-3 rounded-xl border bg-gray-100 outline-none" />
                            </div>
                            <div className='flex items-center justify-center'>
                                <button
                                    type="submit"
                                    className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-[#890C58] to-[#00778B] hover:opacity-90 transition"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IntegrationSection;
