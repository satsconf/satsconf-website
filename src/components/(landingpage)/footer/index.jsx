import MeuComponenteLogo from "@/components/(landingpage)/images/MeuComponenteLogo/index.jsx"; // Import the necessary component
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer bgContainerFooter">
      <div className="footerContainer">
        <div className="logo">
          <MeuComponenteLogo /> {/* Use the imported component */}
          <div>
            <p>Satsconf. &copy; 2024 </p>
            <a href="">Política de Privacidade</a>
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
    </div>
  );
};

export default Footer;
