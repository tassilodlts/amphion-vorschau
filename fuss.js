// Kopf und Fuß aller Seiten außer der Startseite (5.11.2026, Tassilo: Impressum wie bei Antiga; 9.11.2026: „Die Ästhetik muss auf der ganzen Seite
// gleichmäßig und immer gleich sein“): Markup aus tools/kopf_fuss.mjs, hier nur die Beschriftung in der Sprache der Startseite (?lang=, sonst das Gerät,
// sonst Englisch) und die Sprachwahl. Die Startseite beschriftet Kopf und Fuß selbst (app.js, dieselben Schlüssel). Kontakt bleibt unübersetzt.
(() => {
  const K = ['impressum', 'datenschutz', 'agb', 'widerruf', 'lizenz'];
  const W = {
    de: ['Impressum', 'Datenschutz', 'AGB', 'Widerruf', 'Lizenz'], en: ['Legal notice', 'Privacy', 'Terms', 'Withdrawal', 'Licence'],
    es: ['Aviso legal', 'Privacidad', 'Condiciones', 'Desistimiento', 'Licencia'], fr: ['Mentions légales', 'Confidentialité', 'CGV', 'Rétractation', 'Licence'],
    it: ['Note legali', 'Privacy', 'Condizioni', 'Recesso', 'Licenza'], pt: ['Aviso legal', 'Privacidade', 'Termos', 'Livre resolução', 'Licença'],
  };
  // Kopf und Plugins-Gruppe im Fuß, Reihenfolge wie N
  const N = ['nav.plugins', 'nav.projekte', 'nav.funktionen', 'nav.faq', 'nav.konto', 'held.laden', 'fuss.plugins', 'fuss.guides', 'fuss.marken'];   // 9.11.: Markenhinweis
  const T = {
    de: ['Plugins', 'Projekte', 'Funktionen', 'Fragen', 'Mein Konto', 'Kostenlos laden', 'Plugins', 'Guides', 'Rhino und Rhinoceros sind Marken von Robert McNeel & Associates, Revit von Autodesk, Archicad von Graphisoft, Blender von der Blender Foundation. Amphion ist ein eigenständiges Produkt und mit diesen Unternehmen nicht verbunden.'],
    en: ['Plugins', 'Projects', 'Features', 'FAQ', 'My account', 'Download free', 'Plugins', 'Guides', 'Rhino and Rhinoceros are trademarks of Robert McNeel & Associates, Revit of Autodesk, Archicad of Graphisoft, Blender of the Blender Foundation. Amphion is an independent product and not affiliated with these companies.'],
    es: ['Plugins', 'Proyectos', 'Funciones', 'Preguntas', 'Mi cuenta', 'Descargar gratis', 'Plugins', 'Guías', 'Rhino y Rhinoceros son marcas de Robert McNeel & Associates, Revit de Autodesk, Archicad de Graphisoft y Blender de la Blender Foundation. Amphion es un producto independiente y no está vinculado a estas empresas.'],
    fr: ['Plugins', 'Projets', 'Fonctions', 'Questions', 'Mon compte', 'Télécharger gratuitement', 'Plugins', 'Guides', 'Rhino et Rhinoceros sont des marques de Robert McNeel & Associates, Revit d’Autodesk, Archicad de Graphisoft, Blender de la Blender Foundation. Amphion est un produit indépendant, sans lien avec ces sociétés.'],
    it: ['Plugin', 'Progetti', 'Funzioni', 'Domande', 'Il mio account', 'Scarica gratis', 'Plugin', 'Guide', 'Rhino e Rhinoceros sono marchi di Robert McNeel & Associates, Revit di Autodesk, Archicad di Graphisoft, Blender della Blender Foundation. Amphion è un prodotto indipendente e non è collegato a queste aziende.'],
    pt: ['Plugins', 'Projetos', 'Funções', 'Perguntas', 'A minha conta', 'Descarregar grátis', 'Plugins', 'Guias', 'Rhino e Rhinoceros são marcas da Robert McNeel & Associates, Revit da Autodesk, Archicad da Graphisoft e Blender da Blender Foundation. O Amphion é um produto independente e não está ligado a estas empresas.'],
  };
  const q = new URLSearchParams(location.search).get('lang'), g = (navigator.languages || [navigator.language || 'en']).map(l => String(l).slice(0, 2).toLowerCase());
  let w = null; try { w = sessionStorage.getItem('forma.lang'); } catch { /* ohne Speicher */ }   // Wahl auf der Startseite gilt für den Besuch (app.js)
  const l = W[q] ? q : W[w] ? w : g.find(x => W[x]) || 'en', mit = W[q] ? '?lang=' + q : '';
  if (!W[q] && W[w]) { const da = [...document.querySelectorAll('[data-sprache]')]; if (da.some(s => s.dataset.sprache === w)) { document.documentElement.lang = w; for (const s of da) s.classList.toggle('on', s.dataset.sprache === w); } }
  for (const a of document.querySelectorAll('footer.fuss [data-fuss]')) {
    const i = K.indexOf(a.dataset.fuss); if (i < 0) continue;
    a.textContent = W[l][i]; a.href = a.getAttribute('href').split('?')[0] + mit;   // relativer Weg bleibt (Seiten in Unterordnern)
  }
  for (const el of document.querySelectorAll('header.kopf [data-i18n], footer.fuss [data-i18n]')) { const i = N.indexOf(el.dataset.i18n); if (i >= 0) el.textContent = T[l][i]; }
  // Links zur Startseite und zum Konto behalten die gewählte Sprache
  if (mit) for (const a of document.querySelectorAll('header.kopf a[href]')) { const h = a.getAttribute('href'), [weg, anker = ''] = h.split('#'); if (!/^[a-z]+:/.test(h)) a.setAttribute('href', weg.split('?')[0] + mit + (anker ? '#' + anker : '')); }
  const wahl = document.querySelector('header.kopf .sprachwahl');
  if (wahl) { wahl.value = l; wahl.onchange = () => { try { sessionStorage.setItem('forma.lang', wahl.value); } catch { /* ohne Speicher */ } const u = new URL(location.href); u.searchParams.set('lang', wahl.value); location.href = u.href; }; }
  for (const j of document.querySelectorAll('footer.fuss [data-jahr]')) j.textContent = new Date().getFullYear();
})();
