<<<<<<< HEAD
// ;

// import Navbar from "@/components/Navbar";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
=======
"use client";
import Navbar from "@/components/AdminNavbar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
>>>>>>> domi_3

type Props = {};

function Home({}: Props) {
  console.log("token");

<<<<<<< HEAD
  // const router = useRouter();
  // const [token, setToken] = useState(true);

  // useEffect(() => {
  //   const authToken = localStorage.getItem("authToken");

  //   if (!authToken) {
  //     router.push("/login");
  //   } else {
  //     setToken(true);
  //   }
  // }, []);

  return null;
  // return <>{token && <Navbar />}</>;
=======
    if (!authToken) {
      router.push("/user/login");
    }
  }, [router]);

  return (
    <>
      <Navbar page="메인페이지" />
    </>
  );
>>>>>>> domi_3
}

export default Home;
