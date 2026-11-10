// Kopf und Fuß aller Seiten außer der Startseite (5.11.2026, Tassilo: Impressum wie bei Antiga; 9.11.2026: „Die Ästhetik muss auf der ganzen Seite
// gleichmäßig und immer gleich sein“): Markup aus tools/kopf_fuss.mjs, hier nur die Beschriftung in der Sprache der Startseite (?lang=, sonst das Gerät,
// sonst Englisch) und die Sprachwahl. Die Startseite beschriftet Kopf und Fuß selbst (app.js, dieselben Schlüssel). Kontakt bleibt unübersetzt.
(() => {
  const K = ['impressum', 'datenschutz', 'agb', 'widerruf', 'lizenz'];   // 10.11. spät (Tassilo: Rendering-Plugins und Anleitungen raus): ohne Anleitungen
  const W = {
    de: ['Impressum', 'Datenschutz', 'AGB', 'Widerruf', 'Lizenz', 'Anleitungen'], en: ['Legal notice', 'Privacy', 'Terms', 'Withdrawal', 'Licence', 'Guides'],
    es: ['Aviso legal', 'Privacidad', 'Condiciones', 'Desistimiento', 'Licencia', 'Guías'], fr: ['Mentions légales', 'Confidentialité', 'CGV', 'Rétractation', 'Licence', 'Guides'],
    it: ['Note legali', 'Privacy', 'Condizioni', 'Recesso', 'Licenza', 'Guide'], pt: ['Aviso legal', 'Privacidade', 'Termos', 'Livre resolução', 'Licença', 'Guias'],
  };
  // Kopf und Plugins-Gruppe im Fuß, Reihenfolge wie N
  // 10.11.2026 (Fokus): ohne Plugins, mit Preise; Reihenfolge wie N
  const N = ['nav.projekte', 'nav.funktionen', 'nav.preis', 'nav.faq', 'nav.konto', 'held.laden', 'fuss.marken'];
  const T = {
    de: ['Projekte', 'Funktionen', 'Preise', 'Fragen', 'Mein Konto', 'Kostenlos laden', 'Mac und macOS sind Marken von Apple Inc., Windows von Microsoft, Blender von der Blender Foundation. Amphion ist mit diesen Unternehmen nicht verbunden.'],
    en: ['Projects', 'Features', 'Pricing', 'FAQ', 'My account', 'Download free', 'Mac and macOS are trademarks of Apple Inc., Windows of Microsoft, Blender of the Blender Foundation. Amphion is not affiliated with these companies.'],
    es: ['Proyectos', 'Funciones', 'Precios', 'Preguntas', 'Mi cuenta', 'Descargar gratis', 'Mac y macOS son marcas de Apple Inc., Windows de Microsoft y Blender de la Blender Foundation. Amphion no está vinculado a estas empresas.'],
    fr: ['Projets', 'Fonctions', 'Tarifs', 'Questions', 'Mon compte', 'Télécharger gratuitement', 'Mac et macOS sont des marques d’Apple Inc., Windows de Microsoft, Blender de la Blender Foundation. Amphion n’est pas lié à ces sociétés.'],
    it: ['Progetti', 'Funzioni', 'Prezzi', 'Domande', 'Il mio account', 'Scarica gratis', 'Mac e macOS sono marchi di Apple Inc., Windows di Microsoft, Blender della Blender Foundation. Amphion non è collegato a queste aziende.'],
    pt: ['Projetos', 'Funções', 'Preços', 'Perguntas', 'A minha conta', 'Descarregar grátis', 'Mac e macOS são marcas da Apple Inc., Windows da Microsoft e Blender da Blender Foundation. O Amphion não está ligado a estas empresas.'],
  };
  const q = new URLSearchParams(location.search).get('lang'), g = (navigator.languages || [navigator.language || 'en']).map(l => String(l).slice(0, 2).toLowerCase());
  let w = null; try { w = sessionStorage.getItem('amphion.lang'); } catch { /* ohne Speicher */ }   // Wahl auf der Startseite gilt für den Besuch (app.js)
  // 10.11.2026 (Zielseiten, tools/zielseiten.mjs): Seiten mit data-zielseite sind in ihrer Sprache geschrieben; Kopf und Fuß bleiben in dieser Sprache
  const html = document.documentElement, ziel = html.hasAttribute('data-zielseite') && W[html.lang] ? html.lang : null;
  const l = ziel || (W[q] ? q : W[w] ? w : g.find(x => W[x]) || 'en'), mit = !ziel && W[q] ? '?lang=' + q : '';
  if (!W[q] && W[w]) { const da = [...document.querySelectorAll('[data-sprache]')]; if (da.some(s => s.dataset.sprache === w)) { document.documentElement.lang = w; for (const s of da) s.classList.toggle('on', s.dataset.sprache === w); } }
  for (const a of document.querySelectorAll('footer.fuss [data-fuss]')) {
    const i = K.indexOf(a.dataset.fuss); if (i < 0) continue;
    a.textContent = W[l][i]; a.href = a.getAttribute('href').split('?')[0] + mit;   // relativer Weg bleibt (Seiten in Unterordnern)
  }
  for (const el of document.querySelectorAll('header.kopf [data-i18n], footer.fuss [data-i18n]')) { const i = N.indexOf(el.dataset.i18n); if (i >= 0) el.textContent = T[l][i]; }
  // Links zur Startseite und zum Konto behalten die gewählte Sprache
  if (mit) for (const a of document.querySelectorAll('header.kopf a[href]')) { const h = a.getAttribute('href'), [weg, anker = ''] = h.split('#'); if (!/^[a-z]+:/.test(h)) a.setAttribute('href', weg.split('?')[0] + mit + (anker ? '#' + anker : '')); }
  const wahl = document.querySelector('header.kopf .sprachwahl');
  if (wahl && ziel) { wahl.value = l; wahl.onchange = () => { try { sessionStorage.setItem('amphion.lang', wahl.value); } catch { /* ohne Speicher */ }
    // 10.11.2026: Englisch liegt unter /, die anderen unter /<lang>/; ohne Zielseite dieser Sprache gilt der Sprachlink im Fuß
    const alt = document.querySelector(`link[rel="alternate"][hreflang="${wahl.value}"]`), fl = document.querySelector(`footer.fuss .fuss-sprachen a[hreflang="${wahl.value}"]`);
    location.href = alt ? alt.href : fl ? fl.href : new URL('?lang=' + wahl.value, location.href).href; }; }
  else if (wahl) { wahl.value = l; wahl.onchange = () => { try { sessionStorage.setItem('amphion.lang', wahl.value); } catch { /* ohne Speicher */ } const u = new URL(location.href); u.searchParams.set('lang', wahl.value); location.href = u.href; }; }
  for (const j of document.querySelectorAll('footer.fuss [data-jahr]')) j.textContent = new Date().getFullYear();
})();
