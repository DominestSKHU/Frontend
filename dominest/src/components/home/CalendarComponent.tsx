/** @jsxImportSource @emotion/react */
import {
  CalendarStyle,
  CalenderDiv,
  TodoDiv,
  TodoInput,
  TodoInputform,
  TodoLi,
  TodoListBtnFalse,
  TodoListBtnTrue,
  TodoUl,
} from "@/style/homeStyle/DivStyle";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment, { Moment } from "moment";
import {
  AnnounceForm,
  AnnounceInput,
  DateDiv,
  TodoListDiv,
} from "@/style/homeStyle/calendar";
import { css } from "@emotion/react";
import { BsTrash3 } from "react-icons/bs";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface announceProps {
  id: number;
  value: string;
  checked: boolean;
}
const CalendarComponent = () => {
  const [value, onChange] = useState<Value>(new Date());
  const announceprops = [{ id: 1, value: "재량휴업일", checked: false }];
  const [announceList, setAnnounceList] =
    useState<announceProps[]>(announceprops);
  const [announce, setAnnounce] = useState<announceProps>({
    id: 0,
    value: "",
    checked: false,
  });

  const [date, setDate] = useState<string>("");
  const announcelength = announceList.length;
  //이부분 수정해야함 백이 보내주는거 보고

  useEffect(() => {
    const Date = momentValue.format("YYYY-MM-DD");
    setDate(Date);
    console.log(date);
  }, [value]);

  const onChangeAnnounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnnounce({
      id: announcelength + 1,
      value: e.target.value,
      checked: false,
    });
  };
  const momentValue: Moment = Array.isArray(value)
    ? moment(value[0])
    : moment(value);

  return (
    <CalenderDiv>
      <CalendarStyle>
        <Calendar onChange={onChange} value={value} locale="ko" />
        <DateDiv className="text-gray-500 mt-4">
          {momentValue.format("YYYY년 MM월 DD일 전달사항")}
        </DateDiv>
        <TodoListDiv>
          <ul className="todoListUl" css={TodoUl}>
            {announceList.map((item) => (
              <li css={TodoLi} key={item.id}>
                <button
                  value={item.value}
                  css={
                    item.checked
                      ? { ...TodoListBtnTrue }
                      : { ...TodoListBtnFalse }
                  }
                >
                  {item.value}
                </button>
                <button
                  className="todoDelete"
                  css={css`
                    background-color: white;
                    border: none;
                    outline: none;
                  `}
                >
                  <BsTrash3 size={30} />
                </button>
              </li>
            ))}
          </ul>
          <form css={AnnounceForm}>
            <input
              type="text"
              placeholder="내용을 입력해주세요"
              css={AnnounceInput}
              value={announce.value}
              onChange={onChangeAnnounce}
            />
            <input type="submit" className="todoAdd" value="추가" />
          </form>
        </TodoListDiv>
      </CalendarStyle>
    </CalenderDiv>
  );
};

export default CalendarComponent;
