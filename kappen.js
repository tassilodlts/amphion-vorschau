// Schnittflächen aus der Geometrie (4.11.2026 spät, Tassilo: „die Wände sind immer noch nicht voll, Volumen immer voll darstellen,
// das gilt für alle Volumen“). Befund: die Stencil-Kappen im Betrachter brauchen geschlossene, als „solid“ markierte Körper; das
// Villenmodell hat keine, Nachbarn und Anbau sind offene Hüllen (ohne Boden), im Schnitt sah man hinein.
// Hier: jedes Dreieck mit der Ebene schneiden, die Strecken zu Zügen verketten, offene Züge schließen (eine Hülle ohne Boden ergibt im
// Längsschnitt ein U, die Lücke liegt am Boden), Löcher über die Schachtelung (gerade Tiefe = Fläche, ungerade = Loch), dann triangulieren.
// Ohne three.js, damit test/kappen.test.mjs es in Node prüfen kann; triangulieren(kontur, löcher) mit Punkten [x, y] kommt von außen (THREE.ShapeUtils).

// Ebene: n·p + c = 0, sichtbar bleibt n·p + c >= 0 (wie im Betrachter). pos: Weltkoordinaten (x, y, z je Punkt), index: Dreiecke oder null
export function schnittKappen(pos, index, n, c, triangulieren, versatz = 0.003, toleranz = 0.02, loecher = true) {
  const { ringe: aussen, zuege, u, v } = /** @type {{ ringe: any[], zuege: number, u: number[], v: number[] }} */ (schnittRinge(pos, index, n, c, toleranz, loecher));
  const flaecheVon = z => {
    let a = 0;
    for (let i = 0; i < z.length; i++) {
      const p = z[i], q = z[(i + 1) % z.length];
      a += p[0] * q[1] - q[0] * p[1];
    }
    return a / 2;
  };
  const out = []; let flaeche = 0;
  const welt = p => [0, 1, 2].map(k => p[0] * u[k] + p[1] * v[k] + n[k] * (versatz - c));   // auf der Ebene, ein wenig zur sichtbaren Seite
  for (const r of aussen) {
    let tris;
    try {
      tris = triangulieren(r.z, r.loecher);
    } catch {
      continue;
    }
    const alle = [...r.z, ...r.loecher.flat()];
    for (const t of tris) for (const k of t) out.push(...welt(alle[k]));
    flaeche += r.a - r.loecher.reduce((s, l) => s + Math.abs(flaecheVon(l)), 0);
  }
  return { pos: new Float32Array(out), flaeche, zuege };
}
// Ringe in Ebenenkoordinaten (u, v): [{ z: [[x, y] …], a, loecher: [[[x, y] …] …] }], für Pläne (plan/plan.mjs) ohne Triangulierung
export function schnittRinge(pos, index, n, c, toleranz = 0.02, loecher = true) {
  const [nx, ny, nz] = n;
  // Grundriss der Ebene: u, v senkrecht zu n
  const hilf = Math.abs(ny) < 0.9 ? [0, 1, 0] : [1, 0, 0];
  let u = [hilf[1] * nz - hilf[2] * ny, hilf[2] * nx - hilf[0] * nz, hilf[0] * ny - hilf[1] * nx];
  const lu = Math.hypot(...u);
  u = u.map(x => x / lu);
  const v = [ny * u[2] - nz * u[1], nz * u[0] - nx * u[2], nx * u[1] - ny * u[0]];
  const anzahl = index ? index.length : pos.length / 3, d = i => nx * pos[3 * i] + ny * pos[3 * i + 1] + nz * pos[3 * i + 2] + c;
  // Punkt auf der Kante a-b, immer vom kleineren Index aus gerechnet: Nachbardreiecke liefern denselben Punkt
  const kante = (a, b, da, db) => {
    if (a > b) [a, b, da, db] = [b, a, db, da];
    const t = da / (da - db);
    const p = [0, 1, 2].map(k => pos[3 * a + k] + t * (pos[3 * b + k] - pos[3 * a + k]));
    return [p[0] * u[0] + p[1] * u[1] + p[2] * u[2], p[0] * v[0] + p[1] * v[1] + p[2] * v[2]];
  };
  const strecken = [], deckelTris = [], proj = i => [pos[3 * i] * u[0] + pos[3 * i + 1] * u[1] + pos[3 * i + 2] * u[2], pos[3 * i] * v[0] + pos[3 * i + 1] * v[1] + pos[3 * i + 2] * v[2]];
  // Flächen über dem Schnitt, die zur Schnittebene parallel liegen (Dach, Decke): sie zeigen, ob eine umschlossene Gruppe ein Bau ist
  const deckel = ix => {
    const a = ix.map(i => [pos[3 * i], pos[3 * i + 1], pos[3 * i + 2]]), e1 = [0, 1, 2].map(k => a[1][k] - a[0][k]), e2 = [0, 1, 2].map(k => a[2][k] - a[0][k]);
    const nn = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]], l = Math.hypot(...nn);
    if (!l) return;
    if (Math.abs((nn[0] * nx + nn[1] * ny + nn[2] * nz) / l) < 0.7) return;
    const p = ix.map(proj);
    deckelTris.push({ m: [(p[0][0] + p[1][0] + p[2][0]) / 3, (p[0][1] + p[1][1] + p[2][1]) / 3],
        a: Math.abs((p[1][0] - p[0][0]) * (p[2][1] - p[0][1]) - (p[2][0] - p[0][0]) * (p[1][1] - p[0][1])) / 2 });
  };
  for (let t = 0; t < anzahl; t += 3) {
    const ix = index ? [index[t], index[t + 1], index[t + 2]] : [t, t + 1, t + 2], ds = ix.map(d), oben = ds.map(x => x >= 0);
    if (!loecher && !oben[0] && !oben[1] && !oben[2]) deckel(ix);   // weggeschnittener Teil: Dach oder Decke über dem Schnitt?
    if (oben[0] === oben[1] && oben[1] === oben[2]) continue;
    const p = [];
    for (const [i, j] of [[0, 1], [1, 2], [2, 0]]) if (oben[i] !== oben[j]) p.push(kante(ix[i], ix[j], ds[i], ds[j]));
    if (p.length === 2 && Math.hypot(p[0][0] - p[1][0], p[0][1] - p[1][1]) > 1e-6) strecken.push(p);
  }
  return { ...ringeAusStrecken(strecken, toleranz, loecher, deckelTris), u, v };
}
// Ringe aus fertigen Strecken [[x, y], [x, y]] (plan/plan.mjs: offene Schnittreste aller Objekte eines Stils, 4.11. spät)
export function ringeAusStrecken(strecken, toleranz = 0.02, loecher = true, deckelTris = []) {
  // Verketten mit Toleranz (Draco rundet die Punkte auf einige Millimeter, Ecken zweier Flächen treffen sich darum nicht genau): Raster
  // mit Zellen der Toleranz, gesucht wird in den 3 × 3 Nachbarzellen der nächste freie Endpunkt
  const T = toleranz, zelle = p => Math.floor(p[0] / T) + ',' + Math.floor(p[1] / T), raster = new Map();
  strecken.forEach((s, i) => { for (const e of [0, 1]) {
    const k = zelle(s[e]);
    if (!raster.has(k)) raster.set(k, []);
    raster.get(k).push(i * 2 + e);
  } });
  const kreuzt = (a, b, c, d) => {
    const o = (p, q, r) => Math.sign((q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]));
    return o(a, b, c) * o(a, b, d) < 0 && o(c, d, a) * o(c, d, b) < 0;
  };
  const frei = (a, b) => !strecken.some(([c, d]) => kreuzt(a, b, c, d));
  const offen = [], lose = [];
  const benutzt = new Uint8Array(strecken.length), zuege = [], nah = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]) <= T;
  const naechster = p => {
    const cx = Math.floor(p[0] / T), cy = Math.floor(p[1] / T); let best = -1, bd = T;
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (const se of raster.get((cx + dx) + ',' + (cy + dy)) || []) {
      if (benutzt[se >> 1]) continue;
      const q = strecken[se >> 1][se & 1], d = Math.hypot(p[0] - q[0], p[1] - q[1]);
      if (d <= bd) {
        bd = d;
        best = se;
      }
    }
    return best;
  };
  for (let i = 0; i < strecken.length; i++) {
    if (benutzt[i]) continue;
    benutzt[i] = 1;
    const zug = [strecken[i][0], strecken[i][1]];
    for (const ende of [1, 0]) {   // erst vorwärts, dann vom Anfang rückwärts
      while (!(zug.length > 2 && nah(zug[0], zug[zug.length - 1]))) {
        const se = naechster(ende ? zug[zug.length - 1] : zug[0]);
        if (se < 0) break;
        benutzt[se >> 1] = 1; const q = strecken[se >> 1][1 - (se & 1)];
        if (ende) zug.push(q); else zug.unshift(q);
      }
      if (zug.length > 2 && nah(zug[0], zug[zug.length - 1])) break;
    }
    if (zug.length > 3 && nah(zug[0], zug[zug.length - 1])) {
      zug.pop();
      zuege.push(zug);
    } else lose.push(zug);
  }
  // Brücken (4.11. spät, Befund Beispiel-Villa: Fenster und Türen ohne Laibung lassen jede Wand offen): die nächstgelegenen freien Enden
  // werden verbunden, bis 3 m und nur, wenn die Brücke nichts kreuzt; so entsteht die fehlende Laibung (Außen- und Innenfläche, Abstand =
  // Wanddicke). Was danach offen bleibt: Kontext schließt über bis 30 m (Hülle ohne Boden); Bauteile werden nicht blind geschlossen (das gab
  // Dreiecke quer durch Räume), sondern bekommen Wandbänder (unten).
  const enden = lose.flatMap((z, i) => [{ z: i, e: 0, p: z[0] }, { z: i, e: 1, p: z[z.length - 1] }]), paare = [];
  for (let a = 0; a < enden.length; a++) for (let b = a + 1; b < enden.length; b++) {
    const d = Math.hypot(enden[a].p[0] - enden[b].p[0], enden[a].p[1] - enden[b].p[1]);
    if (d <= 3 && !(enden[a].z === enden[b].z && lose[enden[a].z].length < 3)) paare.push([d, a, b]);
  }
  paare.sort((x, y) => x[0] - y[0]);
  const partner = new Int32Array(enden.length).fill(-1);
  for (const [, a, b] of paare) if (partner[a] < 0 && partner[b] < 0 && frei(enden[a].p, enden[b].p)) {
    partner[a] = b;
    partner[b] = a;
  }
  // Zusammensetzen: von einem Ende ohne Partner (Pfad) oder sonst irgendwo (Kreis) entlang Zug → Brücke → Zug
  const besucht = new Uint8Array(lose.length);
  const lauf = start => { const out = [];
      let ende = start, kreis = false;
    for (;;) { const z = enden[ende].z;
        if (besucht[z]) {
          kreis = true;
          break;
        }
        besucht[z] = 1;
        const pts = enden[ende].e === 0 ? lose[z] : [...lose[z]].reverse();
        out.push(...pts);
      const anderes = ende ^ 1;
        if (partner[anderes] < 0) break;
        ende = partner[anderes]; }
    return { out, kreis }; };
  for (let i = 0; i < enden.length; i++) if (partner[i] < 0 && !besucht[enden[i].z]) {
    const { out } = lauf(i);
    if (out.length >= 3 && !loecher && Math.hypot(out[0][0] - out[out.length - 1][0], out[0][1] - out[out.length - 1][1]) <= 30) zuege.push(out); else offen.push(out);
  }
  for (let i = 0; i < enden.length; i++) if (!besucht[enden[i].z]) {
    const { out } = lauf(i);
    if (out.length >= 3) zuege.push(out);
  }
  const flaecheVon = z => {
    let a = 0;
    for (let i = 0; i < z.length; i++) {
      const p = z[i], q = z[(i + 1) % z.length];
      a += p[0] * q[1] - q[0] * p[1];
    }
    return a / 2;
  };
  const innen = (p, z) => {
    let r = false;
    for (let i = 0, j = z.length - 1; i < z.length; j = i++) {
      const a = z[i], b = z[j];
      if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < (b[0] - a[0]) * (p[1] - a[1]) / (b[1] - a[1]) + a[0]) r = !r;
    }
    return r;
  };
  /** @type {any[]} */ const ringe = zuege.map(z => ({ z, a: Math.abs(flaecheVon(z)) })).filter(r => r.a > 1e-4).sort((a, b) => b.a - a.a);   // je Ring: z Punkte, a Fläche, tiefe, eltern, loecher
  // Schachtelung: Tiefe = Zahl der größeren Ringe, die einen Punkt des Rings enthalten; Loch gehört zum kleinsten umgebenden Ring gerader Tiefe
  for (let i = 0; i < ringe.length; i++) {
    const r = ringe[i], p = r.z[0];
    r.tiefe = 0;
    r.eltern = null;
    for (let j = i - 1; j >= 0; j--) if (innen(p, ringe[j].z)) {
      r.tiefe++;
      if (!r.eltern) r.eltern = ringe[j];
    }
  }
  // loecher = false (Nachbarn, Kontext): nur die äußersten Ringe, ganz gefüllt, das Volumen wirkt massiv. Bauten aus einzelnen Wandkörpern
  // (Garage aus vier Wänden): Ringe, die sich berühren, bilden eine Gruppe; umschließt die Gruppe ihre Mitte in allen vier Richtungen und
  // liegt über mindestens der Hälfte der Hülle ein Dach oder eine Decke, wird die konvexe Hülle gefüllt (ein Zaun um den Garten bleibt Zaun)
  let aussen = ringe.filter(r => loecher ? r.tiefe % 2 === 0 : r.tiefe === 0);
  if (!loecher) aussen = gruppenFuellen([...aussen, ...offen.map(z => ({ z, a: 0, tiefe: 0, offen: true }))], deckelTris, strecken).filter(r => !r.offen);   // offene Züge zählen für die Gruppe mit
  for (const r of aussen) r.loecher = [];
  if (loecher) for (const r of ringe) if (r.tiefe % 2 === 1 && r.eltern && r.eltern.tiefe % 2 === 0) r.eltern.loecher.push(r.z);
  // Wandbänder für offene Bauteilzüge (4.11. spät, Haus an der Brandwand, Wände an Öffnungen ohne Laibung): zu jeder offenen Strecke die
  // nächste gegenläufige parallele Strecke im Abstand 3 bis 80 cm (die andere Wandseite); das Viereck dazwischen über die gemeinsame Länge ist
  // Wand. Räume (breiter als 80 cm) bleiben frei.
  if (loecher && offen.length) for (const q of wandBaender(offen)) aussen.push({ z: q, a: Math.abs(flaecheVon(q)), loecher: [] });
  return { ringe: aussen, offen, zuege: zuege.length };
}

