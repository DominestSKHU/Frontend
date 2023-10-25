/** @jsxImportSource @emotion/react */
import {
  CalendarStyle,
  CalenderDiv,
  TodoLi,
  TodoListBtnFalse,
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
import {
  calenderDelete,
  calenderGet,
  calenderPost,
} from "@/utils/home/calenderUtils";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface EventList {
  calenderId: number;
  date: string;
  content: string;
}
interface Event {
  date: Date;
  value: EventList[];
}

const CalendarComponent = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [token, setToken] = useState<string>(""); //token 받아오기
  const [announce, setAnnounce] = useState<string>("");
  const [events, setEvents] = useState<Event>({ date: new Date(), value: [] });

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setToken(token);
    }
  }, []);

  const [date, setDate] = useState<string>("");

  const getCalenderList = (value: Date) => {
    const date = moment(value).format("YYYY-MM-DD");
    setDate(date);
    calenderGet(token, date)
      .then((res) => {
        setEvents({ date: new Date(), value: res.data.data });
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
        setEvents({ date: new Date(), value: [] });
      });
  };
  const [momentValuedate, setMomentValueDate] = useState<Moment>(moment());

  const deleteCalender = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    calenderDelete(token, date)
      .catch((err) => {
        alert(err.response.data.errorMessage);
        setEvents({ date: new Date(), value: [] });
      })
      .finally(() => {
        getCalenderList(momentValuedate.toDate());
      });
  };

  useEffect(() => {
    const date = momentValue.format("YYYY-MM-DD");
    setDate(date);
    getCalenderList(momentValuedate.toDate());
  }, [momentValuedate]);

  const addAnnounce = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (announce.length !== 0) {
      calenderPost(token, date, announce)
        .catch((err) => {
          alert(err.response.data.errorMessage);
          setEvents({ date: new Date(), value: [] });
        })
        .finally(() => {
          getCalenderList(momentValuedate.toDate());
        });
      setAnnounce("");
    } else {
      alert("내용을 입력해주세요");
    }
  };

  const onChangeAnnounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnnounce(e.target.value);
  };
  const momentValue: Moment = Array.isArray(value)
    ? moment(value[0])
    : moment(value);

  return (
    <CalenderDiv>
      <CalendarStyle>
        <Calendar
          onChange={onChange}
          value={value}
          locale="ko"
          onClickDay={getCalenderList}
          // onClickMonth={} 이 속성으로 달마다 조회해서 일정 있으면 커스텀 하는 것이 좋아보임
        />
        <TodoListDiv>
          <DateDiv className="text-gray-500 mt-4">
            {momentValue.format("YYYY년 MM월 DD일")}
          </DateDiv>
          <form css={AnnounceForm} onSubmit={addAnnounce}>
            <input
              type="text"
              placeholder="일정을 추가해주세요"
              css={AnnounceInput}
              value={announce}
              onChange={onChangeAnnounce}
            />
            <input type="submit" className="todoAdd" value="추가" />
          </form>
          <ul className="todoListUl" css={TodoUl}>
            {events.value.length > 0 &&
              events.value.map((item) => (
                <li css={TodoLi} key={item.calenderId}>
                  <button value={item.content} css={TodoListBtnFalse}>
                    {item.content}
                  </button>
                  <button
                    onClick={deleteCalender}
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
        </TodoListDiv>
      </CalendarStyle>
    </CalenderDiv>
  );
};

export default CalendarComponent;
