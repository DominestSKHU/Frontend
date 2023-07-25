import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { css } from "@emotion/react";
import { loginUtil } from "@/utils/loginUtil";
import "../app/globals.css";
import axios from "axios";
import { useRouter } from "next/router";
/** @jsxImportSource @emotion/react */

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value", e.target.value);

    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("email", email, password);

    loginUtil(email, password)
      .then((res) => {
        console.log("res", res.data.data.accessToken);

        const token = res.data.data.accessToken;
        localStorage.setItem("authToken", token);
        alert("로그인이 완료되었습니다.");
        router.push("/");
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
        <Form action="" className="form_main" onSubmit={onLogin}>
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
          <Link href="/signup">회원가입 하러 가기</Link>
          <Link href="/">비밀번호를 잃어버리셨나요?</Link>
        </Form>
      </div>
    </div>
  );
}

const Form = styled.form`
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  padding: 30px 30px 30px 30px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
  position: relative;
  overflow: hidden;
  &:before {
    position: absolute;
    content: "";
    width: 300px;
    height: 300px;
    background-color: rgb(213, 213, 213);
    transform: rotate(45deg);
    left: -180px;
    bottom: 30px;
    z-index: 1;
    border-radius: 30px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.082);
  }
  & > p {
    font-size: 2em;
    color: #2e2e2e;
    font-weight: 700;
    margin: 5px 0 10px 0;
    z-index: 2;
  }
  & > div {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    & > input {
      width: 100%;
      height: 30px;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid rgb(173, 173, 173);
      margin: 10px 3px;
      color: black;
      font-size: 0.8em;
      font-weight: 500;
      box-sizing: border-box;
      padding-left: 30px;
      &:focus {
        outline: none;
        border-bottom: 2px solid rgb(199, 114, 255);
      }
      &::placeholder {
        color: rgb(80, 80, 80);
        font-size: 1em;
        font-weight: 500;
      }
    }
  }
  & > button {
    z-index: 2;
    position: relative;
    width: 100%;
    border: none;
    background-color: rgb(195, 195, 195);
    height: 30px;
    font-size: 0.8em;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 10px;
    cursor: pointer;
  }
  & > a {
    z-index: 2;
    font-weight: 500;
    color: rgb(44, 24, 128);
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 20px;
  }
`;
