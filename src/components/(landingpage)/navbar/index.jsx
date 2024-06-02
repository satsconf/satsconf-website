"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "@/app/globals.css";

import MeuComponenteLogo from "../images/MeuComponenteLogo";
import BtnIngresso from "../ui/button/BtnIngresso";

const Navbar = () => {
  // Estado para controlar a exibição do menu hamburguer
  const [showMenu, setShowMenu] = useState(false);

  // Função para alternar a visibilidade do menu hamburguer
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


const handleLinkClickHome = () => {
  setShowMenu(false);
};

  return (
    <nav className="nav" >
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
              <Link href="/" onClick={handleLinkClickHome}>HOME</Link>
            </li>
            <li>
              <Link href="/palestrantes" onClick={handleLinkClickHome}>PALESTRANTES</Link>
            </li>
            <li>
              <Link href="/programacao" onClick={handleLinkClickHome}>PROGRAMAÇÃO</Link>
            </li>
            <li>
              <Link href="/contato" onClick={handleLinkClickHome}>CONTATO</Link>
            </li>
            <li>
              <Link href="/faq" onClick={handleLinkClickHome}>FAQ</Link>
            </li>
          </ul>
          <div>
            <BtnIngresso url="https://www.example.com">
              Comprar Ingresso{" "}
            </BtnIngresso>
          </div>
         
          <div>
            <button className="hamburgerBtn" onClick={toggleMenu}>
              {showMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
