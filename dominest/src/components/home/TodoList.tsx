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
  Todo_Title_Component,
} from "@/style/homeStyle/DivStyle";
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import {
  postTodoList,
  todoListGet,
  updateTodoList,
} from "@/utils/home/todoListUtils";
import router from "next/router";

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
  const [username, setUsername] = useState<string>("");
  const [todo, setTodo] = useState<TodoListProps>({
    task: "",
    receiveRequest: username,
  });
  const [todolist, setTodoList] = useState<GetTodoListProps[]>([]);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    authToken && setToken(authToken);
    const name = localStorage.getItem("username");
    name && setUsername(name);
  }, []);

  useEffect(() => {
    todoListGet(token)
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
      task: e.target.value,
      receiveRequest: username,
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
    updateTodoList(token, item.todoId, item.checkYn)
      .then(() => {
        alert("수정되었습니다.")

      })
      .catch((err) => {
        console.log(err);
        console.log(token);
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
       router.push("user/home");
      }
      );
    setTodo({ task: "", receiveRequest: username });
  };

  // const deleteTodoList = (item: TodoListProps) => () => {
  //   const newTodoList = todolist.filter((todo) => todo.id !== item.id);
  //   setTodoList(newTodoList);
  // };
  // 아직 삭제 기능 구현 안되어서 추후에 추가 예정

  return (
    <TodoDiv>
        <Todo_Title_Component>TodoList</Todo_Title_Component>
      <form onSubmit={addTodoList} css={TodoInputform}>
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          css={TodoInput}
          value={todo.task}
          onChange={onChangeTodo}
        />
        <input type="submit" className="todoAdd" value="추가" />
      </form>
      <ul className="todoListUl" css={TodoUl}>
        {todolist.map((item) => (
          <li css={TodoLi} key={item.todoId}>
            <button
              value={item.task}
              onClick={onClickTodo(item)}
              
              css={
                item.checkYn ? { ...TodoListBtnTrue } : { ...TodoListBtnFalse }
              }
            >
              {item.task}
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
