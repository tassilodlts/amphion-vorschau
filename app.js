// Amphion · Website: Sprache (de, en, es) automatisch nach Browser, Konstanten für Name und Links. Kein Framework.
'use strict';

const PRODUKT = 'Amphion';          // Name, später austauschbar
const DOWNLOAD_ARM = 'https://github.com/tassilodlts/forma-app/releases/latest/download/Amphion-Mac-Apple-Silicon.dmg';         // Mac, Apple Silicon (.dmg)
const DOWNLOAD_X64 = 'https://github.com/tassilodlts/forma-app/releases/latest/download/Amphion-Mac-Intel.dmg';         // Mac, Intel (.dmg)
const CHECKOUT = { pro: 'mailto:hello@amphion3d.com?subject=Amphion%20Pro', studio: 'mailto:hello@amphion3d.com?subject=Amphion%20Studio' };   // Abo starten je Plan (später Paddle)

const TEXTE = {
  de: {
    meta: 'Beschreib dein Haus. Amphion baut es. Modellieren mit Sprache für Architekten, auf dem Mac.',
    'nav.projekte': 'Projekte', 'nav.funktionen': 'Funktionen', 'nav.preis': 'Preis', 'nav.faq': 'Fragen', 'nav.kaufen': 'Kaufen',
    'held.titel1': 'Beschreib dein Haus.', 'held.titel2': 'Amphion baut es.',
    'held.text': 'Eine Skizze, ein Plan, ein PDF, ein Foto oder ein Satz: Amphion baut daraus echte Bauteile, rendert auf deinem Mac und schreibt die Pläne.',
    'held.ladenArm': 'Amphion für Mac laden (Apple Silicon)', 'held.ladenX64': 'Amphion für Mac laden (Intel)',
    'held.klein': 'Ein Programm für den Mac, macOS 13 oder neuer. Laden ist frei. Die ersten 10 Kunden testen einen Monat kostenlos, danach kostet Amphion 45 € im Monat. Vom Handy aus bedienst du Amphion im Browser, solange dein Mac läuft. Nach dem ersten Monat nicht zufrieden? Alles zurück.', 'held.kaufen': 'Schlüssel kaufen',
    'bild.band': 'FIVE CLEARINGS aus der Luft. Entwurf, Modell und Bild aus Amphion.',
    'modell.titel': 'Sprich mit dem Modell', 'modell.text': 'Hier siehst du zwei fertige Projekte aus Amphion: FIVE CLEARINGS mit der ganzen Stadt, in rund 5 Stunden modelliert, und die Villa von 1913, in rund 2 Stunden. Du kannst sie drehen, schneiden, ein- und ausblenden und mit ihnen sprechen, aber nicht verändern. Selbst bauen kannst du auf dem Bauplatz: Sag, was du willst, und Amphion baut es. Alles Weitere, vom Umbau bis zum Rendering, macht die App.', 'modell.reiterB': 'Bauplatz: selbst bauen', 'chip.b1': 'Mach das Dach gelb', 'chip.b2': 'Setz ein gotisches Dach drauf', 'chip.b3': 'Noch ein Geschoss', 'chip.b4': 'Ein Turm an der Ecke', 'chip.b5': 'Große Fenster nach Süden', 'chip.b6': 'Rückgängig', 'chip.b7': 'Neu anfangen', 'modell.steuerung': 'Ziehen dreht · rechte Maustaste oder zwei Finger verschieben · Mausrad oder zwei Finger zoomen, bis hinunter auf die Straße',
    'modell.frage': 'Sag dem Modell, was du sehen willst …', 'modell.reiterM': 'Villa von 1913', 'modell.diktat': 'Diktieren', 'modell.fehler': 'Modell konnte nicht geladen werden.',
    'chip.m1': 'Schneide das Erdgeschoss auf', 'chip.m2': 'Wie sah es 1913 aus?', 'chip.m3': 'Nimm die Nachbarn weg', 'chip.m4': 'Obergeschoss von oben, axonometrisch', 'chip.m5': 'Zeig mir den Garten', 'chip.zurueck': 'Alles zurück',
    'chip.v1': 'Nur das Tragwerk', 'chip.v2': 'Schneide bei 60 Metern', 'chip.v3': 'Ohne die Stadt', 'chip.v4': 'Runter auf den Sockel', 'chip.v5': 'Von oben, axonometrisch',
    'bild.app': 'So sieht Amphion aus: Bauteile und Ebenen links, das Modell in der Mitte, der Chat rechts. Hier FIVE CLEARINGS mit 69 510 Bauteilen.',
    'schritte.titel': 'So fängst du an',
    'schritte.1t': 'Amphion laden', 'schritte.1': 'Das Programm für den Mac laden, in den Ordner Programme ziehen, mit Rechtsklick öffnen.',
    'schritte.2t': 'Einen Monat testen', 'schritte.2': 'Beim ersten Start holt sich Amphion den Probeschlüssel selbst. Nach einem Monat kommt der Schlüssel fürs Abo per Mail. Einfügen, fertig.',
    'schritte.3t': 'Anfangen, wie du willst', 'schritte.3': 'Lade Skizzen, Pläne, PDFs oder Fotos hoch, diktier oder schreib. Von null oder aus einem bestehenden Projekt. Amphion baut, du änderst, dann rendern und Pläne als PDF.',
    'proj.titel': 'Gebaut mit Amphion',
    'proj.vanc': 'Hochhaus mit fünf öffentlichen Lichtungen, Wettbewerb 2026. Modell, Renderings, Pläne und Tafeln aus Amphion.',
    'vanc.1': 'Der Turm über der Stadt', 'vanc.2': 'Vom Park aus', 'vanc.3': 'Dachgärten auf dem Sockel', 'vanc.4': 'Terrasse im Turm', 'vanc.5': 'Ecke des Sockels', 'vanc.6': 'An der Straße', 'vanc.7': 'Lichtung im Sockel', 'vanc.8': 'Schnitt durch den Turm',
    'proj.muc': 'Umbau einer Villa von 1913 mit Anbau, 2026. Bestand, Entwurf, Innenräume und Grundrisse in Amphion, Abstimmung mit dem Bauherrn an den Bildern.', 'proj.muct': 'Villa von 1913',
    'muc.1': 'Straßenecke', 'muc.2': 'Vogelperspektive mit Anbau', 'muc.3': 'Axonometrie, Obergeschoss offen', 'muc.4': 'Dachterrasse', 'muc.5': 'Salon mit Kaminofen', 'muc.6': 'So war es 1913', 'muc.7': 'Grundriss Erdgeschoss, Umbau', 'muc.8': 'Grundriss Obergeschoss, Umbau', 'muc.9': 'Grundriss Dachgeschoss mit Dachterrasse', 'vgl.titel': 'Vom Modell zum Bild', 'vgl.text': 'Links die Ansicht aus dem Modell, rechts das KI-Rendering, das Amphion daraus macht. Zieh den Regler.', 'vgl.links': 'Modell', 'vgl.rechts': 'KI-Rendering', 'vgl.regler': 'Regler zwischen Modell und Rendering', 'vgl.strasse': 'Straße', 'vgl.garten': 'Garten', 'vgl.erker': 'Erker', 'vgl.salon': 'Salon', 'vgl.kueche': 'Küche',
    'fkt.titel': 'Was Amphion kann',
    'fkt.1t': 'Echte Bauteile', 'fkt.1': 'Wände, Decken, Stützen, Fenster, Treppen. Mit Maßen, Schichten und Mengen, nicht nur Flächen.',
    'fkt.2t': 'Sprechen statt klicken', 'fkt.2': 'Du sagst oder schreibst, was du willst, in ganzen Sätzen. Amphion versteht dich in deiner Sprache.',
    'fkt.3t': 'Export für CAD und BIM', 'fkt.3': 'Das Modell geht weiter in die gängigen CAD- und BIM-Programme oder zum Tragwerksplaner.',
    'fkt.4t': 'Rendering auf deinem Mac', 'fkt.4': 'Blender Cycles läuft lokal, so oft du willst. Dazu KI-Renderings für Stimmung und Vegetation.',
    'fkt.5t': 'Pläne als PDF', 'fkt.5': 'Grundrisse, Schnitte, Ansichten und Tafeln kommen fertig aus dem Modell.',
    'fkt.6t': 'Vom Handy und aus dem Terminal', 'fkt.6': 'Unterwegs im Browser bedienen. Oder aus Claude Code, Codex und Gemini CLI steuern.',
    'preis.titel': 'Drei Pläne', 'frei.name': 'Amphion Probe', 'frei.einheit': 'ein Monat, für die ersten 10', 'frei.l1': 'Das ganze Programm auf deinem Mac: Modellieren, Pläne, Export', 'frei.l2': 'KI für das Modell inklusive, bis 80 Sätze im Monat; unbegrenzt mit eigenem Schlüssel (Gemini kostenlos, Ollama lokal)', 'frei.l3': 'Amphion Render unbegrenzt, auf deinem Mac', 'frei.l4': 'Danach Pro für 45 € im Monat, oder einfach Schluss', 'frei.knopf': 'Amphion laden', 'preis.einheit': 'im Monat zzgl. MwSt.',
    'preis.l1': 'KI für das Modell, unbegrenzt', 'preis.l2': '60 KI-Renderings im Monat',
    'preis.l3': 'Blender-Rendering unbegrenzt, auf deinem Mac', 'preis.l4': 'Alle Updates',
    'preis.knopf': 'Abo starten',
    'studio.l1': 'Alles aus Pro, ohne Grenzen: KI, KI-Renderings, Websuche',
    'studio.l2': 'Persönliche Beratung: Architekt am Telefon oder per Video, wenn du sie brauchst',
    'studio.l3': 'Modellierungshilfe: Wir bauen oder richten dein Projekt mit dir ein',
    'studio.l4': 'Wünsche an Amphion kommen zuerst dran', 'studio.knopf': 'Studio anfragen',
    'preis.studis': 'Studierende und Lehrende: Pro für 15 € im Monat mit Hochschul-Mail. Kurz schreiben.', 'preis.garantie': 'Nach dem ersten Monat nicht zufrieden? Du bekommst alles zurück. Gilt für Pro und Studio.',
    'faq.titel': 'Fragen',
    'faq.1f': 'Was brauche ich?', 'faq.1': 'Einen Mac mit macOS 13 oder neuer und Internet für die KI. Für Renderings installiert Amphion Blender von blender.org, ein Klick genügt.',
    'faq.2f': 'Gibt es Amphion für Windows?', 'faq.2': 'Noch nicht. Amphion läuft auf dem Mac. Schreib uns, wenn du eine Windows-Version willst, wir zählen mit.',
    'faq.3f': 'Wo liegen meine Daten?', 'faq.3': 'Auf deinem Mac. Projekte, Modelle und Renderings bleiben lokal. An die KI gehen nur die Texte deines Chats und, wenn du es willst, das Bild für ein KI-Rendering.',
    'faq.4f': 'Brauche ich einen eigenen KI-Schlüssel?', 'faq.4': 'Nein. Im Abo ist die KI enthalten. Wer eigene Schlüssel hat (OpenAI, Gemini, Groq, OpenRouter, Ollama), kann sie in den Einstellungen eintragen.',
    'faq.5f': 'Muss ich Blender kennen?', 'faq.5': 'Nein. Amphion stellt Kamera, Licht und Materialien selbst ein und startet Blender im Hintergrund. Du siehst nur das Bild.', 'faq.namef': 'Warum heißt es Amphion?', 'faq.name': 'Im griechischen Mythos baute Amphion die Mauern von Theben, ohne einen Stein zu heben. Er sang, und die Steine fügten sich von selbst. So arbeitest du mit Amphion: Du sprichst, und das Gebäude entsteht.', titel: 'Amphion 3D · Architektur-Software, die zuhört',
    'faq.6f': 'Wie kündige ich?', 'faq.6': 'Jederzeit mit einer Mail. Das Abo läuft bis zum Monatsende, danach ist Schluss. Deine Dateien bleiben bei dir.',
    'fuss.impressum': 'Impressum', 'fuss.datenschutz': 'Datenschutz', 'fuss.kontakt': 'Kontakt'
  },
  en: {
    meta: 'Describe your building. Amphion builds it. Language-driven modelling for architects, on the Mac.',
    'nav.projekte': 'Projects', 'nav.funktionen': 'Features', 'nav.preis': 'Pricing', 'nav.faq': 'FAQ', 'nav.kaufen': 'Buy',
    'held.titel1': 'Describe your building.', 'held.titel2': 'Amphion builds it.',
    'held.text': 'A sketch, a plan, a PDF, a photo or one sentence: Amphion turns it into real building elements, renders on your Mac and writes the drawings.',
    'held.ladenArm': 'Download Amphion for Mac (Apple Silicon)', 'held.ladenX64': 'Download Amphion for Mac (Intel)',
    'held.klein': 'A program for the Mac, macOS 13 or newer. The download is free. The first 10 customers try it free for one month, then Amphion costs €45 a month. From your phone you control Amphion in the browser while your Mac is running. Not happy after the first month? Full refund.', 'held.kaufen': 'Buy a key',
    'bild.band': 'FIVE CLEARINGS from the air. Design, model and image from Amphion.',
    'modell.titel': 'Talk to the model', 'modell.text': 'Here you see two finished projects made in Amphion: FIVE CLEARINGS with the whole city, modelled in about 5 hours, and the 1913 villa, in about 2 hours. You can turn them, cut them, show and hide parts and talk to them, but not change them. You can build yourself on the building site: say what you want and Amphion builds it. Everything else, from remodelling to rendering, happens in the app.', 'modell.reiterB': 'Building site: try it', 'chip.b1': 'Make the roof yellow', 'chip.b2': 'Put a Gothic roof on it', 'chip.b3': 'One more storey', 'chip.b4': 'A tower on the corner', 'chip.b5': 'Large windows to the south', 'chip.b6': 'Undo', 'chip.b7': 'Start over', 'modell.steuerung': 'Drag to orbit · right mouse button or two fingers to pan · scroll or pinch to zoom, right down to street level',
    'modell.frage': 'Tell the model what you want to see …', 'modell.reiterM': 'Villa from 1913', 'modell.diktat': 'Dictate', 'modell.fehler': 'The model could not be loaded.',
    'chip.m1': 'Cut open the ground floor', 'chip.m2': 'How did it look in 1913?', 'chip.m3': 'Take the neighbours away', 'chip.m4': 'First floor from above, axonometric', 'chip.m5': 'Show me the garden', 'chip.zurueck': 'Everything back',
    'chip.v1': 'Only the structure', 'chip.v2': 'Cut at 60 metres', 'chip.v3': 'Without the city', 'chip.v4': 'Down to the podium', 'chip.v5': 'From above, axonometric',
    'bild.app': 'This is Amphion: building elements and layers on the left, the model in the middle, the chat on the right. Here FIVE CLEARINGS with 69,510 elements.',
    'schritte.titel': 'How you start',
    'schritte.1t': 'Download Amphion', 'schritte.1': 'Download the Mac program, drag it to Applications, open it with a right click.',
    'schritte.2t': 'Try it for one month', 'schritte.2': 'On first launch Amphion fetches its own trial key. After one month the subscription key comes by email. Paste it, done.',
    'schritte.3t': 'Start any way you like', 'schritte.3': 'Upload sketches, drawings, PDFs or photos, dictate or type. From scratch or from an existing project. Amphion builds, you adjust, then render and export drawings as PDF.',
    'proj.titel': 'Built with Amphion',
    'proj.vanc': 'High-rise with five public clearings, competition 2026. Model, renderings, drawings and boards from Amphion.',
    'vanc.1': 'The tower above the city', 'vanc.2': 'From the park', 'vanc.3': 'Roof gardens on the podium', 'vanc.4': 'Terrace in the tower', 'vanc.5': 'Corner of the podium', 'vanc.6': 'On the street', 'vanc.7': 'Clearing in the podium', 'vanc.8': 'Section through the tower',
    'proj.muc': 'Conversion of a 1913 villa with an extension, 2026. Existing building, design, interiors and plans in Amphion, agreed with the client on the images.', 'proj.muct': 'Villa from 1913',
    'muc.1': 'Street corner', 'muc.2': 'Bird’s-eye view with extension', 'muc.3': 'Axonometric, upper floor open', 'muc.4': 'Roof terrace', 'muc.5': 'Salon with wood stove', 'muc.6': 'As it was in 1913', 'muc.7': 'Ground floor plan, remodel', 'muc.8': 'Upper floor plan, remodel', 'muc.9': 'Attic floor plan with roof terrace', 'vgl.titel': 'From model to image', 'vgl.text': 'On the left the view from the model, on the right the AI rendering Amphion makes from it. Drag the slider.', 'vgl.links': 'Model', 'vgl.rechts': 'AI rendering', 'vgl.regler': 'Slider between model and rendering', 'vgl.strasse': 'Street', 'vgl.garten': 'Garden', 'vgl.erker': 'Bay window', 'vgl.salon': 'Salon', 'vgl.kueche': 'Kitchen',
    'fkt.titel': 'What Amphion does',
    'fkt.1t': 'Real building elements', 'fkt.1': 'Walls, slabs, columns, windows, stairs. With dimensions, layers and quantities, not just surfaces.',
    'fkt.2t': 'Speak instead of click', 'fkt.2': 'Say or type what you want, in whole sentences. Amphion understands you in your language.',
    'fkt.3t': 'Export to CAD and BIM', 'fkt.3': 'The model moves on to the common CAD and BIM programs or to your structural engineer.',
    'fkt.4t': 'Rendering on your Mac', 'fkt.4': 'Blender Cycles runs locally, as often as you like. Plus AI renderings for mood and vegetation.',
    'fkt.5t': 'Drawings as PDF', 'fkt.5': 'Plans, sections, elevations and boards come straight from the model.',
    'fkt.6t': 'From your phone and the terminal', 'fkt.6': 'Use it in the browser on the go. Or drive it from Claude Code, Codex and Gemini CLI.',
    'preis.titel': 'Three plans', 'frei.name': 'Amphion Trial', 'frei.einheit': 'one month, first 10 only', 'frei.l1': 'The whole app on your Mac: modelling, drawings, export', 'frei.l2': 'AI for the model included, up to 80 sentences a month; unlimited with your own key (Gemini free, Ollama local)', 'frei.l3': 'Unlimited Amphion Render, on your Mac', 'frei.l4': 'Then Pro for €45 a month, or simply stop', 'frei.knopf': 'Download Amphion', 'preis.einheit': 'per month plus VAT',
    'preis.l1': 'AI for the model, unlimited', 'preis.l2': '60 AI renderings per month',
    'preis.l3': 'Unlimited Blender rendering, on your Mac', 'preis.l4': 'All updates',
    'preis.knopf': 'Start subscription',
    'studio.l1': 'Everything in Pro, no limits: AI, AI renderings, web search',
    'studio.l2': 'Personal advice: an architect by phone or video whenever you need one',
    'studio.l3': 'Modelling help: we build or set up your project with you',
    'studio.l4': 'Your requests for Amphion come first', 'studio.knopf': 'Ask for Studio',
    'preis.studis': 'Students and teachers: Pro for €15 a month with a university email. Just write us.', 'preis.garantie': 'Not happy after the first month? You get everything back. Applies to Pro and Studio.',
    'faq.titel': 'Questions',
    'faq.1f': 'What do I need?', 'faq.1': 'A Mac with macOS 13 or newer and internet for the AI. For renderings Amphion installs Blender from blender.org, one click is enough.',
    'faq.2f': 'Is there a Windows version?', 'faq.2': 'Not yet. Amphion runs on the Mac. Let us know if you want a Windows version, we are keeping count.',
    'faq.3f': 'Where is my data?', 'faq.3': 'On your Mac. Projects, models and renderings stay local. Only your chat text goes to the AI, and the image for an AI rendering if you ask for one.',
    'faq.4f': 'Do I need my own AI key?', 'faq.4': 'No. The AI is included in the subscription. If you have your own keys (OpenAI, Gemini, Groq, OpenRouter, Ollama), you can enter them in Settings.',
    'faq.5f': 'Do I need to know Blender?', 'faq.5': 'No. Amphion sets camera, light and materials itself and runs Blender in the background. You only see the image.', 'faq.namef': 'Why is it called Amphion?', 'faq.name': 'In Greek myth, Amphion built the walls of Thebes without lifting a stone. He sang, and the stones set themselves in place. That is how you work with Amphion: you speak, and the building takes shape.', titel: 'Amphion 3D · Architecture software that listens',
    'faq.6f': 'How do I cancel?', 'faq.6': 'Any time with an email. The subscription runs until the end of the month, then it stops. Your files stay with you.',
    'fuss.impressum': 'Legal notice', 'fuss.datenschutz': 'Privacy', 'fuss.kontakt': 'Contact'
  },
  es: {
    meta: 'Describe tu casa. Amphion la construye. Modelado con lenguaje natural para arquitectos, en el Mac.',
    'nav.projekte': 'Proyectos', 'nav.funktionen': 'Funciones', 'nav.preis': 'Precio', 'nav.faq': 'Preguntas', 'nav.kaufen': 'Comprar',
    'held.titel1': 'Describe tu casa.', 'held.titel2': 'Amphion la construye.',
    'held.text': 'Un boceto, un plano, un PDF, una foto o una frase: Amphion lo convierte en elementos constructivos reales, renderiza en tu Mac y genera los planos.',
    'held.ladenArm': 'Descargar Amphion para Mac (Apple Silicon)', 'held.ladenX64': 'Descargar Amphion para Mac (Intel)',
    'held.klein': 'Un programa para Mac, macOS 13 o posterior. La descarga es gratis. Los 10 primeros clientes lo prueban gratis un mes, después Amphion cuesta 45 € al mes. Desde el móvil manejas Amphion en el navegador mientras tu Mac está encendido. ¿No te convence tras el primer mes? Te devolvemos todo.', 'held.kaufen': 'Comprar clave',
    'bild.band': 'FIVE CLEARINGS desde el aire. Diseño, modelo e imagen hechos en Amphion.',
    'modell.titel': 'Habla con el modelo', 'modell.text': 'Aquí ves dos proyectos terminados hechos con Amphion: FIVE CLEARINGS con toda la ciudad, modelado en unas 5 horas, y la villa de 1913, en unas 2 horas. Puedes girarlos, cortarlos, mostrar y ocultar partes y hablar con ellos, pero no modificarlos. Puedes construir tú mismo en el solar: di lo que quieres y Amphion lo construye. Todo lo demás, de la reforma al render, se hace en la app.', 'modell.reiterB': 'Solar: construye tú', 'chip.b1': 'Pon el tejado amarillo', 'chip.b2': 'Ponle un tejado gótico', 'chip.b3': 'Una planta más', 'chip.b4': 'Una torre en la esquina', 'chip.b5': 'Ventanas grandes al sur', 'chip.b6': 'Deshacer', 'chip.b7': 'Empezar de nuevo', 'modell.steuerung': 'Arrastra para girar · botón derecho o dos dedos para desplazar · rueda o dos dedos para hacer zoom, hasta la calle',
    'modell.frage': 'Dile al modelo qué quieres ver …', 'modell.reiterM': 'Villa de 1913', 'modell.diktat': 'Dictar', 'modell.fehler': 'No se pudo cargar el modelo.',
    'chip.m1': 'Abre la planta baja', 'chip.m2': '¿Cómo era en 1913?', 'chip.m3': 'Quita los vecinos', 'chip.m4': 'Primera planta desde arriba, axonometría', 'chip.m5': 'Enséñame el jardín', 'chip.zurueck': 'Todo como al principio',
    'chip.v1': 'Solo la estructura', 'chip.v2': 'Corta a 60 metros', 'chip.v3': 'Sin la ciudad', 'chip.v4': 'Baja al podio', 'chip.v5': 'Desde arriba, axonometría',
    'bild.app': 'Así es Amphion: elementos y capas a la izquierda, el modelo en el centro, el chat a la derecha. Aquí FIVE CLEARINGS con 69 510 elementos.',
    'schritte.titel': 'Cómo empiezas',
    'schritte.1t': 'Descargar Amphion', 'schritte.1': 'Descarga el programa para Mac, arrástralo a Aplicaciones, ábrelo con clic derecho.',
    'schritte.2t': 'Prueba un mes', 'schritte.2': 'Al abrirlo por primera vez, Amphion obtiene sola la clave de prueba. Tras un mes, la clave de la suscripción llega por correo. Pégala y listo.',
    'schritte.3t': 'Empieza como quieras', 'schritte.3': 'Sube bocetos, planos, PDF o fotos, dicta o escribe. Desde cero o a partir de un proyecto existente. Amphion construye, tú ajustas, luego renderizas y sacas los planos en PDF.',
    'proj.titel': 'Hecho con Amphion',
    'proj.vanc': 'Torre con cinco claros públicos, concurso 2026. Modelo, renders, planos y paneles hechos en Amphion.',
    'vanc.1': 'La torre sobre la ciudad', 'vanc.2': 'Desde el parque', 'vanc.3': 'Jardines en la cubierta del podio', 'vanc.4': 'Terraza en la torre', 'vanc.5': 'Esquina del podio', 'vanc.6': 'En la calle', 'vanc.7': 'Claro en el podio', 'vanc.8': 'Sección por la torre',
    'proj.muc': 'Reforma de una villa de 1913 con ampliación, 2026. Estado actual, propuesta, interiores y plantas en Amphion, acordados con el cliente sobre las imágenes.', 'proj.muct': 'Villa de 1913',
    'muc.1': 'Esquina de la calle', 'muc.2': 'Vista aérea con la ampliación', 'muc.3': 'Axonometría, planta alta abierta', 'muc.4': 'Terraza en la cubierta', 'muc.5': 'Salón con estufa de leña', 'muc.6': 'Así era en 1913', 'muc.7': 'Planta baja, reforma', 'muc.8': 'Planta alta, reforma', 'muc.9': 'Planta bajo cubierta con terraza', 'vgl.titel': 'Del modelo a la imagen', 'vgl.text': 'A la izquierda la vista del modelo, a la derecha el render con IA que Amphion hace a partir de ella. Desliza el control.', 'vgl.links': 'Modelo', 'vgl.rechts': 'Render IA', 'vgl.regler': 'Control entre modelo y render', 'vgl.strasse': 'Calle', 'vgl.garten': 'Jardín', 'vgl.erker': 'Mirador', 'vgl.salon': 'Salón', 'vgl.kueche': 'Cocina',
    'fkt.titel': 'Qué hace Amphion',
    'fkt.1t': 'Elementos constructivos reales', 'fkt.1': 'Muros, losas, pilares, ventanas, escaleras. Con medidas, capas y cantidades, no solo superficies.',
    'fkt.2t': 'Habla en vez de hacer clic', 'fkt.2': 'Di o escribe lo que quieres, con frases enteras. Amphion te entiende en tu idioma.',
    'fkt.3t': 'Exportar a CAD y BIM', 'fkt.3': 'El modelo pasa a los programas CAD y BIM habituales o al ingeniero de estructuras.',
    'fkt.4t': 'Render en tu Mac', 'fkt.4': 'Blender Cycles funciona en local, tantas veces como quieras. Además, renders con IA para ambiente y vegetación.',
    'fkt.5t': 'Planos en PDF', 'fkt.5': 'Plantas, secciones, alzados y paneles salen listos del modelo.',
    'fkt.6t': 'Desde el móvil y la terminal', 'fkt.6': 'Úsalo en el navegador donde estés. O contrólalo desde Claude Code, Codex y Gemini CLI.',
    'preis.titel': 'Tres planes', 'frei.name': 'Amphion Prueba', 'frei.einheit': 'un mes, para los 10 primeros', 'frei.l1': 'Todo el programa en tu Mac: modelar, planos, exportar', 'frei.l2': 'IA para el modelo incluida, hasta 80 frases al mes; sin límite con tu propia clave (Gemini gratis, Ollama local)', 'frei.l3': 'Amphion Render sin límite, en tu Mac', 'frei.l4': 'Después Pro por 45 € al mes, o simplemente lo dejas', 'frei.knopf': 'Descargar Amphion', 'preis.einheit': 'al mes más IVA',
    'preis.l1': 'IA para el modelo, sin límite', 'preis.l2': '60 renders con IA al mes',
    'preis.l3': 'Render con Blender sin límite, en tu Mac', 'preis.l4': 'Todas las actualizaciones',
    'preis.knopf': 'Empezar suscripción',
    'studio.l1': 'Todo lo de Pro, sin límites: IA, renders con IA, búsqueda web',
    'studio.l2': 'Asesoría personal: un arquitecto por teléfono o vídeo cuando lo necesites',
    'studio.l3': 'Ayuda de modelado: construimos o preparamos tu proyecto contigo',
    'studio.l4': 'Tus peticiones para Amphion van primero', 'studio.knopf': 'Solicitar Studio',
    'preis.studis': 'Estudiantes y docentes: Pro por 15 € al mes con correo universitario. Escríbenos.', 'preis.garantie': '¿No te convence tras el primer mes? Te devolvemos todo. Vale para Pro y Studio.',
    'faq.titel': 'Preguntas',
    'faq.1f': '¿Qué necesito?', 'faq.1': 'Un Mac con macOS 13 o posterior e internet para la IA. Para renders, Amphion instala Blender desde blender.org con un clic.',
    'faq.2f': '¿Hay versión para Windows?', 'faq.2': 'Todavía no. Amphion funciona en el Mac. Escríbenos si quieres Windows, llevamos la cuenta.',
    'faq.3f': '¿Dónde están mis datos?', 'faq.3': 'En tu Mac. Proyectos, modelos y renders se quedan en local. A la IA solo va el texto de tu chat y, si lo pides, la imagen para un render con IA.',
    'faq.4f': '¿Necesito mi propia clave de IA?', 'faq.4': 'No. La IA está incluida en la suscripción. Si tienes claves propias (OpenAI, Gemini, Groq, OpenRouter, Ollama), puedes introducirlas en Ajustes.',
    'faq.5f': '¿Tengo que saber Blender?', 'faq.5': 'No. Amphion ajusta cámara, luz y materiales por sí misma y ejecuta Blender en segundo plano. Tú solo ves la imagen.', 'faq.namef': '¿Por qué se llama Amphion?', 'faq.name': 'En el mito griego, Anfión levantó las murallas de Tebas sin mover una piedra. Cantaba, y las piedras se colocaban solas. Así trabajas con Amphion: hablas y el edificio toma forma.', titel: 'Amphion 3D · Software de arquitectura que escucha',
    'faq.6f': '¿Cómo cancelo?', 'faq.6': 'En cualquier momento con un correo. La suscripción sigue hasta fin de mes y luego termina. Tus archivos se quedan contigo.',
    'fuss.impressum': 'Aviso legal', 'fuss.datenschutz': 'Privacidad', 'fuss.kontakt': 'Contacto'
  },
  fr: {
    meta: 'Décris ton bâtiment. Amphion le construit. Modélisation par la langue pour architectes, sur Mac.',
    'nav.projekte': 'Projets', 'nav.funktionen': 'Fonctions', 'nav.preis': 'Prix', 'nav.faq': 'Questions', 'nav.kaufen': 'Acheter',
    'held.titel1': 'Décris ton bâtiment.', 'held.titel2': 'Amphion le construit.',
    'held.text': 'Un croquis, un plan, un PDF, une photo ou une phrase : Amphion en fait de vrais éléments de construction, effectue le rendu sur ton Mac et produit les plans.',
    'held.ladenArm': 'Télécharger Amphion pour Mac (Apple Silicon)', 'held.ladenX64': 'Télécharger Amphion pour Mac (Intel)',
    'held.klein': 'Un programme pour Mac, macOS 13 ou plus récent. Le téléchargement est gratuit. Les 10 premiers clients l’essaient gratuitement pendant un mois, ensuite Amphion coûte 45 € par mois. Depuis ton téléphone, tu pilotes Amphion dans le navigateur pendant que ton Mac est allumé. Pas convaincu après le premier mois ? On te rembourse tout.', 'held.kaufen': 'Acheter une clé',
    'bild.band': 'FIVE CLEARINGS vu du ciel. Projet, modèle et image réalisés avec Amphion.',
    'modell.titel': 'Parle au modèle', 'modell.text': 'Voici deux projets terminés réalisés avec Amphion : FIVE CLEARINGS avec toute la ville, modélisé en 5 heures environ, et la villa de 1913, en 2 heures environ. Tu peux les faire tourner, les couper, afficher ou masquer des parties et leur parler, mais pas les modifier. Tu peux construire toi-même sur le chantier : dis ce que tu veux et Amphion le construit. Tout le reste, de la transformation au rendu, se fait dans l’app.', 'modell.reiterB': 'Chantier : à toi', 'chip.b1': 'Mets le toit en jaune', 'chip.b2': 'Mets un toit gothique', 'chip.b3': 'Un étage de plus', 'chip.b4': 'Une tour à l’angle', 'chip.b5': 'De grandes fenêtres au sud', 'chip.b6': 'Annuler', 'chip.b7': 'Recommencer', 'modell.steuerung': 'Glisse pour tourner · clic droit ou deux doigts pour déplacer · molette ou deux doigts pour zoomer, jusqu’à la rue',
    'modell.frage': 'Dis au modèle ce que tu veux voir …', 'modell.reiterM': 'Villa de 1913', 'modell.diktat': 'Dicter', 'modell.fehler': 'Impossible de charger le modèle.',
    'chip.m1': 'Ouvre le rez-de-chaussée', 'chip.m2': 'C’était comment en 1913 ?', 'chip.m3': 'Enlève les voisins', 'chip.m4': 'Premier étage vu d’en haut, axonométrie', 'chip.m5': 'Montre-moi le jardin', 'chip.zurueck': 'Tout comme au début',
    'chip.v1': 'Seulement la structure', 'chip.v2': 'Coupe à 60 mètres', 'chip.v3': 'Sans la ville', 'chip.v4': 'Descends au socle', 'chip.v5': 'Vu d’en haut, axonométrie',
    'bild.app': 'Voici Amphion : éléments et calques à gauche, le modèle au centre, le chat à droite. Ici FIVE CLEARINGS avec 69 510 éléments.',
    'schritte.titel': 'Comment commencer',
    'schritte.1t': 'Télécharger Amphion', 'schritte.1': 'Télécharge le programme Mac, glisse-le dans Applications, ouvre-le avec un clic droit.',
    'schritte.2t': 'Essaie un mois', 'schritte.2': 'Au premier lancement, Amphion récupère tout seul sa clé d’essai. Après un mois, la clé d’abonnement arrive par e-mail. Colle-la, c’est fait.',
    'schritte.3t': 'Commence comme tu veux', 'schritte.3': 'Importe croquis, plans, PDF ou photos, dicte ou écris. À partir de zéro ou d’un projet existant. Amphion construit, tu ajustes, puis tu fais le rendu et tu exportes les plans en PDF.',
    'proj.titel': 'Réalisé avec Amphion',
    'proj.vanc': 'Tour avec cinq clairières publiques, concours 2026. Modèle, rendus, plans et planches réalisés avec Amphion.',
    'vanc.1': 'La tour au-dessus de la ville', 'vanc.2': 'Depuis le parc', 'vanc.3': 'Jardins sur le toit du socle', 'vanc.4': 'Terrasse dans la tour', 'vanc.5': 'Angle du socle', 'vanc.6': 'Dans la rue', 'vanc.7': 'Clairière dans le socle', 'vanc.8': 'Coupe à travers la tour',
    'proj.muc': 'Transformation d’une villa de 1913 avec extension, 2026. Existant, projet, intérieurs et plans dans Amphion, validés avec le maître d’ouvrage sur les images.', 'proj.muct': 'Villa de 1913',
    'muc.1': 'Angle de rue', 'muc.2': 'Vue aérienne avec l’extension', 'muc.3': 'Axonométrie, étage ouvert', 'muc.4': 'Terrasse sur le toit', 'muc.5': 'Salon avec poêle à bois', 'muc.6': 'Tel qu’en 1913', 'muc.7': 'Plan du rez-de-chaussée, transformation', 'muc.8': 'Plan de l’étage, transformation', 'muc.9': 'Plan des combles avec toit-terrasse', 'vgl.titel': 'Du modèle à l’image', 'vgl.text': 'À gauche la vue du modèle, à droite le rendu IA qu’Amphion en tire. Fais glisser le curseur.', 'vgl.links': 'Modèle', 'vgl.rechts': 'Rendu IA', 'vgl.regler': 'Curseur entre modèle et rendu', 'vgl.strasse': 'Rue', 'vgl.garten': 'Jardin', 'vgl.erker': 'Bow-window', 'vgl.salon': 'Salon', 'vgl.kueche': 'Cuisine',
    'fkt.titel': 'Ce que fait Amphion',
    'fkt.1t': 'De vrais éléments de construction', 'fkt.1': 'Murs, dalles, poteaux, fenêtres, escaliers. Avec cotes, couches et quantités, pas seulement des surfaces.',
    'fkt.2t': 'Parler au lieu de cliquer', 'fkt.2': 'Dis ou écris ce que tu veux, en phrases entières. Amphion te comprend dans ta langue.',
    'fkt.3t': 'Export vers la CAO et le BIM', 'fkt.3': 'Le modèle passe aux logiciels de CAO et BIM courants ou à ton ingénieur structure.',
    'fkt.4t': 'Rendu sur ton Mac', 'fkt.4': 'Blender Cycles tourne en local, aussi souvent que tu veux. En plus, des rendus IA pour l’ambiance et la végétation.',
    'fkt.5t': 'Plans en PDF', 'fkt.5': 'Plans, coupes, façades et planches sortent directement du modèle.',
    'fkt.6t': 'Depuis ton téléphone et le terminal', 'fkt.6': 'Utilise-le dans le navigateur où que tu sois. Ou pilote-le depuis Claude Code, Codex et Gemini CLI.',
    'preis.titel': 'Trois formules', 'frei.name': 'Amphion Essai', 'frei.einheit': 'un mois, pour les 10 premiers', 'frei.l1': 'Toute l’app sur ton Mac : modélisation, plans, export', 'frei.l2': 'IA pour le modèle incluse, jusqu’à 80 phrases par mois ; illimitée avec ta propre clé (Gemini gratuit, Ollama en local)', 'frei.l3': 'Amphion Render illimité, sur ton Mac', 'frei.l4': 'Ensuite Pro pour 45 € par mois, ou tu arrêtes, tout simplement', 'frei.knopf': 'Télécharger Amphion', 'preis.einheit': 'par mois hors TVA',
    'preis.l1': 'IA pour le modèle, illimitée', 'preis.l2': '60 rendus IA par mois',
    'preis.l3': 'Rendu Blender illimité, sur ton Mac', 'preis.l4': 'Toutes les mises à jour',
    'preis.knopf': 'Démarrer l’abonnement',
    'studio.l1': 'Tout ce qu’offre Pro, sans limites : IA, rendus IA, recherche web',
    'studio.l2': 'Conseil personnel : un architecte par téléphone ou en vidéo dès que tu en as besoin',
    'studio.l3': 'Aide à la modélisation : nous construisons ou préparons ton projet avec toi',
    'studio.l4': 'Tes demandes pour Amphion passent en premier', 'studio.knopf': 'Demander Studio',
    'preis.studis': 'Étudiants et enseignants : Pro pour 15 € par mois avec une adresse e-mail universitaire. Écris-nous.', 'preis.garantie': 'Pas convaincu après le premier mois ? On te rembourse tout. Valable pour Pro et Studio.',
    'faq.titel': 'Questions',
    'faq.1f': 'De quoi ai-je besoin ?', 'faq.1': 'Un Mac avec macOS 13 ou plus récent et Internet pour l’IA. Pour les rendus, Amphion installe Blender depuis blender.org, un clic suffit.',
    'faq.2f': 'Existe-t-il une version Windows ?', 'faq.2': 'Pas encore. Amphion fonctionne sur Mac. Dis-nous si tu veux Windows, nous comptons les demandes.',
    'faq.3f': 'Où sont mes données ?', 'faq.3': 'Sur ton Mac. Projets, modèles et rendus restent en local. Seul le texte de ton chat part vers l’IA, et l’image pour un rendu IA si tu en demandes un.',
    'faq.4f': 'Ai-je besoin de ma propre clé IA ?', 'faq.4': 'Non. L’IA est incluse dans l’abonnement. Si tu as tes propres clés (OpenAI, Gemini, Groq, OpenRouter, Ollama), tu peux les saisir dans les Réglages.',
    'faq.5f': 'Dois-je connaître Blender ?', 'faq.5': 'Non. Amphion règle lui-même caméra, lumière et matériaux et lance Blender en arrière-plan. Tu ne vois que l’image.', 'faq.namef': 'Pourquoi le nom Amphion ?', 'faq.name': 'Dans le mythe grec, Amphion bâtit les murs de Thèbes sans soulever une pierre. Il chantait, et les pierres se mettaient en place d’elles-mêmes. C’est ainsi que tu travailles avec Amphion : tu parles, et le bâtiment prend forme.', titel: 'Amphion 3D · Logiciel d’architecture qui écoute',
    'faq.6f': 'Comment résilier ?', 'faq.6': 'À tout moment par e-mail. L’abonnement court jusqu’à la fin du mois, puis s’arrête. Tes fichiers restent à toi.',
    'fuss.impressum': 'Mentions légales', 'fuss.datenschutz': 'Confidentialité', 'fuss.kontakt': 'Contact'
  },
  it: {
    meta: 'Descrivi il tuo edificio. Amphion lo costruisce. Modellazione guidata dalla lingua per architetti, su Mac.',
    'nav.projekte': 'Progetti', 'nav.funktionen': 'Funzioni', 'nav.preis': 'Prezzi', 'nav.faq': 'Domande', 'nav.kaufen': 'Acquista',
    'held.titel1': 'Descrivi il tuo edificio.', 'held.titel2': 'Amphion lo costruisce.',
    'held.text': 'Uno schizzo, una pianta, un PDF, una foto o una frase: Amphion lo trasforma in veri elementi costruttivi, fa il rendering sul tuo Mac e produce i disegni.',
    'held.ladenArm': 'Scarica Amphion per Mac (Apple Silicon)', 'held.ladenX64': 'Scarica Amphion per Mac (Intel)',
    'held.klein': 'Un programma per Mac, macOS 13 o successivo. Il download è gratuito. I primi 10 clienti lo provano gratis per un mese, poi Amphion costa 45 € al mese. Dal telefono comandi Amphion nel browser mentre il tuo Mac è acceso. Non ti convince dopo il primo mese? Ti rimborsiamo tutto.', 'held.kaufen': 'Acquista una chiave',
    'bild.band': 'FIVE CLEARINGS dall’alto. Progetto, modello e immagine realizzati con Amphion.',
    'modell.titel': 'Parla con il modello', 'modell.text': 'Qui vedi due progetti finiti realizzati con Amphion: FIVE CLEARINGS con tutta la città, modellato in circa 5 ore, e la villa del 1913, in circa 2 ore. Puoi ruotarli, sezionarli, mostrare e nascondere parti e parlare con loro, ma non modificarli. Puoi costruire tu stesso nel cantiere: di’ cosa vuoi e Amphion lo costruisce. Tutto il resto, dalla trasformazione al render, si fa nell’app.', 'modell.reiterB': 'Cantiere: prova tu', 'chip.b1': 'Fai il tetto giallo', 'chip.b2': 'Metti un tetto gotico', 'chip.b3': 'Un piano in più', 'chip.b4': 'Una torre sull’angolo', 'chip.b5': 'Grandi finestre a sud', 'chip.b6': 'Annulla', 'chip.b7': 'Ricomincia', 'modell.steuerung': 'Trascina per ruotare · tasto destro o due dita per spostare · rotella o due dita per lo zoom, fino alla strada',
    'modell.frage': 'Di’ al modello cosa vuoi vedere …', 'modell.reiterM': 'Villa del 1913', 'modell.diktat': 'Detta', 'modell.fehler': 'Impossibile caricare il modello.',
    'chip.m1': 'Apri il piano terra', 'chip.m2': 'Com’era nel 1913?', 'chip.m3': 'Togli i vicini', 'chip.m4': 'Primo piano dall’alto, assonometria', 'chip.m5': 'Mostrami il giardino', 'chip.zurueck': 'Tutto come all’inizio',
    'chip.v1': 'Solo la struttura', 'chip.v2': 'Taglia a 60 metri', 'chip.v3': 'Senza la città', 'chip.v4': 'Scendi al basamento', 'chip.v5': 'Dall’alto, assonometria',
    'bild.app': 'Questo è Amphion: elementi e livelli a sinistra, il modello al centro, la chat a destra. Qui FIVE CLEARINGS con 69 510 elementi.',
    'schritte.titel': 'Come inizi',
    'schritte.1t': 'Scarica Amphion', 'schritte.1': 'Scarica il programma per Mac, trascinalo in Applicazioni, aprilo con il clic destro.',
    'schritte.2t': 'Provalo un mese', 'schritte.2': 'Al primo avvio Amphion si procura da solo la chiave di prova. Dopo un mese la chiave dell’abbonamento arriva per e-mail. Incollala e hai fatto.',
    'schritte.3t': 'Inizia come vuoi', 'schritte.3': 'Carica schizzi, disegni, PDF o foto, detta o scrivi. Da zero o da un progetto esistente. Amphion costruisce, tu modifichi, poi fai il rendering ed esporti i disegni in PDF.',
    'proj.titel': 'Fatto con Amphion',
    'proj.vanc': 'Grattacielo con cinque radure pubbliche, concorso 2026. Modello, rendering, disegni e tavole realizzati con Amphion.',
    'vanc.1': 'La torre sopra la città', 'vanc.2': 'Dal parco', 'vanc.3': 'Giardini pensili sul basamento', 'vanc.4': 'Terrazza nella torre', 'vanc.5': 'Angolo del basamento', 'vanc.6': 'Sulla strada', 'vanc.7': 'Radura nel basamento', 'vanc.8': 'Sezione attraverso la torre',
    'proj.muc': 'Ristrutturazione di una villa del 1913 con ampliamento, 2026. Stato di fatto, progetto, interni e piante in Amphion, concordati con il committente sulle immagini.', 'proj.muct': 'Villa del 1913',
    'muc.1': 'Angolo della strada', 'muc.2': 'Vista a volo d’uccello con l’ampliamento', 'muc.3': 'Assonometria, piano superiore aperto', 'muc.4': 'Terrazza sul tetto', 'muc.5': 'Salotto con stufa a legna', 'muc.6': 'Com’era nel 1913', 'muc.7': 'Pianta piano terra, ristrutturazione', 'muc.8': 'Pianta primo piano, ristrutturazione', 'muc.9': 'Pianta del sottotetto con terrazza', 'vgl.titel': 'Dal modello all’immagine', 'vgl.text': 'A sinistra la vista dal modello, a destra il render IA che Amphion ne ricava. Trascina il cursore.', 'vgl.links': 'Modello', 'vgl.rechts': 'Render IA', 'vgl.regler': 'Cursore tra modello e render', 'vgl.strasse': 'Strada', 'vgl.garten': 'Giardino', 'vgl.erker': 'Bovindo', 'vgl.salon': 'Salotto', 'vgl.kueche': 'Cucina',
    'fkt.titel': 'Cosa fa Amphion',
    'fkt.1t': 'Veri elementi costruttivi', 'fkt.1': 'Muri, solai, pilastri, finestre, scale. Con misure, strati e quantità, non solo superfici.',
    'fkt.2t': 'Parla invece di cliccare', 'fkt.2': 'Di’ o scrivi cosa vuoi, con frasi intere. Amphion ti capisce nella tua lingua.',
    'fkt.3t': 'Esportazione in CAD e BIM', 'fkt.3': 'Il modello passa ai comuni programmi CAD e BIM o al tuo ingegnere strutturista.',
    'fkt.4t': 'Rendering sul tuo Mac', 'fkt.4': 'Blender Cycles gira in locale, tutte le volte che vuoi. In più rendering con IA per atmosfera e vegetazione.',
    'fkt.5t': 'Disegni in PDF', 'fkt.5': 'Piante, sezioni, prospetti e tavole escono direttamente dal modello.',
    'fkt.6t': 'Dal telefono e dal terminale', 'fkt.6': 'Usalo nel browser ovunque tu sia. Oppure comandalo da Claude Code, Codex e Gemini CLI.',
    'preis.titel': 'Tre piani', 'frei.name': 'Amphion Prova', 'frei.einheit': 'un mese, per i primi 10', 'frei.l1': 'Tutta l’app sul tuo Mac: modellazione, disegni, esportazione', 'frei.l2': 'IA per il modello inclusa, fino a 80 frasi al mese; illimitata con la tua chiave (Gemini gratis, Ollama in locale)', 'frei.l3': 'Amphion Render illimitato, sul tuo Mac', 'frei.l4': 'Poi Pro a 45 € al mese, oppure smetti e basta', 'frei.knopf': 'Scarica Amphion', 'preis.einheit': 'al mese più IVA',
    'preis.l1': 'IA per il modello, illimitata', 'preis.l2': '60 rendering con IA al mese',
    'preis.l3': 'Rendering con Blender illimitato, sul tuo Mac', 'preis.l4': 'Tutti gli aggiornamenti',
    'preis.knopf': 'Inizia l’abbonamento',
    'studio.l1': 'Tutto quello che c’è in Pro, senza limiti: IA, rendering con IA, ricerca web',
    'studio.l2': 'Consulenza personale: un architetto al telefono o in video quando ti serve',
    'studio.l3': 'Aiuto nella modellazione: costruiamo o impostiamo il tuo progetto con te',
    'studio.l4': 'Le tue richieste per Amphion hanno la precedenza', 'studio.knopf': 'Richiedi Studio',
    'preis.studis': 'Studenti e docenti: Pro a 15 € al mese con un’e-mail universitaria. Scrivici.', 'preis.garantie': 'Non ti convince dopo il primo mese? Ti rimborsiamo tutto. Vale per Pro e Studio.',
    'faq.titel': 'Domande',
    'faq.1f': 'Di cosa ho bisogno?', 'faq.1': 'Un Mac con macOS 13 o successivo e internet per l’IA. Per i rendering Amphion installa Blender da blender.org, basta un clic.',
    'faq.2f': 'Esiste una versione per Windows?', 'faq.2': 'Non ancora. Amphion funziona su Mac. Scrivici se vuoi Windows, teniamo il conto.',
    'faq.3f': 'Dove sono i miei dati?', 'faq.3': 'Sul tuo Mac. Progetti, modelli e rendering restano in locale. All’IA va solo il testo della tua chat e, se lo chiedi, l’immagine per un rendering con IA.',
    'faq.4f': 'Mi serve una mia chiave IA?', 'faq.4': 'No. L’IA è inclusa nell’abbonamento. Se hai chiavi tue (OpenAI, Gemini, Groq, OpenRouter, Ollama), puoi inserirle nelle Impostazioni.',
    'faq.5f': 'Devo saper usare Blender?', 'faq.5': 'No. Amphion imposta da solo camera, luce e materiali e avvia Blender in background. Tu vedi solo l’immagine.', 'faq.namef': 'Perché si chiama Amphion?', 'faq.name': 'Nel mito greco Anfione costruì le mura di Tebe senza sollevare una pietra. Cantava, e le pietre si mettevano al loro posto da sole. Così lavori con Amphion: parli, e l’edificio prende forma.', titel: 'Amphion 3D · Software di architettura che ascolta',
    'faq.6f': 'Come disdico?', 'faq.6': 'In qualsiasi momento con un’e-mail. L’abbonamento dura fino a fine mese, poi si ferma. I tuoi file restano tuoi.',
    'fuss.impressum': 'Note legali', 'fuss.datenschutz': 'Privacy', 'fuss.kontakt': 'Contatti'
  },
  pt: {
    meta: 'Descreve o teu edifício. O Amphion constrói-o. Modelação por linguagem para arquitetos, no Mac.',
    'nav.projekte': 'Projetos', 'nav.funktionen': 'Funções', 'nav.preis': 'Preço', 'nav.faq': 'Perguntas', 'nav.kaufen': 'Comprar',
    'held.titel1': 'Descreve o teu edifício.', 'held.titel2': 'O Amphion constrói-o.',
    'held.text': 'Um esboço, uma planta, um PDF, uma foto ou uma frase: o Amphion transforma-o em elementos construtivos reais, faz o render no teu Mac e gera os desenhos.',
    'held.ladenArm': 'Descarregar o Amphion para Mac (Apple Silicon)', 'held.ladenX64': 'Descarregar o Amphion para Mac (Intel)',
    'held.klein': 'Um programa para Mac, macOS 13 ou posterior. O download é gratuito. Os 10 primeiros clientes experimentam grátis durante um mês, depois o Amphion custa 45 € por mês. No telefone controlas o Amphion no navegador enquanto o teu Mac está ligado. Não te convenceu após o primeiro mês? Devolvemos tudo.', 'held.kaufen': 'Comprar uma chave',
    'bild.band': 'FIVE CLEARINGS visto do ar. Projeto, modelo e imagem feitos no Amphion.',
    'modell.titel': 'Fala com o modelo', 'modell.text': 'Aqui vês dois projetos terminados feitos com o Amphion: o FIVE CLEARINGS com a cidade inteira, modelado em cerca de 5 horas, e a villa de 1913, em cerca de 2 horas. Podes rodá-los, cortá-los, mostrar e ocultar partes e falar com eles, mas não alterá-los. Podes construir tu mesmo na obra: diz o que queres e o Amphion constrói. Tudo o resto, da transformação ao render, faz-se na app.', 'modell.reiterB': 'Obra: experimenta', 'chip.b1': 'Pinta o telhado de amarelo', 'chip.b2': 'Põe um telhado gótico', 'chip.b3': 'Mais um piso', 'chip.b4': 'Uma torre na esquina', 'chip.b5': 'Janelas grandes a sul', 'chip.b6': 'Desfazer', 'chip.b7': 'Recomeçar', 'modell.steuerung': 'Arrasta para rodar · botão direito ou dois dedos para deslocar · roda do rato ou dois dedos para fazer zoom, até à rua',
    'modell.frage': 'Diz ao modelo o que queres ver …', 'modell.reiterM': 'Villa de 1913', 'modell.diktat': 'Ditar', 'modell.fehler': 'Não foi possível carregar o modelo.',
    'chip.m1': 'Abre o piso térreo', 'chip.m2': 'Como era em 1913?', 'chip.m3': 'Tira os vizinhos', 'chip.m4': 'Primeiro andar visto de cima, axonometria', 'chip.m5': 'Mostra-me o jardim', 'chip.zurueck': 'Tudo como no início',
    'chip.v1': 'Só a estrutura', 'chip.v2': 'Corta a 60 metros', 'chip.v3': 'Sem a cidade', 'chip.v4': 'Desce até ao embasamento', 'chip.v5': 'De cima, axonometria',
    'bild.app': 'Isto é o Amphion: elementos e camadas à esquerda, o modelo ao centro, o chat à direita. Aqui FIVE CLEARINGS com 69 510 elementos.',
    'schritte.titel': 'Como começas',
    'schritte.1t': 'Descarregar o Amphion', 'schritte.1': 'Descarrega o programa para Mac, arrasta-o para Aplicações, abre-o com o botão direito.',
    'schritte.2t': 'Experimenta um mês', 'schritte.2': 'Ao abrir pela primeira vez, o Amphion obtém sozinho a chave de teste. Após um mês, a chave da assinatura chega por e-mail. Cola-a e pronto.',
    'schritte.3t': 'Começa como quiseres', 'schritte.3': 'Carrega esboços, desenhos, PDF ou fotos, dita ou escreve. Do zero ou a partir de um projeto existente. O Amphion constrói, tu ajustas, depois fazes o render e exportas os desenhos em PDF.',
    'proj.titel': 'Feito com o Amphion',
    'proj.vanc': 'Torre com cinco clareiras públicas, concurso 2026. Modelo, renders, desenhos e painéis feitos no Amphion.',
    'vanc.1': 'A torre sobre a cidade', 'vanc.2': 'A partir do parque', 'vanc.3': 'Jardins na cobertura do embasamento', 'vanc.4': 'Terraço na torre', 'vanc.5': 'Esquina do embasamento', 'vanc.6': 'Na rua', 'vanc.7': 'Clareira no embasamento', 'vanc.8': 'Corte pela torre',
    'proj.muc': 'Reabilitação de uma villa de 1913 com ampliação, 2026. Existente, proposta, interiores e plantas no Amphion, acordados com o cliente sobre as imagens.', 'proj.muct': 'Villa de 1913',
    'muc.1': 'Esquina da rua', 'muc.2': 'Vista aérea com a ampliação', 'muc.3': 'Axonometria, piso superior aberto', 'muc.4': 'Terraço na cobertura', 'muc.5': 'Sala com fogão a lenha', 'muc.6': 'Como era em 1913', 'muc.7': 'Planta do rés-do-chão, remodelação', 'muc.8': 'Planta do piso superior, remodelação', 'muc.9': 'Planta do sótão com terraço', 'vgl.titel': 'Do modelo à imagem', 'vgl.text': 'À esquerda a vista do modelo, à direita o render com IA que o Amphion faz a partir dela. Arrasta o cursor.', 'vgl.links': 'Modelo', 'vgl.rechts': 'Render IA', 'vgl.regler': 'Cursor entre modelo e render', 'vgl.strasse': 'Rua', 'vgl.garten': 'Jardim', 'vgl.erker': 'Janela saliente', 'vgl.salon': 'Sala', 'vgl.kueche': 'Cozinha',
    'fkt.titel': 'O que o Amphion faz',
    'fkt.1t': 'Elementos construtivos reais', 'fkt.1': 'Paredes, lajes, pilares, janelas, escadas. Com medidas, camadas e quantidades, não só superfícies.',
    'fkt.2t': 'Fala em vez de clicar', 'fkt.2': 'Diz ou escreve o que queres, em frases inteiras. O Amphion entende-te na tua língua.',
    'fkt.3t': 'Exportar para CAD e BIM', 'fkt.3': 'O modelo passa para os programas CAD e BIM habituais ou para o teu engenheiro de estruturas.',
    'fkt.4t': 'Render no teu Mac', 'fkt.4': 'O Blender Cycles corre em local, sempre que quiseres. E ainda renders com IA para ambiente e vegetação.',
    'fkt.5t': 'Desenhos em PDF', 'fkt.5': 'Plantas, cortes, fachadas e painéis saem diretamente do modelo.',
    'fkt.6t': 'No telefone e no terminal', 'fkt.6': 'Usa-o no navegador onde estiveres. Ou controla-o a partir do Claude Code, Codex e Gemini CLI.',
    'preis.titel': 'Três planos', 'frei.name': 'Amphion Teste', 'frei.einheit': 'um mês, para os 10 primeiros', 'frei.l1': 'A app inteira no teu Mac: modelação, desenhos, exportação', 'frei.l2': 'IA para o modelo incluída, até 80 frases por mês; sem limite com a tua própria chave (Gemini grátis, Ollama local)', 'frei.l3': 'Amphion Render sem limite, no teu Mac', 'frei.l4': 'Depois Pro por 45 € por mês, ou simplesmente paras', 'frei.knopf': 'Descarregar o Amphion', 'preis.einheit': 'por mês mais IVA',
    'preis.l1': 'IA para o modelo, sem limite', 'preis.l2': '60 renders com IA por mês',
    'preis.l3': 'Render com Blender sem limite, no teu Mac', 'preis.l4': 'Todas as atualizações',
    'preis.knopf': 'Começar assinatura',
    'studio.l1': 'Tudo do Pro, sem limites: IA, renders com IA, pesquisa na web',
    'studio.l2': 'Aconselhamento pessoal: um arquiteto por telefone ou vídeo quando precisares',
    'studio.l3': 'Ajuda na modelação: construímos ou preparamos o teu projeto contigo',
    'studio.l4': 'Os teus pedidos para o Amphion vêm primeiro', 'studio.knopf': 'Pedir Studio',
    'preis.studis': 'Estudantes e professores: Pro por 15 € por mês com um e-mail universitário. Escreve-nos.', 'preis.garantie': 'Não te convenceu após o primeiro mês? Devolvemos tudo. Vale para Pro e Studio.',
    'faq.titel': 'Perguntas',
    'faq.1f': 'Do que preciso?', 'faq.1': 'Um Mac com macOS 13 ou posterior e internet para a IA. Para renders, o Amphion instala o Blender a partir de blender.org, basta um clique.',
    'faq.2f': 'Há versão para Windows?', 'faq.2': 'Ainda não. O Amphion funciona no Mac. Escreve-nos se queres Windows, estamos a contar os pedidos.',
    'faq.3f': 'Onde estão os meus dados?', 'faq.3': 'No teu Mac. Projetos, modelos e renders ficam em local. Para a IA vai só o texto do teu chat e, se pedires, a imagem para um render com IA.',
    'faq.4f': 'Preciso da minha própria chave de IA?', 'faq.4': 'Não. A IA está incluída na assinatura. Se tiveres chaves próprias (OpenAI, Gemini, Groq, OpenRouter, Ollama), podes introduzi-las nas Definições.',
    'faq.5f': 'Tenho de saber usar o Blender?', 'faq.5': 'Não. O Amphion ajusta sozinho câmara, luz e materiais e executa o Blender em segundo plano. Tu só vês a imagem.', 'faq.namef': 'Porque se chama Amphion?', 'faq.name': 'No mito grego, Anfião ergueu as muralhas de Tebas sem levantar uma pedra. Cantava, e as pedras colocavam-se sozinhas no lugar. É assim que trabalhas com o Amphion: falas, e o edifício ganha forma.', titel: 'Amphion 3D · Software de arquitetura que escuta',
    'faq.6f': 'Como cancelo?', 'faq.6': 'A qualquer momento com um e-mail. A assinatura continua até ao fim do mês e depois termina. Os teus ficheiros ficam contigo.',
    'fuss.impressum': 'Aviso legal', 'fuss.datenschutz': 'Privacidade', 'fuss.kontakt': 'Contacto'
  }
};

