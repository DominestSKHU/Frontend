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
  deleteTodoList,
  postTodoList,
  todoListGet,
  updateTodoList,
} from "@/utils/home/todoListUtils";
import { AnnounceForm, RecieverSelect } from "@/style/homeStyle/calendar";
import { css } from "@emotion/react";
import { BsTrash3 } from "react-icons/bs";
import { ScheduleProps } from "./Schedule";

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

const TodoList: React.FC<ScheduleProps> = ({ users }) => {
  const WorkHuman = users.map((item) => item.name);
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

  const getTodoList = () => {
    todoListGet(token)
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTodoList();
  }, [token, receiveRequest]);

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
  useEffect(() => {
    console.log(todo);
  }, [todo.task, todo.receiveRequest]);

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
        getTodoList();
        setTodo({ task: "", receiveRequest: users[0].name });
      });
  };

  const deleteTodo = (id: number) => {
    deleteTodoList(token, id)
      .then((res) => {
        alert("삭제되었습니다.");
        getTodoList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <RecieverSelect
          onChange={onClickReciever}
          value={todo.receiveRequest}
          key={"Receiver"}
        >
          {WorkHuman &&
            WorkHuman.map((item) => (
              <option key={item} value={item}>
                {item}
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
              key={item.todoId}
              css={
                item.checkYn ? { ...TodoListBtnTrue } : { ...TodoListBtnFalse }
              }
            >
              <span>{item.task}</span>
              <span>{item.receiveRequest}</span>
            </button>
            <button
              className="todoDelete"
              css={css`
                background-color: white;
                border: none;
                outline: none;
              `}
              onClick={() => deleteTodo(item.todoId)}
            >
              <BsTrash3 size={23} />
            </button>
          </li>
        ))}
      </ul>
    </TodoDiv>
  );
};
export default TodoList;
