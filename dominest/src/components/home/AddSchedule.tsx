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
import React, { use, useEffect, useState } from "react";
import {
  backBtnDiv,
  scheduleModalCancelBtn,
} from "@/style/homeStyle/ScheduleTableStyle";
import { schedulePost } from "@/utils/home/scheduleUtils";
import { useRouter } from "next/router";

const hour = [
  { id: 1, time: "09:00" },
  { id: 2, time: "10:00" },
  { id: 3, time: "11:00" },
  { id: 4, time: "12:00" },
  { id: 5, time: "13:00" },
  { id: 6, time: "14:00" },
  { id: 7, time: "15:00" },
  { id: 8, time: "16:00" },
];
const days = [
  { day: "월요일", value: "mon" },
  { day: "화요일", value: "tue" },
  { day: "수요일", value: "wed" },
  { day: "목요일", value: "thu" },
  { day: "금요일", value: "fri" },
];

const AddSchedule = ({ token, onClose }: any) => {
  const router = useRouter();
  const [startTime, setStartTime] = React.useState<string>("09");
  const [endTime, setEndTime] = React.useState<string>("");
  const [dateChose, setDateChose] = React.useState("");
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    setEndTime(`${parseInt(startTime) + 1}`);
    console.log(endTime);
  }, [startTime]);

  const addScheduleWorker = () => {
    const timeSlot = `${startTime}:00 ~ ${endTime}:00`;

    schedulePost(token, dateChose, timeSlot, studentName)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setDateChose(value);
  };

  const closeModal = () => {
    onClose(false);
  };

  const studentNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setStudentName(value);
  };

  return (
    <form onSubmit={addScheduleWorker}>
      <AddScheduleMain>
        <div css={backBtnDiv}>
          <button onClick={closeModal} css={scheduleModalCancelBtn}>
            X
          </button>
        </div>
        <AddScheduleTitle>스케줄 추가</AddScheduleTitle>
        <AddSelectDiv>
          <AddSelect onChange={studentNameChange}>
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
              <option key={day.value} value={day.day}>
                {day.day}
              </option>
            ))}
          </AddSelect>
        </AddSelectDiv>
        <AddSelectDiv>
          <AddSelect
            name="startTime"
            onChange={(e) => {
              const value = e.target.value;
              const start = value.split(":");
              setStartTime(start[0]);
              console.log(startTime);
            }}
          >
            {hour.map((item) => (
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
          <AddSelect name="endTime">
            <option>{startTime ? parseInt(startTime) + 1 : ""}:00</option>
          </AddSelect>
        </AddSelectDiv>
        <ScheduleAddBtn type="button" onClick={addScheduleWorker}>
          추가
        </ScheduleAddBtn>
      </AddScheduleMain>
    </form>
  );
};
export default AddSchedule;
