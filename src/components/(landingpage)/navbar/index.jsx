"use client";

import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "@/app/globals.css";

import MeuComponenteLogo from "../images/MeuComponenteLogo";
import BtnIngresso from "../ui/button/BtnIngresso";
import cookie from "js-cookie";
import LangGlobe from "../ui/LangGlobe";


const Navbar = () => {
  const { t } = useTranslation();
  // Estado para controlar a exibição do menu hamburguer
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownT, setShowDropdownSC] = useState(false);

  // Função para alternar a visibilidade do menu hamburguer
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //handleLinkClickHome: Fecha todos os menus e dropdowns quando um link é clicado, mudando todos os estados (showMenu, showDropdown, showDropdownT) para false.
  const handleLinkClickHome = () => {
    // showMenu: Controla a visibilidade do menu hambúrguer (abrir/fechar).
    setShowMenu(false);
    //showDropdown: Controla a visibilidade do primeiro dropdown ("PROGRAMAÇÃO").
    setShowDropdown(false);
    //showDropdownT: Controla a visibilidade do segundo dropdown ("MAIS").
    setShowDropdownSC(false);
  };

  //toggleDropdown: Alterna a visibilidade do primeiro dropdown ("PROGRAMAÇÃO"), e fecha o segundo dropdown se estiver aberto.
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowDropdownSC(false);
  };

  //toggleDropdownTwo: Alterna a visibilidade do segundo dropdown ("MAIS"), e fecha o primeiro dropdown se estiver aberto.
  const toggleDropdownTwo = () => {
    setShowDropdownSC(!showDropdownT);
    setShowDropdown(false);
  };

  const handleMouseEnterDropdown = () => {
    setShowDropdown(true);
  };

  const handleMouseLeaveDropdown = () => {
    setShowDropdown(false);
  };

  const handleMouseEnterDropdownT = () => {
    setShowDropdownSC(true);
  };

  const handleMouseLeaveDropdownT = () => {
    setShowDropdownSC(false);
  };

  return (
    <nav className="nav">
      <div className="navBorder">
        <div className="navContainer">
          {/* link para pagina inicial da landingpage*/}
          <div className="navLogo">
            <Link href="/">
              <div className="logo">
                <MeuComponenteLogo />
              </div>
            </Link>
          </div>

          <ul className={`navMenu ${showMenu ? "showMenu" : ""}`}>
            <li>
              <Link href="/" onClick={handleLinkClickHome}>
              {t("navHeader.home")}
              </Link>
            </li>
            <li>
              <Link href="/palestrantes" onClick={handleLinkClickHome}>
                {t("navHeader.speak")}
              </Link>
            </li>

            <div
              className="dropdown"
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <li>
                <Link
                  href="/"
                  onClick={toggleDropdown}
                  className="dropbtn navItem"
                >
                   {t("navHeader.program")}
                </Link>
              </li>
              <div className={`dropdown-content ${showDropdown ? "show" : ""}`}>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                 {t("navHeader.schedule")}
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  SatsWeek
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                SatsGallery
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  SatsGaming
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  SatsKids
                </Link>
                <Link href="/satsparty" onClick={handleLinkClickHome}>
                  SatsParty
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  SatsMarket
                </Link>
                <Link href="/programacao" onClick={handleLinkClickHome}>
                SatsHack
                </Link>
              </div>
            </div>
            <li>
              <Link href="/contato" onClick={handleLinkClickHome}>
              {t("navHeader.contact")}
              </Link>
            </li>
            <div
              className="dropdown"
              onMouseEnter={handleMouseEnterDropdownT}
              onMouseLeave={handleMouseLeaveDropdownT}
            >
              <li>
                <Link
                  href="/"
                  onClick={toggleDropdownTwo}
                  className="dropbtn navItem"
                >
                  {t("navHeader.more")}
                </Link>
              </li>
              <div
                className={`dropdown-content ${showDropdownT ? "show" : ""}`}
              >
                <Link href="/programacao" onClick={handleLinkClickHome}>
                  {t("navHeader.studentTicket")}
                </Link>
                <Link href="/imprensa" onClick={handleLinkClickHome}>
                  {t("navHeader.press")}
                </Link>
                <Link href="/patrocinio" onClick={handleLinkClickHome}>
                  {t("navHeader.sponsor")}
                </Link>
                <Link href="/hoteis" onClick={handleLinkClickHome}>
                  {t("navHeader.Hotels")}
                </Link>
                <Link href="/local-do-evento" onClick={handleLinkClickHome}>
                  {t("navHeader.location")}
                </Link>
                <Link href="/FAQ" onClick={handleLinkClickHome}>
                  {t("navHeader.faq")}
                </Link>
              </div>
            </div>
            
          </ul>
          <div>
            <BtnIngresso url="https://www.satsconf.com.br/ingressos" onClick={() =>{
            cookie.set("btn_lp_global-buy", "btn_55117878", {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'strict'
            })
          }}>
              {t("buttons.purchase")}
            </BtnIngresso>
          </div>

          <div>
            <button className="hamburgerBtn" onClick={toggleMenu}>
              {showMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <LangGlobe />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
