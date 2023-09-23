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
import { scheduleGet } from "@/utils/home/scheduleUtils";

interface StudentProps {
  id: number;
  name: string;
  phone: string;
}
interface workTimeProps {
  start: number;
  name: string;
  worktime: number;
  data: string;
}

interface timeProps {
  timeSlot: string;
  usernames: string[];
}

interface scheduleAllProps {
  dayOfWeek: string;
  timeSlots: timeProps[];
}

export const time = [
  { id: 1, time: "09:00 ~ 10:00" },
  { id: 2, time: "10:00 ~ 11:00" },
  { id: 3, time: "11:00 ~ 12:00" },
  { id: 4, time: "12:00 ~ 13:00" },
  { id: 5, time: "13:00 ~ 14:00" },
  { id: 6, time: "14:00 ~ 15:00" },
  { id: 7, time: "15:00 ~ 16:00" },
  { id: 8, time: "16:00 ~ 17:00" },
];

export const student: StudentProps[] = [
  { name: "선택해주세요", id: 0, phone: "0" },
  { name: "반병선", id: 1, phone: "010-1234-5678" },
  { name: "정인", id: 2, phone: "010-1234-5678" },
  { name: "안다은", id: 3, phone: "010-1234-5678" },
  { name: "류채림", id: 4, phone: "010-1234-5678" },
  { name: "공채원", id: 5, phone: "010-1234-5678" },
];

const Schedule = () => {
  const [token, setToken] = useState<string>(""); //token 받아오기
  const [data, setData] = useState<scheduleAllProps[]>([]);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    authToken && setToken(authToken);
  }, [token, data]);

  useEffect(() => {
    scheduleGet(token)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                  {data[0] &&
                    data[0].timeSlots.map(
                      (timeslot) =>
                        timeslot.timeSlot === item.time && (
                          <li
                            key={timeslot.timeSlot}
                            css={css`
                              list-style: none;
                            `}
                          >
                            {timeslot.usernames}
                            <br />
                          </li>
                        )
                    )}
                </ul>
              </td>
              <td>
                <ul css={CalendarStyle_UL}>
                  {data[1] &&
                    data[1].timeSlots.map(
                      (timeslot) =>
                        timeslot.timeSlot === item.time && (
                          <li
                            key={timeslot.timeSlot}
                            css={css`
                              list-style: none;
                            `}
                          >
                            {timeslot.usernames}
                            <br />
                          </li>
                        )
                    )}
                </ul>
              </td>
              <td>
                <ul css={CalendarStyle_UL}>
                  {data[2] &&
                    data[2].timeSlots.map(
                      (timeslot) =>
                        timeslot.timeSlot === item.time && (
                          <li
                            key={timeslot.timeSlot}
                            css={css`
                              list-style: none;
                            `}
                          >
                            {timeslot.usernames}
                            <br />
                          </li>
                        )
                    )}
                </ul>
              </td>
              <td>
                <ul css={CalendarStyle_UL}>
                  {data[3] &&
                    data[3].timeSlots.map(
                      (timeslot) =>
                        timeslot.timeSlot === item.time && (
                          <li
                            key={timeslot.timeSlot}
                            css={css`
                              list-style: none;
                            `}
                          >
                            {timeslot.usernames}
                            <br />
                          </li>
                        )
                    )}
                </ul>
              </td>
              <td>
                <ul css={CalendarStyle_UL}>
                  {data[4] &&
                    data[4].timeSlots.map(
                      (timeslot) =>
                        timeslot.timeSlot === item.time && (
                          <li
                            key={timeslot.timeSlot}
                            css={css`
                              list-style: none;
                            `}
                          >
                            {timeslot.usernames}
                            <br />
                          </li>
                        )
                    )}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </ScheduleTable>
      <ScheduleBottom>
        <StudentTable>
          {student.map(
            (item) =>
              item.id !== 0 && (
                <StudentInfo key={item.id}>
                  <span>{item.name}</span>
                  <span>:</span>
                  <span>{item.phone}</span>
                </StudentInfo>
              )
          )}
        </StudentTable>
        <ScheduleCommitBtn onClick={addSchedule}>추가</ScheduleCommitBtn>
      </ScheduleBottom>
      {scheduleModal && <AddSchedule token={token} onClose={handleClose} />}
    </ScheduleDiv>
  );
};
export default Schedule;
