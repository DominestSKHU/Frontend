;
/** @jsxImportSource @emotion/react */
import { ScheduleDiv } from "@/style/DivStyle";
import {
  ScheduleBottom,
  ScheduleCommitBtn,
  ScheduleTable,
  StudentInfo,
  StudentTable,
} from "@/style/ScheduleTableStyle";
import React, { useEffect } from "react";
import AddSchedule from "./AddSchedule";


interface StudentProps {
  id: number;
  name: string;
  phone: string;
}
export const time = [
  "09:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
  "13:00-14:00",
  "14:00-15:00",
  "15:00-16:00",
  "16:00-17:00",
];

export const student: StudentProps[] = [
  { name: "누구쎄옹", id: 1, phone: "010-1234-5678" },
  { name: "땅땅이", id: 2, phone: "010-1234-5678" },
  { name: "춘식이", id: 3, phone: "010-1234-5678" },
  { name: "현식이", id: 4, phone: "010-1234-5678" },
  { name: "슘당이", id: 5, phone: "010-1234-5678" },
];
const Schedule = () => {
  const [scheduleModal, setScheduleModal] = React.useState<boolean>(false);
  const addSchedule = () => {
    setScheduleModal(!scheduleModal);
  };
  useEffect(() => {
    console.log(scheduleModal);
  });

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
        <ScheduleCommitBtn onClick={addSchedule}>추가</ScheduleCommitBtn>
        <ScheduleCommitBtn>저장</ScheduleCommitBtn>
      </ScheduleBottom>
      {scheduleModal && <AddSchedule />}
    </ScheduleDiv>
  );
};
export default Schedule;
