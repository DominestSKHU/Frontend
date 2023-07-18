import { useEffect, useState } from "react";

import { fetchData } from "@/utils/uploadutil";

export default function StudentEdit(props) {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showStudentEditData, setShowStudentEditData] = useState(false);
  const [showStudentEdituploadData, setshowStudentEdituploadData] =
    useState(false);
  const [filteredData, setFilteredData] = useState([]);

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
    const residentId = resident.id;
    setshowStudentEdituploadData(true);
    console.log(residentId);
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
        <div>
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
        <div>
          <p>gd</p>
        </div>
      )}
    </div>
  );
}
