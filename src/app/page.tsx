"use client";
import Navbar from "@/components/AdminNavbar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

function Home({}: Props) {
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      router.push("/user/login");
    }
  }, [router]);

  return (
    <>
      <Navbar page="메인페이지" />
    </>
  );
}

export default Home;
