/**
 * PLACEHOLDERS EDITÁVEIS — substitua pelos dados reais da La Sam Gastronomia
 */
export const siteConfig = {
  // TODO: substituir pelo número real (apenas dígitos, com DDD e código do país)
  whatsappNumber: '5511996210079',

  whatsappMessage:
    'Olá! Gostaria de saber mais sobre os serviços da La Sam Gastronomia e fazer um orçamento.',

  // TODO: substituir pelos contatos reais
  phone: '(11) 99621-0079',
  email: 'contato@lasamgastronomia.com.br',
  address: 'Endereço placeholder — Cidade, Estado',

  // TODO: substituir pelos links reais das redes sociais
  social: {
    instagram: 'https://www.instagram.com/lasam_gastronomia/',
    facebook: 'https://www.facebook.com/p/La-Sam-Gastronomia-100026420543273/',
  },

  companyName: 'La Sam Gastronomia',
  copyrightYear: 2026,
}

export function getWhatsAppUrl(message = siteConfig.whatsappMessage) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`
}

export const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]
