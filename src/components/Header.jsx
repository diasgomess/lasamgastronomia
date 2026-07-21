import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import Logo from './Logo'
import { getWhatsAppUrl, navLinks } from '../config/siteConfig'
import { scrollToSection } from '../hooks/useScrollAnimation'

function MenuIcon({ open }) {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight)
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    scrollToSection(href)
  }

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="shrink-0"
          aria-label="La Sam Gastronomia — início"
        >
          <Logo variant={scrolled ? 'light' : 'hero'} size="sm" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Menu principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-sam-green ${
                scrolled ? 'text-sam-dark' : 'text-sam-gold'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp-header hidden lg:inline-flex"
        >
          Fale no WhatsApp
        </a>

        <button
          type="button"
          className={`rounded-lg p-2 lg:hidden ${
            scrolled ? 'text-sam-dark' : 'text-sam-gold'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile menu rendered in a portal to avoid stacking issues */}
      {createPortal(
        <div
          className={`fixed inset-0 transition-all duration-300 lg:hidden ${
            mobileOpen ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'
          }`}
          style={{ WebkitOverflowScrolling: 'touch', backgroundColor: '#1a3a2e', zIndex: 9999 }}
        >
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar menu"
            className="absolute right-4 top-4 rounded-lg p-2 text-sam-gold lg:hidden"
          >
            <MenuIcon open={true} />
          </button>

          <nav className="flex flex-col items-center gap-6 px-6 py-10 min-h-full overflow-auto pt-24" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-sam-gold transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4"
            >
              Fale no WhatsApp
            </a>
          </nav>
        </div>,
        document.body
      )}
    </header>
  )
}
