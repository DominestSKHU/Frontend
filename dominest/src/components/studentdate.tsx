import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import axios from "axios";

import "../app/globals.css";
/** @jsxImportSource @emotion/react */

export default function StudentData() {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    axios
      .get("http://domidomi.duckdns.org/residents?residenceSemester=S2023_2")
      .then((response) => {
        setData(response.data?.data?.residents);
      })
      .catch((error) => {
        console.error("데이터 조회 중 오류 발생:", error);
      });
  }, []);

  const renderTable = () => {
    if (data && Array.isArray(data) && data.length > 0) {
      return (
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
                <td>{resident.name}</td>
                <td>{resident.gender}</td>
                <td>{resident.studentId}</td>
                <td>{resident.period}</td>
                <td>{resident.currentStatus}</td>
                <td>{resident.dateOfBirth}</td>
                <td>{resident.dormitory}</td>
                <td>{resident.major}</td>
                <td>{resident.grade}</td>
                <td>{resident.semester}</td>
                <td>{resident.roomNumber}</td>
                <td>{resident.assignedRoom}</td>
                <td>{resident.admissionDate}</td>
                <td>{resident.leavingDate}</td>
                <td>{resident.semesterStartDate}</td>
                <td>{resident.semesterEndDate}</td>
                <td>{resident.phoneNumber}</td>
                <td>{resident.socialCode}</td>
                <td>{resident.socialName}</td>
                <td>{resident.zipCode}</td>
                <td>{resident.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
    padding: 8px;
  }
`;
