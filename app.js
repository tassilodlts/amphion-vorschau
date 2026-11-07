// Amphion · Website: Sprache (de, en, es) automatisch nach Browser, Konstanten für Name und Links. Kein Framework.
'use strict';

const PRODUKT = 'Amphion';          // Name, später austauschbar
const DOWNLOAD_ARM = 'https://github.com/tassilodlts/forma-app/releases/latest/download/Amphion-Mac-Apple-Silicon.dmg';         // Mac, Apple Silicon (.dmg)
const DOWNLOAD_X64 = 'https://github.com/tassilodlts/forma-app/releases/latest/download/Amphion-Mac-Intel.dmg';         // Mac, Intel (.dmg)
const DOWNLOAD_WIN = 'https://github.com/tassilodlts/forma-app/releases/latest/download/Amphion-Windows.exe';         // Windows 10 und 11, 64 Bit (Installer)
const CHECKOUT = { basis: '#abo', pro: '#abo', buero: '#abo', privat: '#abo', wahl: '#preis' };   // 5.11. (Preisentscheidung Tassilo): Amphion 49/490, Pro 149/1 490, Büro 399/3 990 für 3 Plätze, jeder weitere 129; Kauf über Stripe, sonst das Formular   // Abo starten: Formular (3.11., Tassilo: „Schlüssel kaufen funktioniert nicht“; Zahlungsdienst folgt), Studio per Mail
const CLOUD = 'https://cloud.amphion3d.com';

