/** @jsxImportSource @emotion/react */
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import {
  TodoDiv,
  TodoInput,
  TodoListBtnFalse,
  TodoListBtnTrue,
  TodoTaskLi,
  TodoUl,
} from "@/style/homeStyle/DivStyle";
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import {
  postTodoList,
  todoListGet,
  updateTodoList,
} from "@/utils/home/todoListUtils";
import router from "next/router";
import { AnnounceForm, RecieverSelect } from "@/style/homeStyle/calendar";
import { student } from "./Schedule";

interface TodoListProps {
  task: string;
  receiveRequest: string;
}
interface GetTodoListProps {
  todoId: number;
  date: string;
  task: string;
  userName: string;
  receiveRequest: string;
  checkYn: boolean;
}

const TodoList: () => EmotionJSX.Element = () => {
  const [token, setToken] = useState<string>("");
  const [receiveRequest, setReceiveRequest] = useState<string>("");
  const [todo, setTodo] = useState<TodoListProps>({
    task: "",
    receiveRequest: receiveRequest,
  });
  const [todolist, setTodoList] = useState<GetTodoListProps[]>([]);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    authToken && setToken(authToken);
  }, []);

  useEffect(() => {
    todoListGet(token)
      .then((res) => {
        setTodoList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, todo, receiveRequest]);

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
      task: e.target.value,
      receiveRequest: receiveRequest,
    });
  };

  const onClickReciever = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTodo({
      task: todo.task,
      receiveRequest: e.target.value,
    });
  };

  const onClickTodo = (item: GetTodoListProps) => () => {
    const newTodoList = todolist.map((todo) => {
      if (todo.todoId === item.todoId) {
        return { ...todo, checkYn: !todo.checkYn };
      }
      return todo;
    });
    setTodoList(newTodoList);

    item.checkYn = !item.checkYn;
    updateTodoList(token, item.todoId, item.checkYn)
      .then((resopn) => {
        console.log(resopn);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addTodoList = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    postTodoList(token, todo.task, todo.receiveRequest)
      .then((res) => {
        alert("추가되었습니다.");
        setTodoList([...todolist, res.data]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        router.push("/user/home");
      });
    setTodo({ task: "", receiveRequest: receiveRequest });
  };

  // const deleteTodoList = (item: TodoListProps) => () => {
  //   const newTodoList = todolist.filter((todo) => todo.id !== item.id);
  //   setTodoList(newTodoList);
  // };
  // 아직 삭제 기능 구현 안되어서 추후에 추가 예정

  return (
    <TodoDiv>
      <form onSubmit={addTodoList} css={AnnounceForm}>
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          css={TodoInput}
          value={todo.task}
          onChange={onChangeTodo}
        />
        <RecieverSelect onChange={onClickReciever}>
          {student.map((student) => (
            <option key={student.id} value={student.name}>
              {student.name}
            </option>
          ))}
        </RecieverSelect>
        <input type="submit" className="todoAdd" value="추가" />
      </form>
      <ul className="todoListUl" css={TodoUl}>
        {todolist.map((item) => (
          <li css={TodoTaskLi} key={item.todoId}>
            <button
              value={item.task}
              onClick={onClickTodo(item)}
              css={
                item.checkYn ? { ...TodoListBtnTrue } : { ...TodoListBtnFalse }
              }
            >
              <span>{item.task}</span>
              <span>{item.receiveRequest}</span>
            </button>
            {/* <button
              className="todoDelete"
              css={css`
                background-color: white;
                border: none;
                outline: none;
              `}
              onClick={deleteTodoList(item)}
            >
              <BsTrash3 size={30} />
            </button> */}
            {/* 삭제 기능 아직 구현 안되어서 추후에 추가 예정 */}
          </li>
        ))}
      </ul>
    </TodoDiv>
  );
};
export default TodoList;