// Sprache: ?lang= in der Adresse, sonst die Wahl aus diesem Besuch, sonst die Sprache des Geräts (Browsersprachen der Reihe nach), sonst Englisch.
// Die Wahl gilt nur für den Besuch (sessionStorage): beim nächsten Mal zählt wieder die Sprache des Geräts.
function spracheWaehlen() {
  const url = new URLSearchParams(location.search).get('lang');
  if (url && TEXTE[url]) return url;
  try { const g = sessionStorage.getItem('forma.lang'); if (g && TEXTE[g]) return g; } catch {}
  for (const l of navigator.languages || [navigator.language || 'en']) { const k = l.slice(0, 2).toLowerCase(); if (TEXTE[k]) return k; }
  return 'en';
}

function anwenden(lang, merken) {
  const t = TEXTE[lang];
  document.documentElement.lang = lang;
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const s = t[el.dataset.i18n]; if (s == null) continue;
    if (el.tagName === 'META') el.content = s; else el.textContent = s;
  }
  for (const el of document.querySelectorAll('[data-i18n-alt]')) { const s = t[el.dataset.i18nAlt]; if (s) el.alt = s; }
  for (const el of document.querySelectorAll('[data-i18n-ph]')) { const s = t[el.dataset.i18nPh]; if (s) el.placeholder = s; }
  for (const el of document.querySelectorAll('[data-i18n-aria]')) { const s = t[el.dataset.i18nAria]; if (s) { el.setAttribute('aria-label', s); el.title = s; } }
  for (const el of document.querySelectorAll('[data-sprache]')) el.classList.toggle('on', el.dataset.sprache === lang);   // ganze Textblöcke (Impressum, Datenschutz)
  for (const b of document.querySelectorAll('.sprachen button')) b.classList.toggle('on', b.dataset.lang === lang);
  if (merken) try { sessionStorage.setItem('forma.lang', lang); } catch {}
}

