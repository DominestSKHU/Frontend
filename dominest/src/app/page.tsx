"use client";
import Navbar from "@/components/AdminNavbar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import axios from "axios";
type Props = {};

function Home({}: Props) {
  const router = useRouter();

  useEffect(() => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/token/reissue`,
        {
          withCredentials: true,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.data);
        localStorage.setItem("authToken", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, 3000);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      router.push("/user/login");
    }
    if (authToken) {
      router.push("/user/home");
    }
  }, [router]);

  return (
    <>
      <Navbar page="메인페이지" />
    </>
  );
}

export default Home;
