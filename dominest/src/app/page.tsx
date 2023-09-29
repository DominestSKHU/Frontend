"use client"
import Navbar from "@/components/AdminNavbar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import axios from "axios";
type Props = {};

function Home({}: Props) {
  const router = useRouter();
  const [tokenBoolean, setTokenBoolean] = React.useState<boolean>(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      router.push("/user/login");
    } else {
      setTokenBoolean(true);
    }
    if (authToken) {
      router.push("/user/home");
    }
  }, [router]);

  return (
    <>
      {tokenBoolean && <Navbar page="메인페이지" />} {/* 로그인 상태일 때만 네비게이션 표시 */}
    </>
  );
}

export default Home;