const alle = (sel, f) => { for (const el of document.querySelectorAll(sel)) f(el); };
alle('[data-produkt]', el => el.textContent = PRODUKT);
alle('[data-i18n]', el => el.textContent = el.textContent.replaceAll('Amphion', PRODUKT));
alle('[data-download="arm"]', el => el.href = DOWNLOAD_ARM);
alle('[data-download="x64"]', el => el.href = DOWNLOAD_X64);
alle('[data-checkout]', el => el.href = CHECKOUT[el.dataset.checkout] || CHECKOUT.pro);
alle('[data-jahr]', el => el.textContent = new Date().getFullYear());
for (const lang of Object.keys(TEXTE)) for (const k of Object.keys(TEXTE[lang])) TEXTE[lang][k] = TEXTE[lang][k].replaceAll('Amphion', PRODUKT);

anwenden(spracheWaehlen(), false);

// Besucherstatistik (2.11., Tassilo: Analytics an): ein Aufruf je Seite und je Ereignis an die Amphion Cloud, ohne Cookie, ohne Kennung; der Worker speichert
// nur Tag, Seite, Sprache, Land, Gerät und den Host des Verweises. window.formaZaehl('laden') zählt ein Ereignis (auch aus betrachter.js).
const STATISTIK = 'https://cloud.amphion3d.com/besuch';
window.formaZaehl = art => { try { const q = (document.referrer && new URL(document.referrer).host !== location.host) ? new URL(document.referrer).host : '';
  const d = JSON.stringify({ art, seite: location.pathname, sprache: document.documentElement.lang, quelle: q });
  if (!(navigator.sendBeacon && navigator.sendBeacon(STATISTIK, new Blob([d], { type: 'text/plain' })))) fetch(STATISTIK, { method: 'POST', body: d, keepalive: true }).catch(() => {}); } catch {} };
