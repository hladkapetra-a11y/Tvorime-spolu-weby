# Projekt: Tvoříme spolu weby - Instrukce

**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
•	Strukturovaný komentovaný HTML5 kód s validní sémantikou
•	Responzivní design (mobile-first přístup)
•	CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
•	Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
•	CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
•	Základní JavaScript pro interaktivitu (na jemné oživení stránek)
•	Dbej na bezpečnost webu (CSP hlavička a nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
•	Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
•	Zajisti rychlé načítání a optimalizovaný výkon
•	Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
•	Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
•	Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu


**Základní SEO**
•	Strukturuj nadpisy H1-H6
•	Přidej meta title a description na každé stránce
•	Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
•	Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
•	Urči kanonickou url
•	Obrázkům dej alt popisky
•	Propoj stránky vnitřními odkazy
•	Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)


**Optimalizace obrázků**
•	Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
•	Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.

**Vizuální hierarchie a čitelnost**
•	Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
•	Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
•	Čitelné fonty s českou diakritikou
•	Správné řádkování (line-height 1.5-1.8 pro odstavce)
•	Nikdy nezarovnávej text do bloku
•	Optimální šířka řádku pro text (max 70% obrazovky)

**Layout**
•	Šířku celého webu dej na 85% obrazovky
•	Jasné oddělení sekcí a obsahových celků
•	Vyvážené použití bílého prostoru (white space)
•	Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
•	Dej si záležet na patičce webu
•	Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
•	Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
•	Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
•	Stručné a srozumitelné texty
•	Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
•	Vizuální prvky podporující obsah (ikony, obrázky, grafika)
•	Logické uspořádání informací (nejdůležitější nahoře)
•	Chybová stránka (přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html)
•	Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
•	Jednotný styl tlačítek, karet a komponent
•	Stejný padding/margin napříč podobnými elementy
•	Stejné zaoblení prvků
•	Konzistentní ikonografie
•	Stíny karet pouze velmi jemné
•	Jednotný projev značky (brand voice)
•	Konzistentní použití barev napříč celým webem
•	Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
•	Omezený počet barev (2-3 hlavní + neutrální)
•	Primární barva pro CTA (call-to-action) tlačítka
•	Neutrální jemné barvy pro pozadí 
•	Pro text #333333
•	Brand barvy (HEX): 
   - primární: [DOPLŇ]
   - sekundární: [#15786e]
   - tlačítka: [#7a0303]
   - pozadí: [#fafafa a #ffffff]
   - text: [#333333]

**Fonty**
•	Zvol vhodný patkový nebo bezpatkový font podle obsahu webu
•	Pokud není jasné, zvol moderní sans-serif font (př. Outfit)

**Struktura**
•	více stránkový web
•	Položky menu:
•	Služby 
•	Portfolio  odkazuje sem na https://petrahovorkova.cz/portfolio/
•	O nás 
•	Kontakt 

**Další prvky na webu**
•	Vytvoř kontaktní formulář včetně antispamu (honeypot), doporuč mi službu https://formspree.io/  - do kontaktu

**Design**
Design hero sekce (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu jpg 
 
**Moderní design**
•	Layout: Bento grid nebo asymetrické rozvržení s velkým bílým prostorem                               
•	Typografie: Velké nadpisy na hero sekci
•	Barvy: Jemné gradienty, plynulé přechody
•	Prvky: Zaoblené rohy (border-radius 16-24px), jemné stíny, 3D prvky
•	Glass efekt: Skleněný efekt v pozadí karet (glassmorphism)
•	Animace: Mikro interakce na hover, jemné scroll animace 

**Obrázky**
Na webu použij fotky (př. přílohy), které najdeš ve složce 
Obrazky/Homepage – pro Hlavní stranu (hero sekce atd.)
Obrazky/– Na zbytek webu – vhodně nakombinuj i z Obrazky/Homepage
Obrazky/O_nas – pro stránku O mně a Patičku
Negeneruj si sám fotky

**Texty**
Vyjdi z dodaných textů, ale když budeš potřebovat, můžeš je mírně změnit nebo doplnit, zachovej vždy smysl a podstatu obsahu stránky. 

### Hlavní strana - Hero sekce
Tvoříme spolu weby, které dávají smysl vašemu podnikání.
Jsme dva webaři a vaše kompletní digitální spojka. Stavíme moderní weby, které díky automatizaci a Meta reklamě nejsou jen na ozdobu, ale skutečně prodávají.
Rozhýbat mé podnikání

**Proč my dva?**
Většina webů selhává, protože jsou buď jen technicky suché, nebo jen hezké na pohled. My vám dodáme obojí.“

*Naše Duo (Vizuální rozdělení na dva sloupce):*
**Ženský element (Intuice & Estetika)**
•	Vizuální tvář: Vytvářím design, který vás odliší a zákazníci si ho zapamatují.
•	Texty s duší: Píšu copy, které neprodává nátlakem, ale buduje s lidmi skutečnou důvěru.
•	Uživatelský prožitek (UX): Hlídám, aby se lidé na webu cítili dobře a přirozeně našli to, co hledají.
•	Lidskost v mailingu: Nastavuji automatizaci tak, aby si vaši klienti připadali opečovávaní, ne spamovaní.

**Mužský element (Logika & Výkon)**
•	Technický základ: Stavím na neprůstřelném kódu, kde vše funguje hladce a bleskově se načítá.
•	Strategie a data: Každý prvek na webu má svůj účel podložený logikou a analýzou trhu.
•	Meta reklama: Ladím kampaně (FB/IG) tak, aby každá koruna vložená do reklamy nosila výsledky.
•	Systémový růst: Nastavuji web tak, aby byl připravený na škálování a technicky vás nikdy nebrzdil.

**Výsledek (Společná hodnota):** „Výsledkem je web s duší i s výkonem. Žádná slepá místa, jen fungující celek.“

### Služby
1. **Web, který vás reprezentuje**
Dáváme vašemu podnikání profesionální tvář. Stavíme moderní a svižné weby, které si díky jednoduchému ovládání zvládnete sami spravovat, ale které se technicky postarají o vaše zákazníky.
2. **Automatizace a propojení**
Web není jen obrázek, je to váš nejlepší zaměstnanec. Propojíme ho s mailingovými nástroji a analytikou tak, aby za vás sbíral kontakty a automaticky s nimi komunikoval.
3. **Růst a Meta reklama**
Nenechte svůj nový web zapadnout prachem. Postaráme se o to, aby ho lidé našli. Nastavíme výkonné reklamy na Facebooku a Instagramu, které k vám přivedou ty správné klienty.

**Jak vypadá naše cesta k vašemu webu**
Nečekejte desítky schůzek a stohy dokumentů. Máme rádi tah na branku a čistý stůl. Celý proces jsme osekali tak, abychom neztráceli čas a vy se mohli co nejdřív radovat z výsledku.

1. **Společný Vize**
Všechno začíná u jednoho stolu (nebo u jednoho Zoomu). Probereme, co od webu čekáte a co vás pálí. My do toho vneseme náš mužský a ženský pohled.
•	Cíl: Abychom si lidsky i byznysově sedli a věděli, kam míříme.
2. **Návrh a strategie**
Tady vzniká mozek a tvář vašeho webu. Navrhneme cestu zákazníka tak, aby se na webu neztratil a udělal přesně to, co od něj potřebujete.
•	Cíl: Web, který má logiku a vypadá skvěle ještě předtím, než začneme psát první řádek kódu.
3. **Tvorba a ladění**
Tady se děje to hlavní. Stavíme web, propojujeme mailing a nastavujeme Meta reklamu. Díky tomu, že se známe 20 let, si v této fázi nemusíme nic vysvětlovat – prostě to odsejpá.
•	Cíl: Vyladěný digitální stroj připravený na start.
4. **Předání a „nekončíme“**
Web vám předáme a naučíme vás, jak ho snadno ovládat. Ale nehážeme vás do vody. Pomůžeme vám se startem a pohlídáme, aby váš nový web začal okamžitě žít.
•	Cíl: Máte svůj web pod kontrolou a my jsme vám dál k ruce.

**Zkušenosti, o které se můžete opřít**
*Levý blok (Tvoje expertíza):*
•	Nadpis: Design a technická preciznost
•	Text: „Za každým naším webem stojí stovky hodin zkušeností s laděním designu a kódu. Moje práce je zárukou, že váš web bude nejen krásný, ale i technicky neprůstřelný.“
•	Vizuál: 2–3 nejlepší screenshoty tvých webů v mockupech (notebook/mobil).
•	CTA Tlačítko: [ Prohlédnout mé portfolio ] (https://petrahovorkova.cz/portfolio/).

*Pravý blok (Společný přesah / Jeho role):*
•	Nadpis: Strategie a obchodní růst
•	Text: „Web je začátek. My mu dodáváme směr. Postaráme se o to, aby vaše značka mluvila k těm správným lidem a reklama na Meta platformách přinášela reálné objednávky.“
•	Vizuál: Čistá grafika znázorňující růst, nebo ukázka marketingového funnelu/rozhraní reklam.
•	CTA Tlačítko: [ Jak přemýšlíme o marketingu ]

**20 let přátelství, jeden společný cíl**
Proč je naše "spolu" vaše výhra?
•	Absolutní shoda: Po dvou dekádách přátelství si rozumíme beze slov. Váš projekt nezdrží žádné vnitřní komunikační šumy – co jeden navrhne, druhý už technicky připravuje.
•	Důvěra, kterou přenášíme na vás: Naše partnerství stojí na upřímnosti. Stejně upřímní budeme i k vašemu byznysu – nebudeme vám přikyvovat na špatné nápady, ale hledat cesty, které skutečně fungují.
•	Kombinace, která dává smysl: Spojili jsme ženský cit pro detail a estetiku s mužským tahem na branku a logiku. Máte tak pokryté obě strany mince jedním týmem.

**Patička**
- Copyright © 2026 Tvoříme spolu weby
- "Vytvořeno společně s AI & Vibecodingem"
- Fakturační údaje (IČO, sídlo).
- Odkaz na GDPR (Zásady ochrany osobních údajů).

### Služby stránka
| START: Digitální vizitka | PROFI: Prodejní web | FULL: Individuální projekt |
| :--- | :--- | :--- |
| **Rozsah:** 1 až 3 stránky | **Rozsah:** 4 až 7 stránek | **Rozsah:** 8 a více stránek |
| Ideální pro rychlý start, osobní prezentaci nebo jednoduchý web o službách. | Ideální pro rostoucí firmy, které potřebují web jako hlavní prodejní kanál. | Komplexní řešení pro e-shopy, členské sekce nebo rozsáhlé weby. |
| • Moderní a čistý design na Divi | • Vše z balíčku START | • Vše z balíčku PROFI |
| • Základní SEO a responzivita | • Mailing & Automatizace | • Platební brány a e-shop |
| • Napojení na kontaktní formulář | • Blog nebo sekce Referencí | • Pokročilé funkce na míru |
| **Cíl:** Profi vizitka do týdne. | **Cíl:** Budování databáze a prodej. | **Cíl:** Neomezený digitální růst. |
| **Cena:** od 18 000 – vizitka | **Cena:** od 25 000 | **Cena:** od 40 000 |

**Vibecoding: Unikátní web bez limitů a kompromisů**
Kromě klasické tvorby na Divi nabízíme i metodu Vibecodingu – psaní webu přímo v kódu s podporou špičkové AI. Je to cesta pro ty, kteří chtějí maximální výkon a absolutní vizuální svobodu.

**Pro koho je tato cesta ideální?**
•	Pro dravé projekty: Které se nechtějí svazovat šablonami a chtějí unikátní web, co poletí jako blesk.
•	Pro ty, co chtějí servis: Pro podnikatele, kteří nechtějí trávit čas v administraci, ale chtějí mít webařku „na drátě“.

**V čem je ten rozdíl?**
| Klasické Divi (WordPress) | Vibecoding (Kód na míru) |
| :--- | :--- |
| **Administrace:** Máte vlastní přístup a texty si kdykoliv změníte sami. | **Servisní správa:** Web nemá běžnou administraci. O veškeré změny se starám já. |
| **Rychlost:** Skvělá, ale limitovaná robustností systému. | **Extrémní výkon:** Čistý kód bez zbytečného balastu, bleskové načítání. |
| **Bezpečnost:** Musíte hlídat aktualizace pluginů, aby web „nespadl“. | **Nerozbitnost:** Nemůžete omylem nic rozházet. Web je technicky neprůstřelný. |

PROTO do toho jdeme: Vibecoding nám dovoluje soustředit se na vaši strategii a kreativitu, zatímco technickou stránku vyřešíme moderněji a rychleji. Vy se staráte o byznys, já se starám o váš kód.

**Ceník Vibecoding (Zaváděcí ceny):**
•	Jednostránkový web (Landing Page): od 8 000 – 12 000 Kč.
•	Větší web (do 5 stránek): od 20 000 Kč.

**3. Meta reklama: Aby váš web nezapadl prachem**
Web bez návštěvníků je jen drahý obrázek v prázdné galerii. My se postaráme, aby ho našli ti správní lidé.
Vytvořením webu naše společná cesta nekončí. Aby web začal plnit svůj účel a nosit peníze, potřebuje cílený přísun zákazníků. Proto vám nastavíme kampaně na Facebooku a Instagramu, které nemíří naslepo, ale přímo na vaši cílovou skupinu.

**Co pro vás v rámci reklamy uděláme?**
•	Strategie: Najdeme cestu, jak oslovit vaše budoucí klienty za co nejnižší cenu.
•	Kreativa a texty: Připravíme reklamy, na které lidé budou chtít kliknout.
•	Technické propojení: Nastavíme měření (Meta Pixel/API), abychom přesně věděli, která koruna se vám vrátila.
•	Pravidelná optimalizace: Reklamy nespustíme a neutečeme. Sledujeme je a ladíme výkon.

**Ceník Meta reklamy:**
•	**START (Jednorázové nastavení):**
o	Pro koho: Máte web a chcete "nakopnout" jeden konkrétní produkt nebo akci.
o	Cena: od 8 000 Kč (jednorázově).
•	**PROFI (Měsíční správa):**
o	Pro koho: Chcete stabilní přísun zakázek a neustálý růst.
o	Cena: od 5 000 – 8 000 Kč / měsíc (+ rozpočet na reklamu).
o	Zahrnuje: Pravidelný reporting, ladění kampaní a testování nových strategií.

**4. Servis a péče: Vaše klidné spaní**
Vytvořením webu naše partnerství teprve začíná. Nenecháme vás v tom – o techniku se staráme my, vy se starejte o svůj byznys.
Aby váš web na systému Divi a WordPress šlapal jako hodinky, byl v bezpečí a stále bleskově rychlý, nabízíme vám naši pravidelnou technickou podporu.

**Co obsahuje pravidelná údržba?**
•	Aktualizace: Hlídáme a bezpečně instalujeme aktualizace WordPressu, šablony Divi a všech pluginů.
•	Zabezpečení: Aktivní ochrana proti útokům a pravidelné skenování webu.
•	Zálohování: Pravidelné zálohy celého webu, aby se v případě jakéhokoliv problému dal obnovit na jedno kliknutí.

**Ceník péče:**
•	**Pravidelný servis (4x ročně):** 600 Kč / údržba.
o	Ideální prevence, aby váš web nezastaral a zůstal technicky fit.
•	**Individuální úpravy a rozvoj:** 1 000 Kč / hodina.
o	Potřebujete po předání webu něco doprogramovat, změnit strukturu nebo přidat novou funkci? Jsme vám k dispozici za jasnou hodinovou sazbu.

### O nás
**Dva příběhy, jedna vize (A 20 let smíchu)**
Říká se, že mezi mužem a ženou nemůže existovat čisté přátelství. My jsme důkazem, že může – a že je to ten nejlepší základ pro byznys.

**Kde je Vlk, tam je Hladká**
Tahle hláška nás provázela už na intru a střední škole. Byli jsme nerozlučná dvojka. Prošli jsme spolu vysokou školu (ekonomii), kde Petra držela Pepu nad vodou a organizovala mu rozvrh, zatímco Pepa nás občas s nadšením sobě vlastním táhl na zkoušku, která se konala až za týden.
Život nás pak na chvíli rozdělil, ale opravdová přátelství nezmizí. Pepa vedl Petru k oltáři, Petra mu šla za svědka na svatbě. Dnes se naše cesty opět spojily v projektu Tvoříme spolu weby.

**Proč tvoříme spolu?**
Protože se doplňujeme tam, kde to ostatním drhne.
•	**Petra (Design & Detail):** Roky jsem řídila obchod a vedla tým 60 lidí. Mateřská dovolená mi otevřela dveře do digitálního světa, kde jsem našla svou vášeň v precizním designu, kódování a funkčních detailech. Jsem ta, která dává věcem řád a tvář.
•	**Pepa (Vize & Strategie):** Pepa řídí sítě školních jídelen a marketing. Je to vizionář, stratég a člověk, který umí věci prodat. Vidí byznys v souvislostech a dokáže váš projekt nasměrovat tam, kde jsou reální zákazníci.

**Co naše „spolu“ znamená pro váš byznys?**
Když si nás najmete, nekupujete si jen hodiny kódování a designu. Kupujete si 20 let odladěný tým, který do vašeho projektu vnáší stabilitu, jakou jinde nenajdete.
•	Žádný komunikační šum: Po dvou dekádách přátelství si rozumíme beze slov. Zatímco v agenturách si zadání přehazují jako horký brambor, u nás jde informace přímo od strategie k realizaci. Bez chyb a bez zdržení.
•	Upřímnost, která vám ušetří peníze: Jako nejlepší přátelé si nelžeme – a nebudeme lhát ani vám. Pokud uvidíme, že váš nápad není pro byznys efektivní, řekneme vám to na rovinu a navrhneme lepší cestu. Naším cílem není jen "odevzdat web", ale vidět vás růst.
•	Dvě hlavy, jeden výsledek: Máte jistotu, že na váš web koukáme ze dvou různých úhlů. On hlídá čísla a prodejní psychologii, ona ladí emoci a technickou preciznost. Výsledkem je web, který je v rovnováze.

### Kontakt
**Pojďme se do toho pustit**
Máte v hlavě vizi, projekt nebo už hotový byznys, který potřebuje pořádně rozhýbat? Jsme tu, abychom vám s tím pomohli. Žádné složité dotazníky – stačí nám napsat nebo zavolat a probereme to u kafe (reálného nebo virtuálního).

**Kdo se vám ozve?**
(Tady dejte dvě menší fotky vedle sebe – tvou a jeho – ať je jasné, komu píšou.)
**Petra Hovorková – Design & Technologie**
„Pohlídám, aby váš web vypadal skvěle a technicky vás nikdy nezklamal.“
•	E-mail: web@petrahovorkova.cz
•	Telefon: +420 702 129 208

**Josef Vlk – Strategie & Růst**
„Pomůžu vám nastavit směr a postarám se, aby reklama přivedla ty správné lidi.“
•	E-mail: web@primavlk.cz
•	Telefon: 733 752 125

________________________________________
**Kde nás najdete?**
Působíme hlavně v celé ČR, ale díky technologiím tvoříme pro klienty z celé republiky.
Fakturační údaje: IČ: 74955152. Sídlo: Želenická 79/52, Děčín 7, 40502. Fyzická osoba zapsaná v Živnostenském rejšříku, Magistrát města Děčín.
________________________________________
**Rychlá zpráva pro nás oba**

Náš slib: Odpovídáme rychle. Většinou se vám ozveme zpět do 24 hodin, abychom si domluvili první nezávaznou konzultaci.
________________________________________
**Proč to funguje:**
•	Osobní přístup: Klient si může vybrat, komu napíše, nebo napíše do formuláře oběma.
•	Tváře: Fotky u kontaktů zvyšují důvěru o desítky procent.
•	Žádné bariéry: Text je uvolněný a vybízí k akci bez tlaku.
