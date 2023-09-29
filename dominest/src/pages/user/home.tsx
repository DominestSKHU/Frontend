/** @jsxImportSource @emotion/react */
import Navbar from "@/components/AdminNavbar";
import React, { useEffect } from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "./categoryManage";
import { homeMainDiv } from "@/style/homeStyle/DivStyle";
import TodoList from "@/components/home/TodoList";
import RecentPosts from "@/components/home/RecentPosts";
import Schedule from "@/components/home/Schedule";
import CalendarComponent from "@/components/home/CalendarComponent";

const Home: React.FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar page={""} />
      <div css={homeMainDiv}>
        <Schedule />
        <CalendarComponent />
      </div>
      {/*<RecentPosts />*/}
      <TodoList />
    </>
  );
};
export default Home;
