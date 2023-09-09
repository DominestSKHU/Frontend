import Link from "next/link";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import React from "react";
import { sendEmail, checkEmailCode, join } from "@/utils/useAuth/signFcUtil";
import { useRouter } from "next/router";
/** @jsxImportSource @emotion/react */

const pulseAnimation = keyframes`
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  box-shadow: 0px 0px 24px #cbcbcb;
`;

const Title = styled.p`
  font-size: 28px;
  color: #848484;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;

  &::before,
  &::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #848484;
  }

  &::before {
    width: 18px;
    height: 18px;
    background-color: #848484;
  }

  &::after {
    width: 18px;
    height: 18px;
    animation: ${pulseAnimation} 1s linear infinite;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 6px;
`;

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  width: 94%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;

  + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  &:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  &:focus + span,
  &:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }
`;

const SubmitButton = styled.button`
  border: none;
  outline: none;
  background-color: #848484;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  &:hover {
    background-color: #6a6a6a;
  }
`;

const Signin = styled.p`
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
  text-align: center;

  a {
    color: royalblue;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const passwordError = css`
  color: red;
  padding: 0%;
  margin: auto;
  font-size: 0.8em;
`;
export default function SingUp() {
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
  const [code, setCode] = React.useState<string>("");
  const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };
  const [buttonDisabled, setbuttonDisabled] = React.useState<boolean>(false);
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prevState) => ({ ...prevState, [name]: value }));
  };

  const onClickJoin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    join(email, passwords.password1)
      .then(() => {
        alert("회원가입이 완료되었습니다.");
        router.push("/login");
      })
      .catch((err) => {
        err.code === 400
          ? alert("이미 존재하는 이메일입니다.")
          : alert("회원가입에 실패했습니다.");
        console.log(err);
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
                width: auto;
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
              width: auto;
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
              setbuttonDisabled(true);
            }}
          >
            인증번호확인
          </button>
        </FlexContainer>
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
