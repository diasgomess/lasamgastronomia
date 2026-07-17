import { getWhatsAppUrl, siteConfig } from '../config/siteConfig'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contato" className="section-padding bg-sam-cream">
      <div className="mx-auto max-w-4xl">
        <div
          ref={ref}
          className={`animate-on-scroll rounded-3xl bg-sam-green px-6 py-16 text-center shadow-2xl sm:px-12 lg:py-20 ${
            isVisible ? 'visible' : ''
          }`}
        >
          <h2 className="font-script text-4xl text-sam-gold sm:text-5xl lg:text-6xl">
            Vamos planejar seu evento?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sam-gold/80">
            Conte-nos sobre a sua celebração e montaremos um cardápio sob medida
            para tornar o seu evento inesquecível. Estamos prontos para atender
            você!
          </p>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10 text-base"
          >
            Chamar no WhatsApp
          </a>

          <div className="mt-12 flex flex-col items-center gap-6 border-t border-sam-gold/20 pt-10 sm:flex-row sm:justify-center sm:gap-12">
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-sam-gold/60">
                Telefone
              </p>
              {/* PLACEHOLDER: substituir pelo telefone real */}
              <p className="mt-1 text-sam-gold">{siteConfig.phone}</p>
              <p className="mt-1 text-sam-gold">{siteConfig.phone2}</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-sam-gold/60">
                Nós temos loja física, venha conhecer!
              </p>
              {/* PLACEHOLDER: substituir pelo e-mail real */}
              <p className="mt-1 text-sam-gold">{siteConfig.local}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sam-gold/10 p-3 text-sam-gold transition-colors hover:bg-sam-gold/20"
              aria-label="Instagram — PLACEHOLDER: substituir link"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sam-gold/10 p-3 text-sam-gold transition-colors hover:bg-sam-gold/20"
              aria-label="Facebook — PLACEHOLDER: substituir link"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