if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') window.formaZaehl('seite');
// Film im App-Bild (2.11., Tassilo: soll von selbst laufen): autoplay reicht nicht überall (Stromsparmodus, Datensparen), darum beim Laden, beim Erscheinen
// im Bild und bei der ersten Berührung noch einmal play() ohne Ton versuchen
// Vergleich Modell und KI-Rendering: Regler setzt --x, Knöpfe wechseln das Bildpaar, beim ersten Erscheinen schwingt der Griff einmal (zeigt, dass man ziehen kann)
const mitStempel = p => window.AMPHION_DATEIEN?.[p] ? `${p}?v=${window.AMPHION_DATEIEN[p]}` : p;
for (const v of document.querySelectorAll('.vergleich')) {
  const buehne = v.querySelector('.vgl-buehne'), regler = v.querySelector('.vgl-regler'), setze = () => buehne.style.setProperty('--x', regler.value + '%');
  regler.addEventListener('input', setze); setze();
  for (const k of v.querySelectorAll('[data-paar]')) k.addEventListener('click', () => {
    const n = k.dataset.paar; v.querySelector('.vgl-bild').src = mitStempel(`bilder/vergleich_${n}_rendering.jpg`); v.querySelector('.vgl-vorne').src = mitStempel(`bilder/vergleich_${n}_viewport.jpg`);
    for (const x of v.querySelectorAll('[data-paar]')) x.classList.toggle('on', x === k); regler.value = 50; setze(); window.formaZaehl?.('vergleich');
  });
  const schwing = new IntersectionObserver(es => {
    if (!es.some(e => e.isIntersecting)) return; schwing.disconnect();
    const t0 = performance.now(), lauf = t => { const u = (t - t0) / 1600; if (u >= 1) { regler.value = 50; setze(); return; } regler.value = 50 + 22 * Math.sin(u * Math.PI * 2) * (1 - u); setze(); requestAnimationFrame(lauf); };
    setTimeout(() => requestAnimationFrame(lauf), 400);
  }, { threshold: 0.6 });
  schwing.observe(buehne);
}
const film = document.querySelector('.app video');
if (film) {
  // 2.11. (Tassilo: mehr Pixel): 1440 px für große Bildschirme, 800 px fürs Handy (spart die Hälfte der Daten)
  film.src = matchMedia('(max-width: 760px)').matches || (navigator.connection && navigator.connection.saveData) ? film.dataset.klein : film.dataset.gross;
  const spielen = () => { film.muted = true; const p = film.play(); if (p) p.catch(() => {}); };
  spielen(); film.addEventListener('loadeddata', spielen);
  new IntersectionObserver(es => { if (es.some(e => e.isIntersecting) && film.paused) spielen(); }, { threshold: 0.2 }).observe(film);
  for (const ev of ['touchstart', 'click', 'scroll', 'keydown']) document.addEventListener(ev, () => { if (film.paused) spielen(); }, { once: true, passive: true });
}
document.addEventListener('click', e => { const a = e.target.closest('a[data-download],a[data-checkout]'); if (a) window.formaZaehl(a.dataset.download ? 'laden' : 'kaufen:' + a.dataset.checkout); });
document.querySelector('.sprachen')?.addEventListener('click', e => { const b = e.target.closest('button[data-lang]'); if (b) anwenden(b.dataset.lang, true); });
