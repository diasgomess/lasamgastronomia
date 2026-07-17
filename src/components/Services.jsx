import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    icon: '',
    title: 'Festas de Aniversário',
    description: 'Celebre com um cardápio personalizado para todas as idades',
  },
  {
    icon: '',
    title: 'Happy Hour',
    description: 'Petiscos e drinks para descontrair com estilo',
  },
  {
    icon: '',
    title: 'Coffee Break',
    description: 'Opções sofisticadas para reuniões e eventos corporativos',
  },
  {
    icon: '',
    title: 'Eventos Corporativos',
    description: 'Serviço completo para confraternizações e lançamentos',
  },
  {
    icon: '',
    title: 'Cestas',
    description: 'Cestas personalizadas para presentear com sabor',
  },
  {
    icon: '',
    title: 'Estações de Massas',
    description: 'Massas frescas preparadas na hora para seus convidados',
  },
]

function ServiceCard({ service, index }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <article
      ref={ref}
      className={`animate-on-scroll group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isVisible ? 'visible' : ''
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="mb-4 block text-4xl" role="img" aria-hidden="true">
        {service.icon}
      </span>
      <h3 className="mb-2 text-xl font-semibold text-sam-green">{service.title}</h3>
      <p className="text-sm leading-relaxed text-sam-dark/70">{service.description}</p>
    </article>
  )
}

export default function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="servicos" className="section-padding bg-sam-cream">
      <div className="mx-auto max-w-7xl">
        <div
          ref={titleRef}
          className={`animate-on-scroll mb-16 text-center ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-sam-green">O que fazemos</h2>
          <p className="mx-auto mt-4 max-w-xl text-sam-dark/70">
            Do coffee break ao grande evento — cuidamos de cada detalhe para que
            você e seus convidados vivam uma experiência gastronômica especial.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
