import { useEffect, useState } from "react";

import { fetchData } from "@/utils/uploadutil";

export default function StudentEdit(props) {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showStudentEditData, setShowStudentEditData] = useState(false);
  const [showStudentEdituploadData, setshowStudentEdituploadData] =
    useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [residentId, setresidentId] = useState([]);
  useEffect(() => {
    fetchData(props.degree, setData);
  }, [props]);

  const handleSearch = () => {
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

  const handleUpdate = (resident) => {
    setresidentId(resident);
    setshowStudentEdituploadData(true);
  };
  const handleInputChange = (e, residentId, field) => {
    const value = e.target.value;
  };
  return (
    <div>
      <div>
        <label>이름</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>조회</button>
      </div>

      {showStudentEditData && (
        <div className="edit">
          <table>
            <thead>
              <tr>
                <th>이름</th>
                <th>학번</th>
                <th>생년월일</th>
                <th>전화번호</th>
                <th>전공</th>
                <th>수정</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((resident) => (
                <tr key={resident.id}>
                  <td>{resident.name}</td>
                  <td>{resident.studentId}</td>
                  <td>{resident.dateOfBirth}</td>
                  <td>{resident.phoneNumber}</td>
                  <td>{resident.major}</td>
                  <td>
                    <button onClick={() => handleUpdate(resident)}>선택</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showStudentEdituploadData && (
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
              <tr key={residentId.id}>
                <td>
                  <input
                    type="text"
                    value={residentId.name}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "name")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.gender}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "gender")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.studentId}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "studentId")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.period}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "period")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.currentStatus}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "currentStatus")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "dateOfBirth")
                    }
                  />
                </td>
              </tr>
              <tr key={residentId.id}>
                <td>기숙사</td>
                <td>전공</td>
                <td>학년</td>
                <td>기간</td>
                <td>호실</td>
                <td>배정방</td>
              </tr>
              <tr key={residentId.id}>
                <td>
                  <input
                    type="text"
                    value={residentId.dormitory}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "dormitory")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.major}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "major")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.grade}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "grade")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.semester}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "semester")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.roomNumber}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "roomNumber")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.assignedRoom}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "assignedRoom")
                    }
                  />
                </td>
              </tr>
              <tr key={residentId.id}>
                <td>입사일자</td>
                <td>퇴사일시</td>
                <td>차수시작일</td>
                <td>차수종료일</td>
                <td>HP</td>
                <td>사회코드</td>
              </tr>
              <tr key={residentId.id}>
                <td>
                  <input
                    type="text"
                    value={residentId.admissionDate}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "admissionDate")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.leavingDate}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "leavingDate")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.semesterStartDate}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "semesterStartDate")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.semesterEndDate}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "semesterEndDate")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.phoneNumber}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "phoneNumber")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.socialCode}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "socialCode")
                    }
                  />
                </td>
              </tr>
              <tr key={residentId.id}>
                <td>사회명</td>
                <td>ZIP</td>
                <td>주소</td>
                <td colSpan="3"></td>
              </tr>
              <tr key={residentId.id}>
                <td>
                  <input
                    type="text"
                    value={residentId.socialName}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "socialName")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.zipCode}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "zipCode")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.address}
                    onChange={(e) =>
                      handleInputChange(e, residentId.id, "address")
                    }
                  />
                </td>
                <td colSpan="3">
                  <button onClick={() => handleUpdate(resident)}>수정</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
