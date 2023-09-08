;
/** @jsxImportSource @emotion/react */
import Navbar from "@/components/AdminNavbar";
import React, { useEffect } from "react";
import { css, Global } from "@emotion/react";
import { globalStyles } from "./categories/categoryManage";
import {
  CalenderDiv,
  homeMainDiv,
} from "@/style/homeStyle/DivStyle";
import TodoList from "@/components/home/TodoList";
import RecentPosts from "@/components/home/RecentPosts";
import Schedule from "@/components/home/Schedule";

const Home: React.FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar page={""} />
      <div css={homeMainDiv}>
        <Schedule />
        <TodoList />
        <RecentPosts />
        <CalenderDiv className="calender"></CalenderDiv>
      </div>
    </>
  );
};
export default Home;
