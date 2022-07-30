import "../style/home-page/page.scss";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";
import person4 from "../images/person4.png";

function HomePage() {
  return (
    <div className="page">
      <div className="home-page-theme">
        Jesteśmy interdyscyplinarnym zespołem naukowców, który rozwija specjalną
        ceramikę przeźroczystą wytwarzaną na opatentowanej technologii.
        Otrzymywane przez nas materiały charakteryzują się wysoką
        przeźroczystością w zakresie promieniowania elektromagnetycznego od
        nadfioletu do dalekiej podczerwieni, oraz wysoką stałą Verdeta.
        Opracowana technologia przyniosła skuteczne rozwiązanie poważnego
        problemu związanego z możliwością wytwarzania monokryształów o
        wystarczająco dużej średnicy, wymaganej do skutecznej ochrony m. in.
        laserów średniej i dużej mocy. Nasz półprodukt pretenduje do
        zastosowania w roli materiału magnetooptycznego w urządzeniach
        magnetooptycznych, takich jak: izolatory Faradaya, cyrkulatory optyczne
        i wiele innych. Posiadamy technologie umożliwiającą otrzymywanie
        materiałów krystalicznych o dowolnym kształcie i rozmiarze. Rozszerzamy
        sieć partnerów biznesowych zainteresowanych wdrożeniem innowacyjnych
        materiałów do wprowadzenia na rynek alternatywnych urządzeń
        magnetooptycznych. Posiadamy ponad 100 publikacji naukowych oraz znaczną
        liczb patentów i zgłoszeń patentowych. Posiadamy wiedz i doświadczenie
        niezbędne do tworzenia zaawansowanych stanowisk pomiarowych oraz
        precyzyjnych urządzeń badawczych.
      </div>
      <div className="home-page-person-container">
        <div className="home-page-person">
          <div className="person-img">
            <img alt="person1" className="person-img" src={person1}></img>
          </div>

          <div>
            <h1 className="home-page-person-title">Mgr inż. Marta Lubszczyk</h1>
            <p className="home-page-person-text">
              Doktorantka inżynierii mat. na AGH w Krakowie. Realizuje badania
              nad zmianą charakterystyki fizykochemicznej ceramicznych
              materiałów ferroelektrycznych wywołanych domieszkowaniem i
              podstawianiem pierwiastków ziem rzadkich.
            </p>
          </div>
        </div>
        <div className="home-page-person">
          <div className="person-img">
            <img alt="person2" className="person-img" src={person2}></img>{" "}
          </div>
          <div>
            <h1 className="home-page-person-title">Andrzej Kruk</h1>
            <p className="home-page-person-text">
              Kierownik projektów Sonata oraz Tango A. Prowadzi badania nad
              ceramiką przeźroczystą z uwzględnieniem relacji pomiędzy
              mikrostrukturą, a właściwościami magnetooptycznymi oraz
              spektroskopowymi, w tym luminescencją.
            </p>
          </div>
        </div>
        <div className="home-page-person">
          <div className="person-img">
            <img alt="person3" className="person-img" src={person3}></img>{" "}
          </div>
          <div>
            <h1 className="home-page-person-title">Dr Mariusz Mrózek</h1>
            <p className="home-page-person-text">
              Realizuje badania nad zmianą charakterystyki fizykochemicznej
              ceramicznych materiałów ferroelektrycznych wywołanych
              domieszkowaniem i podstawianiem pierwiastków ziem rzadkich.
            </p>
          </div>
        </div>
        <div className="home-page-person">
          <div className="person-img">
            <img alt="person4" className="person-img" src={person4}></img>{" "}
          </div>
          <div>
            <h1 className="home-page-person-title">
              Dr hab. inż. Dominika Madej
            </h1>
            <p className="home-page-person-text">
              Profesor na Wydziale WIMiC AGH w Krakowie. Zajmuje się głównie
              materiałami ogniotrwałymi, oraz oddziaływaniem bardzo wysokich
              temperatur i reaktywnych środowisk na ceramiką tlenkową.
            </p>
          </div>
        </div>
        <div className="home-page-person">
          <div>
            <h1 className="home-page-person-title">Dyplomanci</h1>
            <p className="home-page-person-text">
              Oferujemy najlepszym studentom możliwość realizacji prac
              inżynierskich i magisterskich spośród wielu tematów wpisujących
              się w obszar fizyki i inżynierii materiałowej oraz informatyki.
              Prace mają charakter teoretyczny i doświadczalny.
            </p>
          </div>
        </div>
        <div className="home-page-person">
          <div>
            <h1 className="home-page-person-title">Koła naukowe</h1>
            <p className="home-page-person-text">
              Umożliwiamy młodym badaczom realizacje szeregu ważnych i ciekawych
              zadań badawczych. Wspomagamy ich naszym doświadczeniem oraz
              zapleczem technicznym i aparaturowym. Zachęcamy do współpracy
              grupy interdyscyplinarne.
            </p>
          </div>
        </div>
      </div>
      <div className="home-page-theme">
        Nasze materiały powstały w wyniku realizacji projektu Sonata nr
        2016/23/D/ST8/00014. pt. „Nowa klasa materiałów przeźroczystej
        ceramiki”.Projekt został realizowany, dzięki wsparciu finansowemu z
        Narodowego Centrum Nauki.
      </div>
      <div className="home-page-theme">
        <h1>Wybrane publikacje związane z realizacją projektu: </h1>
        <p>
          • Optical and structural properties of arc melted Ce or Pr– doped Y2O3
          transparent ceramics, A. Kruk, Cer. Inter., V. 43, 18, 2017,{" "}
        </p>
        <p>
          • Fabrication of MgO high transparent ceramics by arc plasma
          synthesis, A. Kruk, Opt. Mat., V. 84, 2018,
        </p>{" "}
        <p></p> • Optical and magneto-optical properties of Nd0.1La0.1Y1.8O3
        transparent the physicochemical properties of La-doped Er0.05Y1.95O3
        nanopowders, ceramics, A.Kruk, et. al., J. of Lumin. V.209, 2019,{" "}
        <p>• Investigation on A.Kruk, et al J. Ther.Anal. Cal., 2019, </p>• On
        the possibility of using arc plasma melting technique in preparation of
        transparent yttria ceramics, A. Kruk, Opt. App., 49, 2019,{" "}
        <p>
          {" "}
          • Magnetooptyczne właściwości polikrystalicznego tlenku itru, A. Kruk,
          Materiały Ceramiczne – Ceramic Materials, 70, 3, 2018,
        </p>{" "}
        <p>
          • The measurement of Faraday effect of translucent material in the
          novel method for ceramic characterisation by high frequency microwave
          energy absorption, A.Kruk, et al., Measurement, 167, 2021{" "}
        </p>
      </div>
    </div>
  );
}

export default HomePage;
