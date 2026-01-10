import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Neuxdotdev',
  description: 'Muhammad Ridwan Hafidi · JavaScript Developer · Libraries & Tools',
  lang: 'en-US',
  cleanUrls: true,

  appearance: true,
  lastUpdated: false,

  head: [
    // === Icons ===
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],

    // === Fonts ===
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap'
    }],

    // === SEO ===
    ['meta', { name: 'author', content: 'Neuxdotdev' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'theme-color', content: '#18181b' }],

    // === Open Graph ===
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Neuxdotdev' }],
    ['meta', { property: 'og:description', content: 'JavaScript Developer · Libraries & Tools' }],
    ['meta', { property: 'og:image', content: 'https://neux.dev/og-image.png' }],

    // === Structured Data ===
    ['script', {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Muhammad Ridwan Hafidi",
        "url": "https://neux.dev",
        "jobTitle": "JavaScript Developer",
        "knowsAbout": [
          "JavaScript",
          "Node.js",
          "Developer Tools",
          "API Design"
        ],
        "sameAs": [
          "https://github.com/neuxdotdev",
          "https://www.npmjs.com/~neuxdotdev"
        ]
      })
    }]
  ],

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: false,

    // Single-page site → nav minimal
    nav: [{ text: 'Home', link: '/' }],

    // Sidebar benar-benar mati
    sidebar: [],

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/neuxdotdev' },
      { icon: 'npm', link: 'https://www.npmjs.com/~neuxdotdev' }
    ],

    footer: {
      message: 'Crafting tools with precision',
      copyright: `© ${new Date().getFullYear()} Neuxdotdev`
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: false,
    image: {
      lazyLoading: true
    }
  }
})
