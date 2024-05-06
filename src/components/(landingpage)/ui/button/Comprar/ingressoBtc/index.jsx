"use client"; // components/ShopifyBuyButton.jsimport { useEffect, useState } from 'react';

import { useEffect, useState } from "react";

const ShopifyCollectionButton = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    const loadScript = () => {
      if (!window.ShopifyBuy) {
        const script = document.createElement("script");
        script.src = scriptURL;
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
          ShopifyBuyInit();
        };
      } else {
        ShopifyBuyInit();
      }
    };

    if (!initialized) {
      loadScript();
    }

    return () => {
      // Cleanup function to remove the script if component unmounts
      // This is optional, but can help prevent memory leaks
      const scriptElement = document.querySelector(
        `script[src="${scriptURL}"]`
      );
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, [initialized]);

  const ShopifyBuyInit = () => {
    const client = ShopifyBuy.buildClient({
      domain: "satsconf.myshopify.com",
      storefrontAccessToken: "ae173c279212fcd7ecbb7afde61026aa",
    });

    ShopifyBuy.UI.onReady(client).then((ui) => {
      const node = document.getElementById(
        "collection-component-1715006201665"
      );
      if (node && !initialized) {
        node.innerHTML = "";

        ui.createComponent("collection", {
          id: "276358463586",
          node: node,
          moneyFormat: "R%24%20%7B%7Bamount_with_comma_separator%7D%7D",
          options: {
            // Opções do botão de compra
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                    "width": "calc(25% - 20px)",
                  },
                },
                title: {
                  "font-size": "17px",
                  "color": "#fff",
                },
                price: {
                  "font-size": "17px",
                  "color": "#c2c2c2",
                },
                button: {
                  "font-family": "Arial, sans-serif",
                  "font-size": "18px",
                  "padding-top": "15px",
                  "padding-bottom": "15px",
                  ":hover": {
                    "background-color": "#ea5118",
                  },
                  "background-color": "#ea5118",
                  ":focus": {
                    "background-color": "#ea5118",
                  },
                  "border-radius": "35px",
                },
                quantityInput: {
                  "font-size": "18px",
                  "padding-top": "15px",
                  "padding-bottom": "15px",
                },
              },
              text: {
                button: "Add no carrinho",
              },
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px",
                  },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: {
                  "font-family": "Arial, sans-serif",
                  "font-size": "14px",
                  "padding-top": "15px",
                  "padding-bottom": "15px",
                  ":hover": {
                    "background-color": "#ea5118",
                  },
                  "background-color": "#ea5118",
                  ":focus": {
                    "background-color": "#ea5118",
                  },
                  "border-radius": "35px",
                },
                quantityInput: {
                  "font-size": "18px",
                  "padding-top": "15px",
                  "padding-bottom": "15px",
                },
              },
              text: {
                button: "Add no carrinho",
              },
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px",
                  },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: {
                  "font-family": "Arial, sans-serif",
                  "font-size": "14px",
                  "padding-top": "15px",
                  "padding-bottom": "15px",
                  ":hover": {
                    "background-color": "#ea5118",
                  },
                  "background-color": "#ea5118",
                  ":focus": {
                    "background-color": "#ea5118",
                  },
                  "border-radius": "35px",
                },
                quantityInput: {
                  "font-size": "14px",
                  "padding-top": "15px",
                  "padding-bottom": "15px",
                },
                title: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "bold",
                  "font-size": "26px",
                  "color": "#ffffff",
                },
                price: {
                  "font-family": "Quantico, sans-serif",
                  "font-size": "20px",
                 
                  
                },
                compareAt: {
                  "font-family": "Quantico, sans-serif",
                  "font-size": "17px",
                },
                unitPrice: {
                  "font-family": "Quantico, sans-serif",
                  "font-size": "18px",
                },
                description: {
                  "font-size": "15px",
                },
              },
              googleFonts: ["Quantico"],
              text: {
                button: "Add no carrinho",
              },
            },
            option: {},
            cart: {
              styles: {
                "font-family": "Arial, sans-serif",
                "font-size": "18px",
                "padding-top": "15px",
                "padding-bottom": "15px",
                ":hover": {
                  "background-color": "#ea5118",
                },
                "background-color": "#ea5118",
                ":focus": {
                  "background-color": "#ea5118",
                },
                "border-radius": "35px",
              },
            },
            text: {
              total: "Subtotal",
              button: "Comprar",
            },
            popup: false,
          },
          toggle: {
            styles: {
              "font-family": "Arial, sans-serif",
              "background-color": "#ea5118",
              ":hover": {
                "background-color": "#ea5118",
              },
              ":focus": {
                "background-color": "#ea5118",
              },
            },
            count: {
              "font-size": "14px",
            },
          },
        });

        setInitialized(true);
      }
    });
  };

  return (
    <div id="collection-component-1715006201665">
      {!initialized && "Loading..."}
    </div>
  );
};

export default ShopifyCollectionButton;
