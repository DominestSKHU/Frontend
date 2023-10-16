import Link from "next/link";
import {
  Form,
  Title,
  FlexContainer,
  Signin,
  Label,
  Input,
  SubmitButton,
  passwordError,
} from "@/style/signInputStyle";
import React from "react";
import { css } from "@emotion/react";
import { sendEmail, checkEmailCode, join } from "@/utils/useAuth/signFcUtil";
import { useRouter } from "next/router";
/** @jsxImportSource @emotion/react */

export default function signup() {
  const router = useRouter();
  const [email, setEmail] = React.useState<string>("");
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const isEmailValid = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };
  const [passwords, setPasswords] = React.useState({
    password0: "",
    password1: "",
  });
  const [phone, setPhone] = React.useState<number>(0);
  const [name, setName] = React.useState<string>("");
  const [code, setCode] = React.useState<string>("");
  const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(Number(e.target.value));
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prevState) => ({ ...prevState, [name]: value }));
  };

  const onClickJoin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    join(email, passwords.password1, name, phone)
      .then(() => {
        alert("회원가입이 완료되었습니다.");
        router.push("/login");
      })
      .catch((err) => {
        if (err.code === 400) {
          alert("이미 존재하는 이메일입니다.");
        } else if (err.code / 100 >= 5) {
          alert("서버에 예상치 못한 오류가 발생했습니다. 개발자에게 문의 부탁드립니다.")
        }
      });
  };

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: rgb(255, 255, 255);
      `}
    >
      <Form onSubmit={onClickJoin}>
        <Title>회원가입</Title>
        <Label>
          <Input required type="email" onChange={handleEmail} />
          <span>이메일</span>
        </Label>
        {!isEmailValid(email) && email !== "" && (
          <p css={passwordError}>올바른 이메일 형식으로 작성해주세요.</p>
        )}
        <SubmitButton onClick={() => sendEmail(email)}>
          인증번호 전송
        </SubmitButton>
        <FlexContainer>
          <Label>
            <Input
              required
              type="text"
              autoComplete="off"
              onChange={handleCode}
              css={css`
                width: 13em;
              `}
            />
            <span>인증번호</span>
          </Label>
          <button
            css={css`
              border: none;
              outline: none;
              background-color: #848484;
              padding: 10px;
              border-radius: 10px;
              color: #fff;
              font-size: 16px;
              width: 9em;
              &:hover {
                background-color: #6a6a6a;
              }
              &:buttondisabled {
                background-color: #ccc;
                cursor: not-allowed;
              }
            `}
            onClick={() => {
              checkEmailCode(email, code);
            }}
          >
            인증번호확인
          </button>
        </FlexContainer>
        <Label>
          <Input required type="name" onChange={handleName} />
          <span>이름</span>
        </Label>
        <Label>
          <Input
            required
            type="phone"
            defaultValue="01000000000"
            onChange={handlePhone}
          />
          <span>연락처</span>
        </Label>
        <Label>
          <Input
            required
            type="password"
            name="password0"
            value={passwords.password0}
            onChange={handlePassword}
          />
          <span>비밀번호</span>
        </Label>
        <Label>
          <Input
            required
            type="password"
            name="password1"
            value={passwords.password1}
            onChange={handlePassword}
          />
          <span>비밀번호 확인</span>
        </Label>
        {passwords.password0 !== passwords.password1 && (
          <p css={passwordError}>비밀번호가 일치하지 않습니다.</p>
        )}
        {passwords.password0 === "" && passwords.password1 === "" && (
          <p css={passwordError}>비밀번호를 입력해주세요</p>
        )}
        <SubmitButton type="submit" onClick={() => onClickJoin}>
          회원가입
        </SubmitButton>
        <Signin>
          이미 계정이 있습니까? <Link href="/login">로그인</Link>
        </Signin>
      </Form>
    </div>
  );
}
