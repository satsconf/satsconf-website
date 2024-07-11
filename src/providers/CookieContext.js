// src/providers/CookieContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import cookie from "js-cookie";

const CookieContext = createContext();

export const useCookies = () => useContext(CookieContext);

export const CookieProvider = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState(
    cookie.get("Cookie_accepted_global") === "accepted_g1458542"
  );
  const [showCookieBox, setShowCookieBox] = useState(false);

  useEffect(() => {
    if (!window.gtagScriptAdded) {
      // Inicializa o Google Analytics quando os cookies são aceitos
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src =
        "https://www.googletagmanager.com/gtag/js?id=UA-241114736-1";
      script1.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-241114736-1');
      `;
      document.head.appendChild(script1);

      // Marque que as tags foram adicionadas
      window.gtagScriptAdded = true;
    }
  }, [cookieConsent]);

  const acceptCookies = () => {
    cookie.set("Cookie_accepted_global", "accepted_g1458542", { path: "/" });
    setCookieConsent(true);
    setShowCookieBox(false);
  };

  const rejectCookies = () => {
    const cookiesToRemove = [
      "Cookie_accepted_global",
      "btn_lp_global-buy",
      "btn_normal_pass",
      "newsletter_subscription",
    ];
    cookiesToRemove.forEach((cookieName) => {
      cookie.remove(cookieName, { path: "/" });
    });
    setCookieConsent(false);
    setShowCookieBox(false);
  };

  return (
    <CookieContext.Provider
      value={{ cookieConsent, acceptCookies, rejectCookies, showCookieBox }}
    >
      {children}
    </CookieContext.Provider>
  );
};
