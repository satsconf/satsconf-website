"use client";
import React, { useEffect } from "react";

const TypeformSatsKids = () => {
  const containerStyle = {
    width: "80%",
    minHeight: "100vh", // ajuste a altura conforme necessário
    overflow: "hidden",
    margin: "auto",
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={containerStyle}
      dangerouslySetInnerHTML={{
        __html: `<div data-tf-live="01J9HYZGEG1P55XPDJCHE8HRW4"></div>`,
      }}
    />
  );
};

export default TypeformSatsKids;
