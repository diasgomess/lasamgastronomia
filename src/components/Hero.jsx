import { getWhatsAppUrl } from '../config/siteConfig'
import { scrollToSection } from '../hooks/useScrollAnimation'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* PLACEHOLDER: substituir pela foto real do hero */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('images/image8.jpeg')`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-sam-green/80" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sam-gold/80">
          Buffet &amp; Catering
        </p>
        <h1 className="font-script text-5xl leading-tight text-sam-gold sm:text-6xl lg:text-7xl">
          Sabor e sofisticação para o seu evento
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sam-gold/90 sm:text-xl">
          Buffet completo para festas, eventos corporativos e celebrações
          inesquecíveis! Realizando sonhos!
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            Chamar no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => scrollToSection('#cardapio')}
            className="btn-outline w-full sm:w-auto"
          >
            Ver Cardápio
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="h-6 w-6 text-sam-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
