/** @jsxImportSource @emotion/react */
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import {
  TodoDiv,
  TodoInput,
  TodoInputform,
  TodoLi,
  TodoListBtnFalse,
  TodoListBtnTrue,
  TodoUl,
  datePickerStyle,
} from "@/style/DivStyle";
import React, { useEffect, useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { css } from "@emotion/react";

interface TodoListProps {
  id: number;
  value: string;
  checked: boolean;
}

const TodoList: () => EmotionJSX.Element = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const promTodoList = [{ id: 1, value: "할일", checked: false }];
  const [todolist, setTodoList] = useState<TodoListProps[]>(promTodoList);
  const [todo, setTodo] = useState<TodoListProps>({
    id: 0,
    value: "",
    checked: false,
  });

  const todolength = todolist.length;
  //이부분 수정해야함 백이 보내주는거 보고

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
      id: todolength + 1,
      value: e.target.value,
      checked: false,
    });
  };
  const onClickTodo = (item: TodoListProps) => () => {
    const newTodoList = todolist.map((todo) => {
      if (todo.id === item.id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };
  const addTodoList = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setTodoList([...todolist, todo]);
    setTodo({ id: 0, value: "", checked: false });
  };
  const deleteTodoList = (item: TodoListProps) => () => {
    const newTodoList = todolist.filter((todo) => todo.id !== item.id);
    setTodoList(newTodoList);
  };

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
      <form onSubmit={addTodoList} css={TodoInputform}>
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          css={TodoInput}
          value={todo.value}
          onChange={onChangeTodo}
        />
        <input type="submit" className="todoAdd" value="추가" />
      </form>
      <ul className="todoListUl" css={TodoUl}>
        {todolist.map((item) => (
          <li css={TodoLi} key={item.id}>
            <button
              value={item.value}
              onClick={onClickTodo(item)}
              css={
                item.checked ? { ...TodoListBtnTrue } : { ...TodoListBtnFalse }
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
              onClick={deleteTodoList(item)}
            >
              <BsTrash3 size={30} />
            </button>
          </li>
        ))}
      </ul>
    </TodoDiv>
  );
};
export default TodoList;
