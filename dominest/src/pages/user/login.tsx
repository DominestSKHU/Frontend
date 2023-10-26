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
  const [warning, setWarning] = useState(true);

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
          alert(err.response.data.errorMessage);
        } else {
          alert("오류가 발생하였습니다.");
        }
      });
  };

  return (
    <div>
      {warning ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              backgroundColor: "#E0FADF",
              width: "70%",
              height: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "2rem",

                  textAlign: "center",
                  color: "black",
                }}
              >
                본 데이터는 더미(가짜)데이터로
              </p>
              <br />
              <p
                style={{
                  fontSize: "2rem",

                  textAlign: "center",
                  color: "black",
                }}
              >
                실제 행복기숙사의 데이터가 아닙니다.
              </p>
              <br />
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor: "#FFF9BE",
                  borderRadius: "10px",
                  padding: "10px",
                  color: "black",
                }}
                onClick={() => {
                  setWarning(false);
                }}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}
