# La Sam Gastronomia — Landing Page

Landing page institucional para buffet e catering de eventos.

## Stack

- React 19 + Vite
- Tailwind CSS 3
- Single-page com scroll suave entre seções

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

## Build para produção

```bash
npm run build
npm run preview
```

## Placeholders para editar

Todos os conteúdos editáveis estão centralizados e identificados:

### 1. Contatos e WhatsApp — `src/config/siteConfig.js`

| Campo | Descrição |
|-------|-----------|
| `whatsappNumber` | Número com DDI (ex: `5511999999999`) |
| `phone` | Telefone exibido no site |
| `email` | E-mail de contato |
| `address` | Endereço |
| `social.instagram` | Link do Instagram |
| `social.facebook` | Link do Facebook |

### 2. Logo — `src/components/Logo.jsx`

Substitua o SVG pelo arquivo de logo real quando disponível.

### 3. Imagens

| Arquivo | Placeholder |
|---------|-------------|
| `src/components/Hero.jsx` | Foto de fundo do hero |
| `src/components/Menu.jsx` | Galeria com ids `foto-evento-corporativo-1`, `foto-festa-aniversario-1`, etc. |
| `src/components/About.jsx` | `#foto-equipe-cozinha` |
| `src/components/Testimonials.jsx` | Depoimentos com ids `depoimento-1`, `depoimento-2`, `depoimento-3` |

### 4. Textos

- `src/components/About.jsx` — texto institucional
- `src/components/Testimonials.jsx` — depoimentos de clientes

## Estrutura de componentes

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Menu.jsx          (galeria + lightbox)
│   ├── About.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── WhatsAppButton.jsx
│   ├── Logo.jsx
│   └── Lightbox.jsx
├── config/
│   └── siteConfig.js     ← edite aqui primeiro
├── hooks/
│   └── useScrollAnimation.js
└── App.jsx
```

## Identidade visual

- Verde escuro: `#1a3a2e`
- Dourado/creme: `#e8dcc3`
- Fundo claro: `#faf8f3`
- Texto: `#2a2a2a`
- Fonte script: Dancing Script
- Fonte corpo: Inter
