import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

export default function StuendtAdd(props: { degree: string; Token: string }) {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    studentId: "",
    period: "",
    currentStatus: "",
    dateOfBirth: "",
    dormitory: "",
    major: "",
    grade: "",
    semester: "",
    roomNumber: "",
    assignedRoom: "",
    admissionDate: "",
    leavingDate: "",
    semesterStartDate: "",
    semesterEndDate: "",
    phoneNumber: "",
    socialCode: "",
    socialName: "",
    zipCode: "",
    address: "",
    residenceSemester: props.degree,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleAddStudent = () => {
    if (formData.dateOfBirth) {
      formData.dateOfBirth = formData.dateOfBirth.replace(/-/g, "").slice(2);
    }

    if (formData.leavingDate) {
      formData.leavingDate = formData.leavingDate.replace(/-/g, "");
    }

    if (formData.admissionDate) {
      formData.admissionDate = formData.admissionDate.replace(/-/g, "");
    }

    if (formData.semesterStartDate) {
      formData.semesterStartDate = formData.semesterStartDate.replace(/-/g, "");
    }

    if (formData.semesterEndDate) {
      formData.semesterEndDate = formData.semesterEndDate.replace(/-/g, "");
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/residents`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.Token}`,
        },
      })
      .then((response) => {
        console.log("유저 추가 완료:", response.data);
        return alert("추가 완료되었습니다.");
      })
      .catch((error) => {
        console.error("유저 수정 실패:", error);
        console.log(formData);
      });
  };

  return (
    <div>
      <div className="editresult">
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>성별</th>
              <th>학번</th>
              <th>차수</th>
              <th>현재상태</th>
              <th>생년월일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "name")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "gender")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "studentId")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "period")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "currentStatus")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "dateOfBirth")}
                />
              </td>
            </tr>
            <tr>
              <td>기숙사</td>
              <td>전공</td>
              <td>학년</td>
              <td>기간</td>
              <td>호실</td>
              <td>배정방</td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "dormitory")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "major")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "grade")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "semester")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "roomNumber")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "assignedRoom")}
                />
              </td>
            </tr>
            <tr>
              <td>입사일자</td>
              <td>퇴사일시</td>
              <td>차수시작일</td>
              <td>차수종료일</td>
              <td>HP</td>
              <td>사회코드</td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "admissionDate")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "leavingDate")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "semesterStartDate")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "semesterEndDate")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "phoneNumber")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "socialCode")}
                />
              </td>
            </tr>
            <tr>
              <td>사회명</td>
              <td>ZIP</td>
              <td>주소</td>
              <td colSpan={3} rowSpan={2}>
                <button onClick={(e) => handleAddStudent()}>
                  학생 데이터 추가
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "socialName")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "zipCode")}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => handleInputChange(e, "address")}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