const TEXTE = {
  de: {
    'aria.senden': 'Senden', 'aria.cta': 'Amphion laden oder kaufen', 'aria.zu': 'Schließen', 'aria.periode': 'Abrechnung',
    'privat.preisText': 'je nachdem, was du brauchst',
    'privat.preis': 'Auf Anfrage',
    'mehr.bild': 'Aus dem Modell gezeichnet: Grundriss Erdgeschoss des Hauses mit Garten.',
    'mehr.l4': 'Renderings auf deinem Computer, so oft du willst',
    'mehr.l3': 'IFC für BIM und Fachplaner, 3dm für die Weiterarbeit, STEP für Freiformkörper',
    'mehr.l2': 'Grundrisse, Schnitte und Ansichten im Maßstab, als PDF und DXF',
    'mehr.l1': 'Modell aus Bauteilen mit Maßen, Geschossen und Materialien',
    'mehr.chat': 'Text und Bilder. Keine Bauteile, kein Maßstab, keine Datei zum Weiterarbeiten.',
    'mehr.chatT': 'KI-Chat',
    'mehr.text': 'Ein KI-Chat beschreibt dir ein Haus in Worten und Bildern. Amphion baut es: ein Modell aus echten Bauteilen, Wände, Decken, Fenster und Treppen mit Maß und Material. Daraus zeichnet Amphion maßstäbliche Pläne, und dein Büro und deine Fachplaner arbeiten mit den Dateien weiter.',
    'mehr.titel': 'Mehr als ein KI-Chat',
    'aktion.oderKaufen': 'Gleich kaufen: Plan wählen',
    'aktion.probeText': 'Ohne Kreditkarte. Amphion laden, öffnen und „30 Tage gratis testen“ wählen. Danach ein Plan nach Wahl, monatlich kündbar.',
    'held.probe': '30 Tage gratis testen',
    'aktion.probe': '30 Tage gratis testen',
    'proj.vanct': "Hochhaus am Wasser",
    'held.fuer': "Für Architektinnen und Architekten im eigenen Büro",
    'held.vertrauen': 'Projekte bleiben auf deinem Computer · 30 Tage gratis, ohne Kreditkarte · Monatlich kündbar',
    'held.teilen': "Am Handy? Link an den Computer schicken",
    'privat.l5': 'Schreib uns, was du vorhast. Wir sagen dir, wie wir helfen und was es kostet.',
    'preis.einheitNurMonat': "im Monat zzgl. MwSt., nur monatlich",
    'faq.8f': "Ersetzt Amphion mein CAD-Programm?",
    'faq.8': "Ja, für Entwurf, Bestand, Bauantrag und Werkpläne. Amphion zeichnet Grundrisse, Schnitte, Ansichten, Elektro- und Heizpläne und Details aus dem Modell, druckfertig. Von Hand zeichnest du mit Fang, Bemaßung und Schraffur wie im CAD. Für Fachplaner geht das Modell als IFC oder als DXF mit Layern hinaus.",
    'faq.9f': "Lohnt sich das für ein Ein-Personen-Büro?",
    'faq.9': "Rechne mit deinen eigenen Zahlen. Amphion zeichnet aus dem Modell den ganzen Plansatz: Grundrisse, Elektro- und Heizplan, Schnitt, Ansicht und Detailblätter für Küche und Bäder, bemaßt und beschriftet. Für ein importiertes Einfamilienhaus haben wir 16 Blätter in rund zwei Minuten gemessen. Du sparst die Zeit, die du heute mit Zeichnen, Bemaßen und Beschriften verbringst. Sind das im Monat ein bis zwei Stunden, hat sich Amphion bezahlt. Und wenn nicht: Im ersten Monat bekommst du alles zurück.",
    'abo.textPrivat': 'Schreib uns deine E-Mail-Adresse und kurz dein Projekt. Wir melden uns am selben Tag für ein Gespräch.',
    'abo.titelPrivat': 'Amphion Privat anfragen',
    'privat.knopf': 'Kontakt aufnehmen',
    'privat.l4': 'Alles aus Pro, ohne Grenzen',
    'privat.l3': 'Ein fester Ansprechpartner, am Telefon, per Video oder vor Ort',
    'privat.l2': 'Maximale Geschwindigkeit: Antwort am selben Tag, Ergebnisse über Nacht',
    'privat.l1': 'Architekten arbeiten für dich: Bestand aufnehmen, Modell, Varianten, Pläne und Renderings vorbereitet',
    'privat.fuer': 'private Assistenz',
    'preis.schreibUns': 'Schreib uns.',
    'preis.begleitung': 'Persönliche Begleitung und Modellierungshilfe für dein Projekt: auf Anfrage.',
    'preis.schreib': 'Kurz schreiben.',
    'preis.einheitJahr': 'im Jahr zzgl. MwSt.',
    'preis.einheitMonat': 'im Monat zzgl. MwSt.',
    'preis.jaehrlich': 'Jährlich: 2 Monate geschenkt',
    'preis.monatlich': 'Monatlich',
    'preis.gruender': 'von 100 Gründungsplätzen frei: Wer jetzt kauft, behält seinen Preis für immer.',
    'cta.titel': 'Probier es mit deinem eigenen Projekt.', 'cta.laden': 'Amphion laden', 'cta.kaufen': 'Plan wählen', 'cta.klein': "Laden kostenlos. Im ersten Monat Geld zurück, monatlich kündbar.", 'cta.andere': 'Anderer Computer?',
    'aktion.preis': "Vier Pläne für dein Büro. Im ersten Monat Geld zurück, monatlich kündbar.",
    'aktion.kaufen': 'Schlüssel kaufen',
    'aktion.ladenKlein': 'kostenlos',
    'aktion.laden': 'Herunterladen',
    meta: 'Beschreib, was du brauchst. Amphion modelliert es in 3D. Modellieren mit Sprache, für Mac und Windows.',
    'nav.projekte': 'Projekte', 'nav.funktionen': 'Funktionen', 'nav.preis': 'Preis', 'nav.faq': 'Fragen', 'nav.kaufen': 'Kaufen',
    'held.titel1': 'Beschreib es.', 'held.titel2': 'Amphion modelliert es.',
    'held.text': "Aus Bestandsplan, Skizze, Foto oder einem Satz wird ein echtes 3D-Modell mit Wänden, Decken und Fenstern. Amphion rendert auf deinem Computer und zeichnet Grundrisse, Schnitte und Ansichten. Du entwirfst, Amphion zeichnet.",
    'abo.titel': "Abo starten", 'abo.text': "Schreib uns deine E-Mail-Adresse. Du bekommst innerhalb eines Tages den Lizenzschlüssel und die Rechnung. Der Schlüssel gilt für einen Computer; wechseln kannst du ihn jederzeit unter „Mein Konto“.", 'abo.email': "E-Mail-Adresse", 'abo.name': "Name oder Büro (freiwillig)", 'abo.senden': "Schlüssel anfordern", 'abo.danke': "Danke. Du hörst innerhalb eines Tages von uns, an {email}.", 'abo.fehler': "Das hat nicht geklappt. Schreib direkt an hello@amphion3d.com.", 'nav.konto': "Mein Konto",
    'held.ladenArm': 'Mac · Apple Silicon', 'held.ladenX64': 'Mac · Intel', 'held.ladenWin': 'Windows 10 und 11',
    'held.klein': 'Für Mac (macOS 14 oder neuer) und Windows (10 und 11). Den Schlüssel trägst du in Amphion ein. Vom Handy aus bedienst du Amphion im Browser, solange dein Computer läuft.', 'held.kaufen': 'Plan wählen',
    'bild.band': "Das Hochhaus am Wasser aus der Luft. Entwurf, Modell und Bild aus Amphion.",
    'modell.titel': 'Sprich mit dem Modell', 'modell.text': "Zwei fertige Projekte aus Amphion: ein Haus mit Garten von 1913 mit seinem Umbau, in rund 2 Stunden modelliert, und ein Hochhaus am Wasser mit der ganzen Stadt, in rund 5 Stunden. Du kannst sie drehen, schneiden, ein- und ausblenden und mit ihnen sprechen. Ändern und rendern machst du in der App.", 'modell.reiterB': 'Bauplatz: selbst bauen', 'chip.b1': 'Mach das Dach gelb', 'chip.b2': 'Setz ein gotisches Dach drauf', 'chip.b3': 'Noch ein Geschoss', 'chip.b4': 'Ein Turm an der Ecke', 'chip.b5': 'Große Fenster nach Süden', 'chip.b6': 'Rückgängig', 'chip.b7': 'Neu anfangen', 'modell.steuerung': 'Ziehen dreht · rechte Maustaste oder zwei Finger verschieben · Mausrad oder zwei Finger zoomen, bis hinunter auf die Straße',
    'modell.frage': 'Sag dem Modell, was du sehen willst …', 'modell.reiterV': 'Hochhaus am Wasser', 'modell.reiterM': 'Haus mit Garten', 'modell.diktat': 'Diktieren', 'modell.fehler': 'Modell konnte nicht geladen werden.',
    'chip.m1': 'Schneide das Erdgeschoss auf', 'chip.m2': 'Wie sah es 1913 aus?', 'chip.m3': 'Nimm die Nachbarn weg', 'chip.m4': 'Obergeschoss von oben, axonometrisch', 'chip.m5': 'Zeig mir den Garten', 'chip.zurueck': 'Alles zurück',
    'chip.v1': 'Nur das Tragwerk', 'chip.v2': 'Schneide bei 60 Metern', 'chip.v3': 'Ohne die Stadt', 'chip.v4': 'Runter auf den Sockel', 'chip.v5': 'Von oben, axonometrisch', 'chip.v6': 'Zeig die eigene Stadt', 'chip.v7': 'Zeig die echte Stadt',
    'bild.app': "So sieht Amphion aus: Bauteile und Ebenen links, das Modell in der Mitte, der Chat rechts. Hier ein Hochhaus am Wasser mit 69 510 Bauteilen.",
    'schritte.titel': 'So fängst du an',
    'schritte.1t': 'Amphion laden', 'schritte.1': 'Amphion laden und öffnen. Mac: in den Ordner Programme ziehen und starten, Amphion ist bei Apple signiert. Windows: Installer starten, beim ersten Mal „Weitere Informationen“ und „Trotzdem ausführen“.',
    'schritte.2t': 'Gratis testen oder Schlüssel eintragen', 'schritte.2': 'Beim ersten Start: „30 Tage gratis testen“ wählen oder deinen Schlüssel eintragen, dann das Beispiel öffnen. Das Handy verbindest du mit einem Code.', 'held.mac': 'Welcher Mac? Apple-Menü, „Über diesen Mac“: Steht dort „Chip Apple M…“, nimm Apple Silicon, sonst Intel.',
    'schritte.3t': 'Anfangen, wie du willst', 'schritte.3': 'Lade Skizzen, Pläne, PDFs oder Fotos hoch, diktier oder schreib. Von null oder aus einem bestehenden Projekt. Amphion baut, du änderst, dann rendern und Pläne als PDF.',
    'proj.titel': 'Gebaut mit Amphion',
    'proj.vanc': 'Hochhaus mit fünf öffentlichen Lichtungen, Wettbewerb 2026. Modell, Renderings, Pläne und Tafeln aus Amphion.',
    'vanc.1': 'Der Turm über der Stadt', 'vanc.2': 'Vom Park aus', 'vanc.3': 'Dachgärten auf dem Sockel', 'vanc.4': 'Terrasse im Turm', 'vanc.5': 'Ecke des Sockels', 'vanc.6': 'An der Straße', 'vanc.7': 'Lichtung im Sockel', 'vanc.8': 'Schnitt durch den Turm, aus dem Modell gezeichnet',
    'proj.muc': 'Umbau einer Villa von 1913 mit Anbau, 2026. Bestand, Entwurf, Innenräume und Grundrisse in Amphion, Abstimmung mit dem Bauherrn an den Bildern.', 'proj.muct': 'Villa von 1913',
    'muc.1': 'Straßenecke', 'muc.2': 'Vogelperspektive mit Anbau', 'muc.3': 'Axonometrie, Obergeschoss offen', 'muc.4': 'Dachterrasse', 'muc.5': 'Salon mit Kaminofen', 'muc.6': 'So war es 1913', 'muc.7': 'Grundriss Erdgeschoss, Umbau', 'muc.8': 'Grundriss Obergeschoss, Umbau', 'muc.9': 'Grundriss Dachgeschoss mit Dachterrasse', 'vgl.titel': 'Vom Modell zum Bild', 'vgl.text': 'Links die Ansicht aus dem Modell, rechts das KI-Rendering, das Amphion daraus macht. Zieh den Regler.', 'vgl.links': 'Modell', 'vgl.rechts': 'KI-Rendering', 'vgl.regler': 'Regler zwischen Modell und Rendering', 'vgl.strasse': 'Straße', 'vgl.garten': 'Garten', 'vgl.erker': 'Erker', 'vgl.salon': 'Salon', 'vgl.kueche': 'Küche',
    'fkt.titel': 'Was Amphion kann',
    'fkt.1t': 'Echte Bauteile', 'fkt.1': 'Wände, Decken, Stützen, Fenster, Treppen. Mit Maßen, Schichten und Mengen, nicht nur Flächen.',
    'fkt.2t': 'Sprechen statt klicken', 'fkt.2': 'Du sagst oder schreibst, was du willst, in ganzen Sätzen. Amphion versteht dich in deiner Sprache.',
    'fkt.3t': 'Export für CAD und BIM', 'fkt.3': 'Das Modell geht weiter in die gängigen CAD- und BIM-Programme oder zum Tragwerksplaner.',
    'fkt.4t': 'Rendering auf deinem Computer', 'fkt.4': 'Blender Cycles läuft lokal, so oft du willst, ohne Zusatzkosten.',
    'fkt.5t': 'Pläne als PDF', 'fkt.5': 'Grundrisse, Schnitte, Ansichten und Tafeln kommen fertig aus dem Modell.',
    'fkt.6t': 'Vom Handy und aus dem Terminal', 'fkt.6': 'Unterwegs im Browser bedienen. Oder aus Claude Code, Codex und Gemini CLI steuern.',
    'preis.titel': 'Vier Pläne', 'preis.einheit': 'im Monat zzgl. MwSt.',
    // Vier Pläne (Preisentscheidung Tassilo 5.11.2026): Amphion mit einfacher KI, Amphion Pro, Büro ab 3 Plätzen, Privat
    'basis.fuer': 'einfache KI',
    'basis.l1': 'Modellieren von Hand und mit Sprache, Import von Plänen und Modellen',
    'basis.l2': 'Grundrisse, Schnitte, Ansichten als PDF',
    'basis.l3': 'Renderings mit Blender auf deinem Computer, unbegrenzt',
    'basis.l4': 'Einfache KI inklusive: langsamer und weniger genau, ohne KI-Bilder',
    'basis.knopf': 'Amphion kaufen',
    'pro.fuer': 'empfohlen',
    'pro.l1': 'Alles aus Amphion',
    'pro.l2': 'Die gute KI: die stärksten Modelle für Chat, Bauen und Websuche',
    'pro.l3': '60 KI-Renderings im Monat',
    'pro.l4': 'Faire Nutzung ohne feste Grenze, alle Updates',
    'pro.knopf': 'Pro kaufen',
    'buero.name': 'Amphion Büro',
    'buero.fuer': 'ab 3 Plätzen',
    'buero.einheitMonat': 'im Monat für 3 Plätze zzgl. MwSt.',
    'buero.einheitJahr': 'im Jahr für 3 Plätze zzgl. MwSt.',
    'buero.l1': 'Amphion Pro für jeden Platz',
    'buero.l2': 'Jeder weitere Platz 129 € im Monat',
    'buero.l3': 'Ein Schlüssel je Platz, eine Rechnung',
    'buero.knopf': 'Büro kaufen',
    'buero.plaetze': 'Plätze',
    'abo.titelBasis': 'Amphion kaufen',
    'abo.titelPro': 'Amphion Pro kaufen',
    'abo.titelBuero': 'Amphion Büro kaufen',
    'preis.l1': 'KI für das Modell, unbegrenzt', 'preis.l2': '60 KI-Renderings im Monat',
    'preis.l3': 'Blender-Rendering unbegrenzt, auf deinem Computer', 'preis.l4': 'Alle Updates',
    'preis.knopf': 'Abo starten',
    'preis.paket': 'Mehr KI bei Bedarf: Paket 29 €.',
    'preis.studis': 'Studierende und Lehrende: Amphion mit einfacher KI für 15 € im Monat mit Hochschul-Mail.', 'preis.garantie': 'Im ersten Monat nicht zufrieden? Du bekommst alles zurück.',
    'faq.titel': 'Fragen',
    'faq.1f': 'Was brauche ich?', 'faq.1': 'Einen Mac mit macOS 14 oder neuer oder einen PC mit Windows 10 oder 11 (64 Bit), dazu Internet für die KI. Für Renderings installiert Amphion Blender von blender.org, ein Klick genügt.',
    'faq.2f': 'Gibt es Amphion für Windows?', 'faq.2': 'Ja. Lade Amphion für Windows und starte den Installer. Weil Amphion neu ist, zeigt Windows beim ersten Start „Der Computer wurde durch Windows geschützt“. Klick auf „Weitere Informationen“ und dann auf „Trotzdem ausführen“. Danach startet Amphion normal.',
    'faq.6f': "Warnt der Mac beim Öffnen?", 'faq.6': "Nein. Amphion ist bei Apple signiert und notarisiert: DMG öffnen, Amphion in den Ordner „Programme“ ziehen, starten. Windows warnt beim ersten Mal noch, siehe oben.",
    'faq.3f': 'Wo liegen meine Daten?', 'faq.3': 'Auf deinem Computer. Projekte, Modelle und Renderings bleiben lokal. An die KI gehen nur die Texte deines Chats und, wenn du es willst, das Bild für ein KI-Rendering.',
    'faq.4f': 'Brauche ich einen eigenen KI-Schlüssel?', 'faq.4': 'Nein. Die KI ist im Abo enthalten. Eigene Schlüssel anderer Anbieter gibt es nicht, du trägst nur deinen Amphion-Schlüssel ein.',
    'faq.5f': 'Muss ich Blender kennen?', 'faq.5': 'Nein. Amphion stellt Kamera, Licht und Materialien selbst ein und startet Blender im Hintergrund. Du siehst nur das Bild.', 'faq.namef': 'Warum heißt es Amphion?', 'faq.name': 'Im griechischen Mythos baute Amphion die Mauern von Theben, ohne einen Stein zu heben. Er sang, und die Steine fügten sich von selbst. So arbeitest du mit Amphion: Du sprichst, und das Gebäude entsteht.', titel: 'Amphion 3D · Software zum 3D-Modellieren, die zuhört',
    'faq.7f': 'Wie kündige ich?', 'faq.7': 'Jederzeit, im Konto unter „Rechnungen und Kündigung“ oder mit einer Mail. Ein Monatsabo läuft bis zum Monatsende, ein Jahresabo bis zum Ende des Jahres, danach ist Schluss. Deine Dateien bleiben bei dir.',
    'fuss.impressum': 'Impressum', 'fuss.datenschutz': 'Datenschutz', 'fuss.lizenz': 'Lizenz', 'fuss.kontakt': 'Kontakt'
  },
  en: {
    'aria.senden': 'Send', 'aria.cta': 'Download or buy Amphion', 'aria.zu': 'Close', 'aria.periode': 'Billing',
    'privat.preisText': 'depending on what you need',
    'privat.preis': 'On request',
    'mehr.bild': 'Drawn from the model: ground floor plan of the house with garden.',
    'mehr.l4': 'Renderings on your computer, as often as you like',
    'mehr.l3': 'IFC for BIM and consultants, 3dm to keep working, STEP for freeform solids',
    'mehr.l2': 'Plans, sections and elevations to scale, as PDF and DXF',
    'mehr.l1': 'Model made of building parts with dimensions, storeys and materials',
    'mehr.chat': 'Text and pictures. No building parts, no scale, no file to keep working with.',
    'mehr.chatT': 'AI chat',
    'mehr.text': 'An AI chat describes a house in words and pictures. Amphion builds it: a model made of real building parts, walls, slabs, windows and stairs with dimensions and materials. From it Amphion draws plans to scale, and your practice and consultants keep working with the files.',
    'mehr.titel': 'More than an AI chat',
    'aktion.oderKaufen': 'Buy now: choose a plan',
    'aktion.probeText': 'No credit card. Download Amphion, open it and choose “Try free for 30 days”. Then a plan of your choice, cancel monthly.',
    'held.probe': 'Try free for 30 days',
    'aktion.probe': 'Try free for 30 days',
    'proj.vanct': "Waterfront tower",
    'held.fuer': "For architects running their own practice",
    'held.vertrauen': 'Projects stay on your computer · 30 days free, no credit card · Cancel monthly',
    'held.teilen': "On your phone? Send the link to your computer",
    'privat.l5': 'Tell us what you are planning. We tell you how we can help and what it costs.',
    'preis.einheitNurMonat': "a month plus VAT, monthly only",
    'faq.8f': "Does Amphion replace my CAD software?",
    'faq.8': "Yes, for design, survey, planning application and working drawings. Amphion draws floor plans, sections, elevations, electrical and heating plans and details from the model, ready to print. By hand you draw with snaps, dimensions and hatches as in CAD. For consultants, Amphion exports the model as IFC or as layered DXF.",
    'faq.9f': "Is it worth it for a one-person practice?",
    'faq.9': "Do the maths with your own numbers. Amphion draws the whole drawing set from the model: floor plans, electrical and heating plans, section, elevation and detail sheets for kitchen and bathrooms, dimensioned and labelled. For an imported single-family house we measured 16 sheets in about two minutes. You save the time you spend today on drafting, dimensioning and labelling. If that is one or two hours a month, Amphion has paid for itself. And if not, you get everything back in the first month.",
    'abo.textPrivat': 'Send us your email and a few words about your project. We get back to you the same day for a call.',
    'abo.titelPrivat': 'Request Amphion Private',
    'privat.knopf': 'Contact us',
    'privat.l4': 'Everything in Pro, without limits',
    'privat.l3': 'One dedicated contact, by phone, video or on site',
    'privat.l2': 'Maximum speed: reply the same day, results overnight',
    'privat.l1': 'Architects work for you: survey, model, options, drawings and renderings prepared',
    'privat.fuer': 'private assistance',
    'preis.schreibUns': 'Write to us.',
    'preis.begleitung': 'Personal guidance and modelling help for your project: on request.',
    'preis.schreib': 'Just write us.',
    'preis.einheitJahr': 'a year plus VAT',
    'preis.einheitMonat': 'a month plus VAT',
    'preis.jaehrlich': 'Yearly: 2 months free',
    'preis.monatlich': 'Monthly',
    'preis.gruender': 'of 100 founding places left: buy now and keep your price for good.',
    'cta.titel': 'Try it with your own project.', 'cta.laden': 'Download Amphion', 'cta.kaufen': 'Choose a plan', 'cta.klein': "Free download. Money back in the first month, cancel monthly.", 'cta.andere': 'Different computer?',
    'aktion.preis': "Four plans for your practice. Money back in the first month, cancel monthly.",
    'aktion.kaufen': 'Buy a key',
    'aktion.ladenKlein': 'free',
    'aktion.laden': 'Download',
    meta: 'Describe what you need. Amphion models it in 3D. Modelling by language, for Mac and Windows.',
    'nav.projekte': 'Projects', 'nav.funktionen': 'Features', 'nav.preis': 'Pricing', 'nav.faq': 'FAQ', 'nav.kaufen': 'Buy',
    'held.titel1': 'Describe it.', 'held.titel2': 'Amphion models it.',
    'held.text': "A survey plan, a sketch, a photo or one sentence becomes a real 3D model with walls, slabs and windows. Amphion renders on your computer and draws plans, sections and elevations. You design, Amphion draws.",
    'abo.titel': "Start your subscription", 'abo.text': "Send us your email address. Within a day you receive the licence key and the invoice. The key works on one computer; you can switch it any time under “My account”.", 'abo.email': "Email address", 'abo.name': "Name or studio (optional)", 'abo.senden': "Request the key", 'abo.danke': "Thank you. You will hear from us within a day, at {email}.", 'abo.fehler': "That did not work. Write directly to hello@amphion3d.com.", 'nav.konto': "My account",
    'held.ladenArm': 'Mac · Apple Silicon', 'held.ladenX64': 'Mac · Intel', 'held.ladenWin': 'Windows 10 and 11',
    'held.klein': 'For Mac (macOS 14 or newer) and Windows (10 and 11). You enter the key in Amphion. From your phone you use Amphion in the browser while your computer is on.', 'held.kaufen': 'Choose a plan',
    'bild.band': "The waterfront tower from the air. Design, model and image from Amphion.",
    'modell.titel': 'Talk to the model', 'modell.text': "Two finished projects from Amphion: a 1913 house with garden and its renovation, modelled in about 2 hours, and a waterfront tower with the whole city, in about 5 hours. You can turn, cut, show, hide and talk to them. Changing and rendering happen in the app.", 'modell.reiterB': 'Building site: try it', 'chip.b1': 'Make the roof yellow', 'chip.b2': 'Put a Gothic roof on it', 'chip.b3': 'One more storey', 'chip.b4': 'A tower on the corner', 'chip.b5': 'Large windows to the south', 'chip.b6': 'Undo', 'chip.b7': 'Start over', 'modell.steuerung': 'Drag to orbit · right mouse button or two fingers to pan · scroll or pinch to zoom, right down to street level',
    'modell.frage': 'Tell the model what you want to see …', 'modell.reiterV': 'Tower by the Water', 'modell.reiterM': 'House with Garden', 'modell.diktat': 'Dictate', 'modell.fehler': 'The model could not be loaded.',
    'chip.m1': 'Cut open the ground floor', 'chip.m2': 'How did it look in 1913?', 'chip.m3': 'Take the neighbours away', 'chip.m4': 'First floor from above, axonometric', 'chip.m5': 'Show me the garden', 'chip.zurueck': 'Everything back',
    'chip.v1': 'Only the structure', 'chip.v2': 'Cut at 60 metres', 'chip.v3': 'Without the city', 'chip.v4': 'Down to the podium', 'chip.v5': 'From above, axonometric', 'chip.v6': 'Show our own city', 'chip.v7': 'Show the real city',
    'bild.app': "This is Amphion: building elements and layers on the left, the model in the middle, the chat on the right. Here a waterfront tower with 69,510 elements.",
    'schritte.titel': 'How you start',
    'schritte.1t': 'Download Amphion', 'schritte.1': 'Download and open Amphion. Mac: drag it to Applications and start it, Amphion is signed by Apple. Windows: run the installer, the first time click “More info” and “Run anyway”.',
    'schritte.2t': 'Try free or enter your key', 'schritte.2': 'On first launch: choose “Try free for 30 days” or enter your key, then open the example. You connect your phone with a code.', 'held.mac': 'Which Mac? Apple menu, “About This Mac”: if it says “Chip Apple M…”, take Apple Silicon, otherwise Intel.',
    'schritte.3t': 'Start any way you like', 'schritte.3': 'Upload sketches, drawings, PDFs or photos, dictate or type. From scratch or from an existing project. Amphion builds, you adjust, then render and export drawings as PDF.',
    'proj.titel': 'Built with Amphion',
    'proj.vanc': 'High-rise with five public clearings, competition 2026. Model, renderings, drawings and boards from Amphion.',
    'vanc.1': 'The tower above the city', 'vanc.2': 'From the park', 'vanc.3': 'Roof gardens on the podium', 'vanc.4': 'Terrace in the tower', 'vanc.5': 'Corner of the podium', 'vanc.6': 'On the street', 'vanc.7': 'Clearing in the podium', 'vanc.8': 'Section through the tower, drawn from the model',
    'proj.muc': 'Conversion of a 1913 villa with an extension, 2026. Existing building, design, interiors and plans in Amphion, agreed with the client on the images.', 'proj.muct': 'Villa from 1913',
    'muc.1': 'Street corner', 'muc.2': 'Bird’s-eye view with extension', 'muc.3': 'Axonometric, upper floor open', 'muc.4': 'Roof terrace', 'muc.5': 'Salon with wood stove', 'muc.6': 'As it was in 1913', 'muc.7': 'Ground floor plan, remodel', 'muc.8': 'Upper floor plan, remodel', 'muc.9': 'Attic floor plan with roof terrace', 'vgl.titel': 'From model to image', 'vgl.text': 'On the left the view from the model, on the right the AI rendering Amphion makes from it. Drag the slider.', 'vgl.links': 'Model', 'vgl.rechts': 'AI rendering', 'vgl.regler': 'Slider between model and rendering', 'vgl.strasse': 'Street', 'vgl.garten': 'Garden', 'vgl.erker': 'Bay window', 'vgl.salon': 'Salon', 'vgl.kueche': 'Kitchen',
    'fkt.titel': 'What Amphion does',
    'fkt.1t': 'Real building elements', 'fkt.1': 'Walls, slabs, columns, windows, stairs. With dimensions, layers and quantities, not just surfaces.',
    'fkt.2t': 'Speak instead of click', 'fkt.2': 'Say or type what you want, in whole sentences. Amphion understands you in your language.',
    'fkt.3t': 'Export to CAD and BIM', 'fkt.3': 'The model moves on to the common CAD and BIM programs or to your structural engineer.',
    'fkt.4t': 'Rendering on your computer', 'fkt.4': 'Blender Cycles runs locally, as often as you like, at no extra cost.',
    'fkt.5t': 'Drawings as PDF', 'fkt.5': 'Plans, sections, elevations and boards come straight from the model.',
    'fkt.6t': 'From your phone and the terminal', 'fkt.6': 'Use it in the browser on the go. Or drive it from Claude Code, Codex and Gemini CLI.',
    'preis.titel': 'Four plans', 'preis.einheit': 'per month plus VAT',
    // Vier Pläne (Preisentscheidung Tassilo 5.11.2026): Amphion mit einfacher KI, Amphion Pro, Büro ab 3 Plätzen, Privat
    'basis.fuer': 'simple AI',
    'basis.l1': 'Model by hand and by voice, import drawings and models',
    'basis.l2': 'Floor plans, sections, elevations as PDF',
    'basis.l3': 'Blender renderings on your own computer, unlimited',
    'basis.l4': 'Simple AI included: slower and less accurate, no AI images',
    'basis.knopf': 'Buy Amphion',
    'pro.fuer': 'recommended',
    'pro.l1': 'Everything in Amphion',
    'pro.l2': 'The good AI: the strongest models for chat, building and web search',
    'pro.l3': '60 AI renderings a month',
    'pro.l4': 'Fair use without a fixed limit, all updates',
    'pro.knopf': 'Buy Pro',
    'buero.name': 'Amphion Team',
    'buero.fuer': 'from 3 seats',
    'buero.einheitMonat': 'a month for 3 seats plus VAT',
    'buero.einheitJahr': 'a year for 3 seats plus VAT',
    'buero.l1': 'Amphion Pro for every seat',
    'buero.l2': 'Each additional seat €129 a month',
    'buero.l3': 'One key per seat, one invoice',
    'buero.knopf': 'Buy Team',
    'buero.plaetze': 'Seats',
    'abo.titelBasis': 'Buy Amphion',
    'abo.titelPro': 'Buy Amphion Pro',
    'abo.titelBuero': 'Buy Amphion Team',
    'preis.l1': 'AI for the model, unlimited', 'preis.l2': '60 AI renderings per month',
    'preis.l3': 'Unlimited Blender rendering, on your computer', 'preis.l4': 'All updates',
    'preis.knopf': 'Start subscription',
    'preis.paket': 'More AI when you need it: pack €29.',
    'preis.studis': 'Students and teachers: Amphion with simple AI for €15 a month with a university email.', 'preis.garantie': 'Not happy in the first month? You get everything back.',
    'faq.titel': 'Questions',
    'faq.1f': 'What do I need?', 'faq.1': 'A Mac with macOS 14 or newer or a PC with Windows 10 or 11 (64-bit), plus internet for the AI. For renderings Amphion installs Blender from blender.org, one click is enough.',
    'faq.2f': 'Is there a Windows version?', 'faq.2': 'Yes. Download Amphion for Windows and run the installer. Because Amphion is new, Windows shows “Windows protected your PC” the first time. Click “More info”, then “Run anyway”. After that Amphion starts normally.',
    'faq.6f': "Does the Mac warn when opening?", 'faq.6': "No. Amphion is signed and notarized by Apple: open the DMG, drag Amphion into Applications, start it. Windows still warns the first time, see above.",
    'faq.3f': 'Where is my data?', 'faq.3': 'On your computer. Projects, models and renderings stay local. Only your chat text goes to the AI, and the image for an AI rendering if you ask for one.',
    'faq.4f': 'Do I need my own AI key?', 'faq.4': 'No. The AI is included in the subscription. There are no keys from other providers, you only enter your Amphion key.',
    'faq.5f': 'Do I need to know Blender?', 'faq.5': 'No. Amphion sets camera, light and materials itself and runs Blender in the background. You only see the image.', 'faq.namef': 'Why is it called Amphion?', 'faq.name': 'In Greek myth, Amphion built the walls of Thebes without lifting a stone. He sang, and the stones set themselves in place. That is how you work with Amphion: you speak, and the building takes shape.', titel: 'Amphion 3D · 3D modelling software that listens',
    'faq.7f': 'How do I cancel?', 'faq.7': 'Any time, in your account under “Invoices and cancellation” or with an email. A monthly plan runs until the end of the month, a yearly plan until the end of the year, then it stops. Your files stay with you.',
    'fuss.impressum': 'Legal notice', 'fuss.datenschutz': 'Privacy', 'fuss.lizenz': 'License', 'fuss.kontakt': 'Contact'
  },
  es: {
    'aria.senden': 'Enviar', 'aria.cta': 'Descargar o comprar Amphion', 'aria.zu': 'Cerrar', 'aria.periode': 'Facturación',
    'privat.preisText': 'según lo que necesites',
    'privat.preis': 'A consultar',
    'mehr.bild': 'Dibujado desde el modelo: planta baja de la casa con jardín.',
    'mehr.l4': 'Renders en tu ordenador, tantas veces como quieras',
    'mehr.l3': 'IFC para BIM e ingenierías, 3dm para seguir trabajando, STEP para sólidos de forma libre',
    'mehr.l2': 'Plantas, secciones y alzados a escala, en PDF y DXF',
    'mehr.l1': 'Modelo de elementos con medidas, plantas y materiales',
    'mehr.chat': 'Texto e imágenes. Sin elementos constructivos, sin escala, sin archivo para seguir trabajando.',
    'mehr.chatT': 'Chat con IA',
    'mehr.text': 'Un chat con IA te describe una casa con palabras e imágenes. Amphion la construye: un modelo de elementos reales, muros, forjados, ventanas y escaleras con medidas y materiales. A partir de él Amphion dibuja planos a escala, y tu estudio y tus ingenierías siguen trabajando con los archivos.',
    'mehr.titel': 'Más que un chat con IA',
    'aktion.oderKaufen': 'Comprar ya: elegir plan',
    'aktion.probeText': 'Sin tarjeta. Descarga Amphion, ábrelo y elige «Prueba 30 días gratis». Después el plan que elijas, baja mensual.',
    'held.probe': 'Prueba 30 días gratis',
    'aktion.probe': 'Prueba 30 días gratis',
    'proj.vanct': "Torre junto al agua",
    'held.fuer': "Para arquitectas y arquitectos con estudio propio",
    'held.vertrauen': 'Los proyectos se quedan en tu ordenador · 30 días gratis, sin tarjeta · Baja mensual',
    'held.teilen': "¿En el móvil? Envía el enlace a tu ordenador",
    'privat.l5': 'Cuéntanos qué tienes en mente. Te decimos cómo te ayudamos y cuánto cuesta.',
    'preis.einheitNurMonat': "al mes más IVA, solo mensual",
    'faq.8f': "¿Sustituye Amphion a mi programa de CAD?",
    'faq.8': "Sí, para anteproyecto, levantamiento, licencia y proyecto de ejecución. Amphion dibuja desde el modelo plantas, secciones, alzados, planos de electricidad y calefacción y detalles, listos para imprimir. A mano dibujas con referencias, cotas y tramas como en un CAD. Para los ingenieros, Amphion exporta el modelo como IFC o como DXF por capas.",
    'faq.9f': "¿Compensa para un estudio de una persona?",
    'faq.9': "Haz la cuenta con tus propios números. Amphion dibuja desde el modelo el juego de planos completo: plantas, planos de electricidad y calefacción, sección, alzado y hojas de detalle de cocina y baños, acotados y rotulados. Para una vivienda unifamiliar importada medimos 16 hojas en unos dos minutos. Ahorras el tiempo que hoy dedicas a dibujar, acotar y rotular. Si son una o dos horas al mes, Amphion ya se ha pagado. Y si no, el primer mes te devolvemos todo.",
    'abo.textPrivat': 'Déjanos tu correo y unas palabras sobre tu proyecto. Te contestamos el mismo día para hablar.',
    'abo.titelPrivat': 'Solicitar Amphion Privado',
    'privat.knopf': 'Contactar',
    'privat.l4': 'Todo lo de Pro, sin límites',
    'privat.l3': 'Una persona de contacto fija, por teléfono, vídeo o en persona',
    'privat.l2': 'Máxima velocidad: respuesta el mismo día, resultados de un día para otro',
    'privat.l1': 'Arquitectos trabajan para ti: levantamiento, modelo, variantes, planos y renders preparados',
    'privat.fuer': 'asistencia privada',
    'preis.schreibUns': 'Escríbenos.',
    'preis.begleitung': 'Acompañamiento personal y ayuda con el modelado de tu proyecto: bajo petición.',
    'preis.schreib': 'Escríbenos.',
    'preis.einheitJahr': 'al año más IVA',
    'preis.einheitMonat': 'al mes más IVA',
    'preis.jaehrlich': 'Anual: 2 meses gratis',
    'preis.monatlich': 'Mensual',
    'preis.gruender': 'de 100 plazas fundadoras libres: quien compra ahora mantiene su precio para siempre.',
    'cta.titel': 'Pruébalo con tu propio proyecto.', 'cta.laden': 'Descargar Amphion', 'cta.kaufen': 'Elegir plan', 'cta.klein': "Descarga gratis. Devolución el primer mes, baja mensual.", 'cta.andere': '¿Otro ordenador?',
    'aktion.preis': "Cuatro planes para tu estudio. Devolución el primer mes, baja mensual.",
    'aktion.kaufen': 'Comprar clave',
    'aktion.ladenKlein': 'gratis',
    'aktion.laden': 'Descargar',
    meta: 'Describe lo que necesitas. Amphion lo modela en 3D. Modelado con lenguaje natural, para Mac y Windows.',
    'nav.projekte': 'Proyectos', 'nav.funktionen': 'Funciones', 'nav.preis': 'Precio', 'nav.faq': 'Preguntas', 'nav.kaufen': 'Comprar',
    'held.titel1': 'Descríbelo.', 'held.titel2': 'Amphion lo modela.',
    'held.text': "Un plano del estado actual, un boceto, una foto o una frase se convierten en un modelo 3D real con muros, forjados y ventanas. Amphion renderiza en tu ordenador y dibuja plantas, secciones y alzados. Tú proyectas, Amphion dibuja.",
    'abo.titel': "Empezar la suscripción", 'abo.text': "Déjanos tu correo. En un día recibes la clave de licencia y la factura. La clave vale para un ordenador; puedes cambiarlo cuando quieras en «Mi cuenta».", 'abo.email': "Correo electrónico", 'abo.name': "Nombre o estudio (opcional)", 'abo.senden': "Pedir la clave", 'abo.danke': "Gracias. Te escribimos en un día a {email}.", 'abo.fehler': "No ha funcionado. Escribe directamente a hello@amphion3d.com.", 'nav.konto': "Mi cuenta",
    'held.ladenArm': 'Mac · Apple Silicon', 'held.ladenX64': 'Mac · Intel', 'held.ladenWin': 'Windows 10 y 11',
    'held.klein': 'Para Mac (macOS 14 o posterior) y Windows (10 y 11). La clave se introduce en Amphion. Desde el móvil usas Amphion en el navegador mientras tu ordenador esté encendido.', 'held.kaufen': 'Elegir plan',
    'bild.band': "La torre junto al agua desde el aire. Diseño, modelo e imagen hechos en Amphion.",
    'modell.titel': 'Habla con el modelo', 'modell.text': "Dos proyectos terminados en Amphion: una casa con jardín de 1913 con su reforma, modelada en unas 2 horas, y una torre junto al agua con toda la ciudad, en unas 5 horas. Puedes girarlos, cortarlos, mostrar, ocultar y hablar con ellos. Cambiar y renderizar se hace en la app.", 'modell.reiterB': 'Solar: construye tú', 'chip.b1': 'Pon el tejado amarillo', 'chip.b2': 'Ponle un tejado gótico', 'chip.b3': 'Una planta más', 'chip.b4': 'Una torre en la esquina', 'chip.b5': 'Ventanas grandes al sur', 'chip.b6': 'Deshacer', 'chip.b7': 'Empezar de nuevo', 'modell.steuerung': 'Arrastra para girar · botón derecho o dos dedos para desplazar · rueda o dos dedos para hacer zoom, hasta la calle',
    'modell.frage': 'Dile al modelo qué quieres ver …', 'modell.reiterV': 'Torre junto al agua', 'modell.reiterM': 'Casa con jardín', 'modell.diktat': 'Dictar', 'modell.fehler': 'No se pudo cargar el modelo.',
    'chip.m1': 'Abre la planta baja', 'chip.m2': '¿Cómo era en 1913?', 'chip.m3': 'Quita los vecinos', 'chip.m4': 'Primera planta desde arriba, axonometría', 'chip.m5': 'Enséñame el jardín', 'chip.zurueck': 'Todo como al principio',
    'chip.v1': 'Solo la estructura', 'chip.v2': 'Corta a 60 metros', 'chip.v3': 'Sin la ciudad', 'chip.v4': 'Baja al podio', 'chip.v5': 'Desde arriba, axonometría', 'chip.v6': 'Muestra la ciudad propia', 'chip.v7': 'Muestra la ciudad real',
    'bild.app': "Así es Amphion: elementos y capas a la izquierda, el modelo en el centro, el chat a la derecha. Aquí una torre junto al agua con 69 510 elementos.",
    'schritte.titel': 'Cómo empiezas',
    'schritte.1t': 'Descargar Amphion', 'schritte.1': 'Descarga y abre Amphion. Mac: arrástralo a Aplicaciones y ábrelo, Amphion está firmado por Apple. Windows: ejecuta el instalador, la primera vez «Más información» y «Ejecutar de todas formas».',
    'schritte.2t': 'Probar gratis o introducir la clave', 'schritte.2': 'Al primer inicio: elige «Prueba 30 días gratis» o introduce tu clave y abre el ejemplo. El móvil se conecta con un código.', 'held.mac': '¿Qué Mac tengo? Menú Apple, «Acerca de este Mac»: si pone «Chip Apple M…», elige Apple Silicon; si no, Intel.',
    'schritte.3t': 'Empieza como quieras', 'schritte.3': 'Sube bocetos, planos, PDF o fotos, dicta o escribe. Desde cero o a partir de un proyecto existente. Amphion construye, tú ajustas, luego renderizas y sacas los planos en PDF.',
    'proj.titel': 'Hecho con Amphion',
    'proj.vanc': 'Torre con cinco claros públicos, concurso 2026. Modelo, renders, planos y paneles hechos en Amphion.',
    'vanc.1': 'La torre sobre la ciudad', 'vanc.2': 'Desde el parque', 'vanc.3': 'Jardines en la cubierta del podio', 'vanc.4': 'Terraza en la torre', 'vanc.5': 'Esquina del podio', 'vanc.6': 'En la calle', 'vanc.7': 'Claro en el podio', 'vanc.8': 'Sección por la torre, dibujada desde el modelo',
    'proj.muc': 'Reforma de una villa de 1913 con ampliación, 2026. Estado actual, propuesta, interiores y plantas en Amphion, acordados con el cliente sobre las imágenes.', 'proj.muct': 'Villa de 1913',
    'muc.1': 'Esquina de la calle', 'muc.2': 'Vista aérea con la ampliación', 'muc.3': 'Axonometría, planta alta abierta', 'muc.4': 'Terraza en la cubierta', 'muc.5': 'Salón con estufa de leña', 'muc.6': 'Así era en 1913', 'muc.7': 'Planta baja, reforma', 'muc.8': 'Planta alta, reforma', 'muc.9': 'Planta bajo cubierta con terraza', 'vgl.titel': 'Del modelo a la imagen', 'vgl.text': 'A la izquierda la vista del modelo, a la derecha el render con IA que Amphion hace a partir de ella. Desliza el control.', 'vgl.links': 'Modelo', 'vgl.rechts': 'Render IA', 'vgl.regler': 'Control entre modelo y render', 'vgl.strasse': 'Calle', 'vgl.garten': 'Jardín', 'vgl.erker': 'Mirador', 'vgl.salon': 'Salón', 'vgl.kueche': 'Cocina',
    'fkt.titel': 'Qué hace Amphion',
    'fkt.1t': 'Elementos constructivos reales', 'fkt.1': 'Muros, losas, pilares, ventanas, escaleras. Con medidas, capas y cantidades, no solo superficies.',
    'fkt.2t': 'Habla en vez de hacer clic', 'fkt.2': 'Di o escribe lo que quieres, con frases enteras. Amphion te entiende en tu idioma.',
    'fkt.3t': 'Exportar a CAD y BIM', 'fkt.3': 'El modelo pasa a los programas CAD y BIM habituales o al ingeniero de estructuras.',
    'fkt.4t': 'Renders en tu ordenador', 'fkt.4': 'Blender Cycles funciona en local, tantas veces como quieras, sin coste adicional.',
    'fkt.5t': 'Planos en PDF', 'fkt.5': 'Plantas, secciones, alzados y paneles salen listos del modelo.',
    'fkt.6t': 'Desde el móvil y la terminal', 'fkt.6': 'Úsalo en el navegador donde estés. O contrólalo desde Claude Code, Codex y Gemini CLI.',
    'preis.titel': 'Cuatro planes', 'preis.einheit': 'al mes más IVA',
    // Vier Pläne (Preisentscheidung Tassilo 5.11.2026): Amphion mit einfacher KI, Amphion Pro, Büro ab 3 Plätzen, Privat
    'basis.fuer': 'IA sencilla',
    'basis.l1': 'Modelar a mano y con la voz, importar planos y modelos',
    'basis.l2': 'Plantas, secciones y alzados en PDF',
    'basis.l3': 'Renders con Blender en tu ordenador, sin límite',
    'basis.l4': 'IA sencilla incluida: más lenta y menos precisa, sin imágenes con IA',
    'basis.knopf': 'Comprar Amphion',
    'pro.fuer': 'recomendado',
    'pro.l1': 'Todo lo de Amphion',
    'pro.l2': 'La buena IA: los modelos más potentes para chat, construir y búsqueda web',
    'pro.l3': '60 renders con IA al mes',
    'pro.l4': 'Uso justo sin límite fijo, todas las actualizaciones',
    'pro.knopf': 'Comprar Pro',
    'buero.name': 'Amphion Equipo',
    'buero.fuer': 'desde 3 puestos',
    'buero.einheitMonat': 'al mes por 3 puestos más IVA',
    'buero.einheitJahr': 'al año por 3 puestos más IVA',
    'buero.l1': 'Amphion Pro en cada puesto',
    'buero.l2': 'Cada puesto adicional 129 € al mes',
    'buero.l3': 'Una clave por puesto, una factura',
    'buero.knopf': 'Comprar Equipo',
    'buero.plaetze': 'Puestos',
    'abo.titelBasis': 'Comprar Amphion',
    'abo.titelPro': 'Comprar Amphion Pro',
    'abo.titelBuero': 'Comprar Amphion Equipo',
    'preis.l1': 'IA para el modelo, sin límite', 'preis.l2': '60 renders con IA al mes',
    'preis.l3': 'Renders de Blender ilimitados, en tu ordenador', 'preis.l4': 'Todas las actualizaciones',
    'preis.knopf': 'Empezar suscripción',
    'preis.paket': 'Más IA cuando la necesites: paquete 29 €.',
    'preis.studis': 'Estudiantes y docentes: Amphion con IA sencilla por 15 € al mes con correo universitario.', 'preis.garantie': '¿No te convence el primer mes? Te devolvemos todo.',
    'faq.titel': 'Preguntas',
    'faq.1f': '¿Qué necesito?', 'faq.1': 'Un Mac con macOS 14 o posterior o un PC con Windows 10 u 11 (64 bits), e internet para la IA. Para los renders Amphion instala Blender desde blender.org, basta un clic.',
    'faq.2f': '¿Hay versión para Windows?', 'faq.2': 'Sí. Descarga Amphion para Windows y ejecuta el instalador. Como Amphion es nuevo, la primera vez Windows muestra «Windows protegió su PC». Pulsa «Más información» y después «Ejecutar de todas formas». Luego Amphion arranca con normalidad.',
    'faq.6f': "¿El Mac avisa al abrirlo?", 'faq.6': "No. Amphion está firmado y notarizado por Apple: abre el DMG, arrastra Amphion a «Aplicaciones» y ábrelo. Windows aún avisa la primera vez, ver arriba.",
    'faq.3f': '¿Dónde están mis datos?', 'faq.3': 'En tu ordenador. Proyectos, modelos y renders se quedan en local. A la IA solo van los textos de tu chat y, si lo pides, la imagen para un render con IA.',
    'faq.4f': '¿Necesito mi propia clave de IA?', 'faq.4': 'No. La IA está incluida en la suscripción. No hay claves de otros proveedores, solo introduces tu clave de Amphion.',
    'faq.5f': '¿Tengo que saber Blender?', 'faq.5': 'No. Amphion ajusta cámara, luz y materiales por sí misma y ejecuta Blender en segundo plano. Tú solo ves la imagen.', 'faq.namef': '¿Por qué se llama Amphion?', 'faq.name': 'En el mito griego, Anfión levantó las murallas de Tebas sin mover una piedra. Cantaba, y las piedras se colocaban solas. Así trabajas con Amphion: hablas y el edificio toma forma.', titel: 'Amphion 3D · Software de modelado 3D que escucha',
    'faq.7f': '¿Cómo cancelo?', 'faq.7': 'En cualquier momento, en tu cuenta en «Facturas y baja» o con un correo. Un plan mensual sigue hasta fin de mes, uno anual hasta el final del año, y luego termina. Tus archivos se quedan contigo.',
    'fuss.impressum': 'Aviso legal', 'fuss.datenschutz': 'Privacidad', 'fuss.lizenz': 'Licencia', 'fuss.kontakt': 'Contacto'
  },
  fr: {
    'aria.senden': 'Envoyer', 'aria.cta': 'Télécharger ou acheter Amphion', 'aria.zu': 'Fermer', 'aria.periode': 'Facturation',
    'privat.preisText': 'selon tes besoins',
    'privat.preis': 'Sur demande',
    'mehr.bild': 'Tiré de la maquette : plan du rez-de-chaussée de la maison avec jardin.',
    'mehr.l4': 'Rendus sur ton ordinateur, aussi souvent que tu veux',
    'mehr.l3': 'IFC pour le BIM et les bureaux d’études, 3dm pour continuer, STEP pour les formes libres',
    'mehr.l2': 'Plans, coupes et façades à l’échelle, en PDF et DXF',
    'mehr.l1': 'Maquette d’éléments avec cotes, niveaux et matériaux',
    'mehr.chat': 'Du texte et des images. Pas d’éléments, pas d’échelle, pas de fichier pour continuer.',
    'mehr.chatT': 'Chat IA',
    'mehr.text': 'Un chat IA te décrit une maison en mots et en images. Amphion la construit : une maquette faite de vrais éléments, murs, dalles, fenêtres et escaliers avec cotes et matériaux. Amphion en tire des plans à l’échelle, et ton agence et tes bureaux d’études continuent avec les fichiers.',
    'mehr.titel': 'Plus qu’un chat IA',
    'aktion.oderKaufen': 'Acheter tout de suite : choisir une formule',
    'aktion.probeText': 'Sans carte bancaire. Télécharge Amphion, ouvre-le et choisis « Essai gratuit de 30 jours ». Ensuite la formule de ton choix, résiliable chaque mois.',
    'held.probe': 'Essai gratuit de 30 jours',
    'aktion.probe': 'Essai gratuit de 30 jours',
    'proj.vanct': "Tour au bord de l’eau",
    'held.fuer': "Pour les architectes qui ont leur propre agence",
    'held.vertrauen': 'Les projets restent sur ton ordinateur · 30 jours gratuits, sans carte · Résiliable chaque mois',
    'held.teilen': "Sur ton téléphone ? Envoie le lien à ton ordinateur",
    'privat.l5': 'Dis-nous ce que tu prépares. Nous te disons comment nous aidons et ce que cela coûte.',
    'preis.einheitNurMonat': "par mois HT, uniquement au mois",
    'faq.8f': "Amphion remplace-t-il mon logiciel de CAO ?",
    'faq.8': "Oui, pour l’esquisse, le relevé, le permis de construire et les plans d’exécution. Amphion dessine depuis la maquette plans, coupes, façades, plans électricité et chauffage et détails, prêts à imprimer. À la main, tu dessines avec accrochages, cotes et hachures comme en CAO. Pour les bureaux d’études, Amphion exporte la maquette en IFC ou en DXF par calques.",
    'faq.9f': "Est-ce rentable pour une agence d’une personne ?",
    'faq.9': "Fais le calcul avec tes propres chiffres. Amphion dessine depuis la maquette tout le jeu de plans : plans d’étage, plans électricité et chauffage, coupe, façade et feuilles de détail pour la cuisine et les salles de bains, cotés et légendés. Pour une maison individuelle importée, nous avons mesuré 16 feuilles en deux minutes environ. Tu gagnes le temps que tu passes aujourd’hui à dessiner, coter et légender. Si c’est une ou deux heures par mois, Amphion est rentabilisé. Sinon, tu es remboursé le premier mois.",
    'abo.textPrivat': 'Laisse-nous ton e-mail et quelques mots sur ton projet. Nous te répondons le jour même pour en parler.',
    'abo.titelPrivat': 'Demander Amphion Privé',
    'privat.knopf': 'Nous contacter',
    'privat.l4': 'Tout ce qu’offre Pro, sans limites',
    'privat.l3': 'Un interlocuteur dédié, au téléphone, en vidéo ou sur place',
    'privat.l2': 'Vitesse maximale : réponse le jour même, résultats pendant la nuit',
    'privat.l1': 'Des architectes travaillent pour toi : relevé, modèle, variantes, plans et rendus préparés',
    'privat.fuer': 'assistance privée',
    'preis.schreibUns': 'Écris-nous.',
    'preis.begleitung': 'Accompagnement personnel et aide à la modélisation de ton projet : sur demande.',
    'preis.schreib': 'Écris-nous.',
    'preis.einheitJahr': 'par an HT',
    'preis.einheitMonat': 'par mois HT',
    'preis.jaehrlich': 'Annuel : 2 mois offerts',
    'preis.monatlich': 'Mensuel',
    'preis.gruender': 'places fondatrices sur 100 encore libres : achète maintenant et garde ton prix pour toujours.',
    'cta.titel': 'Essaie-le avec ton propre projet.', 'cta.laden': 'Télécharger Amphion', 'cta.kaufen': 'Choisir une formule', 'cta.klein': "Téléchargement gratuit. Remboursé le premier mois, résiliable chaque mois.", 'cta.andere': 'Autre ordinateur ?',
    'aktion.preis': "Quatre formules pour ton agence. Remboursé le premier mois, résiliable chaque mois.",
    'aktion.kaufen': 'Acheter une clé',
    'aktion.ladenKlein': 'gratuit',
    'aktion.laden': 'Télécharger',
    meta: 'Décris ce dont tu as besoin. Amphion le modélise en 3D. Modélisation par la langue, pour Mac et Windows.',
    'nav.projekte': 'Projets', 'nav.funktionen': 'Fonctions', 'nav.preis': 'Prix', 'nav.faq': 'Questions', 'nav.kaufen': 'Acheter',
    'held.titel1': 'Décris-le.', 'held.titel2': 'Amphion le modélise.',
    'held.text': "Un relevé, un croquis, une photo ou une phrase deviennent un vrai modèle 3D avec murs, planchers et fenêtres. Amphion fait le rendu sur ton ordinateur et dessine plans, coupes et façades. Tu conçois, Amphion dessine.",
    'abo.titel': "Démarrer l’abonnement", 'abo.text': "Laisse-nous ton adresse e-mail. Sous un jour tu reçois la clé de licence et la facture. La clé vaut pour un ordinateur ; tu peux en changer à tout moment dans « Mon compte ».", 'abo.email': "Adresse e-mail", 'abo.name': "Nom ou agence (facultatif)", 'abo.senden': "Demander la clé", 'abo.danke': "Merci. Tu auras de nos nouvelles sous un jour, à {email}.", 'abo.fehler': "Cela n’a pas fonctionné. Écris directement à hello@amphion3d.com.", 'nav.konto': "Mon compte",
    'held.ladenArm': 'Mac · Apple Silicon', 'held.ladenX64': 'Mac · Intel', 'held.ladenWin': 'Windows 10 et 11',
    'held.klein': 'Pour Mac (macOS 14 ou plus récent) et Windows (10 et 11). Tu saisis la clé dans Amphion. Depuis ton téléphone, tu utilises Amphion dans le navigateur tant que ton ordinateur est allumé.', 'held.kaufen': 'Choisir une formule',
    'bild.band': "La tour au bord de l’eau vue du ciel. Projet, modèle et image réalisés avec Amphion.",
    'modell.titel': 'Parle au modèle', 'modell.text': "Deux projets terminés dans Amphion : une maison avec jardin de 1913 et sa transformation, modélisée en 2 heures environ, et une tour au bord de l’eau avec toute la ville, en 5 heures environ. Tu peux les tourner, les couper, afficher, masquer et leur parler. Modifier et faire le rendu se fait dans l’application.", 'modell.reiterB': 'Chantier : à toi', 'chip.b1': 'Mets le toit en jaune', 'chip.b2': 'Mets un toit gothique', 'chip.b3': 'Un étage de plus', 'chip.b4': 'Une tour à l’angle', 'chip.b5': 'De grandes fenêtres au sud', 'chip.b6': 'Annuler', 'chip.b7': 'Recommencer', 'modell.steuerung': 'Glisse pour tourner · clic droit ou deux doigts pour déplacer · molette ou deux doigts pour zoomer, jusqu’à la rue',
    'modell.frage': 'Dis au modèle ce que tu veux voir …', 'modell.reiterV': 'Tour au bord de l’eau', 'modell.reiterM': 'Maison avec jardin', 'modell.diktat': 'Dicter', 'modell.fehler': 'Impossible de charger le modèle.',
    'chip.m1': 'Ouvre le rez-de-chaussée', 'chip.m2': 'C’était comment en 1913 ?', 'chip.m3': 'Enlève les voisins', 'chip.m4': 'Premier étage vu d’en haut, axonométrie', 'chip.m5': 'Montre-moi le jardin', 'chip.zurueck': 'Tout comme au début',
    'chip.v1': 'Seulement la structure', 'chip.v2': 'Coupe à 60 mètres', 'chip.v3': 'Sans la ville', 'chip.v4': 'Descends au socle', 'chip.v5': 'Vu d’en haut, axonométrie', 'chip.v6': 'Montre notre propre ville', 'chip.v7': 'Montre la vraie ville',
    'bild.app': "Voici Amphion : éléments et calques à gauche, le modèle au centre, le chat à droite. Ici une tour au bord de l’eau avec 69 510 éléments.",
    'schritte.titel': 'Comment commencer',
    'schritte.1t': 'Télécharger Amphion', 'schritte.1': 'Télécharge et ouvre Amphion. Mac : glisse-le dans Applications et lance-le, Amphion est signé par Apple. Windows : lance l’installateur, la première fois « Informations complémentaires » puis « Exécuter quand même ».',
    'schritte.2t': 'Essayer gratuitement ou saisir la clé', 'schritte.2': 'Au premier lancement : choisis « Essai gratuit de 30 jours » ou saisis ta clé, puis ouvre l’exemple. Tu connectes ton téléphone avec un code.', 'held.mac': 'Quel Mac ? Menu Apple, « À propos de ce Mac » : s’il est écrit « Puce Apple M… », prends Apple Silicon, sinon Intel.',
    'schritte.3t': 'Commence comme tu veux', 'schritte.3': 'Importe croquis, plans, PDF ou photos, dicte ou écris. À partir de zéro ou d’un projet existant. Amphion construit, tu ajustes, puis tu fais le rendu et tu exportes les plans en PDF.',
    'proj.titel': 'Réalisé avec Amphion',
    'proj.vanc': 'Tour avec cinq clairières publiques, concours 2026. Modèle, rendus, plans et planches réalisés avec Amphion.',
    'vanc.1': 'La tour au-dessus de la ville', 'vanc.2': 'Depuis le parc', 'vanc.3': 'Jardins sur le toit du socle', 'vanc.4': 'Terrasse dans la tour', 'vanc.5': 'Angle du socle', 'vanc.6': 'Dans la rue', 'vanc.7': 'Clairière dans le socle', 'vanc.8': 'Coupe à travers la tour, dessinée depuis la maquette',
    'proj.muc': 'Transformation d’une villa de 1913 avec extension, 2026. Existant, projet, intérieurs et plans dans Amphion, validés avec le maître d’ouvrage sur les images.', 'proj.muct': 'Villa de 1913',
    'muc.1': 'Angle de rue', 'muc.2': 'Vue aérienne avec l’extension', 'muc.3': 'Axonométrie, étage ouvert', 'muc.4': 'Terrasse sur le toit', 'muc.5': 'Salon avec poêle à bois', 'muc.6': 'Tel qu’en 1913', 'muc.7': 'Plan du rez-de-chaussée, transformation', 'muc.8': 'Plan de l’étage, transformation', 'muc.9': 'Plan des combles avec toit-terrasse', 'vgl.titel': 'Du modèle à l’image', 'vgl.text': 'À gauche la vue du modèle, à droite le rendu IA qu’Amphion en tire. Fais glisser le curseur.', 'vgl.links': 'Modèle', 'vgl.rechts': 'Rendu IA', 'vgl.regler': 'Curseur entre modèle et rendu', 'vgl.strasse': 'Rue', 'vgl.garten': 'Jardin', 'vgl.erker': 'Bow-window', 'vgl.salon': 'Salon', 'vgl.kueche': 'Cuisine',
    'fkt.titel': 'Ce que fait Amphion',
    'fkt.1t': 'De vrais éléments de construction', 'fkt.1': 'Murs, dalles, poteaux, fenêtres, escaliers. Avec cotes, couches et quantités, pas seulement des surfaces.',
    'fkt.2t': 'Parler au lieu de cliquer', 'fkt.2': 'Dis ou écris ce que tu veux, en phrases entières. Amphion te comprend dans ta langue.',
    'fkt.3t': 'Export vers la CAO et le BIM', 'fkt.3': 'Le modèle passe aux logiciels de CAO et BIM courants ou à ton ingénieur structure.',
    'fkt.4t': 'Rendu sur ton ordinateur', 'fkt.4': 'Blender Cycles tourne en local, aussi souvent que tu veux, sans frais supplémentaires.',
    'fkt.5t': 'Plans en PDF', 'fkt.5': 'Plans, coupes, façades et planches sortent directement du modèle.',
    'fkt.6t': 'Depuis ton téléphone et le terminal', 'fkt.6': 'Utilise-le dans le navigateur où que tu sois. Ou pilote-le depuis Claude Code, Codex et Gemini CLI.',
    'preis.titel': 'Quatre formules', 'preis.einheit': 'par mois hors TVA',
    // Vier Pläne (Preisentscheidung Tassilo 5.11.2026): Amphion mit einfacher KI, Amphion Pro, Büro ab 3 Plätzen, Privat
    'basis.fuer': 'IA simple',
    'basis.l1': 'Modéliser à la main et par la voix, importer plans et maquettes',
    'basis.l2': 'Plans, coupes et façades en PDF',
    'basis.l3': 'Rendus Blender sur ton ordinateur, illimités',
    'basis.l4': 'IA simple incluse : plus lente et moins précise, sans images IA',
    'basis.knopf': 'Acheter Amphion',
    'pro.fuer': 'recommandé',
    'pro.l1': 'Tout ce qu’offre Amphion',
    'pro.l2': 'La bonne IA : les modèles les plus puissants pour le chat, la construction et la recherche web',
    'pro.l3': '60 rendus IA par mois',
    'pro.l4': 'Usage raisonnable sans limite fixe, toutes les mises à jour',
    'pro.knopf': 'Acheter Pro',
    'buero.name': 'Amphion Équipe',
    'buero.fuer': 'dès 3 postes',
    'buero.einheitMonat': 'par mois pour 3 postes HT',
    'buero.einheitJahr': 'par an pour 3 postes HT',
    'buero.l1': 'Amphion Pro pour chaque poste',
    'buero.l2': 'Chaque poste supplémentaire 129 € par mois',
    'buero.l3': 'Une clé par poste, une facture',
    'buero.knopf': 'Acheter Équipe',
    'buero.plaetze': 'Postes',
    'abo.titelBasis': 'Acheter Amphion',
    'abo.titelPro': 'Acheter Amphion Pro',
    'abo.titelBuero': 'Acheter Amphion Équipe',
    'preis.l1': 'IA pour le modèle, illimitée', 'preis.l2': '60 rendus IA par mois',
    'preis.l3': 'Rendu Blender illimité, sur ton ordinateur', 'preis.l4': 'Toutes les mises à jour',
    'preis.knopf': 'Démarrer l’abonnement',
    'preis.paket': 'Plus d’IA si besoin : pack 29 €.',
    'preis.studis': 'Étudiants et enseignants : Amphion avec IA simple pour 15 € par mois avec une adresse universitaire.', 'preis.garantie': 'Pas convaincu le premier mois ? On te rembourse tout.',
    'faq.titel': 'Questions',
    'faq.1f': 'De quoi ai-je besoin ?', 'faq.1': 'Un Mac avec macOS 14 ou plus récent ou un PC avec Windows 10 ou 11 (64 bits), et internet pour l’IA. Pour les rendus, Amphion installe Blender depuis blender.org, un clic suffit.',
    'faq.2f': 'Existe-t-il une version Windows ?', 'faq.2': 'Oui. Télécharge Amphion pour Windows et lance l’installateur. Comme Amphion est nouveau, Windows affiche la première fois « Windows a protégé votre ordinateur ». Clique sur « Informations complémentaires », puis sur « Exécuter quand même ». Ensuite Amphion démarre normalement.',
    'faq.6f': "Le Mac affiche-t-il un avertissement ?", 'faq.6': "Non. Amphion est signé et notarisé par Apple : ouvre le DMG, glisse Amphion dans « Applications » et lance-le. Windows prévient encore la première fois, voir plus haut.",
    'faq.3f': 'Où sont mes données ?', 'faq.3': 'Sur ton ordinateur. Projets, modèles et rendus restent en local. Seuls les textes de ton chat vont à l’IA et, si tu le demandes, l’image pour un rendu IA.',
    'faq.4f': 'Ai-je besoin de ma propre clé IA ?', 'faq.4': 'Non. L’IA est incluse dans l’abonnement. Il n’y a pas de clés d’autres fournisseurs, tu saisis seulement ta clé Amphion.',
    'faq.5f': 'Dois-je connaître Blender ?', 'faq.5': 'Non. Amphion règle lui-même caméra, lumière et matériaux et lance Blender en arrière-plan. Tu ne vois que l’image.', 'faq.namef': 'Pourquoi le nom Amphion ?', 'faq.name': 'Dans le mythe grec, Amphion bâtit les murs de Thèbes sans soulever une pierre. Il chantait, et les pierres se mettaient en place d’elles-mêmes. C’est ainsi que tu travailles avec Amphion : tu parles, et le bâtiment prend forme.', titel: 'Amphion 3D · Logiciel de modélisation 3D qui écoute',
    'faq.7f': 'Comment résilier ?', 'faq.7': 'À tout moment, dans ton compte sous « Factures et résiliation » ou par e-mail. Un abonnement mensuel court jusqu’à la fin du mois, un abonnement annuel jusqu’à la fin de l’année, puis il s’arrête. Tes fichiers restent chez toi.',
    'fuss.impressum': 'Mentions légales', 'fuss.datenschutz': 'Confidentialité', 'fuss.lizenz': 'Licence', 'fuss.kontakt': 'Contact'
  },
  it: {
    'aria.senden': 'Invia', 'aria.cta': 'Scarica o acquista Amphion', 'aria.zu': 'Chiudi', 'aria.periode': 'Fatturazione',
    'privat.preisText': 'in base a ciò che ti serve',
    'privat.preis': 'Su richiesta',
    'mehr.bild': 'Disegnato dal modello: pianta del piano terra della casa con giardino.',
    'mehr.l4': 'Rendering sul tuo computer, tutte le volte che vuoi',
    'mehr.l3': 'IFC per il BIM e i consulenti, 3dm per continuare, STEP per i solidi a forma libera',
    'mehr.l2': 'Piante, sezioni e prospetti in scala, in PDF e DXF',
    'mehr.l1': 'Modello di elementi con misure, piani e materiali',
    'mehr.chat': 'Testo e immagini. Nessun elemento costruttivo, nessuna scala, nessun file per continuare.',
    'mehr.chatT': 'Chat con l’IA',
    'mehr.text': 'Una chat con l’IA ti descrive una casa a parole e immagini. Amphion la costruisce: un modello di veri elementi, muri, solai, finestre e scale con misure e materiali. Da lì Amphion disegna piante in scala, e il tuo studio e i tuoi consulenti continuano a lavorare con i file.',
    'mehr.titel': 'Più di una chat con l’IA',
    'aktion.oderKaufen': 'Acquista subito: scegli un piano',
    'aktion.probeText': 'Senza carta di credito. Scarica Amphion, aprilo e scegli «Prova gratis per 30 giorni». Poi il piano che scegli, disdetta mensile.',
    'held.probe': 'Prova gratis per 30 giorni',
    'aktion.probe': 'Prova gratis per 30 giorni',
    'proj.vanct': "Torre sull’acqua",
    'held.fuer': "Per architette e architetti con studio proprio",
    'held.vertrauen': 'I progetti restano sul tuo computer · 30 giorni gratis, senza carta · Disdetta mensile',
    'held.teilen': "Sei sul telefono? Invia il link al tuo computer",
    'privat.l5': 'Raccontaci cosa hai in mente. Ti diciamo come ti aiutiamo e quanto costa.',
    'preis.einheitNurMonat': "al mese più IVA, solo mensile",
    'faq.8f': "Amphion sostituisce il mio programma CAD?",
    'faq.8': "Sì, per progetto preliminare, rilievo, pratica edilizia e progetto esecutivo. Amphion disegna dal modello piante, sezioni, prospetti, impianto elettrico e riscaldamento e dettagli, pronti da stampare. A mano disegni con aggancio ai punti, quote e retini come in un CAD. Per i consulenti, Amphion esporta il modello come IFC o DXF a livelli.",
    'faq.9f': "Conviene a uno studio di una persona?",
    'faq.9': "Fai il conto con i tuoi numeri. Amphion disegna dal modello l’intero set di tavole: piante, impianto elettrico e riscaldamento, sezione, prospetto e tavole di dettaglio per cucina e bagni, quotate e con le scritte. Per una casa unifamiliare importata abbiamo misurato 16 tavole in circa due minuti. Risparmi il tempo che oggi dedichi a disegnare, quotare e scrivere. Se sono una o due ore al mese, Amphion si è già pagato. Altrimenti, nel primo mese ti rimborsiamo tutto.",
    'abo.textPrivat': 'Lasciaci la tua e-mail e due parole sul progetto. Ti rispondiamo in giornata per parlarne.',
    'abo.titelPrivat': 'Richiedi Amphion Privato',
    'privat.knopf': 'Contattaci',
    'privat.l4': 'Tutto di Pro, senza limiti',
    'privat.l3': 'Un referente fisso, al telefono, in video o in sede',
    'privat.l2': 'Massima velocità: risposta in giornata, risultati durante la notte',
    'privat.l1': 'Architetti lavorano per te: rilievo, modello, varianti, disegni e rendering preparati',
    'privat.fuer': 'assistenza privata',
    'preis.schreibUns': 'Scrivici.',
    'preis.begleitung': 'Accompagnamento personale e aiuto nella modellazione del tuo progetto: su richiesta.',
    'preis.schreib': 'Scrivici.',
    'preis.einheitJahr': 'all’anno più IVA',
    'preis.einheitMonat': 'al mese più IVA',
    'preis.jaehrlich': 'Annuale: 2 mesi in regalo',
    'preis.monatlich': 'Mensile',
    'preis.gruender': 'posti fondatori su 100 ancora liberi: chi compra ora mantiene il prezzo per sempre.',
    'cta.titel': 'Provalo con il tuo progetto.', 'cta.laden': 'Scarica Amphion', 'cta.kaufen': 'Scegli un piano', 'cta.klein': "Download gratuito. Rimborso nel primo mese, disdetta mensile.", 'cta.andere': 'Altro computer?',
    'aktion.preis': "Quattro piani per il tuo studio. Rimborso nel primo mese, disdetta mensile.",
    'aktion.kaufen': 'Acquista una chiave',
    'aktion.ladenKlein': 'gratis',
    'aktion.laden': 'Scarica',
    meta: 'Descrivi ciò che ti serve. Amphion lo modella in 3D. Modellazione guidata dalla lingua, per Mac e Windows.',
    'nav.projekte': 'Progetti', 'nav.funktionen': 'Funzioni', 'nav.preis': 'Prezzi', 'nav.faq': 'Domande', 'nav.kaufen': 'Acquista',
    'held.titel1': 'Descrivilo.', 'held.titel2': 'Amphion lo modella.',
    'held.text': "Un rilievo, uno schizzo, una foto o una frase diventano un vero modello 3D con muri, solai e finestre. Amphion fa il rendering sul tuo computer e disegna piante, sezioni e prospetti. Tu progetti, Amphion disegna.",
    'abo.titel': "Avvia l’abbonamento", 'abo.text': "Lasciaci la tua e-mail. Entro un giorno ricevi la chiave di licenza e la fattura. La chiave vale per un computer; puoi cambiarlo quando vuoi in «Il mio account».", 'abo.email': "Indirizzo e-mail", 'abo.name': "Nome o studio (facoltativo)", 'abo.senden': "Richiedi la chiave", 'abo.danke': "Grazie. Ti scriviamo entro un giorno a {email}.", 'abo.fehler': "Non ha funzionato. Scrivi direttamente a hello@amphion3d.com.", 'nav.konto': "Il mio account",
    'held.ladenArm': 'Mac · Apple Silicon', 'held.ladenX64': 'Mac · Intel', 'held.ladenWin': 'Windows 10 e 11',
    'held.klein': 'Per Mac (macOS 14 o successivo) e Windows (10 e 11). La chiave si inserisce in Amphion. Dal telefono usi Amphion nel browser finché il computer è acceso.', 'held.kaufen': 'Scegli un piano',
    'bild.band': "La torre sull’acqua dall’alto. Progetto, modello e immagine realizzati con Amphion.",
    'modell.titel': 'Parla con il modello', 'modell.text': "Due progetti finiti in Amphion: una casa con giardino del 1913 con la sua ristrutturazione, modellata in circa 2 ore, e una torre sull’acqua con tutta la città, in circa 5 ore. Puoi ruotarli, sezionarli, mostrare, nascondere e parlarci. Modifiche e rendering si fanno nell’app.", 'modell.reiterB': 'Cantiere: prova tu', 'chip.b1': 'Fai il tetto giallo', 'chip.b2': 'Metti un tetto gotico', 'chip.b3': 'Un piano in più', 'chip.b4': 'Una torre sull’angolo', 'chip.b5': 'Grandi finestre a sud', 'chip.b6': 'Annulla', 'chip.b7': 'Ricomincia', 'modell.steuerung': 'Trascina per ruotare · tasto destro o due dita per spostare · rotella o due dita per lo zoom, fino alla strada',
    'modell.frage': 'Di’ al modello cosa vuoi vedere …', 'modell.reiterV': 'Torre sull’acqua', 'modell.reiterM': 'Casa con giardino', 'modell.diktat': 'Detta', 'modell.fehler': 'Impossibile caricare il modello.',
    'chip.m1': 'Apri il piano terra', 'chip.m2': 'Com’era nel 1913?', 'chip.m3': 'Togli i vicini', 'chip.m4': 'Primo piano dall’alto, assonometria', 'chip.m5': 'Mostrami il giardino', 'chip.zurueck': 'Tutto come all’inizio',
    'chip.v1': 'Solo la struttura', 'chip.v2': 'Taglia a 60 metri', 'chip.v3': 'Senza la città', 'chip.v4': 'Scendi al basamento', 'chip.v5': 'Dall’alto, assonometria', 'chip.v6': 'Mostra la nostra città', 'chip.v7': 'Mostra la città vera',
    'bild.app': "Questo è Amphion: elementi e livelli a sinistra, il modello al centro, la chat a destra. Qui una torre sull’acqua con 69 510 elementi.",
    'schritte.titel': 'Come inizi',
    'schritte.1t': 'Scarica Amphion', 'schritte.1': 'Scarica e apri Amphion. Mac: trascinalo in Applicazioni e avvialo, Amphion è firmato da Apple. Windows: avvia il programma di installazione, la prima volta «Ulteriori informazioni» e «Esegui comunque».',
    'schritte.2t': 'Provare gratis o inserire la chiave', 'schritte.2': 'Al primo avvio: scegli «Prova gratis per 30 giorni» o inserisci la tua chiave, poi apri l’esempio. Il telefono si collega con un codice.', 'held.mac': 'Quale Mac? Menu Apple, «Informazioni su questo Mac»: se c’è scritto «Chip Apple M…», scegli Apple Silicon, altrimenti Intel.',
    'schritte.3t': 'Inizia come vuoi', 'schritte.3': 'Carica schizzi, disegni, PDF o foto, detta o scrivi. Da zero o da un progetto esistente. Amphion costruisce, tu modifichi, poi fai il rendering ed esporti i disegni in PDF.',
    'proj.titel': 'Fatto con Amphion',
    'proj.vanc': 'Grattacielo con cinque radure pubbliche, concorso 2026. Modello, rendering, disegni e tavole realizzati con Amphion.',
    'vanc.1': 'La torre sopra la città', 'vanc.2': 'Dal parco', 'vanc.3': 'Giardini pensili sul basamento', 'vanc.4': 'Terrazza nella torre', 'vanc.5': 'Angolo del basamento', 'vanc.6': 'Sulla strada', 'vanc.7': 'Radura nel basamento', 'vanc.8': 'Sezione attraverso la torre, disegnata dal modello',
    'proj.muc': 'Ristrutturazione di una villa del 1913 con ampliamento, 2026. Stato di fatto, progetto, interni e piante in Amphion, concordati con il committente sulle immagini.', 'proj.muct': 'Villa del 1913',
    'muc.1': 'Angolo della strada', 'muc.2': 'Vista a volo d’uccello con l’ampliamento', 'muc.3': 'Assonometria, piano superiore aperto', 'muc.4': 'Terrazza sul tetto', 'muc.5': 'Salotto con stufa a legna', 'muc.6': 'Com’era nel 1913', 'muc.7': 'Pianta piano terra, ristrutturazione', 'muc.8': 'Pianta primo piano, ristrutturazione', 'muc.9': 'Pianta del sottotetto con terrazza', 'vgl.titel': 'Dal modello all’immagine', 'vgl.text': 'A sinistra la vista dal modello, a destra il render IA che Amphion ne ricava. Trascina il cursore.', 'vgl.links': 'Modello', 'vgl.rechts': 'Render IA', 'vgl.regler': 'Cursore tra modello e render', 'vgl.strasse': 'Strada', 'vgl.garten': 'Giardino', 'vgl.erker': 'Bovindo', 'vgl.salon': 'Salotto', 'vgl.kueche': 'Cucina',
    'fkt.titel': 'Cosa fa Amphion',
    'fkt.1t': 'Veri elementi costruttivi', 'fkt.1': 'Muri, solai, pilastri, finestre, scale. Con misure, strati e quantità, non solo superfici.',
    'fkt.2t': 'Parla invece di cliccare', 'fkt.2': 'Di’ o scrivi cosa vuoi, con frasi intere. Amphion ti capisce nella tua lingua.',
    'fkt.3t': 'Esportazione in CAD e BIM', 'fkt.3': 'Il modello passa ai comuni programmi CAD e BIM o al tuo ingegnere strutturista.',
    'fkt.4t': 'Rendering sul tuo computer', 'fkt.4': 'Blender Cycles gira in locale, tutte le volte che vuoi, senza costi aggiuntivi.',
    'fkt.5t': 'Disegni in PDF', 'fkt.5': 'Piante, sezioni, prospetti e tavole escono direttamente dal modello.',
    'fkt.6t': 'Dal telefono e dal terminale', 'fkt.6': 'Usalo nel browser ovunque tu sia. Oppure comandalo da Claude Code, Codex e Gemini CLI.',
    'preis.titel': 'Quattro piani', 'preis.einheit': 'al mese più IVA',
    // Vier Pläne (Preisentscheidung Tassilo 5.11.2026): Amphion mit einfacher KI, Amphion Pro, Büro ab 3 Plätzen, Privat
    'basis.fuer': 'IA semplice',
    'basis.l1': 'Modellare a mano e con la voce, importare tavole e modelli',
    'basis.l2': 'Piante, sezioni e prospetti in PDF',
    'basis.l3': 'Rendering con Blender sul tuo computer, illimitati',
    'basis.l4': 'IA semplice inclusa: più lenta e meno precisa, senza immagini IA',
    'basis.knopf': 'Acquista Amphion',
    'pro.fuer': 'consigliato',
    'pro.l1': 'Tutto di Amphion',
    'pro.l2': 'L’IA buona: i modelli più potenti per chat, costruzione e ricerca web',
    'pro.l3': '60 rendering con IA al mese',
    'pro.l4': 'Uso equo senza limite fisso, tutti gli aggiornamenti',
    'pro.knopf': 'Acquista Pro',
    'buero.name': 'Amphion Team',
    'buero.fuer': 'da 3 postazioni',
    'buero.einheitMonat': 'al mese per 3 postazioni più IVA',
    'buero.einheitJahr': 'all’anno per 3 postazioni più IVA',
    'buero.l1': 'Amphion Pro per ogni postazione',
    'buero.l2': 'Ogni postazione in più 129 € al mese',
    'buero.l3': 'Una chiave per postazione, una fattura',
    'buero.knopf': 'Acquista Team',
    'buero.plaetze': 'Postazioni',
    'abo.titelBasis': 'Acquista Amphion',
    'abo.titelPro': 'Acquista Amphion Pro',
    'abo.titelBuero': 'Acquista Amphion Team',
    'preis.l1': 'IA per il modello, illimitata', 'preis.l2': '60 rendering con IA al mese',
    'preis.l3': 'Rendering Blender illimitato, sul tuo computer', 'preis.l4': 'Tutti gli aggiornamenti',
    'preis.knopf': 'Inizia l’abbonamento',
    'preis.paket': 'Più IA quando serve: pacchetto 29 €.',
    'preis.studis': 'Studenti e docenti: Amphion con IA semplice a 15 € al mese con e-mail universitaria.', 'preis.garantie': 'Non ti convince il primo mese? Ti rimborsiamo tutto.',
    'faq.titel': 'Domande',
    'faq.1f': 'Di cosa ho bisogno?', 'faq.1': 'Un Mac con macOS 14 o successivo oppure un PC con Windows 10 o 11 (64 bit), e internet per l’IA. Per i rendering Amphion installa Blender da blender.org, basta un clic.',
    'faq.2f': 'Esiste una versione per Windows?', 'faq.2': 'Sì. Scarica Amphion per Windows e avvia il programma di installazione. Poiché Amphion è nuovo, la prima volta Windows mostra «Windows ha protetto il PC». Clicca su «Ulteriori informazioni» e poi su «Esegui comunque». Dopo Amphion si avvia normalmente.',
    'faq.6f': "Il Mac avvisa all’apertura?", 'faq.6': "No. Amphion è firmato e notarizzato da Apple: apri il DMG, trascina Amphion in «Applicazioni» e avvialo. Windows avvisa ancora la prima volta, vedi sopra.",
    'faq.3f': 'Dove sono i miei dati?', 'faq.3': 'Sul tuo computer. Progetti, modelli e rendering restano in locale. All’IA vanno solo i testi della tua chat e, se lo chiedi, l’immagine per un rendering IA.',
    'faq.4f': 'Mi serve una mia chiave IA?', 'faq.4': 'No. L’IA è inclusa nell’abbonamento. Non ci sono chiavi di altri fornitori, inserisci solo la tua chiave Amphion.',
    'faq.5f': 'Devo saper usare Blender?', 'faq.5': 'No. Amphion imposta da solo camera, luce e materiali e avvia Blender in background. Tu vedi solo l’immagine.', 'faq.namef': 'Perché si chiama Amphion?', 'faq.name': 'Nel mito greco Anfione costruì le mura di Tebe senza sollevare una pietra. Cantava, e le pietre si mettevano al loro posto da sole. Così lavori con Amphion: parli, e l’edificio prende forma.', titel: 'Amphion 3D · Software di modellazione 3D che ascolta',
    'faq.7f': 'Come disdico?', 'faq.7': 'In qualsiasi momento, nel tuo account sotto «Fatture e disdetta» o con un’e-mail. Un piano mensile dura fino a fine mese, uno annuale fino a fine anno, poi termina. I tuoi file restano con te.',
    'fuss.impressum': 'Note legali', 'fuss.datenschutz': 'Privacy', 'fuss.lizenz': 'Licenza', 'fuss.kontakt': 'Contatti'
  },
  pt: {
    'aria.senden': 'Enviar', 'aria.cta': 'Descarregar ou comprar Amphion', 'aria.zu': 'Fechar', 'aria.periode': 'Faturação',
    'privat.preisText': 'conforme o que precisares',
    'privat.preis': 'Sob consulta',
    'mehr.bild': 'Desenhado a partir do modelo: planta do rés-do-chão da casa com jardim.',
    'mehr.l4': 'Renders no teu computador, sempre que quiseres',
    'mehr.l3': 'IFC para BIM e projetistas, 3dm para continuar, STEP para sólidos de forma livre',
    'mehr.l2': 'Plantas, cortes e alçados à escala, em PDF e DXF',
    'mehr.l1': 'Modelo de elementos com medidas, pisos e materiais',
    'mehr.chat': 'Texto e imagens. Sem elementos construtivos, sem escala, sem ficheiro para continuar.',
    'mehr.chatT': 'Chat com IA',
    'mehr.text': 'Um chat com IA descreve-te uma casa em palavras e imagens. O Amphion constrói-a: um modelo de elementos reais, paredes, lajes, janelas e escadas com medidas e materiais. A partir dele o Amphion desenha plantas à escala, e o teu atelier e os teus projetistas continuam a trabalhar com os ficheiros.',
    'mehr.titel': 'Mais do que um chat com IA',
    'aktion.oderKaufen': 'Comprar já: escolher um plano',
    'aktion.probeText': 'Sem cartão de crédito. Descarrega o Amphion, abre-o e escolhe «Experimenta 30 dias grátis». Depois o plano que escolheres, cancelamento mensal.',
    'held.probe': 'Experimenta 30 dias grátis',
    'aktion.probe': 'Experimenta 30 dias grátis',
    'proj.vanct': "Torre junto à água",
    'held.fuer': "Para arquitetas e arquitetos com atelier próprio",
    'held.vertrauen': 'Os projetos ficam no teu computador · 30 dias grátis, sem cartão · Cancelamento mensal',
    'held.teilen': "No telemóvel? Envia o link para o teu computador",
    'privat.l5': 'Diz-nos o que tens em mente. Dizemos-te como ajudamos e quanto custa.',
    'preis.einheitNurMonat': "por mês mais IVA, só mensal",
    'faq.8f': "O Amphion substitui o meu programa de CAD?",
    'faq.8': "Sim, para estudo prévio, levantamento, licenciamento e projeto de execução. O Amphion desenha a partir do modelo plantas, cortes, alçados, planos de eletricidade e aquecimento e pormenores, prontos a imprimir. À mão desenhas com captura de pontos, cotas e tramas como num CAD. Para os projetistas de especialidades, o Amphion exporta o modelo como IFC ou DXF por camadas.",
    'faq.9f': "Compensa para um atelier de uma pessoa?",
    'faq.9': "Faz as contas com os teus números. O Amphion desenha a partir do modelo o conjunto completo de plantas: plantas dos pisos, planos de eletricidade e aquecimento, corte, alçado e folhas de pormenor da cozinha e das casas de banho, cotados e legendados. Para uma moradia importada medimos 16 folhas em cerca de dois minutos. Poupas o tempo que hoje gastas a desenhar, cotar e legendar. Se forem uma ou duas horas por mês, o Amphion já se pagou. Se não, no primeiro mês devolvemos tudo.",
    'abo.textPrivat': 'Deixa-nos o teu e-mail e umas palavras sobre o projeto. Respondemos no próprio dia para conversar.',
    'abo.titelPrivat': 'Pedir o Amphion Privado',
    'privat.knopf': 'Contactar',
    'privat.l4': 'Tudo do Pro, sem limites',
    'privat.l3': 'Um contacto fixo, por telefone, vídeo ou no local',
    'privat.l2': 'Velocidade máxima: resposta no próprio dia, resultados durante a noite',
    'privat.l1': 'Arquitetos trabalham para ti: levantamento, modelo, variantes, desenhos e renders preparados',
    'privat.fuer': 'assistência privada',
    'preis.schreibUns': 'Escreve-nos.',
    'preis.begleitung': 'Acompanhamento pessoal e ajuda na modelação do teu projeto: a pedido.',
    'preis.schreib': 'Escreve-nos.',
    'preis.einheitJahr': 'por ano mais IVA',
    'preis.einheitMonat': 'por mês mais IVA',
    'preis.jaehrlich': 'Anual: 2 meses oferecidos',
    'preis.monatlich': 'Mensal',
    'preis.gruender': 'de 100 lugares fundadores livres: quem compra agora mantém o preço para sempre.',
    'cta.titel': 'Experimenta com o teu próprio projeto.', 'cta.laden': 'Descarregar o Amphion', 'cta.kaufen': 'Escolher plano', 'cta.klein': "Download grátis. Reembolso no primeiro mês, cancelamento mensal.", 'cta.andere': 'Outro computador?',
    'aktion.preis': "Quatro planos para o teu atelier. Reembolso no primeiro mês, cancelamento mensal.",
    'aktion.kaufen': 'Comprar uma chave',
    'aktion.ladenKlein': 'grátis',
    'aktion.laden': 'Descarregar',
    meta: 'Descreve o que precisas. O Amphion modela-o em 3D. Modelação por linguagem, para Mac e Windows.',
    'nav.projekte': 'Projetos', 'nav.funktionen': 'Funções', 'nav.preis': 'Preço', 'nav.faq': 'Perguntas', 'nav.kaufen': 'Comprar',
    'held.titel1': 'Descreve-o.', 'held.titel2': 'O Amphion modela-o.',
    'held.text': "Um levantamento, um esboço, uma foto ou uma frase tornam-se um verdadeiro modelo 3D com paredes, lajes e janelas. O Amphion renderiza no teu computador e desenha plantas, cortes e alçados. Tu projetas, o Amphion desenha.",
    'abo.titel': "Começar a subscrição", 'abo.text': "Deixa-nos o teu e-mail. Num dia recebes a chave de licença e a fatura. A chave vale para um computador; podes trocá-lo quando quiseres em «A minha conta».", 'abo.email': "Endereço de e-mail", 'abo.name': "Nome ou atelier (opcional)", 'abo.senden': "Pedir a chave", 'abo.danke': "Obrigado. Escrevemos-te num dia, para {email}.", 'abo.fehler': "Não funcionou. Escreve diretamente para hello@amphion3d.com.", 'nav.konto': "A minha conta",
    'held.ladenArm': 'Mac · Apple Silicon', 'held.ladenX64': 'Mac · Intel', 'held.ladenWin': 'Windows 10 e 11',
    'held.klein': 'Para Mac (macOS 14 ou posterior) e Windows (10 e 11). A chave introduz-se no Amphion. No telemóvel usas o Amphion no navegador enquanto o computador estiver ligado.', 'held.kaufen': 'Escolher plano',
    'bild.band': "A torre junto à água vista do ar. Projeto, modelo e imagem feitos no Amphion.",
    'modell.titel': 'Fala com o modelo', 'modell.text': "Dois projetos concluídos no Amphion: uma casa com jardim de 1913 e a sua reabilitação, modelada em cerca de 2 horas, e uma torre junto à água com toda a cidade, em cerca de 5 horas. Podes rodá-los, cortá-los, mostrar, ocultar e falar com eles. Alterar e renderizar faz-se na app.", 'modell.reiterB': 'Obra: experimenta', 'chip.b1': 'Pinta o telhado de amarelo', 'chip.b2': 'Põe um telhado gótico', 'chip.b3': 'Mais um piso', 'chip.b4': 'Uma torre na esquina', 'chip.b5': 'Janelas grandes a sul', 'chip.b6': 'Desfazer', 'chip.b7': 'Recomeçar', 'modell.steuerung': 'Arrasta para rodar · botão direito ou dois dedos para deslocar · roda do rato ou dois dedos para fazer zoom, até à rua',
    'modell.frage': 'Diz ao modelo o que queres ver …', 'modell.reiterV': 'Torre à beira da água', 'modell.reiterM': 'Casa com jardim', 'modell.diktat': 'Ditar', 'modell.fehler': 'Não foi possível carregar o modelo.',
    'chip.m1': 'Abre o piso térreo', 'chip.m2': 'Como era em 1913?', 'chip.m3': 'Tira os vizinhos', 'chip.m4': 'Primeiro andar visto de cima, axonometria', 'chip.m5': 'Mostra-me o jardim', 'chip.zurueck': 'Tudo como no início',
    'chip.v1': 'Só a estrutura', 'chip.v2': 'Corta a 60 metros', 'chip.v3': 'Sem a cidade', 'chip.v4': 'Desce até ao embasamento', 'chip.v5': 'De cima, axonometria', 'chip.v6': 'Mostra a cidade própria', 'chip.v7': 'Mostra a cidade real',
    'bild.app': "Isto é o Amphion: elementos e camadas à esquerda, o modelo ao centro, o chat à direita. Aqui uma torre junto à água com 69 510 elementos.",
    'schritte.titel': 'Como começas',
    'schritte.1t': 'Descarregar o Amphion', 'schritte.1': 'Descarrega e abre o Amphion. Mac: arrasta-o para Aplicações e abre-o, o Amphion está assinado pela Apple. Windows: executa o instalador, na primeira vez «Mais informações» e «Executar mesmo assim».',
    'schritte.2t': 'Experimentar grátis ou introduzir a chave', 'schritte.2': 'No primeiro arranque: escolhe «Experimenta 30 dias grátis» ou introduz a tua chave e abre o exemplo. O telemóvel liga-se com um código.', 'held.mac': 'Que Mac tenho? Menu Apple, «Acerca deste Mac»: se disser «Chip Apple M…», escolhe Apple Silicon; caso contrário, Intel.',
    'schritte.3t': 'Começa como quiseres', 'schritte.3': 'Carrega esboços, desenhos, PDF ou fotos, dita ou escreve. Do zero ou a partir de um projeto existente. O Amphion constrói, tu ajustas, depois fazes o render e exportas os desenhos em PDF.',
    'proj.titel': 'Feito com o Amphion',
    'proj.vanc': 'Torre com cinco clareiras públicas, concurso 2026. Modelo, renders, desenhos e painéis feitos no Amphion.',
    'vanc.1': 'A torre sobre a cidade', 'vanc.2': 'A partir do parque', 'vanc.3': 'Jardins na cobertura do embasamento', 'vanc.4': 'Terraço na torre', 'vanc.5': 'Esquina do embasamento', 'vanc.6': 'Na rua', 'vanc.7': 'Clareira no embasamento', 'vanc.8': 'Corte pela torre, desenhado a partir do modelo',
    'proj.muc': 'Reabilitação de uma moradia de 1913 com ampliação, 2026. Existente, proposta, interiores e plantas no Amphion, acordados com o cliente sobre as imagens.', 'proj.muct': 'Villa de 1913',
    'muc.1': 'Esquina da rua', 'muc.2': 'Vista aérea com a ampliação', 'muc.3': 'Axonometria, piso superior aberto', 'muc.4': 'Terraço na cobertura', 'muc.5': 'Sala com fogão a lenha', 'muc.6': 'Como era em 1913', 'muc.7': 'Planta do rés-do-chão, remodelação', 'muc.8': 'Planta do piso superior, remodelação', 'muc.9': 'Planta do sótão com terraço', 'vgl.titel': 'Do modelo à imagem', 'vgl.text': 'À esquerda a vista do modelo, à direita o render com IA que o Amphion faz a partir dela. Arrasta o cursor.', 'vgl.links': 'Modelo', 'vgl.rechts': 'Render IA', 'vgl.regler': 'Cursor entre modelo e render', 'vgl.strasse': 'Rua', 'vgl.garten': 'Jardim', 'vgl.erker': 'Janela saliente', 'vgl.salon': 'Sala', 'vgl.kueche': 'Cozinha',
    'fkt.titel': 'O que o Amphion faz',
    'fkt.1t': 'Elementos construtivos reais', 'fkt.1': 'Paredes, lajes, pilares, janelas, escadas. Com medidas, camadas e quantidades, não só superfícies.',
    'fkt.2t': 'Fala em vez de clicar', 'fkt.2': 'Diz ou escreve o que queres, em frases inteiras. O Amphion entende-te na tua língua.',
    'fkt.3t': 'Exportar para CAD e BIM', 'fkt.3': 'O modelo passa para os programas CAD e BIM habituais ou para o teu engenheiro de estruturas.',
    'fkt.4t': 'Render no teu computador', 'fkt.4': 'O Blender Cycles corre em local, sempre que quiseres, sem custos extra.',
    'fkt.5t': 'Desenhos em PDF', 'fkt.5': 'Plantas, cortes, fachadas e painéis saem diretamente do modelo.',
    'fkt.6t': 'No telefone e no terminal', 'fkt.6': 'Usa-o no navegador onde estiveres. Ou controla-o a partir do Claude Code, Codex e Gemini CLI.',
    'preis.titel': 'Quatro planos', 'preis.einheit': 'por mês mais IVA',
    // Vier Pläne (Preisentscheidung Tassilo 5.11.2026): Amphion mit einfacher KI, Amphion Pro, Büro ab 3 Plätzen, Privat
    'basis.fuer': 'IA simples',
    'basis.l1': 'Modelar à mão e com a voz, importar plantas e modelos',
    'basis.l2': 'Plantas, cortes e alçados em PDF',
    'basis.l3': 'Renders com Blender no teu computador, sem limite',
    'basis.l4': 'IA simples incluída: mais lenta e menos precisa, sem imagens IA',
    'basis.knopf': 'Comprar Amphion',
    'pro.fuer': 'recomendado',
    'pro.l1': 'Tudo do Amphion',
    'pro.l2': 'A boa IA: os modelos mais fortes para chat, construir e pesquisa web',
    'pro.l3': '60 renders com IA por mês',
    'pro.l4': 'Uso justo sem limite fixo, todas as atualizações',
    'pro.knopf': 'Comprar Pro',
    'buero.name': 'Amphion Equipa',
    'buero.fuer': 'a partir de 3 postos',
    'buero.einheitMonat': 'por mês para 3 postos mais IVA',
    'buero.einheitJahr': 'por ano para 3 postos mais IVA',
    'buero.l1': 'Amphion Pro em cada posto',
    'buero.l2': 'Cada posto adicional 129 € por mês',
    'buero.l3': 'Uma chave por posto, uma fatura',
    'buero.knopf': 'Comprar Equipa',
    'buero.plaetze': 'Postos',
    'abo.titelBasis': 'Comprar Amphion',
    'abo.titelPro': 'Comprar Amphion Pro',
    'abo.titelBuero': 'Comprar Amphion Equipa',
    'preis.l1': 'IA para o modelo, sem limite', 'preis.l2': '60 renders com IA por mês',
    'preis.l3': 'Render Blender ilimitado, no teu computador', 'preis.l4': 'Todas as atualizações',
    'preis.knopf': 'Começar assinatura',
    'preis.paket': 'Mais IA quando precisar: pacote 29 €.',
    'preis.studis': 'Estudantes e docentes: Amphion com IA simples por 15 € por mês com e-mail universitário.', 'preis.garantie': 'Não te convenceu no primeiro mês? Devolvemos tudo.',
    'faq.titel': 'Perguntas',
    'faq.1f': 'Do que preciso?', 'faq.1': 'Um Mac com macOS 14 ou posterior ou um PC com Windows 10 ou 11 (64 bits), e internet para a IA. Para os renders o Amphion instala o Blender a partir de blender.org, basta um clique.',
    'faq.2f': 'Há versão para Windows?', 'faq.2': 'Sim. Descarrega o Amphion para Windows e executa o instalador. Como o Amphion é novo, na primeira vez o Windows mostra «O Windows protegeu o computador». Clica em «Mais informações» e depois em «Executar mesmo assim». A seguir o Amphion arranca normalmente.',
    'faq.6f': "O Mac avisa ao abrir?", 'faq.6': "Não. O Amphion está assinado e notarizado pela Apple: abre o DMG, arrasta o Amphion para «Aplicações» e abre-o. O Windows ainda avisa na primeira vez, ver acima.",
    'faq.3f': 'Onde estão os meus dados?', 'faq.3': 'No teu computador. Projetos, modelos e renders ficam no local. Para a IA vão só os textos do teu chat e, se pedires, a imagem para um render com IA.',
    'faq.4f': 'Preciso da minha própria chave de IA?', 'faq.4': 'Não. A IA está incluída na assinatura. Não há chaves de outros fornecedores, introduzes apenas a tua chave Amphion.',
    'faq.5f': 'Tenho de saber usar o Blender?', 'faq.5': 'Não. O Amphion ajusta sozinho câmara, luz e materiais e executa o Blender em segundo plano. Tu só vês a imagem.', 'faq.namef': 'Porque se chama Amphion?', 'faq.name': 'No mito grego, Anfião ergueu as muralhas de Tebas sem levantar uma pedra. Cantava, e as pedras colocavam-se sozinhas no lugar. É assim que trabalhas com o Amphion: falas, e o edifício ganha forma.', titel: 'Amphion 3D · Software de modelação 3D que escuta',
    'faq.7f': 'Como cancelo?', 'faq.7': 'A qualquer momento, na tua conta em «Faturas e cancelamento» ou por e-mail. Um plano mensal corre até ao fim do mês, um plano anual até ao fim do ano, e depois termina. Os teus ficheiros ficam contigo.',
    'fuss.impressum': 'Aviso legal', 'fuss.datenschutz': 'Privacidade', 'fuss.lizenz': 'Licença', 'fuss.kontakt': 'Contacto'
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
alle('[data-download="win"]', el => el.href = DOWNLOAD_WIN);
// Besucher mit Windows: der Windows-Knopf wird der erste und hervorgehobene, „Amphion laden“ führt zum Installer
const WINDOWS = /Windows NT/i.test(navigator.userAgent) && !/Windows Phone/i.test(navigator.userAgent);
// „auto“: Windows oder Mac direkt; Linux, Android, Handy: zu den drei Knöpfen springen statt einer DMG, die dort nicht läuft
const MACINTOSH = /Macintosh/.test(navigator.userAgent);
// Intel-Mac am Grafikchip erkennen (4.11.: „auto“ lud auf Intel-Macs die Apple-Silicon-Fassung); unsicher → Apple Silicon, „Anderer Computer?“ führt zu allen Knöpfen
const INTEL_MAC = MACINTOSH && (() => { try { const g = document.createElement('canvas').getContext('webgl'), d = g?.getExtension('WEBGL_debug_renderer_info'); return !!d && /Intel/i.test(g.getParameter(d.UNMASKED_RENDERER_WEBGL)); } catch { return false; } })();
alle('[data-download="auto"]', el => el.href = WINDOWS ? DOWNLOAD_WIN : MACINTOSH ? (INTEL_MAC ? DOWNLOAD_X64 : DOWNLOAD_ARM) : '#held');
// Version unter dem Knopf und im Dateinamen (7.11., Cloud /v1/downloads aus dem letzten stabilen Release); ohne Antwort bleiben die festen Links
fetch(CLOUD + '/v1/downloads').then(r => r.ok ? r.json() : {}).then(d => {
  for (const [k, x] of Object.entries(d)) alle(`[data-download="${k}"]`, el => {
    el.href = x.url;
    const s = el.querySelector('.dl-version') || el.appendChild(Object.assign(document.createElement('small'), { className: 'dl-version' }));
    s.textContent = 'Version ' + x.version;
  });
  const auto = WINDOWS ? d.win : MACINTOSH ? (INTEL_MAC ? d.x64 : d.arm) : null;
  if (auto) alle('[data-download="auto"]', el => { el.href = auto.url; });
}).catch(() => { /* GitHub nicht erreichbar: feste Links ohne Versionsangabe */ });
if (WINDOWS) alle('.held .knoepfe', k => { const w = k.querySelector('[data-download="win"]'); if (!w) return; k.querySelector('.primaer')?.classList.remove('primaer'); w.classList.add('primaer'); k.prepend(w); });
// Handy (4.11. spät, Wunschkunde findet Amphion oft am Handy, installiert wird am Computer): Link teilen oder per Mail an sich selbst
const HANDY = /iPhone|iPad|Android/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && !MACINTOSH && !WINDOWS);
alle('[data-teilen]', el => { el.hidden = !HANDY; if (navigator.share) el.onclick = e => { e.preventDefault(); navigator.share({ title: 'Amphion', url: 'https://amphion3d.com/' }).catch(() => {}); }; });
// Preise erst beim Kaufen (5.11., Tassilo): der Preisteil ist ein Dialog; jeder Link auf #preis öffnet ihn, auch #preis in der Adresse (App)
{ const dlg = document.querySelector('dialog#preis');
  if (dlg) {
    const auf = () => { if (!dlg.open) dlg.showModal(); window.formaZaehl?.('preise'); };
    document.addEventListener('click', e => { const a = e.target.closest('a[href="#preis"]'); if (!a) return; e.preventDefault(); auf(); });
    dlg.querySelector('.preise-zu')?.addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });   // Klick auf den Rand schließt
    if (location.hash === '#preis') addEventListener('load', auf);
  } }
