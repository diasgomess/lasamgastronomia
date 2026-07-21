import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    title: 'Itaú',
    description: 'Eventos corporativos, reuniões e confraternizações com atendimento personalizado.',
    logoUrl: 'public/images/logo_itau.png',
  },
  {
    title: 'Bradesco',
    description: 'Serviços de buffet para encontros empresariais e celebrações internas.',
    logoUrl: 'public/images/logo_bradesco.png',
  },
  {
    title: 'AMBEV',
    description: 'Experiência gastronômica para eventos corporativos e ações especiais.',
    logoUrl: 'public/images/logo_ambev.png',
  },
  {
    title: 'LATAM',
    description: 'Soluções completas de catering para eventos e confraternizações.',
    logoUrl: 'public/images/logo_latam.png',
  },
  {
    title: 'BMG',
    description: 'Serviço de buffet para eventos corporativos, lançamentos e celebrações internas.',
    logoUrl: 'public/images/logo_bmg.png',
  },
  {
    title: 'ASICS',
    description: 'Lançamentos de produtos, eventos esportivos e experiências de marca com serviço de buffet.',
    logoUrl: 'public/images/logo_asics.png',
  },
]

function ServiceLogo({ logoUrl, name }) {
  if (logoUrl) {
    return (
      <div className="flex h-10 items-center justify-start overflow-hidden">
        <img
          src={logoUrl}
          alt={`Logo de ${name}`}
          className="max-h-10 w-auto object-contain"
        />
      </div>
    )
  }

  return null
}

function ServiceCard({ service, index }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <article
      ref={ref}
      className={`animate-on-scroll group flex h-full min-h-[240px] flex-col rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 lg:p-10 ${
        isVisible ? 'visible' : ''
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {service.logoUrl ? (
        <div className="mb-5 flex items-start">
          <ServiceLogo logoUrl={service.logoUrl} name={service.title} />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col">
        <h3 className="mb-2 text-xl font-semibold text-sam-green">{service.title}</h3>
        {service.title === 'Celebridades' ? (
          /* TODO: revisão jurídica/compliance pendente antes de publicar esta menção a pessoas públicas. */
          null
        ) : null}
        <p className="flex-1 text-sm leading-relaxed text-sam-dark/70">
          {service.description}
        </p>
      </div>
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
          <h2 className="section-title text-sam-green">Clientes que atendemos!</h2>
          <p className="mx-auto mt-4 max-w-xl text-sam-dark/70">
            Do coffee break ao grande evento — cuidamos de cada detalhe para que
            você e seus convidados vivam uma experiência gastronômica especial.
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
