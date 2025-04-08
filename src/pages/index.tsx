// src/components/IntegrationSection.tsx

import image from '@/assets/images/home/Photo_de_groupe.png';
import circle from '@/assets/images/icons/circle.png';
import Banner from '@/components/home/banner';
import bar from '@/assets/images/icons/bar.png';
import grade from '@/assets/images/icons/grade.png';
import book from '@/assets/images/icons/book.png';
import trophy from '@/assets/images/icons/trophy.png';
import question from '@/assets/images/icons/question.png';
import cadre from '@/assets/images/icons/cadre.png';
import React from 'react';

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
                        Toutes les réponses à vos questions principales
                    </h2>
                </div>
            </section>
        </div>
    );
};

export default IntegrationSection;
