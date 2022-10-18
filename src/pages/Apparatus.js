import "../style/home-page/page.scss";
function Apparatus() {
  return (
    <div className="page">
      <h1>Aparatura</h1>
      <p>
        Laboratorium posiada nowoczesną aparaturę badawczą o wysokiej czułości i
        szerokim spektrum pomiarowym. Aparatura pomiarowa wchodząca w skład
        naszego laboratorium umożliwia prowadzenie badań strukturalnych,
        optycznych i fotoelektrycznych. Jesteśmy w stanie scharakteryzować
        materiały lite, ciecze, a nawet gazy. Dzięki komplementarnie dobranym
        badaniom możemy zidentyfikować m.in. strukturę cząsteczkową materiałów,
        przemiany fazowe, kinetykę reakcji chemicznych i efektywność w warunkach
        pracy. Nasze urzadzenia potrafią w pełni scharakteryzować badany
        materiał, dzięki czemu możemy dostarczyć precyzyjnej odpowiedzi dla
        biznesu i przemysłu. Długoletnie doświadczenie oraz głęboka wiedza
        akademicka, umożliwia nam konstruować precyzyjne układy optyczne,
        stanowiska badawcze, a nawet unikalne stanowiska pomiarowe umożliwiające
        innowacyjne badania. Nasz interdyscyplinarny zespół gwarantuje
        znalezienie optymalnych rozwiązań i opracować odpowiednie narzędzia.
      </p>
      <p>
        Najważniejsze potrafimy wytworzyć przeźroczystą ceramiką o wysokiej
        stałej Verdeta do zastosowania w izolatorach optycznych dla laserów
        dużej mocy i cyrkulatorach telekomunikacyjnych.
      </p>{" "}
      <br></br>
      <p className="red">Wykaz urządzeń oraz aparatury pomiarowej:</p>
      <br></br>
      <div className="devices-list">
        <ol>
          <li>
            Spektrometr FT-IR firmy Shimadzu (zakres 400 cm-1 – 4000 cm-1),
            współczynnik sygnału do szumu (S/N) – 60 000:1, rozdzielczość – 0.25
            cm-1, prędkości skanowania – do 20 widm na sekundę. Wyposażony w
            detektory rozszerzające zakres pomiarowy w FIR i NIR czyli od 240
            cm-1 do 12400 cm-1. Przystawka odbiciowa GladiATR firmy PIKE z
            kamerą umożliwia pomiar materiałów litych, proszków i cieczy.
          </li>
          <li>
            Spektrofotometr fotoelektryczny firmy Instytut Fotonowy – umożliwia
            pomiar przewodnictwa prądu elektrycznego materiałów optycznie
            aktywnych o dużej przerwie energetycznej w funkcji przyłożonego
            napięcia i długości padającej fali. Materiał można oświetlać
            światłem białym lub wybraną falą o długości od 200 nm do 1100 nm ze
            skokiem 1 nm. Aparatura służy m in. do testowania materiałów
            optycznie czynnych, fotodiod i paneli słonecznych.
          </li>
          <li>
            Spektrometr SilverNova StellarNet pracujący w zakresie od 190
            nm-1110 nm z rozdzielczością 0.5 nm.
          </li>
          <li>
            Spektrometr NIRQUEST+2.5 OceanInsight umożliwiający pomiary w
            zakresie podczerwieni od 900 nm do 2500 nm.
          </li>
          <li>
            Spektrometr wysokorozdzielczy Mechelle na zakres VIS z kamerą CCD
            firmy Oxford Insruments typu Echelle do precyzyjnych badań
            optycznych.
          </li>
          <li>
            Urządzenia sprzęgnięte są szerokopasmowymi światłowodami ze sferą
            całkującą IC2 firmy StellarNet. <br></br> Dzięki tym urządzeniom,
            możliwe są pomiary m in. transparencji, absorbcji, barwy, starzenia
            materiału, wyznaczania przerwy energetycznej, badania zjawisk
            fotochromowych i luminescencjnych.
          </li>
          <li></li>
        </ol>
      </div>
      {/* <p>
        W laboratorium znajdują się spektrometr SilverNova StellarNet pracujący
        w zakresie od 190-1110 nm z rozdzielczością 0.5 nm oraz NIRQUEST+2.5
        OceanInsight umożliwiający pomiary w zakresie od 900 do 2500 nm. Dzięki
        tym urządzeniom, możliwe jest wykonanie wielu cennych pomiarów w tym
        transparencji, absorbcji, barwy, starzenia materiału, zjawisk
        fotochromowych, luminescencji, wyznaczania przerwy energetycznej i
        innych. Urządzenia sprzęgnięte są szerokopasmowymi światłowodami ze
        sferą całkującą IC2 firmy StellarNet.{" "}
      </p>
      <p>
        Analizy spektroskopowe są często wykorzystywane w laboratoriach
        przemysłowych i naukowych do badania kontroli materiałów, półproduktów i
        produktów, stwierdzenia ich zgodności z Normami, do certyfikowania oraz
        zweryfikowania procesów technologicznych. Posiadamy możliwość badania
        zjawisk fotoelektrycznych i innych.
      </p> */}
    </div>
  );
}

export default Apparatus;
