// Fußzeile der Nebenseiten (5.11.2026, Tassilo: Impressum wie bei Antiga): Konto, Danke, Datenschutz und Impressum zeigen dieselben Links wie die Startseite
// Sprache wie dort: ?lang=, sonst das Gerät, sonst Englisch. Die Startseite beschriftet ihre Fußzeile selbst (app.js, fuss.*).
(() => {
  const W = {
    de: ['Impressum', 'Datenschutz', 'Kontakt'], en: ['Legal notice', 'Privacy', 'Contact'], es: ['Aviso legal', 'Privacidad', 'Contacto'],
    fr: ['Mentions légales', 'Confidentialité', 'Contact'], it: ['Note legali', 'Privacy', 'Contatti'], pt: ['Aviso legal', 'Privacidade', 'Contacto'],
  };
  const q = new URLSearchParams(location.search).get('lang'), g = (navigator.languages || [navigator.language || 'en']).map(l => String(l).slice(0, 2).toLowerCase());
  const l = W[q] ? q : g.find(x => W[x]) || 'en';
  for (const a of document.querySelectorAll('footer.fuss [data-fuss]')) {
    a.textContent = W[l][['impressum', 'datenschutz', 'kontakt'].indexOf(a.dataset.fuss)] || a.textContent;
    if (a.dataset.fuss !== 'kontakt') a.href = a.dataset.fuss + '.html' + (W[q] ? '?lang=' + q : '');
  }
})();
