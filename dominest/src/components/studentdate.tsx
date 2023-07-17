import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import axios from "axios";

import "../app/globals.css";
/** @jsxImportSource @emotion/react */

export default function StudentData(props) {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    axios
      .get(
        `http://domidomi.duckdns.org/residents?residenceSemester=${props.degree}`
      )
      .then((response) => {
        setData(response.data?.data?.residents);
      })
      .catch((error) => {
        console.log("deegr", props.degree);
        console.error("데이터 조회 중 오류 발생:", error);
      });
    console.log(props);
  }, [props]);

  const handleInputChange = (e, id, field) => {
    const newData = data.map((resident) => {
      if (resident.id === id) {
        return {
          ...resident,
          [field]: e.target.value,
        };
      }
      return resident;
    });
    setData(newData);
    handleUpdate(newData.find((resident) => resident.id === id));

    const updatedData = {
      [field]: e.target.value,
    };

    const url = `http://domidomi.duckdns.org/residents/${id}`;

    axios
      .patch(url, updatedData)
      .then((response) => {
        console.log("입사생 정보가 성공적으로 수정되었습니다.");
      })
      .catch((error) => {
        console.error("입사생 정보 수정 중 오류 발생:", error);
      });
  };

  const handleUpdate = (resident) => {
    const url = `http://domidomi.duckdns.org/residents/${resident.id}`;

    const updatedData = {
      name: resident.name,
      gender: resident.gender,
      studentId: resident.studentId,
      major: resident.major,
      grade: resident.grade,
      dateOfBirth: resident.dateOfBirth,
      semester: resident.semester,
      residenceSemester: resident.residenceSemester,
      currentStatus: resident.currentStatus,
      dormitory: resident.dormitory,
      period: resident.period,
      roomNumber: resident.roomNumber,
      assignedRoom: resident.assignedRoom,
      admissionDate: resident.admissionDate,
      leavingDate: resident.leavingDate,
      semesterStartDate: resident.semesterStartDate,
      semesterEndDate: resident.semesterEndDate,
      phoneNumber: resident.phoneNumber,
      socialCode: resident.socialCode,
      socialName: resident.socialName,
      zipCode: resident.zipCode,
      address: resident.address,
    };

    axios
      .patch(url, updatedData)
      .then((response) => {
        console.log("입사생 정보가 성공적으로 수정되었습니다.");
      })
      .catch((error) => {
        console.error("입사생 정보 수정 중 오류 발생:", error);
      });
  };
  const renderTable = () => {
    if (data && Array.isArray(data) && data.length > 0) {
      return (
        <div>
          <table css={tableStyle}>
            <thead>
              <tr>
                <th>번호</th>
                <th>이름</th>
                <th>성별</th>
                <th>학번</th>
                <th>차수</th>
                <th>현재상태</th>
                <th>생년월일</th>
                <th>기숙사</th>
                <th>전공</th>
                <th>학년</th>
                <th>기간</th>
                <th>호실</th>
                <th>배정방</th>
                <th>입사일자</th>
                <th>퇴사일시</th>
                <th>차수시작일</th>
                <th>차수종료일</th>
                <th>HP</th>
                <th>사회코드</th>
                <th>사회명</th>
                <th>ZIP</th>
                <th>주소</th>
              </tr>
            </thead>
            <tbody>
              {data.map((resident, index) => (
                <tr key={resident.id}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      type="text"
                      value={resident.name}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "name")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.gender}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "gender")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.studentId}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "studentId")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.period}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "period")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.currentStatus}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "currentStatus")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.dateOfBirth}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "dateOfBirth")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.dormitory}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "dormitory")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.major}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "major")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.grade}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "grade")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.semester}
                      onChange={(e) => handleInputChange(e, index, "semester")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.roomNumber}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "roomNumber")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.assignedRoom}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "assignedRoom")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.admissionDate}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "admissionDate")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.leavingDate}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "leavingDate")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.semesterStartDate}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "semesterStartDate")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.semesterEndDate}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "semesterEndDate")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.phoneNumber}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "phoneNumber")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.socialCode}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "socialCode")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.socialName}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "socialName")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.zipCode}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "zipCode")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={resident.address}
                      onChange={(e) =>
                        handleInputChange(e, resident.id, "address")
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleUpdate}>업로드</button>
        </div>
      );
    } else {
      return <p>데이터가 없습니다.</p>;
    }
  };

  return (
    <div
      css={css`
        margin: 20px;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 600px;
        max-height: 600px;
        align-items: center;
        overflow: auto;
        border: 1px solid black;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        {renderTable()}
      </div>
    </div>
  );
}
const tableStyle = css`
  border-collapse: collapse;
  width: 300%;

  th,
  td {
    border: 1px solid black;
    padding: 5px;
    input {
      border-round: 0px;
      text-align: center;
      border: none;
      background-color: white;
      width: 100%;
      padding: 0;
      margin: 0;
    }
  }
`;
