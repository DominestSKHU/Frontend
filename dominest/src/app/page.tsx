'use client'
import Navbar from "@/components/AdminNavbar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

function Home({}: Props) {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };


  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      router.push("/login");
    }
  }, []);

  return (
    <>
       <Navbar />
    </>
  );
}

export default Home;

