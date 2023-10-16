import axios from "axios";

export const handleUpload = (
  degree: string,
  selectedFiles: any,
  Token: string,
  chosenFormType: any
) => {
  const formData = new FormData();
  formData.append("residenceSemester", degree);
  for (let i = 0; i < selectedFiles.length; i++) {
    formData.append("pdfs", selectedFiles[i]);
    formData.append("residenceSemester", degree);
    formData.append("pdfType", chosenFormType);
  }
  axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/residents/pdf`, formData, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
    .then((response) => {
      console.log("업로드 성공:", response.data);
      return alert("업로드에 성공하였습니다.");
    })
    .catch((error) => {
      console.error("업로드 실패:", error);
    });
};
