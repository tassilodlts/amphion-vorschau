// Amphion Tools (8.11.2026): Seite der kleinen KI-Werkzeuge. Spricht mit der Cloud (/v1/tools/*, cloud/tools.mjs), hält den Werkzeug-Schlüssel
// (at_…) und eine Browser-Kennung im localStorage, verkleinert Bilder vor dem Hochladen auf höchstens 2048 px und zeigt das Ergebnis im Vorher-nachher-Regler.
(() => {
  const CLOUD = new URLSearchParams(location.search).get('cloud') || 'https://cloud.amphion3d.com';
  const $ = s => document.querySelector(s), el = (t, a = {}, ...k) => { const e = document.createElement(t); Object.assign(e, a); e.append(...k); return e; };
  const lsGet = k => { try { return localStorage.getItem(k); } catch { return null; } }, lsSet = (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch { /* privat */ } };
  let geraet = lsGet('tools.geraet'); if (!geraet) { geraet = 'g' + Math.random().toString(36).slice(2) + Date.now().toString(36); lsSet('tools.geraet', geraet); }
  const SPR = ['es', 'de', 'en', 'it'], q = new URLSearchParams(location.search).get('lang');
  const L = SPR.includes(q) ? q : (navigator.languages || ['es']).map(x => String(x).slice(0, 2)).find(x => SPR.includes(x)) || 'en';
  document.documentElement.lang = L;

  const T = {
    es: { titel: 'Herramientas de IA para arquitectura', sub: 'De modelo a foto, boceto a render, virtual staging y más. Sin instalar nada. 3 imágenes gratis, después desde 0,25 €.',
      gratis: n => `<b>${n}</b> imágenes gratis`, saldo: c => `Crédito: <b>${eur(c)}</b>`, comprar: 'Comprar crédito', clave: 'Tengo una clave', sinIva: 'Precios sin IVA.',
      subir: 'Arrastra una imagen aquí, pégala o haz clic', estandar: 'Estándar', alta: 'Alta calidad', generar: 'Generar', generando: 'Generando, unos 20 a 60 segundos…',
      descargar: 'Descargar', otra: 'Otra versión', antes: 'antes', despues: 'después', estilo: 'Estilo', estancia: 'Estancia', luz: 'Luz y momento', que: 'Qué añadir', color: 'Color de fachada (opcional)',
      texto: 'Describe la imagen', textura: 'Material', ninguno: 'Libre', cta: '¿Quieres el modelo completo con planos, secciones y renders? <a href="../">Prueba Amphion 60 días gratis</a>.',
      pronto: 'Muy pronto disponible.', pago: 'Pago seguro con Stripe. El crédito no caduca.', guardaClave: 'Guarda tu clave para usar el crédito en otro dispositivo:',
      introClave: 'Introduce tu clave (at_…)', ok: 'Aceptar', cerrar: 'Cerrar', pagado: '¡Gracias! Tu crédito estará listo en unos segundos.', mosaico: 'Vista en mosaico para comprobar que repite sin cortes',
      e: { imagen: 'Sube primero una imagen.', texto: 'Escribe una descripción.', gratis: 'Has usado tus imágenes gratis. Compra crédito para seguir.', pagar: 'La alta calidad necesita crédito.',
        saldo: 'No tienes crédito suficiente.', pausa: 'El servicio está muy ocupado. Inténtalo en unos minutos; no se te ha cobrado.', rechazo: 'No se pudo generar esta imagen. Prueba con otra imagen u otra descripción; no se te ha cobrado.',
        grande: 'La imagen es demasiado grande.', pronto: 'La compra estará disponible muy pronto.', red: 'Sin conexión con el servicio.' },
      faq: [['¿Cómo funciona el crédito?', 'Compras crédito una vez, sin suscripción. Cada imagen descuenta su precio: 0,25 € estándar o 0,90 € alta calidad. Si algo falla, no se cobra.'],
        ['¿Qué pasa con mis imágenes?', 'Se procesan para generar el resultado y no se usan para entrenar modelos. No guardamos las imágenes en nuestros servidores.'],
        ['¿Y si quiero más que una imagen?', 'Amphion es el programa completo: de una frase, un boceto o un plano existente a un modelo 3D con muros, ventanas, planos y renders en tu ordenador.']] },
    de: { titel: 'KI-Werkzeuge für Architektur', sub: 'Vom Modell zum Foto, von der Skizze zum Rendering, Virtual Staging und mehr. Ohne Installation. 3 Bilder gratis, danach ab 0,25 €.',
      gratis: n => `<b>${n}</b> Bilder gratis`, saldo: c => `Guthaben: <b>${eur(c)}</b>`, comprar: 'Guthaben kaufen', clave: 'Ich habe einen Schlüssel', sinIva: 'Preise zzgl. MwSt.',
      subir: 'Bild hierher ziehen, einfügen oder klicken', estandar: 'Standard', alta: 'Hohe Qualität', generar: 'Erzeugen', generando: 'Wird erzeugt, etwa 20 bis 60 Sekunden …',
      descargar: 'Herunterladen', otra: 'Neue Variante', antes: 'vorher', despues: 'nachher', estilo: 'Stil', estancia: 'Raum', luz: 'Licht und Zeit', que: 'Was dazu', color: 'Fassadenfarbe (optional)',
      texto: 'Beschreibe das Bild', textura: 'Material', ninguno: 'Frei', cta: 'Das ganze Modell mit Plänen, Schnitten und Renderings? <a href="../">Amphion 60 Tage gratis testen</a>.',
      pronto: 'Bald verfügbar.', pago: 'Sichere Zahlung mit Stripe. Das Guthaben verfällt nicht.', guardaClave: 'Bewahre deinen Schlüssel auf, um das Guthaben auf einem anderen Gerät zu nutzen:',
      introClave: 'Schlüssel eingeben (at_…)', ok: 'OK', cerrar: 'Schließen', pagado: 'Danke! Dein Guthaben ist in wenigen Sekunden da.', mosaico: 'Kachelansicht: prüfen, ob die Textur nahtlos ist',
      e: { imagen: 'Bitte zuerst ein Bild hochladen.', texto: 'Bitte eine Beschreibung eingeben.', gratis: 'Die Gratisbilder sind verbraucht. Kaufe Guthaben, um weiterzumachen.', pagar: 'Hohe Qualität braucht Guthaben.',
        saldo: 'Das Guthaben reicht nicht.', pausa: 'Der Dienst ist gerade ausgelastet. Bitte in ein paar Minuten noch einmal; nichts wurde berechnet.', rechazo: 'Dieses Bild ließ sich nicht erzeugen. Anderes Bild oder andere Beschreibung versuchen; nichts wurde berechnet.',
        grande: 'Das Bild ist zu groß.', pronto: 'Der Kauf ist sehr bald möglich.', red: 'Keine Verbindung zum Dienst.' },
      faq: [['Wie funktioniert das Guthaben?', 'Du kaufst einmal Guthaben, ohne Abo. Jedes Bild zieht seinen Preis ab: 0,25 € Standard oder 0,90 € hohe Qualität. Geht etwas schief, wird nichts berechnet.'],
        ['Was passiert mit meinen Bildern?', 'Sie werden nur für das Ergebnis verarbeitet und nie zum Training von Modellen benutzt. Wir speichern die Bilder nicht auf unseren Servern.'],
        ['Und wenn ich mehr als ein Bild will?', 'Amphion ist das ganze Programm: aus einem Satz, einer Skizze oder einem Bestandsplan ein 3D-Modell mit Wänden, Fenstern, Plänen und Renderings auf deinem Computer.']] },
    en: { titel: 'AI tools for architecture', sub: 'Model to photo, sketch to render, virtual staging and more. Nothing to install. 3 free images, then from €0.25.',
      gratis: n => `<b>${n}</b> free images`, saldo: c => `Credit: <b>${eur(c)}</b>`, comprar: 'Buy credit', clave: 'I have a key', sinIva: 'Prices exclude VAT.',
      subir: 'Drop an image here, paste it or click', estandar: 'Standard', alta: 'High quality', generar: 'Generate', generando: 'Generating, about 20 to 60 seconds…',
      descargar: 'Download', otra: 'Another version', antes: 'before', despues: 'after', estilo: 'Style', estancia: 'Room', luz: 'Light and time', que: 'What to add', color: 'Facade colour (optional)',
      texto: 'Describe the image', textura: 'Material', ninguno: 'Free choice', cta: 'Want the full model with plans, sections and renders? <a href="../">Try Amphion free for 60 days</a>.',
      pronto: 'Coming very soon.', pago: 'Secure payment with Stripe. Credit never expires.', guardaClave: 'Keep your key to use your credit on another device:',
      introClave: 'Enter your key (at_…)', ok: 'OK', cerrar: 'Close', pagado: 'Thank you! Your credit will be ready in a few seconds.', mosaico: 'Tiled preview to check the texture repeats seamlessly',
      e: { imagen: 'Please upload an image first.', texto: 'Please write a description.', gratis: 'You have used your free images. Buy credit to continue.', pagar: 'High quality needs credit.',
        saldo: 'Not enough credit.', pausa: 'The service is busy. Please try again in a few minutes; you were not charged.', rechazo: 'This image could not be generated. Try another image or description; you were not charged.',
        grande: 'The image is too large.', pronto: 'Purchasing opens very soon.', red: 'No connection to the service.' },
      faq: [['How does credit work?', 'You buy credit once, no subscription. Each image deducts its price: €0.25 standard or €0.90 high quality. If something fails, you are not charged.'],
        ['What happens to my images?', 'They are processed only to create your result and never used to train models. We do not store your images on our servers.'],
        ['What if I need more than an image?', 'Amphion is the full program: from a sentence, a sketch or an existing plan to a 3D model with walls, windows, plans and renders on your own computer.']] },
    it: { titel: 'Strumenti IA per l’architettura', sub: 'Dal modello alla foto, dallo schizzo al render, virtual staging e altro. Niente da installare. 3 immagini gratis, poi da 0,25 €.',
      gratis: n => `<b>${n}</b> immagini gratis`, saldo: c => `Credito: <b>${eur(c)}</b>`, comprar: 'Compra credito', clave: 'Ho una chiave', sinIva: 'Prezzi IVA esclusa.',
      subir: 'Trascina qui un’immagine, incollala o fai clic', estandar: 'Standard', alta: 'Alta qualità', generar: 'Genera', generando: 'Generazione in corso, circa 20–60 secondi…',
      descargar: 'Scarica', otra: 'Un’altra versione', antes: 'prima', despues: 'dopo', estilo: 'Stile', estancia: 'Ambiente', luz: 'Luce e momento', que: 'Cosa aggiungere', color: 'Colore della facciata (facoltativo)',
      texto: 'Descrivi l’immagine', textura: 'Materiale', ninguno: 'Libero', cta: 'Vuoi il modello completo con piante, sezioni e render? <a href="../">Prova Amphion gratis per 60 giorni</a>.',
      pronto: 'Disponibile a breve.', pago: 'Pagamento sicuro con Stripe. Il credito non scade.', guardaClave: 'Conserva la tua chiave per usare il credito su un altro dispositivo:',
      introClave: 'Inserisci la chiave (at_…)', ok: 'OK', cerrar: 'Chiudi', pagado: 'Grazie! Il credito sarà pronto tra pochi secondi.', mosaico: 'Vista a mosaico per verificare che la texture si ripeta senza giunti',
      e: { imagen: 'Carica prima un’immagine.', texto: 'Scrivi una descrizione.', gratis: 'Hai usato le immagini gratuite. Compra credito per continuare.', pagar: 'L’alta qualità richiede credito.',
        saldo: 'Credito insufficiente.', pausa: 'Il servizio è molto occupato. Riprova tra qualche minuto; non ti è stato addebitato nulla.', rechazo: 'Impossibile generare questa immagine. Prova con un’altra immagine o descrizione; non ti è stato addebitato nulla.',
        grande: 'L’immagine è troppo grande.', pronto: 'L’acquisto sarà disponibile a breve.', red: 'Nessuna connessione al servizio.' },
      faq: [['Come funziona il credito?', 'Acquisti il credito una volta, senza abbonamento. Ogni immagine scala il suo prezzo: 0,25 € standard o 0,90 € alta qualità. Se qualcosa non va, non paghi.'],
        ['Cosa succede alle mie immagini?', 'Vengono elaborate solo per creare il risultato e mai usate per addestrare modelli. Non conserviamo le immagini sui nostri server.'],
        ['E se mi serve più di un’immagine?', 'Amphion è il programma completo: da una frase, uno schizzo o una pianta esistente a un modello 3D con muri, finestre, piante e render sul tuo computer.']] },
  }[L];
  const eur = c => (c / 100).toLocaleString(L, { style: 'currency', currency: 'EUR' });

  // Werkzeuge: Name und Kurztext je Sprache [es, de, en, it]; Optionen
  const W = {
    render: { ico: '◐', n: ['Modelo 3D a foto', 'Modell zum Foto', '3D model to photo', 'Dal modello 3D alla foto'],
      d: ['Captura de SketchUp, Rhino, Revit o Archicad convertida en fotografía realista, con la geometría intacta.', 'Screenshot aus SketchUp, Rhino, Revit oder Archicad wird ein echtes Foto, die Geometrie bleibt.', 'A SketchUp, Rhino, Revit or Archicad screenshot becomes a realistic photo, geometry untouched.', 'Uno screenshot di SketchUp, Rhino, Revit o Archicad diventa una foto realistica, geometria intatta.'], o: ['estilo', 'luz'] },
    boceto: { ico: '✎', n: ['Boceto a render', 'Skizze zum Rendering', 'Sketch to render', 'Dallo schizzo al render'],
      d: ['Tu dibujo a mano o croquis, convertido en un render fotorrealista que sigue cada línea.', 'Deine Handskizze wird ein fotorealistisches Rendering, das jeder Linie folgt.', 'Your hand sketch becomes a photoreal render that follows every line.', 'Il tuo schizzo a mano diventa un render fotorealistico che segue ogni linea.'], o: ['estilo', 'luz'] },
    staging: { ico: '⌂', n: ['Virtual staging', 'Virtual Staging', 'Virtual staging', 'Virtual staging'],
      d: ['Amuebla una estancia vacía para tu anuncio inmobiliario, sin tocar paredes ni ventanas.', 'Richtet ein leeres Zimmer für dein Inserat ein, Wände und Fenster bleiben.', 'Furnish an empty room for your listing; walls and windows stay as they are.', 'Arreda una stanza vuota per il tuo annuncio, senza toccare muri e finestre.'], o: ['estancia', 'estilo'] },
    redisenar: { ico: '✦', n: ['Rediseñar estancia', 'Raum neu gestalten', 'Redesign a room', 'Riprogetta l’ambiente'],
      d: ['Mismo espacio, nuevo estilo: suelos, colores, muebles y luz. Ideal para reformas.', 'Gleicher Raum, neuer Stil: Böden, Farben, Möbel, Licht. Ideal für Umbauten.', 'Same space, new style: floors, colours, furniture and light. Ideal for renovations.', 'Stesso spazio, nuovo stile: pavimenti, colori, arredi e luce. Ideale per ristrutturazioni.'], o: ['estancia', 'estilo'] },
    fachada: { ico: '▦', n: ['Reforma de fachada', 'Fassade sanieren', 'Facade renovation', 'Rifacimento facciata'],
      d: ['Foto del edificio actual: mira cómo quedaría rehabilitado, pintado y con ventanas nuevas.', 'Foto des Bestands: so sähe er saniert, gestrichen und mit neuen Fenstern aus.', 'Photo of an existing building: see it restored, repainted and with new windows.', 'Foto dell’edificio esistente: guardalo restaurato, ritinteggiato e con finestre nuove.'], o: ['estiloF', 'color'] },
    luz: { ico: '☀', n: ['Luz y estación', 'Tageszeit und Stimmung', 'Time of day and mood', 'Luce e stagione'],
      d: ['El mismo render al atardecer, de noche, con nieve o en otoño.', 'Dasselbe Bild bei Sonnenuntergang, nachts, mit Schnee oder im Herbst.', 'The same image at sunset, at night, with snow or in autumn.', 'La stessa immagine al tramonto, di notte, con la neve o in autunno.'], o: ['luz'] },
    vida: { ico: '☺', n: ['Dar vida al render', 'Leben ins Bild', 'Bring renders to life', 'Dai vita al render'],
      d: ['Añade personas, plantas o coches a escala, con sombras correctas.', 'Fügt Menschen, Pflanzen oder Autos maßstäblich mit richtigen Schatten ein.', 'Add people, plants or cars at scale with correct shadows.', 'Aggiungi persone, piante o auto in scala con ombre corrette.'], o: ['que'] },
    plano: { ico: '▤', n: ['Plano a color', 'Farbiger Präsentationsplan', 'Coloured floor plan', 'Pianta a colori'],
      d: ['Tu planta en blanco y negro, convertida en un plano de presentación con texturas y muebles.', 'Dein Schwarzweiß-Grundriss wird ein Präsentationsplan mit Böden und Möbeln.', 'Your black-and-white plan becomes a presentation plan with floors and furniture.', 'La tua pianta in bianco e nero diventa una tavola con pavimenti e arredi.'], o: [] },
    axonometria: { ico: '◇', n: ['Plano a 3D', 'Grundriss zu 3D', 'Floor plan to 3D', 'Dalla pianta al 3D'],
      d: ['Axonometría 3D amueblada de tu vivienda a partir del plano, sin techo.', 'Möblierte 3D-Axonometrie deiner Wohnung aus dem Grundriss, ohne Dach.', 'A furnished 3D cutaway axonometry of the home from its floor plan.', 'Assonometria 3D arredata della casa a partire dalla pianta.'], o: [] },
    texto: { ico: '❝', n: ['Texto a imagen', 'Text zum Bild', 'Text to image', 'Dal testo all’immagine'],
      d: ['Describe una idea y obtén una imagen de concepto para tu presentación.', 'Beschreib eine Idee und erhalte ein Konzeptbild für die Präsentation.', 'Describe an idea and get a concept image for your presentation.', 'Descrivi un’idea e ottieni un’immagine di concept per la presentazione.'], o: ['texto'], sinBild: true },
    textura: { ico: '▩', n: ['Textura sin costuras', 'Nahtlose Textur', 'Seamless texture', 'Texture senza giunti'],
      d: ['Texturas repetibles para tu programa 3D: madera, piedra, azulejo, tela…', 'Kachelbare Texturen für dein 3D-Programm: Holz, Stein, Fliese, Stoff …', 'Tileable textures for your 3D software: wood, stone, tile, fabric…', 'Texture ripetibili per il tuo software 3D: legno, pietra, piastrelle, tessuti…'], o: ['textura'], sinBild: true },
    mueble3d: { ico: '⬢', n: ['Foto de mueble a 3D', 'Möbelfoto zu 3D', 'Furniture photo to 3D', 'Dalla foto del mobile al 3D'],
      d: ['Una foto de un mueble se convierte en un modelo 3D (GLB) para tu proyecto.', 'Aus einem Möbelfoto wird ein 3D-Modell (GLB) für dein Projekt.', 'A furniture photo becomes a 3D model (GLB) for your project.', 'La foto di un mobile diventa un modello 3D (GLB) per il tuo progetto.'], o: [], drei: true },
  };
  const li = SPR.indexOf(L);
  const OPT = {
    estilo: { k: 'stil', t: 'estilo', v: { '': [T.ninguno], moderno: ['Moderno', 'Modern', 'Modern', 'Moderno'], nordico: ['Nórdico', 'Skandinavisch', 'Scandinavian', 'Nordico'], mediterraneo: ['Mediterráneo', 'Mediterran', 'Mediterranean', 'Mediterraneo'],
      clasico: ['Clásico', 'Klassisch', 'Classic', 'Classico'], industrial: ['Industrial', 'Industrial', 'Industrial', 'Industriale'], japandi: ['Japandi', 'Japandi', 'Japandi', 'Japandi'], lujo: ['Lujo discreto', 'Stiller Luxus', 'Quiet luxury', 'Lusso discreto'], boho: ['Boho', 'Boho', 'Boho', 'Boho'] } },
    estiloF: { k: 'stil', t: 'estilo', v: { moderno: ['Contemporáneo', 'Zeitgenössisch', 'Contemporary', 'Contemporaneo'], clasico: ['Histórico restaurado', 'Historisch restauriert', 'Restored historic', 'Storico restaurato'], mediterraneo: ['Mediterráneo encalado', 'Mediterran gekalkt', 'Whitewashed Mediterranean', 'Mediterraneo a calce'] } },
    estancia: { k: 'raum', t: 'estancia', v: { salon: ['Salón', 'Wohnzimmer', 'Living room', 'Soggiorno'], dormitorio: ['Dormitorio', 'Schlafzimmer', 'Bedroom', 'Camera da letto'], cocina: ['Cocina', 'Küche', 'Kitchen', 'Cucina'], comedor: ['Comedor', 'Esszimmer', 'Dining room', 'Sala da pranzo'],
      despacho: ['Despacho', 'Arbeitszimmer', 'Home office', 'Studio'], bano: ['Baño', 'Bad', 'Bathroom', 'Bagno'], infantil: ['Habitación infantil', 'Kinderzimmer', "Children's room", 'Cameretta'], terraza: ['Terraza', 'Terrasse', 'Terrace', 'Terrazza'] } },
    luz: { k: 'luz', t: 'luz', v: { atardecer: ['Atardecer', 'Sonnenuntergang', 'Sunset', 'Tramonto'], noche: ['Noche', 'Nacht', 'Night', 'Notte'], manana: ['Mañana', 'Morgen', 'Morning', 'Mattina'], mediodia: ['Mediodía', 'Mittag', 'Midday', 'Mezzogiorno'],
      nublado: ['Nublado', 'Bedeckt', 'Overcast', 'Nuvoloso'], nieve: ['Nieve', 'Schnee', 'Snow', 'Neve'], otono: ['Otoño', 'Herbst', 'Autumn', 'Autunno'], lluvia: ['Tras la lluvia', 'Nach dem Regen', 'After rain', 'Dopo la pioggia'] } },
    que: { k: 'que', t: 'que', v: { personas: ['Personas', 'Menschen', 'People', 'Persone'], plantas: ['Plantas y árboles', 'Pflanzen und Bäume', 'Plants and trees', 'Piante e alberi'], coches: ['Coches y bicis', 'Autos und Räder', 'Cars and bikes', 'Auto e bici'] } },
  };

  let info = { gratis: 3, saldo: null, preise: { standard: 25, alta: 90, mueble3d: 150 }, pakete: { p5: [500, 500], p15: [1500, 1650], p40: [4000, 4600] }, kauf: true, bereit: true, bereit3d: false };
  let aktiv = null, eingabe = null, quali = 'standard';
  const token = () => lsGet('tools.token');
  const api = async (pfad, body) => {
    const r = await fetch(CLOUD + '/v1/tools/' + pfad, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ geraet, token: token(), lang: L, ...body }) });
    const j = await r.json().catch(() => ({})); if (!r.ok) throw Object.assign(new Error(j.error?.code || 'red'), { code: j.error?.code || 'red' }); return j;
  };

  // Text der Seite, Sprachen, Fußzeile auf ../ (fuss.js setzt relative Links)
  for (const n of document.querySelectorAll('[data-t]')) n.textContent = T[n.dataset.t];
  document.title = 'Amphion Tools · ' + T.titel;
  $('#sprachen').append(...SPR.map(s => el('a', { href: '?lang=' + s, textContent: s.toUpperCase(), className: s === L ? 'an' : '' })));
  for (const a of document.querySelectorAll('footer [data-fuss]')) if (!/^\.\.\//.test(a.getAttribute('href'))) a.setAttribute('href', '../' + a.getAttribute('href'));
  $('#faq').append(...T.faq.flatMap(([f, a]) => [el('h3', { textContent: f }), el('p', { textContent: a })]));

  function saldoZeigen() {
    const s = $('#saldo'); s.innerHTML = '';
    s.append(el('span', { innerHTML: info.saldo != null ? T.saldo(info.saldo) : T.gratis(info.gratis) }));
    s.append(el('button', { textContent: T.comprar, onclick: kaufen }));
    if (info.saldo == null) s.append(el('button', { textContent: T.clave, onclick: schluessel }));
    s.append(el('span', { className: 'klein', textContent: T.sinIva }));
  }
  function karten() {
    $('#grid').append(...Object.entries(W).map(([id, w]) => {
      const preis = eur(w.drei ? info.preise.mueble3d : info.preise.standard);
      const b = el('button', { className: 't-karte', onclick: () => oeffnen(id) }, el('span', { className: 'ico', textContent: w.ico }), el('b', { textContent: w.n[li] }), el('span', { textContent: w.d[li] }),
        el('em', { textContent: w.drei && !info.bereit3d ? T.pronto : (L === 'de' ? 'ab ' : L === 'en' ? 'from ' : L === 'it' ? 'da ' : 'desde ') + preis }));
      b.dataset.id = id; return b;
    }));
  }
  function oeffnen(id) {
    aktiv = id; const w = W[id];
    for (const k of document.querySelectorAll('.t-karte')) k.classList.toggle('an', k.dataset.id === id);
    $('#panel').hidden = false; $('#erg').hidden = true; $('#p-titel').textContent = w.n[li]; $('#p-text').textContent = w.d[li];
    $('#drop').parentElement.hidden = !!w.sinBild;
    $('.t-reihe').style.gridTemplateColumns = w.sinBild ? '1fr' : '';
    const o = $('#opts'); o.innerHTML = '';
    for (const name of w.o) {
      if (name === 'texto' || name === 'textura') { o.append(el('label', {}, T[name], el('textarea', { id: 'o-texto', placeholder: name === 'textura' ? 'roble natural en lamas anchas / travertino / terrazo' : '' }))); continue; }
      if (name === 'color') { o.append(el('label', {}, T.color, el('input', { id: 'o-color', placeholder: 'blanco roto, ocre, azul grisáceo…' }))); continue; }
      const d = OPT[name], s = el('select', { id: 'o-' + d.k });
      if (name === 'luz' && id !== 'luz') s.append(el('option', { value: '', textContent: T.ninguno }));
      s.append(...Object.entries(d.v).map(([v, n]) => el('option', { value: v, textContent: n[li] ?? n[0] }))); o.append(el('label', {}, T[d.t], s));
    }
    if (!w.drei) {
      const qb = (k, name) => el('button', { type: 'button', className: quali === k ? 'an' : '', onclick: () => { quali = k; oeffnen(id); } }, name, el('small', { textContent: eur(info.preise[k]) }));
      o.append(el('div', { className: 't-q' }, qb('standard', T.estandar), qb('alta', T.alta)));
    }
    o.append(el('button', { className: 't-go', id: 'go', textContent: w.drei ? T.generar + ' · ' + eur(info.preise.mueble3d) : T.generar, onclick: los, disabled: w.drei && !info.bereit3d }), el('div', { className: 't-meld', id: 'meld' }));
    if (eingabe && !w.sinBild) zeigeEingabe();
    $('#panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  const meld = (t, err) => { const m = $('#meld'); if (m) { m.innerHTML = t; m.className = 't-meld' + (err ? ' err' : ''); } };

  // Bild laden, auf 2048 px verkleinern, als JPEG
  async function bildLaden(file) {
    if (!file || !/^image\//.test(file.type)) return;
    const url = URL.createObjectURL(file), img = new Image(); img.src = url; await img.decode();
    const s = Math.min(1, 2048 / Math.max(img.naturalWidth, img.naturalHeight)), c = document.createElement('canvas');
    c.width = Math.round(img.naturalWidth * s); c.height = Math.round(img.naturalHeight * s);
    const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height); g.drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url);
    eingabe = { url: c.toDataURL('image/jpeg', 0.9), b: c.width, h: c.height }; zeigeEingabe();
  }
  const zeigeEingabe = () => { const d = $('#drop'); d.innerHTML = ''; d.append(el('img', { src: eingabe.url, alt: '' })); };
  $('#drop-text').textContent = T.subir;
  $('#drop').onclick = () => $('#datei').click();
  $('#datei').onchange = e => bildLaden(e.target.files[0]);
  $('#drop').ondragover = e => { e.preventDefault(); $('#drop').classList.add('drag'); };
  $('#drop').ondragleave = () => $('#drop').classList.remove('drag');
  $('#drop').ondrop = e => { e.preventDefault(); $('#drop').classList.remove('drag'); bildLaden(e.dataTransfer.files[0]); };
  document.addEventListener('paste', e => { const f = [...(e.clipboardData?.files || [])][0]; if (f && aktiv) bildLaden(f); });

  async function los() {
    const w = W[aktiv], go = $('#go');
    if (!w.sinBild && !eingabe) return meld(T.e.imagen, true);
    const opciones = {}; for (const n of document.querySelectorAll('#opts select, #opts textarea, #opts input')) opciones[n.id.slice(2) === 'texto' ? 'texto' : n.id.slice(2)] = n.value;
    if (w.sinBild && (opciones.texto || '').trim().length < 3) return meld(T.e.texto, true);
    go.disabled = true; meld('<span class="t-spin"></span>' + T.generando);
    try {
      if (w.drei) return await dreiD(go);
      const j = await api('generar', { werkzeug: aktiv, calidad: quali, opciones, imagen: w.sinBild ? undefined : eingabe.url, ancho: eingabe?.b, alto: eingabe?.h });
      if (j.saldo != null) info.saldo = j.saldo; if (j.gratis != null) info.gratis = j.gratis; saldoZeigen(); meld('');
      ergebnis(j.imagen, w);
    } catch (e) { meld(T.e[e.code] || T.e.red, true); if (['gratis', 'saldo', 'pagar'].includes(e.code)) kaufen(); }
    finally { go.disabled = false; }
  }
  async function dreiD(go) {
    const j = await api('mueble', { imagen: eingabe.url }); info.saldo = j.saldo; saldoZeigen();
    for (let i = 0; i < 120; i++) {
      await new Promise(r => setTimeout(r, 5000));
      const s = await api('mueble/estado', { trabajo: j.trabajo });
      if (s.estado === 'listo') {
        meld(''); go.disabled = false;
        if (!customElements.get('model-viewer')) { const sc = el('script', { type: 'module', src: 'https://unpkg.com/@google/model-viewer@3.5.0/dist/model-viewer.min.js' }); document.head.append(sc); }
        const e = $('#erg'); e.hidden = false; e.innerHTML = '';
        e.append(Object.assign(document.createElement('model-viewer'), { src: s.glb, cameraControls: true, autoRotate: true }), el('div', { className: 't-aktion' }, el('a', { href: s.glb, download: 'amphion-mueble.glb', textContent: T.descargar + ' GLB' })), el('div', { className: 't-cta', innerHTML: T.cta }));
        const mv = e.querySelector('model-viewer'); mv.setAttribute('camera-controls', ''); mv.setAttribute('auto-rotate', ''); mv.style.cssText = 'width:100%;height:480px;background:#f6f6f6';
        return;
      }
    }
    meld(T.e.pausa, true);
  }
  function ergebnis(url, w) {
    const e = $('#erg'); e.hidden = false; e.innerHTML = '';
    if (aktiv === 'textura') {
      e.append(el('p', { className: 'klein', textContent: T.mosaico }), el('div', { className: 't-kachel' }, ...[0, 1, 2, 3].map(() => el('img', { src: url, alt: '' }))));
    } else if (!w.sinBild) {
      // 9.11.2026 (Tassilo: kein Schieber): Eingabe und Ergebnis nebeneinander, auf dem Handy untereinander; Prüfregel test/site_einheit.test.mjs
      const v = el('div', { className: 't-paar' }, el('figure', {}, el('img', { src: eingabe.url, alt: T.antes }), el('figcaption', { textContent: T.antes })),
        el('figure', {}, el('img', { src: url, alt: T.despues }), el('figcaption', { textContent: T.despues })));
      e.append(v);
    } else e.append(el('img', { src: url, alt: '', style: 'max-width:100%;display:block' }));
    e.append(el('div', { className: 't-aktion' }, el('a', { href: url, download: `amphion-${aktiv}.png`, textContent: T.descargar }), el('button', { textContent: T.otra, onclick: los })),
      el('div', { className: 't-cta', innerHTML: T.cta }));
    e.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function dialog(...inhalt) { const d = $('#dlg'); d.innerHTML = ''; d.append(...inhalt, el('div', { className: 't-aktion' }, el('button', { textContent: T.cerrar, onclick: () => d.close() }))); d.showModal(); }
  function kaufen() {
    if (!info.kauf) return dialog(el('p', { textContent: T.e.pronto }));
    const p = info.pakete, knopf = k => el('button', { className: 't-paket', onclick: async ev => {
      ev.target.disabled = true;
      try { const j = await api('comprar', { paquete: k }); if (j.token) lsSet('tools.token', j.token); location.href = j.url; }
      catch (e) { ev.target.disabled = false; alert(T.e[e.code] || T.e.red); }
    } }, el('b', { textContent: eur(p[k][0]) }), el('small', { textContent: p[k][1] > p[k][0] ? '→ ' + eur(p[k][1]) : '' }), el('small', { textContent: `≈ ${Math.floor(p[k][1] / info.preise.standard)} × ${T.estandar} · ${Math.floor(p[k][1] / info.preise.alta)} × ${T.alta}` }));
    dialog(el('h3', { textContent: T.comprar }), el('div', { className: 't-pakete' }, ...Object.keys(p).map(knopf)), el('p', { className: 'klein', textContent: T.pago + ' ' + T.sinIva, style: 'margin-top:10px;color:var(--grau)' }));
  }
  function schluessel() {
    const i = el('input', { placeholder: T.introClave, spellcheck: false });
    dialog(el('h3', { textContent: T.clave }), i, el('button', { textContent: T.ok, className: 't-paket', onclick: async () => { lsSet('tools.token', i.value.trim()); await laden(); $('#dlg').close(); } }));
  }
  async function laden() {
    try { info = { ...info, ...await api('info', {}) }; if (info.saldo == null && token()) lsSet('tools.token', null); } catch { /* Seite geht mit Vorgaben */ }
    saldoZeigen();
  }
  (async () => {
    await laden(); karten();
    const pa = new URLSearchParams(location.search);
    if (pa.get('pagado')) {
      const t = token(); dialog(el('p', { textContent: T.pagado }), ...(t ? [el('p', { textContent: T.guardaClave }), el('code', { className: 't-tok', textContent: t })] : []));
      for (let i = 0; i < 6 && !(info.saldo > 0); i++) { await new Promise(r => setTimeout(r, 2500)); await laden(); }
    }
    const w = pa.get('t') || location.hash.slice(1); if (W[w]) oeffnen(w);
  })();
})();
