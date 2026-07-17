import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * PLACEHOLDER: substituir pelos depoimentos reais dos clientes
 */
const testimonials = [
  {
    id: 'depoimento-1',
    name: 'Maria Silva',
    role: 'Aniversário de 50 anos',
    text: 'A La Sam superou todas as expectativas! O buffet estava impecável e todos os convidados elogiaram. Recomendo de olhos fechados.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
  },
  {
    id: 'depoimento-2',
    name: 'Carlos Mendes',
    role: 'Evento corporativo',
    text: 'Contratamos para o lançamento da nossa empresa e o serviço foi impecável — pontual, elegante e com um cardápio delicioso.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
  },
  {
    id: 'depoimento-3',
    name: 'Ana Paula Costa',
    role: 'Coffee break empresarial',
    text: 'O coffee break foi o destaque da nossa convenção. Sofisticado, variado e com um atendimento caloroso. Voltaremos a contratar!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? 'text-sam-gold' : 'text-sam-gold/30'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <article className="flex flex-col rounded-2xl bg-white/5 p-8 backdrop-blur-sm">
      <Stars count={testimonial.rating} />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-sam-gold/90">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={`Foto de ${testimonial.name} — placeholder`}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover ring-2 ring-sam-gold/30"
        />
        <div>
          <p className="font-semibold text-sam-gold">{testimonial.name}</p>
          <p className="text-xs text-sam-gold/60">{testimonial.role}</p>
        </div>
      </div>
    </article>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="depoimentos" className="section-padding bg-sam-green">
      <div className="mx-auto max-w-7xl">
        <div
          ref={titleRef}
          className={`animate-on-scroll mb-16 text-center ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-sam-gold">O que dizem nossos clientes</h2>
          <p className="mx-auto mt-4 max-w-xl text-sam-gold/70">
            A satisfação de quem confia em nós é a nossa maior recompensa.
          </p>
        </div>

        {/* Desktop grid */}
        <div
          ref={contentRef}
          className={`animate-on-scroll hidden gap-6 md:grid md:grid-cols-3 ${contentVisible ? 'visible' : ''}`}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className={`animate-on-scroll md:hidden ${contentVisible ? 'visible' : ''}`}>
          <TestimonialCard testimonial={testimonials[current]} />
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? 'w-6 bg-sam-gold' : 'w-2 bg-sam-gold/30'
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
