/** @jsxImportSource @emotion/react */
import {
  AddScheduleMain,
  AddScheduleTitle,
  AddSelect,
  AddSelectDiv,
  ScheduleAddBtn,
} from "@/style/homeStyle/scheduleStyle";
import { student, time } from "../home/Schedule";
import { css } from "@emotion/react";
import React, { use, useEffect } from "react";
import {
  backBtnDiv,
  scheduleModalCancelBtn,
} from "@/style/homeStyle/ScheduleTableStyle";

const hour = [
  { id: 1, time: "09:00" },
  { id: 2, time: "10:00" },
  { id: 3, time: "11:00" },
  { id: 4, time: "12:00" },
  { id: 5, time: "13:00" },
  { id: 6, time: "14:00" },
  { id: 7, time: "15:00" },
  { id: 8, time: "16:00" },
  { id: 9, time: "17:00" },
];
const days = [
  { day: "월요일", value: "mon" },
  { day: "화요일", value: "tue" },
  { day: "수요일", value: "wed" },
  { day: "목요일", value: "thu" },
  { day: "금요일", value: "fri" },
];

const startHour = hour.filter((item) => item.time !== "17:00");
const endhour = hour.filter((item) => item.time !== "09:00");


type DateType = "mon" | "tue" | "wed" | "thu" | "fri";

const AddSchedule = ({ onClose, setWorkTimeProps }: any) => {
  const [worktime, setWorktime] = React.useState<number>(0);
  const [startTime, setStartTime] = React.useState<number>(9);
  const [endTime, setEndTime] = React.useState<number>(17);
  const [dateChose, setDateChose] = React.useState<DateType>("mon");
  const [studentName, setStudentName] = React.useState("");
  useEffect(() => {
    if (worktime < 0) {
      alert("시간을 다시 설정해주세요.");
      setWorktime(0);
    }
  }, [worktime]);

  const addTime = () => {
    const time = endTime - startTime;
    setWorktime(time);
    setWorkTimeProps((prev: any) => ({ ...prev, worktime: time }));
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
      setWorkTimeProps((prev: any) => ({ ...prev, start: setTime(value) }));
    } else {
      setEndTime(setTime(value));
    }
  };
  const handleDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setDateChose(value as DateType);
    setWorkTimeProps((prev: any) => ({ ...prev, data: value }));
  };

  const closeModal = () => {
    onClose(false);
  };

  const addSchedule = () => {
    time.map((item) => {
      const itemTime = item.time.split("-");
      const itemStartTime = itemTime[0].split(":");
      const itemEndTime = itemTime[1].split(":");
      const itemEnd_TimeToNumber = Number(itemEndTime[0]);
      const itemStrat_TimeToNumber = Number(itemStartTime[0]);

      if (
        itemStrat_TimeToNumber >= startTime &&
        itemEnd_TimeToNumber <= endTime
      ) {

        console.log("item" + item[dateChose as keyof typeof item]);
        let result = (item[dateChose] as string[]).some(
          (x) => x === studentName
        );
        if (result) {
          alert("이미 중복된 시간에 일정이 존재합니다.");
        } else {
          (item[dateChose] as string[]).push(studentName);
        }

      }
    });
    onClose(false);
  };

  const AddStudentName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setStudentName(value);
    setWorkTimeProps((prev: any) => ({ ...prev, name: value }));
  };

  return (
    <AddScheduleMain>
      <div css={backBtnDiv}>
        <button onClick={closeModal} css={scheduleModalCancelBtn}>
          X
        </button>
      </div>
      <AddScheduleTitle>스케줄 추가</AddScheduleTitle>
      <AddSelectDiv>
        <AddSelect onChange={AddStudentName} >
          {student.map((student) => (
            <option key={student.id} value={student.name}>
              {student.name}
            </option>
          ))}
        </AddSelect>
      </AddSelectDiv>
      <AddSelectDiv>
        <AddSelect onChange={handleDate}>
          {days.map((day) => (
            <option key={day.value} value={day.value}>
              {day.day}
            </option>
          ))}
        </AddSelect>
      </AddSelectDiv>
      <AddSelectDiv>
        <AddSelect name="startTime" onChange={handleTime}>
          {startHour.map((item) => (
            <option key={item.id} value={item.time}>
              {item.time}
            </option>
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
            <option value={item.time} key={item.id}>
              {item.time}
            </option>
          ))}
        </AddSelect>
      </AddSelectDiv>
      <ScheduleAddBtn
        onClick={() => {
          addTime();
          addSchedule();
        }}
      >
        추가
      </ScheduleAddBtn>
    </AddScheduleMain>
  );
};
export default AddSchedule;
