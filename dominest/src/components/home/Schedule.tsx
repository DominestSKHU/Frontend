/** @jsxImportSource @emotion/react */
import { ScheduleDiv } from "@/style/homeStyle/DivStyle";
import {
  ScheduleBottom,
  ScheduleCommitBtn,
  ScheduleTable,
  StudentInfo,
  StudentTable,
} from "@/style/homeStyle/scheduleStyle";
import React, { use, useEffect, useState } from "react";
import AddSchedule from "./AddSchedule";
import { css } from "@emotion/react";
import { CalendarStyle_UL } from "@/style/homeStyle/calendar";

interface StudentProps {
  id: number;
  name: string;
  phone: string;
}
export const time = [
  { id: 1, time: "09:00-10:00", mon: [], tue: [], wed: [], thu: [], fri: [] },
  { id: 2, time: "10:00-11:00", mon: [], tue: [], wed: [], thu: [], fri: [] },
  { id: 3, time: "11:00-12:00", mon: [], tue: [], wed: [], thu: [], fri: [] },
  { id: 4, time: "12:00-13:00", mon: [], tue: [], wed: [], thu: [], fri: [] },
  { id: 5, time: "13:00-14:00", mon: [], tue: [], wed: [], thu: [], fri: [] },
  { id: 6, time: "14:00-15:00", mon: [], tue: [], wed: [], thu: [], fri: [] },
  { id: 7, time: "15:00-16:00", mon: [], tue: [], wed: [], thu: [], fri: [] },
  { id: 8, time: "16:00-17:00", mon: [], tue: [], wed: [], thu: [], fri: [] },
];

export const student: StudentProps[] = [
  { name: "누구쎄옹", id: 1, phone: "010-1234-5678" },
  { name: "땅땅이", id: 2, phone: "010-1234-5678" },
  { name: "춘식이", id: 3, phone: "010-1234-5678" },
  { name: "현식이", id: 4, phone: "010-1234-5678" },
  { name: "슘당이", id: 5, phone: "010-1234-5678" },
];
interface workTimeProps {
  start: number;
  name: string;
  worktime: number;
  data: string;
}

const Schedule = () => {
  const [scheduleModal, setScheduleModal] = React.useState<boolean>(false);
  const [workTimeProps, setWorkTimeProps] = useState<workTimeProps>({
    start: 0,
    name: "",
    worktime: 0,
    data: "",
  });

  const addSchedule = () => {
    setScheduleModal(!scheduleModal);
  };
  useEffect(() => {
    console.log(scheduleModal);
    console.log(workTimeProps);
  }, [scheduleModal, workTimeProps]);

  const handleClose = (newState: boolean) => {
    setScheduleModal(newState); // X 버튼 클릭 시 상태 변경
  };

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
        </thead>
        <tbody>
          {time.map((item) => (
            <tr key={item.time}>
              <td>{item.time}</td>
              <td>
                <ul css={CalendarStyle_UL}>
                  {item.mon.map((student) => (
                    <li
                      css={css`
                        list-style: none;
                      `}
                    >
                      {student}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul css={CalendarStyle_UL}>
                  {item.tue.map((student) => (
                    <li
                      css={css`
                        list-style: none;
                      `}
                    >
                      {student}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul css={CalendarStyle_UL}>
                  {item.wed.map((student) => (
                    <li
                      css={css`
                        list-style: none;
                      `}
                    >
                      {student}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul css={CalendarStyle_UL}>
                  {item.thu.map((student) => (
                    <li
                      css={css`
                        list-style: none;
                      `}
                    >
                      {student}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul css={CalendarStyle_UL}>
                  {item.fri.map((student) => (
                    <li
                      css={css`
                        list-style: none;
                      `}
                    >
                      {student}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
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
      {scheduleModal && (
        <AddSchedule
          onClose={handleClose}
          setWorkTimeProps={setWorkTimeProps}
        />
      )}
    </ScheduleDiv>
  );
};
export default Schedule;