function huelle(pkte) {   // konvexe Hülle (monotone Kette)
  const p = [...pkte].sort((a, b) => a[0] - b[0] || a[1] - b[1]), kreuz = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const unten = [], oben = [];
  for (const q of p) {
    while (unten.length >= 2 && kreuz(unten[unten.length - 2], unten[unten.length - 1], q) <= 0) unten.pop();
    unten.push(q);
  }
  for (const q of p.reverse()) {
    while (oben.length >= 2 && kreuz(oben[oben.length - 2], oben[oben.length - 1], q) <= 0) oben.pop();
    oben.push(q);
  }
  return unten.slice(0, -1).concat(oben.slice(0, -1));
}
function gruppenFuellen(ringe, deckelTris, strecken, rand = 0.3) {
  const box = r => {
    let a = [Infinity, Infinity, -Infinity, -Infinity];
    for (const [x, y] of r.z) a = [Math.min(a[0], x), Math.min(a[1], y), Math.max(a[2], x), Math.max(a[3], y)];
    return a;
  };
  const B = ringe.map(box), eltern = ringe.map((_, i) => i), wurzel = i => eltern[i] === i ? i : (eltern[i] = wurzel(eltern[i]));
  for (let i = 0; i < ringe.length; i++) for (let j = i + 1; j < ringe.length; j++)
    if (B[i][0] - rand <= B[j][2] && B[j][0] - rand <= B[i][2] && B[i][1] - rand <= B[j][3] && B[j][1] - rand <= B[i][3]) eltern[wurzel(i)] = wurzel(j);
  const gruppen = new Map();
  ringe.forEach((r, i) => {
    const w = wurzel(i);
    if (!gruppen.has(w)) gruppen.set(w, []);
    gruppen.get(w).push(r);
  });
  const out = [];
  for (const g of gruppen.values()) {
    // alle Strecken im Bereich der Gruppe (an überlappenden Wandecken verketten sich Ringe falsch, die Strecken stimmen immer)
    const bb = g.map(r => B[ringe.indexOf(r)]).reduce((a, b) => [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])]);
    const drin = p => p[0] >= bb[0] - rand && p[0] <= bb[2] + rand && p[1] >= bb[1] - rand && p[1] <= bb[3] + rand;
    const st = strecken.filter(q => drin(q[0]) && drin(q[1]));
    const h = huelle([...g.flatMap(r => r.z), ...st.flat()]);
    let ah = 0;
    for (let i = 0; i < h.length; i++) {
      const p = h[i], q = h[(i + 1) % h.length];
      ah += p[0] * q[1] - q[0] * p[1];
    }
    ah = Math.abs(ah) / 2;
    const m = h.reduce((s, p) => [s[0] + p[0] / h.length, s[1] + p[1] / h.length], [0, 0]);
    // trifft ein Strahl von der Mitte in Richtung (dx, dy) eine Kante der Gruppe?
    const trifft = (dx, dy) => st.some(([a, b]) => {
      if (dx) {
        if ((a[1] > m[1]) === (b[1] > m[1])) return false;
        const x = a[0] + (m[1] - a[1]) * (b[0] - a[0]) / (b[1] - a[1]);
        return dx > 0 ? x > m[0] : x < m[0];
      }
      if ((a[0] > m[0]) === (b[0] > m[0])) return false;
        const y = a[1] + (m[0] - a[0]) * (b[1] - a[1]) / (b[0] - a[0]);
        return dy > 0 ? y > m[1] : y < m[1]; });
    if (g.length === 1 && g[0].a / ah > 0.6) {
      out.push(g[0]);
      continue;
    }
    if (!ah) {
      out.push(...g);
      continue;
    }   // ein gewöhnlicher Ring (auch L-förmig) bleibt, wie er ist
    const zu = trifft(1, 0) && trifft(-1, 0) && trifft(0, 1) && trifft(0, -1);
    const innenH = p => {
      let r = false;
      for (let i = 0, j = h.length - 1; i < h.length; j = i++) {
        const a = h[i], b = h[j];
        if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < (b[0] - a[0]) * (p[1] - a[1]) / (b[1] - a[1]) + a[0]) r = !r;
      }
      return r;
    };
    const gedeckt = zu ? deckelTris.reduce((s, t) => s + (innenH(t.m) ? t.a : 0), 0) / ah : 0;
    if (zu && gedeckt >= 0.5) out.push({ z: h, a: ah, tiefe: 0 }); else out.push(...g);
  }
  return out;
}

