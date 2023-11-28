/** @jsxImportSource @emotion/react */
import "../../app/global.css";
import Navbar from "@/components/AdminNavbar";
import React, { useEffect, useState } from "react";
import { TodoBox, homeMainDiv } from "@/style/homeStyle/DivStyle";
import TodoList from "@/components/home/TodoList";
import Schedule, { UsersProps } from "@/components/home/Schedule";
import CalendarComponent from "@/components/home/CalendarComponent";
import { getWorkerList } from "@/utils/home/todoListUtils";

const Home: React.FC = () => {
  const [users, setUsers] = useState<UsersProps[]>([]);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    token && getWorkerList(token).then((res) => setUsers(res.data.data));
  }, []);
  return (
    <>
      <Navbar page={""} />
      <div css={homeMainDiv}>
        <Schedule users={users} />
        <CalendarComponent />
      </div>
      {/*<RecentPosts />*/}
      <div css={TodoBox}>
        <TodoList users={users} />
      </div>
    </>
  );
};
export default Home;
