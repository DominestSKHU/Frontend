import { useEffect, useState } from "react";

import { fetchData } from "@/utils/uploadutil";

export default function StudentAdd(props) {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetchData(props.degree, setData);
  }, [props]);

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
              <td colSpan="3"></td>
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
              <td colSpan="3">
                <button onClick={(e) => handleChangeUpdate()}>수정</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
