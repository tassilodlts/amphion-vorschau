// Fußzeile der Nebenseiten (5.11.2026, Tassilo: Impressum wie bei Antiga): Konto, Danke, Datenschutz und Impressum zeigen dieselben Links wie die Startseite
// Sprache wie dort: ?lang=, sonst das Gerät, sonst Englisch. Die Startseite beschriftet ihre Fußzeile selbst (app.js, fuss.*).
// 7.11.: AGB, Widerruf und Manifest dazu; Kontakt sind WhatsApp und E-Mail mit sichtbarer Nummer und Adresse (bleiben unübersetzt)
(() => {
  const K = ['impressum', 'datenschutz', 'agb', 'widerruf', 'lizenz', 'manifest'];
  const W = {
    de: ['Impressum', 'Datenschutz', 'AGB', 'Widerruf', 'Lizenz', 'Manifest'], en: ['Legal notice', 'Privacy', 'Terms', 'Withdrawal', 'Licence', 'Manifesto'],
    es: ['Aviso legal', 'Privacidad', 'Condiciones', 'Desistimiento', 'Licencia', 'Manifiesto'], fr: ['Mentions légales', 'Confidentialité', 'CGV', 'Rétractation', 'Licence', 'Manifeste'],
    it: ['Note legali', 'Privacy', 'Condizioni', 'Recesso', 'Licenza', 'Manifesto'], pt: ['Aviso legal', 'Privacidade', 'Termos', 'Livre resolução', 'Licença', 'Manifesto'],
  };
  const q = new URLSearchParams(location.search).get('lang'), g = (navigator.languages || [navigator.language || 'en']).map(l => String(l).slice(0, 2).toLowerCase());
  const l = W[q] ? q : g.find(x => W[x]) || 'en';
  for (const a of document.querySelectorAll('footer.fuss [data-fuss]')) {
    const i = K.indexOf(a.dataset.fuss); if (i < 0) continue;
    a.textContent = W[l][i]; a.href = a.dataset.fuss + '.html' + (W[q] ? '?lang=' + q : '');
  }
})();
