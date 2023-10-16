import axios from "axios";
// 이름 조회 기능
export const handleSearch = (
  searchQuery: any,
  setShowStudentEditData: any,
  setFilteredData: any,
  data: any
) => {
  if (searchQuery === "") {
    alert("한글자 이상 입력해주세요");
    setShowStudentEditData(false);
  } else {
    setShowStudentEditData(true);
    const filteredResident = data.filter((resident: any) =>
      resident.name.includes(searchQuery)
    );
    setFilteredData(filteredResident);
  }
};

//데이터 수정 결과물 업로드
export const handleChangeUpdate = (
  residentId: any,
  setshowStudentEdituploadData: any,
  authToken: any
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
      `${process.env.NEXT_PUBLIC_API_URL}/residents/${residentId.id}`,
      residentId,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
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
export const handleInputChange = (e: any, field: any, setResidentId: any) => {
  let value = e.target.value;

  setResidentId((prevResident: any) => ({
    ...prevResident,
    [field]: value,
  }));
  console.log(value);
};

interface Resident {
  id: number;
  name: string;
  studentId: string;
  gender: string;
  period: string;
  currentStatus: string;
  dateOfBirth: string;
  dormitory: string;
  major: string;
  grade: string;
  semester: string;
  roomNumber: string;
  assignedRoom: string;
  admissionDate: string;
  leavingDate: string;
  semesterStartDate: string;
  semesterEndDate: string;
  phoneNumber: string;
  socialCode: string;
  socialName: string;
  zipCode: string;
  address: string;
}
interface Student {
  id: string;
  name: string;
  studentId: string;
  dateOfBirth: string;
  phoneNumber: string;
  major: string;
}
export const handleUpdate = (
  resident: Student,
  setResidentId: any,
  setshowStudentEdituploadData: any,
  setShowStudentEditData: any,
  degree: any
) => {
  const updatedResident = {
    ...resident,
    residenceSemester: degree,
  };
  setResidentId(updatedResident);
  setshowStudentEdituploadData(true);
  setShowStudentEditData(false);
};
