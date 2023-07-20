import axios from "axios";

//업로드 함수
export const handleUpload = (
  selectedFile,
  residenceSemester,
  year,
  setShowStudentDate
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
      .post("http://domidomi.duckdns.org/residents/upload-excel", formData)
      .then((response) => {
        setShowStudentDate(true);
        return alert("성공적으로 업로드 되었습니다.");
      })
      .catch((error) => {
        console.log(error);
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

// 데이터 input 수정
export const handleInputChange = (e, field) => {
  let value = e.target.value;

  setResidentId((prevResident) => ({
    ...prevResident,
    [field]: value,
  }));
  console.log(value);
};

//데이터 수정
export const handleChangeUpdate = (residentId, showStudentEdituploadData) => {
  if (residentId.dateOfBirth) {
    residentId.dateOfBirth = residentId.dateOfBirth.replace(/-/g, "").slice(2);
  }

  if (residentId.leavingDate) {
    residentId.leavingDate = residentId.leavingDate.replace(/-/g, "");
  }

  if (residentId.admissionDate) {
    residentId.admissionDate = residentId.admissionDate.replace(/-/g, "");
  }

  if (residentId.semesterStartDate) {
    residentId.semesterStartDate = residentId.semesterStartDate.replace(
      /-/g,
      ""
    );
  }

  if (residentId.semesterEndDate) {
    residentId.semesterEndDate = residentId.semesterEndDate.replace(/-/g, "");
  }
  setshowStudentEdituploadData(false);
  axios
    .patch(
      `http://domidomi.duckdns.org/residents/${residentId.id}`,
      residentId,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log("유저 수정 완료:", response.data);
      return alert("수정 완료되었습니다.");
    })
    .catch((error) => {
      console.error("유저 수정 실패:", error);
      console.log(residentId);
    });
};
