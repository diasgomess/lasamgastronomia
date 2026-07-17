import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation()
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation()

  return (
    <section id="sobre" className="section-padding bg-sam-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div
          ref={textRef}
          className={`animate-on-scroll ${textVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-sam-green">
            Sobre a La Sam Gastronomia
          </h2>
          <div className="mt-6 space-y-4 text-sam-dark/80 leading-relaxed">
            {/* PLACEHOLDER: substituir pelo texto real sobre a empresa */}
            <p>
              Há anos transformando eventos em experiências gastronômicas
              memoráveis, a La Sam Gastronomia nasceu do amor pela boa comida e
              pelo prazer de reunir pessoas em torno de uma mesa especial.
            </p>
            <p>
              Selecionamos ingredientes frescos e de qualidade, preparando cada
              prato com o cuidado artesanal que o seu evento merece — seja uma
              confraternização íntima ou um grande buffet corporativo.
            </p>
            <p>
              Nossa equipe acompanha cada etapa do processo, do planejamento do
              cardápio à montagem no local, para que você possa aproveitar cada
              momento com tranquilidade e seus convidados se sintam verdadeiramente
              acolhidos.
            </p>
          </div>
        </div>

        <div
          ref={imageRef}
          className={`animate-on-scroll ${imageVisible ? 'visible' : ''}`}
        >
          {/* PLACEHOLDER: substituir pela foto real da equipe/cozinha (id: foto-equipe-cozinha) */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="images/image3.jpeg"
              alt="Equipe La Sam Gastronomia — placeholder"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
              id="foto-equipe-cozinha"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
