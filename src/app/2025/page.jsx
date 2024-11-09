"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import cookie from "js-cookie";

import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import ImageIgresso from "@/components/(landingpage)/images/ImageIngresso";
import Tickets2025 from "@/components/(landingpage)/ui/modal/tickets2025";
import {FiMapPin} from "react-icons/fi";

const Page2025 = ({ children }) => {
    const { t } = useTranslation();
    return (
        <section id="Ingressos">
            {/* Aqui é onde você renderiza children */}
            {children}


            <div className="bgContainerImg displayNone ">
                <div className="bgContainerPrincipal bgLinear">
                    <div className=" bgContainerMargin">
                        <div className="boxprincipal"  style={{ display: 'flex', flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                            {/* caixa co container com fonte do titulo */}
                            <div className="sc-bg-container krona-one-regular" style={{
                                display: 'flex',
                                flexDirection: "column",
                                justifyItems: "center",
                                alignItems: "center"
                            }}>
                                <div>
                                    <img src="./sats-2025.png" alt="Sats 2025"/>
                                </div>
                                <div style={{color: "white", textAlign: "center", marginBottom: "50px"}}>
                                    <p>07 - 08 Nov 2025</p>
                                    <p className="pLocal"><FiMapPin/>
                                        {t('location.address')}
                                    </p>
                                </div>
                                {/* gap de 8 com container de botão */}
                                <div>
                                    <BtnIngresso
                                        url="#buynow"
                                        // onClick={() => {
                                        //     cookie.set("btn_lp_global-buy", "btn_55117878", {
                                        //         httpOnly: true,
                                        //         secure: process.env.NODE_ENV === "production",
                                        //         sameSite: "strict",
                                        //     });
                                        // }}
                                    >
                                        {t("buttons.purchase")}
                                    </BtnIngresso>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bgContainerComprarIngresso" id="buynow">
                <div className="krona-one-regular" style={{ marginTop: "250px" }}>
                    <div className="boxTitle containerFixoIngresso">
                        <h2>{t("tickets.titleTickets")}</h2>
                        <p className="sc-fz-18 sora-light ">{t("tickets.subTitle")}</p>
                    </div>
                    <div>
                        <Tickets2025 />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page2025;
