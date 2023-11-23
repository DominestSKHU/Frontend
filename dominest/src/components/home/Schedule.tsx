/** @jsxImportSource @emotion/react */
import { ScheduleDiv } from "@/style/homeStyle/DivStyle";
import {
  ScheduleBottom,
  ScheduleCommitBtn,
  ScheduleTable,
  StudentInfo,
  StudentTable,
  studentLi,
  studentUl,
} from "@/style/homeStyle/scheduleStyle";
import React, { useEffect, useState } from "react";
import AddSchedule from "./AddSchedule";
import { CalendarStyle_UL } from "@/style/homeStyle/calendar";
import { scheduleGet } from "@/utils/home/scheduleUtils";

interface timeProps {
  timeSlot: string;
  usernames: string[];
}

interface scheduleAllProps {
  dayOfWeek: string;
  timeSlotInfos: timeProps[];
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

export interface UsersProps {
  name: string;
}
export interface ScheduleProps {
  users: UsersProps[];
}

const Schedule: React.FC<ScheduleProps> = ({ users }) => {
  const [token, setToken] = useState<string>(""); //token 받아오기
  const [data, setData] = useState<scheduleAllProps[]>([]);

  const WorkStudentList = users.slice(0, 5);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    authToken && setToken(authToken);
  }, [token, data]);

  useEffect(() => {
    scheduleGet(token)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [scheduleModal, setScheduleModal] = React.useState<boolean>(false);

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
              {data?.map((dataOfWeek) => (
                <td key={dataOfWeek.dayOfWeek}>
                  <ul css={CalendarStyle_UL}>
                    {dataOfWeek.timeSlotInfos.map(
                      (timeslot) =>
                        timeslot.timeSlot === item.time && (
                          <ul key={timeslot.timeSlot} css={studentUl}>
                            {timeslot.usernames.map((name) => (
                              <li css={studentLi} key={name}>
                                {name}
                              </li>
                            ))}
                          </ul>
                        )
                    )}
                  </ul>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </ScheduleTable>
      <ScheduleBottom>
        <StudentTable>
          {WorkStudentList.map((item) => (
            <StudentInfo key={item.name}>
              <span>{item.name}</span>
              <span>:</span>
              <span>010-0000-0000</span>
            </StudentInfo>
          ))}
        </StudentTable>
        <ScheduleCommitBtn onClick={addSchedule}>추가</ScheduleCommitBtn>
      </ScheduleBottom>
      {scheduleModal && (
        <AddSchedule
          users={users}
          token={token}
          data={data}
          onClose={handleClose}
        />
      )}
    </ScheduleDiv>
  );
};
export default Schedule;
