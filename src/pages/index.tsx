import Banner from "@/components/home/banner";
import { FaCheckCircle } from "react-icons/fa";
import image from '@/assets/images/home/Photo_de_groupe.png'


function Home() {
    return (
        <div>
            <section>
                <Banner />
            </section>
            <section>
                <div className="min-h-screen bg-white px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <img
                            src={image}
                            alt="Team joining hands"
                            className="rounded-2xl w-full object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                        <h1 className="text-2xl md:text-3xl font-bold">
                            <span className="bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                                Pourquoi une bonne intégration est essentielle pour nos nouveaux collaborateurs?
                            </span>
                        </h1>
                        <p className="text-teal-800 text-base md:text-lg font-medium">
                            Une bonne intégration permet aux employés de s'adapter rapidement et
                            de se sentir valorisés, ce qui améliore leur productivité et leur
                            engagement. Elle favorise également une meilleure cohésion d'équipe
                            et réduit les risques de turnover.
                        </p>
                        <div className="bg-gray-100 rounded-3xl p-6 shadow-inner grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Adaptation rapide et sereine",
                                "Performance accrue grâce à une meilleure prise en main des outils et processus",
                                "Renforcement de l’engagement et de la fidélité à long terme",
                                "Création de liens sociaux solides, favorisant la collaboration et l’esprit d’équipe",
                            ].map((text, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-teal-600 mt-1" />
                                    <span className="text-sm text-gray-700">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;