alle('[data-checkout]', el => el.href = CHECKOUT[el.dataset.checkout] || CHECKOUT.pro);
// Preise (4.11.): Umschalter Monat/Jahr, Zähler der freien Gründungsplätze aus der Amphion Cloud (/v1/gruender)
let PERIODE = 'monat';
function periodeSetzen(p) {
  PERIODE = p; const t = TEXTE[document.documentElement.lang] || TEXTE.de;
  for (const b of document.querySelectorAll('[data-periode]')) b.classList.toggle('an', b.dataset.periode === p);
  for (const z of document.querySelectorAll('#preis .zahl[data-preis-monat]')) z.textContent = z.dataset[p === 'jahr' ? 'preisJahr' : 'preisMonat'];
  for (const e of document.querySelectorAll('#preis [data-einheit-monat]')) { e.dataset.i18n = p === 'jahr' ? e.dataset.einheitJahr : e.dataset.einheitMonat; e.textContent = t[e.dataset.i18n] || e.textContent; }
}
for (const b of document.querySelectorAll('[data-periode]')) b.onclick = () => periodeSetzen(b.dataset.periode);
fetch(CLOUD + '/v1/gruender').then(r => r.ok ? r.json() : null).then(j => { if (j && Number.isFinite(j.frei)) for (const el of document.querySelectorAll('[data-gruender]')) el.textContent = j.frei; }).catch(() => {});
// Abo-Formular: öffnet sich bei „Abo starten“, schickt E-Mail und Plan an die Amphion Cloud (/v1/anfrage)
{
  const dlg = document.querySelector('#abo'), form = dlg?.querySelector('form'), meldung = dlg?.querySelector('.abo-meldung');
  if (dlg && form) {
    // Stripe zuerst (3.11., Tassilo: wie bei Antiga): die Cloud gibt die Adresse des gehosteten Checkouts; ohne Zahlungsdienst das Formular
    let plan = 'pro', plaetze = 1;
    document.addEventListener('click', async e => { const a = e.target.closest('a[data-checkout]'); if (!a || a.dataset.checkout === 'wahl') return; e.preventDefault(); plan = ['basis', 'pro', 'buero', 'privat'].includes(a.dataset.checkout) ? a.dataset.checkout : 'pro';   // „wahl“ springt zu den vier Plänen
      plaetze = plan === 'buero' ? Math.max(3, Math.floor(+document.querySelector('#preis [data-plaetze]')?.value) || 3) : 1;
      const titel = dlg.querySelector('h3'); const tx = TEXTE[document.documentElement.lang] || TEXTE.de; if (titel) titel.textContent = tx[{ basis: 'abo.titelBasis', buero: 'abo.titelBuero', privat: 'abo.titelPrivat' }[plan] || 'abo.titelPro'] || titel.textContent;
      const absatz = dlg.querySelector('[data-i18n="abo.text"], [data-i18n="abo.textPrivat"]'); if (absatz) { absatz.dataset.i18n = plan === 'privat' ? 'abo.textPrivat' : 'abo.text'; absatz.textContent = tx[absatz.dataset.i18n] || absatz.textContent; }
      a.classList.add('wartet');
      try { if (plan === 'privat') throw 0; const r = await fetch(CLOUD + '/v1/kauf', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ plan, plaetze, periode: PERIODE, lang: document.documentElement.lang }) }); const j = await r.json(); if (j.url) { window.formaZaehl?.('kauf'); location.href = j.url; return; } } catch { /* Formular */ }
      a.classList.remove('wartet'); meldung.textContent = ''; form.hidden = false; dlg.showModal(); form.querySelector('input[type=email]').focus(); });
    dlg.querySelector('.abo-zu').onclick = () => dlg.close();
    form.onsubmit = async e => {
      e.preventDefault(); const t = TEXTE[document.documentElement.lang] || TEXTE.en;   // 5.11. abends, Befund Kundenprüfung: „t is not defined“, der Kunde sah keine Bestätigung
      const email = form.email.value.trim(), name = form.name.value.trim(); const knopf = form.querySelector('button[type=submit]'); knopf.disabled = true;
      try {
        const r = await fetch(CLOUD + '/v1/anfrage', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, name, plan, plaetze, periode: PERIODE, lang: document.documentElement.lang }) });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        form.hidden = true; meldung.textContent = (t['abo.danke'] || '').replace('{email}', email); window.formaZaehl?.('abo');
      } catch { meldung.textContent = t['abo.fehler'] || 'hello@amphion3d.com'; }
      knopf.disabled = false;
    };
  }
}
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
// Sprachwähler (5.11.2026, Tassilo: „Pon la opción de cambiar idiomas en la web“): Wahl gilt für den Besuch, Seite lädt neu, damit auch Betrachter,
// Satzfeld und Preise die Sprache übernehmen; ein ?lang= in der Adresse fällt weg, sonst gewänne es gegen die Wahl
alle('.sprachwahl', el => { el.value = document.documentElement.lang; el.onchange = () => { try { sessionStorage.setItem('forma.lang', el.value); } catch {} const u = new URL(location.href); u.searchParams.delete('lang'); location.replace(u.toString()); }; });
document.querySelector('.sprachen')?.addEventListener('click', e => { const b = e.target.closest('button[data-lang]'); if (b) anwenden(b.dataset.lang, true); });
