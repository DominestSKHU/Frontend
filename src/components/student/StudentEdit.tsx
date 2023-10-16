import { useEffect, useState } from "react";
import { fetchData } from "@/utils/student/uploadutil";
import {
  handleSearch,
  handleChangeUpdate,
  handleUpdate,
  handleInputChange,
} from "@/utils/student/EditUtil";
import { StudentEditStyle2 } from "@/style/ComponentStyle";

interface Student {
  id: string;
  name: string;
  studentId: string;
  dateOfBirth: string;
  phoneNumber: string;
  major: string;
}

export interface Resident {
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

interface Props {
  degree: string;
  Token: string;
}

export default function StudentEdit(props: Props) {
  const [data, setData] = useState<Student[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showStudentEditData, setShowStudentEditData] = useState(false);
  const [showStudentEdituploadData, setShowStudentEdituploadData] =
    useState(false);
  const [filteredData, setFilteredData] = useState<Student[]>([]);
  const [residentId, setResidentId] = useState<Resident | null>(null);

  useEffect(() => {
    fetchData(props.degree, setData);
  }, [props]);

  return (
    <div>
      <div>
        <label>이름</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={(e) =>
            handleSearch(
              searchQuery,
              setShowStudentEditData,
              setFilteredData,
              data
            )
          }
        >
          조회
        </button>
      </div>

      {showStudentEditData && (
        <StudentEditStyle2>
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
              {filteredData.map((resident, index) => (
                <tr key={`${resident.id}`}>
                  <td>{resident.name}</td>
                  <td>{resident.studentId}</td>
                  <td>{resident.dateOfBirth}</td>
                  <td>{resident.phoneNumber}</td>
                  <td>{resident.major}</td>
                  <td>
                    <button
                      onClick={() =>
                        handleUpdate(
                          resident,
                          setResidentId,
                          setShowStudentEdituploadData,
                          setShowStudentEditData,
                          props.degree
                        )
                      }
                    >
                      선택
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </StudentEditStyle2>
      )}
      {showStudentEdituploadData && residentId && (
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
              <tr key={`${residentId?.id}_info`}>
                {" "}
                <td>
                  <input
                    type="text"
                    value={residentId?.name || ""}
                    onChange={(e) =>
                      handleInputChange(e, "name", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.gender}
                    onChange={(e) =>
                      handleInputChange(e, "gender", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.studentId}
                    onChange={(e) =>
                      handleInputChange(e, "studentId", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.period}
                    onChange={(e) =>
                      handleInputChange(e, "period", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.currentStatus}
                    onChange={(e) =>
                      handleInputChange(e, "currentStatus", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange(e, "dateOfBirth", setResidentId)
                    }
                  />
                </td>
              </tr>
              <tr key={`${residentId.id}_dormitory`}>
                <td>기숙사</td>
                <td>전공</td>
                <td>학년</td>
                <td>기간</td>
                <td>호실</td>
                <td>배정방</td>
              </tr>
              <tr key={`${residentId.id}_dormitory_values`}>
                <td>
                  <input
                    type="text"
                    value={residentId.dormitory}
                    onChange={(e) =>
                      handleInputChange(e, "dormitory", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.major}
                    onChange={(e) =>
                      handleInputChange(e, "major", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.grade}
                    onChange={(e) =>
                      handleInputChange(e, "grade", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.semester}
                    onChange={(e) =>
                      handleInputChange(e, "semester", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.roomNumber}
                    onChange={(e) =>
                      handleInputChange(e, "roomNumber", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.assignedRoom}
                    onChange={(e) =>
                      handleInputChange(e, "assignedRoom", setResidentId)
                    }
                  />
                </td>
              </tr>
              <tr key={`${residentId.id}_admission`}>
                <td>입사일자</td>
                <td>퇴사일시</td>
                <td>차수시작일</td>
                <td>차수종료일</td>
                <td>HP</td>
                <td>사회코드</td>
              </tr>
              <tr key={`${residentId.id}_admission_values`}>
                <td>
                  <input
                    type="text"
                    value={residentId.admissionDate}
                    onChange={(e) =>
                      handleInputChange(e, "admissionDate", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.leavingDate}
                    onChange={(e) =>
                      handleInputChange(e, "leavingDate", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.semesterStartDate}
                    onChange={(e) =>
                      handleInputChange(e, "semesterStartDate", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.semesterEndDate}
                    onChange={(e) =>
                      handleInputChange(e, "semesterEndDate", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.phoneNumber}
                    onChange={(e) =>
                      handleInputChange(e, "phoneNumber", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.socialCode}
                    onChange={(e) =>
                      handleInputChange(e, "socialCode", setResidentId)
                    }
                  />
                </td>
              </tr>
              <tr key={`${residentId.id}_social`}>
                <td>사회명</td>
                <td>ZIP</td>
                <td>주소</td>
                <td colSpan={3}></td>
              </tr>
              <tr key={`${residentId.id}_social_values`}>
                <td>
                  <input
                    type="text"
                    value={residentId.socialName}
                    onChange={(e) =>
                      handleInputChange(e, "socialName", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.zipCode}
                    onChange={(e) =>
                      handleInputChange(e, "zipCode", setResidentId)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={residentId.address}
                    onChange={(e) =>
                      handleInputChange(e, "address", setResidentId)
                    }
                  />
                </td>
                <td colSpan={3}>
                  <button
                    onClick={(e) =>
                      handleChangeUpdate(
                        residentId,
                        setShowStudentEdituploadData,
                        props.Token
                      )
                    }
                  >
                    수정
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
