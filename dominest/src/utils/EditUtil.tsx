import axios from "axios";
// 이름 조회 기능
export const handleSearch = (
  searchQuery,
  setShowStudentEditData,
  setFilteredData,
  data
) => {
  if (searchQuery === "") {
    alert("한글자 이상 입력해주세요");
    setShowStudentEditData(false);
  } else {
    setShowStudentEditData(true);
    const filteredResident = data.filter((resident) =>
      resident.name.includes(searchQuery)
    );
    setFilteredData(filteredResident);
  }
};

//데이터 수정 결과물 업로드
export const handleChangeUpdate = (
  residentId,
  setshowStudentEdituploadData
) => {
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

//학생 데이터 수정
export const handleInputChange = (e, field, setResidentId) => {
  let value = e.target.value;

  setResidentId((prevResident) => ({
    ...prevResident,
    [field]: value,
  }));
  console.log(value);
};

export const handleUpdate = (
  resident,
  setResidentId,
  setshowStudentEdituploadData,
  setShowStudentEditData,
  degree
) => {
  const updatedResident = {
    ...resident,
    residenceSemester: degree,
  };
  setResidentId(updatedResident);
  setshowStudentEdituploadData(true);
  setShowStudentEditData(false);
};
