"use client";
import React from "react";
import { useTranslation } from 'react-i18next';
import { useContext } from "react";
import { ModalContext } from "@/providers/ModalContext";
import BtnNovidades from "@/components/(landingpage)/ui/button/BtnNovidades";

const Programacao = ({ children }) => {
  const { t } = useTranslation();
  const { handleModalVisible } = useContext(ModalContext);

  const handleOpenModal = () => {
    handleModalVisible();
  };

  return (
    <section id="PagProgramacao">
      {/* Aqui é onde você renderiza children */} {children}
      <div className="containerPagProgramacao">
        <h2>{t("maintenance.titleMaintenance")}</h2>
        <p>  {t("maintenance.subTitle")}</p>
        <BtnNovidades onClick={handleOpenModal}>
        {t("buttons.news")}
      </BtnNovidades>
      </div>
    </section>
  );
};

export default Programacao;
