import axios from "axios";

//업로드 함수
export const handleUpload = (selectedFile, residenceSemester, year) => {
  if (year === "") {
    return "연도를 선택해주세요";
  }
  if (residenceSemester === "") {
    return "차수를 선택해주세요";
  }
  if (selectedFile) {
    const degree = year + residenceSemester;
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("residenceSemester", degree);
    axios
      .post("http://domidomi.duckdns.org/residents/upload-excel", formData)
      .then((response) => {
        return alert("성공적으로 업로드 되었습니다.");
      })
      .catch((error) => {
        if (
          error.response.data.errorMessage ===
          "읽어들인 컬럼 개수가 21개가 아닙니다."
        ) {
          return alert("파일형식에 문제가 있습니다.");
        }
        if (
          error.response.data.errorMessage ===
          "Required request parameter 'residenceSemester' for method parameter type ResidenceSemester is not present"
        ) {
          return alert("연도 및 차수 에러");
        }
      });
  }
};

//data 삭제 함수
export const delet = () => {
  axios
    .delete("http://domidomi.duckdns.org/residents")
    .then((response) => {
      console.log("요청이 성공적으로 전송되었습니다.");
      return alert("삭제되었습니다.");
    })
    .catch((error) => {
      console.error("요청 전송 중 오류가 발생했습니다:", error);
    });
};
