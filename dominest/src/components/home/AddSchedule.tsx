/** @jsxImportSource @emotion/react */
import {
  AddScheduleMain,
  AddScheduleTitle,
  AddSelect,
  AddSelectDiv,
  ScheduleAddBtn,
} from "@/style/ScheduleTableStyle";
import { student } from "./Schedule";
import { css } from "@emotion/react";
import React, { use, useEffect } from "react";

const hour = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];
const startHour = hour.filter((item) => item !== "17:00");
const endhour = hour.filter((item) => item !== "09:00");
const AddSchedule = () => {
  const [worktime, setWorktime] = React.useState<number>(0);
  const [startTime, setStartTime] = React.useState<number>(0);
  const [endTime, setEndTime] = React.useState<number>(0);
  useEffect(() => {
    if (worktime < 0) {
      alert("시간을 다시 설정해주세요.");
      setWorktime(0);
    }
  }, [worktime]);

  const addTime = () => {
    const time = endTime - startTime;
    setWorktime(time);
  };

  const setTime = (time: string) => {
    const hourArray = time.split(":");
    const hour = Number(hourArray[0]);
    return hour;
  };
  const handleTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "startTime") {
      setStartTime(setTime(value));
    } else {
      setEndTime(setTime(value));
    }
  };

  return (
    <AddScheduleMain>
      <AddScheduleTitle>스케쥴 추가</AddScheduleTitle>
      <AddSelectDiv>
        <AddSelect>
          {student.map((student) => (
            <option key={student.id} value={student.name}>{student.name}</option>
          ))}
        </AddSelect>
      </AddSelectDiv>
      <AddSelectDiv>
        <AddSelect name="startTime" onChange={handleTime}>
          {startHour.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </AddSelect>
        <span
          css={css`
            margin: 0 2%;
          `}
        >
          -
        </span>
        <AddSelect name="endTime" onChange={handleTime}>
          {endhour.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </AddSelect>
      </AddSelectDiv>
      <ScheduleAddBtn onClick={addTime}>추가</ScheduleAddBtn>
    </AddScheduleMain>
  );
};
export default AddSchedule;
