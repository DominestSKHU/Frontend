"use client";
import Navbar from "@/components/AdminNavbar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { globalStyles } from "./categoryManage";
import { CalenderDiv, FixedDiv, ScheduleDiv, TodoDiv } from "@/style/DivStyle";

const Home = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar />
      <div>
        <ScheduleDiv className="schedule"></ScheduleDiv>
        <TodoDiv className="todo"></TodoDiv>
        <FixedDiv className="fixed"></FixedDiv>
        <CalenderDiv className="calender"></CalenderDiv>
      </div>
    </>
  );
};
export default Home;
