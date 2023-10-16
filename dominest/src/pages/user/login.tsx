/** @jsxImportSource @emotion/react */
import Link from "next/link";

import React, { useEffect, useState } from "react";

import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { css } from "@emotion/react";
import { loginUtil } from "@/utils/useAuth/loginUtil";
import "../../app/globals.css";
import { useRouter } from "next/router";
import { LoginMainForm } from "@/style/UserStyle/loginStyle";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      router.push("/user/home");
    }
  }, [router]);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginUtil(email, password)
      .then((res) => {
        const accessToken = res.data.data.accessToken;
        const refreshToken = res.data.data.refreshToken;
        const username = res.data.data.username;
        const role = res.data.data.role;

        localStorage.setItem("authToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("username", username);
        localStorage.setItem("role", role);
        alert("로그인이 완료되었습니다.");
        router.push("/user/home");
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          alert(err.response.data.message);
        } else {
          alert("오류가 발생하였습니다.");
        }
      });
  };

  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: rgb(255, 255, 255);
        `}
      >
        <LoginMainForm action="" className="form_main" onSubmit={onLogin}>
          <p className="heading">Login</p>
          <div className="inputContainer">
            <BiUser />
            <input
              type="text"
              className="inputField"
              id="username"
              placeholder="아이디를 입력해주세요"
              onChange={onChangeEmail}
            />
          </div>

          <div className="inputContainer">
            <RiLockPasswordLine />
            <input
              type="password"
              className="inputField"
              id="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={onChangePassword}
            />
          </div>

          <button type="submit" onSubmit={() => onLogin}>
            Submit
          </button>
          <Link href="/user/signup">회원가입 하러 가기</Link>
          <Link href="/user/losePassword">비밀번호를 잃어버리셨나요?</Link>
        </LoginMainForm>
      </div>
    </div>
  );
}
