"use client";
import { ScheduleDiv, TodoUl } from "@/style/DivStyle";
import {
  ScheduleBottom,
  ScheduleCommitBtn,
  ScheduleInput,
  ScheduleTable,
  StudentInfo,
  StudentTable,
} from "@/style/ScheduleTableStyle";
import { css } from "@emotion/react";

interface StudentProps {
  id: number;
  name: string;
  phone: string;
}
const Schedule = () => {
  const time = [
    "09:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00",
  ];
  const student: StudentProps[] = [
    { name: "김동현", id: 1, phone: "010-1234-5678" },
    { name: "김동현", id: 1, phone: "010-1234-5678" },
    { name: "김동현", id: 1, phone: "010-1234-5678" },
    { name: "김동현", id: 1, phone: "010-1234-5678" },
    { name: "김동현", id: 1, phone: "010-1234-5678" },
  ];
  return (
    <ScheduleDiv>
      <ScheduleTable>
        <thead>
          <tr>
            <th>시간</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
          </tr>
          {time.map((item) => (
            <tr key={item}>
              <td>{item}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </thead>
      </ScheduleTable>
      <ScheduleBottom>
        <StudentTable>
          {student.map((item) => (
            <StudentInfo key={item.id}>
              <span>{item.name}</span>
              <span>:</span>
              <span>{item.phone}</span>
            </StudentInfo>
          ))}
        </StudentTable>
        <ScheduleCommitBtn>수정</ScheduleCommitBtn>
      </ScheduleBottom>
    </ScheduleDiv>
  );
};
export default Schedule;
