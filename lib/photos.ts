export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

function photo(folder: string, file: string, width: number, height: number, caption: string, alt: string): Photo {
  return { src: `/fotos/${folder}/${file}`, alt, width, height, caption };
}

export const allPhotos: Photo[] = [
  photo("woonboerderij-riet", "woona0.jpg", 800, 533, "Woonboerderij", "Woonboerderij: witgepleisterde boerderij met rieten kap en dakkapellen."),
  photo("woonboerderij-riet", "woona1.jpg", 800, 533, "Woonboerderij", "Woonboerderij: zijgevel van een witte boerderij met rieten kap en een dakkapel."),
  photo("woonboerderij-riet", "woona2.jpg", 800, 533, "Woonboerderij", "Woonboerderij: achterzijde van een witte woonboerderij met rieten kap."),
  photo("woonboerderij-riet", "woona3.jpg", 800, 533, "Woonboerderij", "Woonboerderij: dakkapel met wit kozijn in een rieten kap."),
  photo("woonboerderij-riet", "woona4.jpg", 800, 533, "Woonboerderij", "Woonboerderij: brede dakkapel in het riet van een woonboerderij."),
  photo("woonboerderij-riet", "woona5.jpg", 800, 533, "Woonboerderij", "Woonboerderij: twee dakkapellen in een rieten kap, met een rood pannendak ernaast."),
  photo("woonboerderij-riet", "woona6.jpg", 800, 533, "Woonboerderij", "Woonboerderij: witte gevel met rieten kap, aansluitend op een rood pannendak."),
  photo("woonboerderij-baksteen", "woonb0.jpg", 1024, 768, "Woonboerderij", "Woonboerderij: bakstenen boerderij met rieten kap in de rijp, met een voordeur onder een boog."),
  photo("woonboerderij-baksteen", "woonb1.jpg", 800, 533, "Woonboerderij", "Woonboerderij: voorgevel van een bakstenen woonboerderij met rieten kap."),
  photo("woonboerderij-baksteen", "woonb2.jpg", 800, 533, "Woonboerderij", "Woonboerderij: bakstenen woonboerderij met riet, gezien over het gras."),
  photo("woonboerderij-baksteen", "woonb3.jpg", 400, 600, "Woonboerderij", "Woonboerderij: kopgevel van een bakstenen boerderij met rieten kap."),
  photo("woonboerderij-baksteen", "woonb4.jpg", 800, 533, "Woonboerderij", "Woonboerderij: bakstenen woonboerderij met rieten kap in het landschap."),
  photo("woonboerderij-baksteen", "woonb5.jpg", 800, 533, "Woonboerderij", "Woonboerderij: detail van metselwerk, een raampje en de rieten kap."),
  photo("woonboerderij-baksteen", "woonb6.jpg", 800, 533, "Woonboerderij", "Woonboerderij: entree met boog en openslaande deuren in een bakstenen gevel."),
  photo("woonboerderij-baksteen", "woonb7.jpg", 1024, 768, "Woonboerderij", "Woonboerderij: bakstenen boerderij met rood pannendak en een lage aanbouw."),
  photo("woonboerderij-baksteen", "woonb8.jpg", 1024, 768, "Woonboerderij", "Woonboerderij: voor- en zijgevel van een bakstenen woonboerderij met pannendak."),
  photo("renovatie-toren", "renob0.jpg", 400, 600, "Renovatie", "Renovatie: bakstenen toren met een donkere kap en boogvensters."),
  photo("renovatie-toren", "renob2.jpg", 400, 600, "Renovatie", "Renovatie: boogvenster in het metselwerk van een bakstenen toren."),
  photo("renovatie-toren", "renob3.jpg", 800, 533, "Renovatie", "Renovatie: aanbouw bij een bakstenen toren, met gebogen ramen en luiken."),
  photo("renovatie-toren", "renob4.jpg", 400, 600, "Renovatie", "Renovatie: gemetselde aanbouw met een deur, naast de toren."),
  photo("renovatie-toren", "renob5.jpg", 800, 533, "Renovatie", "Renovatie: boogopening met luiken in een gemetselde gevel."),
  photo("renovatie-toren", "renob6.jpg", 800, 533, "Renovatie", "Renovatie: groot boograam in een gemetselde gevel."),
  photo("renovatie-toren", "renob7.jpg", 800, 533, "Renovatie", "Renovatie: bakstenen gevel met een klein raam onder de dakrand."),
  photo("renovatie-toren", "renob9.jpg", 400, 600, "Renovatie", "Renovatie: doorgang met een boog naar een ruimte met houten vloer."),
  photo("renovatie-toren", "renob10.jpg", 400, 600, "Renovatie", "Renovatie: donkere houten balken tegen een licht plafond."),
  photo("renovatie-toren", "renob11.jpg", 800, 533, "Renovatie", "Renovatie: zware houten balk onder een wit plafond."),
  photo("renovatie-toren", "renob12.jpg", 400, 600, "Renovatie", "Renovatie: boograam van binnenuit, met uitzicht naar buiten."),
  photo("renovatie-toren", "renob13.jpg", 400, 600, "Renovatie", "Renovatie: slaapkamer met houten balken en een boog in de wand."),
  photo("renovatie-toren", "renob14.jpg", 400, 600, "Renovatie", "Renovatie: wastafel in een betegelde badkamer."),
  photo("renovatie-toren", "renob15.jpg", 400, 600, "Renovatie", "Renovatie: inloopdouche met tegelwerk."),
  photo("renovatie-toren", "renob16.jpg", 400, 600, "Renovatie", "Renovatie: dubbele wastafel met spiegel in een badkamer."),
  photo("renovatie-toren", "renob17.jpg", 400, 600, "Renovatie", "Renovatie: ligbad in een betegelde badkamer."),
  photo("renovatie-toren", "renob18.jpg", 400, 600, "Renovatie", "Renovatie: donkere houten balk in een wit interieur."),
  photo("renovatie-toren", "renob19.jpg", 400, 600, "Renovatie", "Renovatie: haard in een nis van metselwerk."),
  photo("renovatie-toren", "renob20.jpg", 400, 600, "Renovatie", "Renovatie: zijgevel van metselwerk met een raam en een dakgoot."),
  photo("renovatie-toren", "renob21.jpg", 400, 600, "Renovatie", "Renovatie: bakstenen toren met een lage aanbouw en grote ramen."),
  photo("renovatie-toren", "renob22.jpg", 800, 533, "Renovatie", "Renovatie: toren met glazen deuren en een gemetselde aanbouw."),
  photo("renovatie-toren", "renob23.jpg", 400, 600, "Renovatie", "Renovatie: bakstenen toren met een uitbouw onder een lessenaarsdak."),
  photo("renovatie-toren", "renob24.jpg", 800, 533, "Renovatie", "Renovatie: glazen deuren in een gemetselde boog."),
  photo("renovatie-toren", "renob25.jpg", 800, 533, "Renovatie", "Renovatie: woonkamer met openslaande deuren in een boog."),
  photo("renovatie-schuur", "renoc0.jpg", 800, 533, "Renovatie", "Renovatie: schuur met groene houten topgevel, pannendak en open veranda."),
  photo("renovatie-schuur", "renoc1.jpg", 800, 533, "Renovatie", "Renovatie: zijgevel van een schuur met groene luiken."),
  photo("renovatie-schuur", "renoc2.jpg", 400, 600, "Renovatie", "Renovatie: topgevel van een schuur met groene betimmering en witte windveer."),
  photo("renovatie-schuur", "renoc3.jpg", 800, 533, "Renovatie", "Renovatie: schuur met groene gevelbekleding en een groene deur."),
  photo("renovatie-schuur", "renoc4.jpg", 400, 600, "Renovatie", "Renovatie: hoek van een schuur met groene topgevel en open veranda."),
  photo("renovatie-schuur", "renoc5.jpg", 800, 533, "Renovatie", "Renovatie: gevel van een schuur met groene luiken en een groene deur."),
  photo("aanbouw-serre", "aanbouwd0.jpg", 640, 429, "Aanbouw", "Aanbouw: glazen aanbouw met wit boeideel en openslaande deuren naar de tuin."),
  photo("aanbouw-serre", "aanbouwd1.jpg", 640, 426, "Aanbouw", "Aanbouw: serre met grote puien, gezien vanaf het terras."),
  photo("aanbouw-serre", "aanbouwd2.jpg", 640, 426, "Aanbouw", "Aanbouw: hoek van een glazen aanbouw tegen een bestaand huis."),
  photo("aanbouw-serre", "aanbouwd3.jpg", 640, 426, "Aanbouw", "Aanbouw: zijgevel van een aanbouw met raam, langs het terras."),
  photo("aanbouw-serre", "aanbouwd4.jpg", 400, 600, "Aanbouw", "Aanbouw: detail van een wit boeideel en de goot."),
  photo("aanbouw-serre", "aanbouwd5.jpg", 400, 600, "Aanbouw", "Aanbouw: raam in het metselwerk van een aanbouw."),
  photo("aanbouw-serre", "aanbouwd6.jpg", 640, 429, "Aanbouw", "Aanbouw: woonkamer met houten vloer, grenzend aan de nieuwe pui."),
  photo("aanbouw-serre", "aanbouwd7.jpg", 640, 429, "Aanbouw", "Aanbouw: keuken met witte kasten langs de glazen pui."),
  photo("aanbouw-serre", "aanbouwd8.jpg", 640, 429, "Aanbouw", "Aanbouw: zitkamer met openslaande deuren naar buiten."),
  photo("aanbouw-houten-gevel", "aanbouwg0.jpg", 800, 533, "Aanbouw", "Aanbouw: opbouw met groene houten gevelbekleding en een topgevel met driehoekig raam."),
  photo("aanbouw-houten-gevel", "aanbouwg1.jpg", 800, 533, "Aanbouw", "Aanbouw: groene houten topgevel met witte kozijnen, van opzij gezien."),
  photo("aanbouw-houten-gevel", "aanbouwg2.jpg", 800, 533, "Aanbouw", "Aanbouw: voorgevel van een opbouw met groene rabatdelen en een puntdak."),
  photo("aanbouw-houten-gevel", "aanbouwg3.jpg", 800, 533, "Aanbouw", "Aanbouw: detail van een groene topgevel met wit boeideel en kozijnen."),
  photo("dakopbouw", "aanbouwh0.jpg", 800, 533, "Aanbouw", "Aanbouw: dakkapel met vier ramen op een pannendak."),
  photo("dakopbouw", "aanbouwh1.jpg", 400, 600, "Aanbouw", "Aanbouw: dakopbouw met een rij ramen boven een gemetselde gevel."),
  photo("dakopbouw", "aanbouwh3.jpg", 400, 600, "Aanbouw", "Aanbouw: nieuw kozijn van een dakopbouw, van binnenuit gezien."),
  photo("dakopbouw", "aanbouwh4.jpg", 400, 600, "Aanbouw", "Aanbouw: openslaand raam van een dakopbouw."),
  photo("nieuwbouw-hout-a", "nha-01.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: houten kolom wordt gesteld met een hijskraan en steiger, tussen de bomen."),
  photo("nieuwbouw-hout-a", "nha-02.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: hijskraan zet een houten stijl op de bouwplaats in het bos."),
  photo("nieuwbouw-hout-a", "nha-03.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: houten portalen tussen de bomen, met materiaal op de voorgrond."),
  photo("nieuwbouw-hout-a", "nha-04.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: houten spanten liggen klaar op de bouwplaats."),
  photo("nieuwbouw-hout-a", "nha-05.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: een driehoekig houten spant, opgebouwd op de grond."),
  photo("nieuwbouw-hout-a", "nha-06.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: stapel houten spanten, klaar om geplaatst te worden."),
  photo("nieuwbouw-hout-a", "nha-07.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: houten stijl tussen de bomen tijdens het stellen van het skelet."),
  photo("nieuwbouw-hout-a", "nha-08.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: hijskraan naast staande houten kolommen."),
  photo("nieuwbouw-hout-a", "nha-09.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: hijskraan tilt een dakspant naar de houten kolommen."),
  photo("nieuwbouw-hout-a", "nha-10.jpg", 480, 640, "Nieuwbouw in hout", "Nieuwbouw in hout: dakspant aan de hijskraan, vlak boven het skelet."),
  photo("nieuwbouw-hout-a", "nha-11.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: hijskraan plaatst een spant op het houtskelet."),
  photo("nieuwbouw-hout-a", "nha-12.jpg", 480, 640, "Nieuwbouw in hout", "Nieuwbouw in hout: houtskelet met kapconstructie en een ladder."),
  photo("nieuwbouw-hout-a", "nha-13.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: houtskelet met een tijdelijk zeil over een deel van de kap."),
  photo("nieuwbouw-hout-a", "nha-14.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: houten regelwerk met een dekzeil op de bouwplaats."),
  photo("nieuwbouw-hout-a", "nha-15.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: open houtskelet van een gebouw met overkapping, tussen de bomen."),
  photo("nieuwbouw-hout-a", "nha-16.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: houten bijgebouw met puntdak en overstek, in het bos."),
  photo("nieuwbouw-hout-b", "nhb-01.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: graafmachine bij de start van een houten constructie."),
  photo("nieuwbouw-hout-b", "nhb-02.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: betonstort voor de fundering, met een betonpomp."),
  photo("nieuwbouw-hout-b", "nhb-03.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: bouwterrein met een shovel en een aanhanger met materiaal."),
  photo("nieuwbouw-hout-b", "nhb-04.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: detail van een grote houten hoekverbinding."),
  photo("nieuwbouw-hout-b", "nhb-05.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: houten balken worden gesteld op de fundering."),
  photo("nieuwbouw-hout-b", "nhb-06.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: houten balken op de bouwplaats, tijdens het pasmaken."),
  photo("nieuwbouw-hout-b", "nhb-07.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: detail van een pen-en-gatverbinding in een houten balk."),
  photo("nieuwbouw-hout-b", "nhb-08.jpg", 360, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: een houten kolom wordt met een kraan rechtgezet."),
  photo("nieuwbouw-hout-b", "nhb-09.jpg", 360, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: houten kolommen van een skelet, met steiger."),
  photo("nieuwbouw-hout-b", "nhb-10.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: timmerwerk aan een houten knoopverbinding."),
  photo("nieuwbouw-hout-b", "nhb-11.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: detail van een houten kolom met aansluitende balken."),
  photo("nieuwbouw-hout-b", "nhb-12.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: zware houten ligger, van onderaf gezien."),
  photo("nieuwbouw-hout-b", "nhb-13.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: houten schoren en liggers onder de constructie."),
  photo("nieuwbouw-hout-b", "nhb-14.jpg", 360, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: detail van een houten verbinding met stalen pennen."),
  photo("nieuwbouw-hout-b", "nhb-15.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: werken op een steiger bij het houtskelet."),
  photo("nieuwbouw-hout-b", "nhb-16.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: uitkragende houten constructie met schoren."),
  photo("nieuwbouw-hout-b", "nhb-17.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: achtkantige houten kapconstructie, van onderaf gezien."),
  photo("nieuwbouw-hout-b", "nhb-18.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: metselwerk en houtskelet van een gebouw met een veelhoekige kap."),
  photo("nieuwbouw-hout-b", "nhb-19.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: houten sporen van een kap, tijdens de bouw."),
  photo("nieuwbouw-hout-b", "nhb-20.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: werken aan de kap van een gebouw met een veelhoekig dak."),
  photo("nieuwbouw-hout-b", "nhb-21.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: veelhoekig dak in aanbouw, met houten kolommen en steiger."),
  photo("bedrijf", "006.jpg", 640, 480, "Nieuwbouw in hout", "Nieuwbouw in hout: veelhoekig dak in aanbouw op een laag gebouw, met steiger."),
  photo("agrarisch-a", "agrarisch_a0.jpg", 400, 300, "Agrarisch", "Agrarisch: stal met ligboxen en koeien, onder een lichte kap."),
  photo("agrarisch-a", "agrarisch_a1.jpg", 640, 480, "Agrarisch", "Agrarisch: bouwput met wapening voor een betonnen vloer."),
  photo("agrarisch-a", "agrarisch_a2.jpg", 480, 640, "Agrarisch", "Agrarisch: betonpomp stort een vloer in een bouwput naast bestaande schuren."),
  photo("agrarisch-a", "agrarisch_a3.jpg", 640, 480, "Agrarisch", "Agrarisch: gestorte betonnen vloer met uitstekende wapening."),
  photo("agrarisch-a", "agrarisch_a4.jpg", 480, 640, "Agrarisch", "Agrarisch: bouwplaats van een stal, met hijskraan."),
  photo("agrarisch-b", "agrarisch_a5.jpg", 640, 480, "Agrarisch", "Agrarisch: bekisting en vlechtwerk voor een betonnen wand, tijdens de stort."),
  photo("agrarisch-b", "agrarisch_a6.jpg", 640, 480, "Agrarisch", "Agrarisch: stellen van bekisting voor een betonnen wand."),
  photo("agrarisch-b", "agrarisch_a7.jpg", 640, 480, "Agrarisch", "Agrarisch: gestorte betonnen wanden van een stal in aanbouw, naast een boerenerf."),
  photo("badkamer", "badkamer_e0.jpg", 640, 480, "Badkamer", "Badkamer: wit badkamermeubel, ligbad en toilet, met tegels aan de wand."),
  photo("badkamer", "badkamer_e1.jpg", 640, 480, "Badkamer", "Badkamer: wastafelmeubel en inloopdouche met een glazen wand."),
  photo("badkamer", "badkamer_e2.jpg", 640, 480, "Badkamer", "Badkamer: hangend toilet en ligbad in een betegelde badkamer."),
  photo("onderhoud", "2.jpg", 400, 300, "Onderhoud", "Onderhoud: nieuw boeideel op de hoek van een gemetselde gevel."),
  photo("onderhoud", "iii.jpg", 480, 360, "Onderhoud", "Onderhoud: houtrot in een dorpel, met loslatend hout."),
  photo("onderhoud", "v.jpg", 300, 225, "Onderhoud", "Onderhoud: nieuw kozijn met raam in een gemetselde gevel."),
  photo("historie", "haarman.jpg", 685, 484, "Historie", "Zwart-witfoto van het woonhuis en de lage werkplaats, met een busje ervoor."),
  photo("bedrijf", "bedrijf.jpg", 640, 480, "Wagenpark", "Wagenpark van Aannemersbedrijf Haarman: blauwe bedrijfsbusjes voor de werkplaats."),
];

export function bySrc(src: string): Photo {
  const found = allPhotos.find((item) => item.src === src);
  if (!found) throw new Error(`Onbekende foto: ${src}`);
  return found;
}

export const heroPhoto = bySrc("/fotos/woonboerderij-baksteen/woonb0.jpg");
export const historyPhoto = bySrc("/fotos/historie/haarman.jpg");
export const fleetPhoto = bySrc("/fotos/bedrijf/bedrijf.jpg");

export type Gallery = { id: string; title: string; text: string; photos: Photo[] };

const folderOf = (src: string) => src.split("/")[2];

export const galleries: Gallery[] = [
  {
    id: "woonboerderij",
    title: "Woonboerderij",
    text: "Een boerderij die zijn oorspronkelijke functie verliest, wordt vaak verbouwd tot woonboerderij. Met oog voor de sfeer van weleer en de originele elementen.",
    photos: allPhotos.filter((item) => folderOf(item.src) === "woonboerderij-riet" || folderOf(item.src) === "woonboerderij-baksteen"),
  },
  {
    id: "renovatie",
    title: "Renovatie",
    text: "Houtherstel, nieuwe kozijnen en deuren, en isolatie van muren, vloeren en beglazing.",
    photos: allPhotos.filter((item) => folderOf(item.src) === "renovatie-toren" || folderOf(item.src) === "renovatie-schuur"),
  },
  {
    id: "aanbouw",
    title: "Aanbouw",
    text: "Dakkapel, opbouw of serre. Een uitbreiding van de woning, van groot tot klein.",
    photos: allPhotos.filter((item) => folderOf(item.src) === "aanbouw-serre" || folderOf(item.src) === "aanbouw-houten-gevel" || folderOf(item.src) === "dakopbouw"),
  },
  {
    id: "nieuwbouw-hout",
    title: "Nieuwbouw in hout",
    text: "Nieuwbouw in hout, van fundering en skelet tot de kap.",
    photos: allPhotos.filter((item) => folderOf(item.src) === "nieuwbouw-hout-a" || folderOf(item.src) === "nieuwbouw-hout-b" || item.src.endsWith("/006.jpg")),
  },
  {
    id: "agrarisch",
    title: "Agrarisch",
    text: "Stallen en werktuigbergingen: nieuwbouw en aanpassing.",
    photos: allPhotos.filter((item) => folderOf(item.src) === "agrarisch-a" || folderOf(item.src) === "agrarisch-b"),
  },
  {
    id: "badkamer",
    title: "Badkamer",
    text: "Natte ruimten: badkamer, toilet en andere sanitaire ruimten.",
    photos: allPhotos.filter((item) => folderOf(item.src) === "badkamer"),
  },
  {
    id: "onderhoud",
    title: "Onderhoud",
    text: "Goten, kozijnen en betimmeringen. Inspectie, herstel en vervanging.",
    photos: allPhotos.filter((item) => folderOf(item.src) === "onderhoud"),
  },
];

export function galleryById(id: string): Gallery | undefined {
  return galleries.find((gallery) => gallery.id === id);
}

export const workStrip: Photo[] = [
  bySrc("/fotos/woonboerderij-baksteen/woonb0.jpg"),
  bySrc("/fotos/renovatie-toren/renob22.jpg"),
  bySrc("/fotos/aanbouw-serre/aanbouwd0.jpg"),
  bySrc("/fotos/nieuwbouw-hout-a/nha-16.jpg"),
  bySrc("/fotos/agrarisch-a/agrarisch_a0.jpg"),
  bySrc("/fotos/badkamer/badkamer_e0.jpg"),
];
