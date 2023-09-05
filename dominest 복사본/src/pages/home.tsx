;
/** @jsxImportSource @emotion/react */
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { css, Global } from "@emotion/react";
import { globalStyles } from "./categoryManage";
import {
  CalenderDiv,
  FixedDiv,
  homeMainDiv,
  ScheduleDiv,
  TodoDiv,
} from "@/style/DivStyle";
import TodoList from "@/components/TodoList";
import RecentPosts from "@/components/RecentPosts";
import Schedule from "@/components/Schedule";

const Home: React.FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar />
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
