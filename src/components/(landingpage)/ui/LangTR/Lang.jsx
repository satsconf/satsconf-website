'use client'

import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { locales } from "../locales/locales";


const LangTR = () => {
  const pathname = usePathname();
  const { lang } = useParams();



  // Função para gerar a URL com o idioma atualizado
  const getPathname = (lng) => {
    if (!pathname) return `/${lng}`;
    const segments = pathname.split('/');
    segments[1] = lng; // Altera o segundo segmento da URL para o novo idioma
    return segments.join('/');
    
  };


const [menuVisible, setMenuVisible] = useState(false);

const toggleMenu = () => {
      setMenuVisible(!menuVisible);
};

const handleLinkClick = () => {
    setMenuVisible(false);
  };

  return (
    <div id="LangTR" className="containerlangTR">
      <div className="dropdown">
        <button onClick={toggleMenu}>
        <HiOutlineGlobeAlt />
        <span style={{ display: 'none' }}>{lang}</span>
        </button>
        {menuVisible && (
        <ul className="ulLangTR">
          {locales.map(({ code, name }) => (
          <li key={code}>
            <Link href={getPathname(code)} onClick={handleLinkClick}>{name}</Link>
          </li>
          ))}
          
        </ul>
        )}
      </div>
    </div>
  );
};

export default LangTR;
