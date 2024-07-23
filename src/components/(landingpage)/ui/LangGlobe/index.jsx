"use client"
import React, {useState} from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { useTranslation, Trans } from "react-i18next";

const I18N_STORAGE_KEY = 'i18nextLng';

const lngs = {
    pt: { nativeName: 'Português' }, // Nome nativo em português
    en: { nativeName: 'English' },    // Nome nativo em inglês
    es: { nativeName: 'Español' }    // Nome nativo em inglês
  };

const LangGlobe = () => {
    const { i18n } = useTranslation();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Função do i18n para mudar o idioma
        localStorage.setItem(I18N_STORAGE_KEY, lng); // Armazena a seleção no localStorage
        // window.location = window.location; // Atualiza a página
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };


    return(
        <div id="LangGlobe" className="containerLangGlobe">
            <HiOutlineGlobeAlt className="icon" onClick={toggleDropdown} />
            {dropdownVisible && (
                <ul className="ulLangGlobe">
                    {Object.keys(lngs).map((lng) => (
                        <li key={lng} onClick={() => changeLanguage(lng)}>{lngs[lng].nativeName}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LangGlobe;