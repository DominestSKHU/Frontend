"use client";
import Navbar from "@/components/AdminNavbar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
/** @jsxImportSource @emotion/react */
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

const Home: React.FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar />
      <div css={homeMainDiv}>
        <ScheduleDiv className="schedule"></ScheduleDiv>
        <TodoList />
        <FixedDiv className="fixed"></FixedDiv>
        <CalenderDiv className="calender"></CalenderDiv>
      </div>
    </>
  );
};
export default Home;
