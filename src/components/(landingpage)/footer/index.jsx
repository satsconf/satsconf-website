import Link from "next/link";
import { useTranslation } from 'react-i18next';
import MeuComponenteLogo from "../images/MeuComponenteLogo";
import {
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer bgContainerFooter">
      <div className="footerContainer">
        <div className="logo">
          <div className="boxFooter">
          <div className="containerLogoFooter">
          <MeuComponenteLogo /> {/* Use the imported component */}
          </div>

          <div className="footerCopy">
            <p>Satsconf. &copy; 2024 </p>
            <Link className="footerLink" href="https://satsconf.com.br/politica">{t("footer.policy")}</Link>  
          </div>
          <div className="collumn">
            <h2> {t("footer.titleRede")}</h2>
            <ul>
            <li>
              <Link href="https://chat.whatsapp.com/JLDl4QZwwXb1htqScSJXgq">
                  <FaWhatsapp style={{ color: "white" }} />
                  {t("footer.whatsApp")} 
                </Link>
              </li>
              <li>
              <Link href="https://t.me/satsconf">
                  <FaTelegramPlane style={{ color: "white" }} />
                  {t("footer.telegram")}
                </Link>
              </li>
              <li>
              <Link href="https://x.com/satsconf_">
                  <FaTwitter style={{ color: "white" }} /> 
                  {t("footer.twitter")}
                </Link>              </li>
              <li>
              <Link href="https://www.instagram.com/satsconf.btc">
                  <FaInstagram style={{ color: "white" }} />
                  {t("footer.instagram")}
                </Link>
              </li>
             
            </ul>
          </div>
          </div>    
           
        </div>
        <div className="lineFooter"></div>

      </div>
    </footer>
  );
};

export default Footer;
