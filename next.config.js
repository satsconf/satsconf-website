module.exports = {
  i18n: {
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'pt-BR',
    localeDetection: false, // Desativa a detecção automática do Next.js para caminho baseado em idioma
  },
  async headers() {
    return [
      {
        source: "/.well-known/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }
        ]
      }
    ]
  }
}
