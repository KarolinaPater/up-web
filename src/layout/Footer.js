import "../style/footer.scss";
import logoup from "../images/logoup.png";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-column">
          <div className="logo-footer">
            <img alt="logo_up" className="logo-footer-img" src={logoup}></img>
          </div>
          <div className="footer-text">
            <strong>UNIWERSYTET PEDAGOGICZNY</strong>
            <br />
            IM. KOMISJI EDUKACJI
            <br />
            NARODOWEJ W KRAKOWIE
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-text">
            <a className="footer-link" href="https://bip.up.krakow.pl/">
              Biuletyn Informacji Publicznej
            </a>
            <br />
            <a
              className="footer-link"
              href="https://bip.up.krakow.pl/deklaracja-dostepnosci/?name_dd=More&link_dd=https://more.up.krakow.pl&publi_dd=2021-11-29&update_dd=2019-11-15&stat_dd=2020-02-17&comp_dd=1&incomp_dd=&off_dd=&pa_dd=1"
            >
              Deklaracja dostępności cyfrowej
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
