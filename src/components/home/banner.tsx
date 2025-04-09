import hero_bg from '@/assets/images/home/hero_bg.png'

const Banner = () => {
    return (
        <section
            className="bg-white lg:grid lg:h-140 justify-start"
            style={{ backgroundImage: `url(${hero_bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="max-w-prose text-left">
                    <h1 className="text-xl font-bold sm:text-4xl text-white">
                        Rejoignez notre univers, découvrez nos valeurs et devenez une partie essentielle de notre aventure.
                    </h1>
                    <p className="mt-4 text-base text-pretty sm:text-lg/relaxed text-white">
                        Grâce à notre guide interactif, connectez vos ambitions à nos objectifs, apprenez, évoluez et épanouissez-vous dans un parcours d'intégration fluide et inspirant.
                    </p>
                    <div className="mt-6 flex gap-6 sm:mt-8">
                        <a
                            className="inline-block rounded bg-gradient-to-r from-[#85105a] to-[#057389] px-6 py-4 text-lg font-medium text-white shadow-md transition-transform hover:scale-105"
                            href="#"
                        >
                            Débuter votre intégration
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;