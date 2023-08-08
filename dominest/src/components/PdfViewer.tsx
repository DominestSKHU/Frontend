import React from "react";
export default function PdfViewer({ pdfUrl }) {
  const openPdfInNewWindow = () => {
    const windowWidth = 800;
    const windowHeight = 600;
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const left = (screenWidth - windowWidth) / 2;
    const top = (screenHeight - windowHeight) / 2;

    const windowFeatures = `width=${windowWidth},height=${windowHeight},top=${top},left=${left}`;
    window.open(pdfUrl, "myPdfWindow", windowFeatures);
  };

  return <button onClick={openPdfInNewWindow}>PDF 보기</button>;
}
