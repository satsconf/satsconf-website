import MeuComponenteLogo from "../images/MeuComponenteLogo";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bgContainerFooter">
      <div className="footerContainer">
        <div className="logo">
          <div className="containerLogoFooter">
          <MeuComponenteLogo /> {/* Use the imported component */}
          </div>

          <div>
            <p>Satsconf. &copy; 2024 </p>
            <a href="https://www.satsconf.com.br/politica">Política de Privacidade</a>
          </div>
          <div className="collumn">
            <h2>Nos acompanhe</h2>
            <ul>
              <li>
                <FaTelegramPlane style={{ color: "white" }} />
                Entre no grupo do Telegram
              </li>
              <li>
                <FaTwitter style={{ color: "white" }} /> Acompanhe o Twitter
              </li>
              <li>
                <FaInstagram style={{ color: "white" }} />
                Acompanhe o Instagram
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
