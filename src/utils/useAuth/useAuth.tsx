import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

// 기본적인 로그인 인증페이지
export const useAuth = () => {
  const router = useRouter();
  const [Token, setToken] = useState("");

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      router.push("/user/login");
    } else {
      setToken(authToken);
    }
  }, [router]);
  return Token;
};

//navbar 정보 받오기
export const useNavbar = () => {
  const router = useRouter();
  const [Name, setName] = React.useState("");
  const [Role, setRole] = React.useState("");
  const [Token, setToken] = React.useState("");

  React.useEffect(() => {
    const authToken = localStorage.getItem("authToken") as string;
    const username = localStorage.getItem("username") as string;
    const role = localStorage.getItem("role") as string;

    setName(username);
    setRole(role);
    setToken(authToken);

    if (!authToken) {
      router.push("/user/login");
    }
  }, [router]);
  return { Name, Role, Token };
};

//로그아웃
export const onLogout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  alert("로그아웃이 완료되었습니다.");
  window.location.href = "/user/login";
};
