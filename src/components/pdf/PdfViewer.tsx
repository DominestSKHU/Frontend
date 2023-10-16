import React, { useState } from "react";
import axios from "axios";

export default function PdfViewer(props: { id: any; chosenFormType: any }) {
  const [data, setData] = useState("");

  const openPdfInNewWindow = () => {
    const blob = new Blob([data], { type: "application/pdf" });
    const objectUrl = URL.createObjectURL(blob);

    const windowWidth = 800;
    const windowHeight = 600;
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const left = (screenWidth - windowWidth) / 2;
    const top = (screenHeight - windowHeight) / 2;

    const windowFeatures = `width=${windowWidth},height=${windowHeight},top=${top},left=${left}`;
    window.open(objectUrl, "myPdfWindow", windowFeatures);
  };

  const pdfview = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/${props.id}/pdf?pdfType=${props.chosenFormType}`,
        { responseType: "arraybuffer" }
      )
      .then((response) => {
        setData(response.data);
        console.log(response);
        openPdfInNewWindow();
      })
      .catch((error) => {
        console.log(props.chosenFormType);
        console.error("데이터 조회 중 오류 발생:", error);
      });
  };

  return <button onClick={pdfview}>PDF 보기</button>;
}
