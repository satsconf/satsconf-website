"use client"
import React from "react";
import { i18n } from "./i18n";
// import { i18n } from "@/translate/i18n";
import BoxPrincipal from "../components/(landingpage)/containers/boxprincipal";
import BoxBeneficios from "../components/(landingpage)/containers/boxbeneficios";
import BoxConvidados from "../components/(landingpage)/containers/boxconvidados";
import BoxGarante from "../components/(landingpage)/containers/boxgarante";
import BoxSobre from "../components/(landingpage)/containers/boxsobre";

import FAQComponent from "../components/(landingpage)/containers/faq";

// const I18N_STORAGE_KEY = 'i18nextLng';


const Home = () => {

  // useEffect(() => {
  //   const syncLocale = async () => {
  //     if (typeof window !== 'undefined') {
  //       const detectedLanguage = localStorage.getItem(I18N_STORAGE_KEY) || navigator.language.split('-')[0];
  //       await i18n.changeLanguage(detectedLanguage);
  //     }
  //   };

  //   syncLocale();
  // }, []);


  return (
    
      <main>  
        <section className="container">
          <BoxPrincipal />
          <BoxBeneficios />
          <BoxSobre />
          <BoxConvidados />
          <BoxGarante />
          <FAQComponent />
        </section>
      </main>
   
  );
};

export default Home;
