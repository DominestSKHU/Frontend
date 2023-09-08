import { CalendarStyle, CalenderDiv } from "@/style/homeStyle/DivStyle";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarComponent = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <CalenderDiv>
      <CalendarStyle>
        <Calendar onChange={onChange} value={value} locale="ko" />
      </CalendarStyle>
    </CalenderDiv>
  );
};

export default CalendarComponent;
