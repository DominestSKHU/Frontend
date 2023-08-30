import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { TodoDiv, datePickerStyle } from "@/style/DivStyle";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const TodoList: () => EmotionJSX.Element = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <TodoDiv>
      <DatePicker
        css={datePickerStyle}
        dateFormat="yyyy.MM.dd"
        shouldCloseOnSelect
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
        className="datePicker"
      />
    </TodoDiv>
  );
};
export default TodoList;