export function wandBaender(zuege, min = 0.03, max = 0.8) {
  const st = [];
  for (const z of zuege) for (let i = 0; i + 1 < z.length; i++) {
    const a = z[i], b = z[i + 1], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (L > 0.01) st.push({ a, b, L, d: [(b[0] - a[0]) / L, (b[1] - a[1]) / L] });
  }
  const Z = 1, raster = new Map(), zelle = (x, y) => Math.floor(x / Z) + ',' + Math.floor(y / Z);
  st.forEach((s, i) => { const x0 = Math.min(s.a[0], s.b[0]) - max, x1 = Math.max(s.a[0], s.b[0]) + max, y0 = Math.min(s.a[1], s.b[1]) - max, y1 = Math.max(s.a[1], s.b[1]) + max;
    for (let x = Math.floor(x0 / Z); x <= Math.floor(x1 / Z); x++) for (let y = Math.floor(y0 / Z); y <= Math.floor(y1 / Z); y++) {
      const k = x + ',' + y;
      if (!raster.has(k)) raster.set(k, new Set());
      raster.get(k).add(i);
    } });
  const out = [];
  st.forEach((s, i) => {
    const kand = new Set();
    for (const p of [s.a, s.b, [(s.a[0] + s.b[0]) / 2, (s.a[1] + s.b[1]) / 2]]) for (const j of raster.get(zelle(p[0], p[1])) || []) kand.add(j);
    let best = null;
    for (const j of kand) {
      if (j === i) continue;
      const t = st[j], cos = s.d[0] * t.d[0] + s.d[1] * t.d[1];
      if (cos > -0.996) continue;   // gegenläufig, fast parallel (unter 5°)
      const n = [-s.d[1], s.d[0]], ab = (p) => (p[0] - s.a[0]) * n[0] + (p[1] - s.a[1]) * n[1], da = ab(t.a), db = ab(t.b), dm = (da + db) / 2;
      if (Math.abs(dm) < min || Math.abs(dm) > max || Math.sign(da) !== Math.sign(db)) continue;
      const lang = p => (p[0] - s.a[0]) * s.d[0] + (p[1] - s.a[1]) * s.d[1], ta = lang(t.a), tb = lang(t.b), t0 = Math.max(0, Math.min(ta, tb)), t1 = Math.min(s.L, Math.max(ta, tb));
      if (t1 - t0 < 0.02) continue;
      if (!best || Math.abs(dm) < Math.abs(best.dm)) best = { dm, t0, t1, ta, tb, t };
    }
    if (!best) return;
    const { t0, t1, ta, tb, t } = best, auf = (tt) => {
      const f = (tt - ta) / (tb - ta);
      return [t.a[0] + (t.b[0] - t.a[0]) * f, t.a[1] + (t.b[1] - t.a[1]) * f];
    };
    out.push([[s.a[0] + s.d[0] * t0, s.a[1] + s.d[1] * t0], [s.a[0] + s.d[0] * t1, s.a[1] + s.d[1] * t1], auf(t1), auf(t0)]);
  });
  return out;
}
