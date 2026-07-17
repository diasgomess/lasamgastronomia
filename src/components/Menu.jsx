import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Lightbox from './Lightbox'

/**
 * PLACEHOLDER: substituir src pelas fotos reais do portfólio.
 * Cada id identifica a categoria para facilitar a substituição.
 */
const galleryImages = [
  {

    src: 'images/image1.jpeg',
    spanClass: 'sm:col-span-1 sm:row-span-2',
  },
  {

    src: 'images/image2.jpeg',
    spanClass: 'sm:col-span-1 sm:row-span-1',
  },
  {
    src: 'images/image3.jpeg',
    spanClass: 'sm:col-span-1 sm:row-span-1',
  },
  {
    src: 'images/image4.jpeg',
    spanClass: 'sm:col-span-1 sm:row-span-1',
  },
  {
    src: 'images/image5.jpeg',
    spanClass: 'sm:col-span-1 sm:row-span-1',
  },
  {
    src: 'images/image8.jpeg',
    spanClass: 'sm:col-span-1 sm:row-span-2',
  },
  {
    src: 'images/image7.jpeg',
    spanClass: 'sm:col-span-1 sm:row-span-1',
  },
  {
    src: 'images/image6.jpeg',
    spanClass: 'sm:col-span-1 sm:row-span-1',
  },
]

function GalleryItem({ image, index, onOpen }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onOpen(index)}
      className={`animate-on-scroll group relative overflow-hidden rounded-xl ${image.spanClass} ${
        isVisible ? 'visible' : ''
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      aria-label={`Ampliar: ${image.alt}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-sam-green/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-xs font-medium text-sam-gold">{image.id}</span>
      </div>
    </button>
  )
}

export default function Menu() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const navigateLightbox = (direction) => {
    setLightboxIndex((prev) => {
      const next = prev + direction
      if (next < 0) return galleryImages.length - 1
      if (next >= galleryImages.length) return 0
      return next
    })
  }

  return (
    <section id="cardapio" className="section-padding bg-sam-green">
      <div className="mx-auto max-w-7xl">
        <div
          ref={titleRef}
          className={`animate-on-scroll mb-16 text-center ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-sam-gold">Um pouco do que preparamos</h2>
          <p className="mx-auto mt-4 max-w-xl text-sam-gold/70">
            Cada prato é preparado com carinho e atenção aos detalhes. Confira
            alguns dos nossos trabalhos.
          </p>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              index={index}
              onOpen={openLightbox}
            />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </section>
  )
}
