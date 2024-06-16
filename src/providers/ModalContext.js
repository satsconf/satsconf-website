//src/providers/ModalContext.js
import React, { createContext, useState } from "react";
import ModalNovidades from "@/components/(landingpage)/ui/modal/modalNovidades";

export const ModalContext = createContext({
  visible: false,
  handleModalVisible: () => {},
});

export const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  function handleModalVisible() {
    setVisible(!visible);
  }

  return (
    <ModalContext.Provider value={{ visible, handleModalVisible }}>
      {visible && <ModalNovidades />}
      {children}
    </ModalContext.Provider>
  );
};
