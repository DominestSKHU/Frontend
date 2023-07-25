'use client'
import AdminNavbar from "@/components/AdminNavbar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

function Home({}: Props) {
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <AdminNavbar />
    </>
  );
}

export default Home;
