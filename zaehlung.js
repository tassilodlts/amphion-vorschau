// Besucherstatistik aller Seiten (9.11.2026, vorher nur in app.js und damit nur auf der Startseite): eingebunden im gemeinsamen Fuß
// (tools/kopf_fuss.mjs, <script defer>), läuft nach app.js und fuss.js, damit die Sprache der Seite schon gesetzt ist. Einmal je Seite.
(() => {
  if (window.formaZaehl) return;
  // Besucherstatistik (2.11., Tassilo: Analytics an): ein Aufruf je Seite und je Ereignis an die Amphion Cloud, ohne Cookie, ohne Kennung; der Worker speichert
  // nur Tag, Seite, Sprache, Land, Gerät und den Host des Verweises. window.formaZaehl('laden') zählt ein Ereignis (auch aus betrachter.js).
  const STATISTIK = 'https://cloud.amphion3d.com/besuch', ZAEHL_LOKAL = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  window.formaZaehl = art => { if (ZAEHL_LOKAL) return; try { const q = (document.referrer && new URL(document.referrer).host !== location.host) ? new URL(document.referrer).host : '';
    const d = JSON.stringify({ art, seite: location.pathname, sprache: document.documentElement.lang, quelle: q });
    if (!(navigator.sendBeacon && navigator.sendBeacon(STATISTIK, new Blob([d], { type: 'text/plain' })))) fetch(STATISTIK, { method: 'POST', body: d, keepalive: true }).catch(() => {}); } catch {} };
  window.formaZaehl('seite');
  // Ereignisse für den Trichter (9.11.2026, Tassilo: sehen, wie viele kommen, klicken, scrollen, kaufen und wo sie abspringen), alle über delegierte
  // Listener, damit die Seiten selbst nichts brauchen: Download je Datei (download:<Datei> für .zip/.rhp/.yak/.dmg/.exe/.msi), Kaufen (kaufen:<Plan>,
  // kaufen-link für Links zu Stripe, zu den Preisen oder mit data-kaufen/data-abo), Scrolltiefe 25/50/75/100 je Aufruf einmal, Ausstieg beim
  // Verlassen (ausstieg:<tiefste Marke>), nicht beim Wechsel auf eine eigene Seite und nicht nach einem Download. Nichts wird im Browser gespeichert.
  // Auswertung: node tools/statistik.mjs oder cloud.amphion3d.com/statistik (Trichter, cloud/statistik.mjs)
  const ZAEHL_DATEI = /\.(zip|rhp|yak|dmg|exe|msi)(?:[?#]|$)/i;
  let zaehlTiefe = 0, zaehlWeiter = 0;
  const zaehlScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight, t = h <= 0 ? 100 : Math.min(100, 100 * scrollY / h);
    for (const m of [25, 50, 75, 100]) if (t >= m - 1 && zaehlTiefe < m) { zaehlTiefe = m; window.formaZaehl('scroll:' + m); }
  };
  let zaehlRahmen = 0;
  addEventListener('scroll', () => { if (!zaehlRahmen) zaehlRahmen = requestAnimationFrame(() => { zaehlRahmen = 0; zaehlScroll(); }); }, { passive: true });
  document.addEventListener('click', e => {
    const a = e.target.closest?.('a[href],[data-checkout],[data-download],[data-kaufen],[data-abo]'); if (!a) return;
    const href = a.getAttribute('href') || '', ziel = (() => { try { return new URL(href, location.href); } catch { return null; } })();
    if (a.dataset.checkout) window.formaZaehl('kaufen:' + a.dataset.checkout);
    else if (ziel && ZAEHL_DATEI.test(ziel.pathname)) window.formaZaehl('download:' + decodeURIComponent(ziel.pathname.split('/').pop()).slice(0, 30));
    else if (a.dataset.download) window.formaZaehl('laden');
    else if (a.dataset.kaufen !== undefined || a.dataset.abo !== undefined || /(?:checkout|buy)\.stripe\.com/.test(href) || /#preis$/.test(href)) window.formaZaehl('kaufen-link');
    // eigene Seite, Download oder neuer Tab: kein Ausstieg, wenn die Seite gleich danach verschwindet
    if (ziel && (ziel.host === location.host || ZAEHL_DATEI.test(ziel.pathname))) zaehlWeiter = Date.now();
  });
  addEventListener('pagehide', () => { zaehlScroll(); if (Date.now() - zaehlWeiter > 3000) window.formaZaehl('ausstieg:' + zaehlTiefe); });   // kurze Seiten: ganz gesehen
})();
