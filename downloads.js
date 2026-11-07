// Version am Download (7.11.2026, Tassilo: „die Version soll unter dem Download-Knopf und im Namen der heruntergeladenen Datei stehen“): aus dem
// letzten stabilen Release (GitHub-API, CORS erlaubt) die Dateien mit Version im Namen (tools/release_dateien.mjs) je Knopf. Ohne passende
// Datei fehlt der Eintrag und der Knopf behält den festen Link ohne Angabe. site/app.js wendet es an. Prüfregel test/site_download_version.test.mjs
const DOWNLOAD_NAMEN = { arm: 'Mac-Apple-Silicon.dmg', x64: 'Mac-Intel.dmg', win: 'Windows.exe' };
function downloadsAusRelease(rel) {
  const aus = {};
  for (const a of (rel && rel.assets) || []) for (const [k, n] of Object.entries(DOWNLOAD_NAMEN)) {
    const m = new RegExp('^Amphion-(\\d+\\.\\d+\\.\\d+)-' + n.replaceAll('.', '\\.') + '$').exec(a.name);
    if (m && /^https:\/\/github\.com\/tassilodlts\/forma-app\/releases\/download\//.test(a.browser_download_url)) aus[k] = { version: m[1], url: a.browser_download_url };
  }
  return aus;
}
globalThis.downloadsAusRelease = downloadsAusRelease;   // auch für den Test (import) ohne Modul-Export
