"use client";
import Navbar from "@/components/AdminNavbar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { globalStyles } from "./categoryManage";

const Home = () => {
    return(
        <>
            <Global styles={globalStyles} />
            <Navbar />
            <div className="schedule"></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
        </>
    )
};
export default Home;
