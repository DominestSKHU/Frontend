import axios from "axios";

export const handleUpload = (
  selectedFile,
  residenceSemester,
  year,
  setShowStudentDate,
  authToken
) => {
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
      .post("http://domidomi.duckdns.org/residents/upload-excel", formData, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJhdWQiOiJVc2VybmFtZVBhc3N3b3JkQXV0aGVudGljYXRpb25Ub2tlbiBbUHJpbmNpcGFsPWVlZWVAZW1haWwuY29tLCBDcmVkZW50aWFscz1bUFJPVEVDVEVEXSwgQXV0aGVudGljYXRlZD1mYWxzZSwgRGV0YWlscz1udWxsLCBHcmFudGVkIEF1dGhvcml0aWVzPVtdXSIsImlhdCI6MTY5MDY1MzkzMywiZXhwIjoxNjkxODY0NDMzfQ.mlCfMGhMplch1fXBvImTk2DtSAL0UggY5Kf_CAHiiHBZ2dIc1j1K5QYMZJZ2kdhPjpf2O4FSbQwnCj10NjLtkw`, // 헤더에 토큰 설정
        },
      })
      .then((response) => {
        setShowStudentDate(true);
        return alert("성공적으로 업로드 되었습니다.");
      })
      .catch((error) => {
        console.log(error);
        /*
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
        */
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

//data 차수조회
export const fetchData = (degree, setData) => {
  axios
    .get(`http://domidomi.duckdns.org/residents?residenceSemester=${degree}`)
    .then((response) => {
      setData(response.data?.data?.residents);
    })
    .catch((error) => {
      console.error("데이터 조회 중 오류 발생:", error);
    });
};

//삭제
export const StudentDelete = (id) => {
  axios
    .delete(`http://domidomi.duckdns.org/residents/${id}`)
    .then((response) => {
      return alert("삭제를 성공했습니다.");
    })
    .catch((error) => {
      console.error("데이터 조회 중 오류 발생:", error);
    });
};
