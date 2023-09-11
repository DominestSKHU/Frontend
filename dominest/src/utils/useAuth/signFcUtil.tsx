import axios from "axios";

export const sendEmail = (email: string) => {
  email === ""
    ? alert("이메일을 입력해주세요")
    : axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/email/send`, {
          email: email,
        })
        .then((res) => {
          alert("인증번호가 전송되었습니다.");
        })
        .catch((err) => console.log(err));
};
// 이메일 인증번호 정송 api

export const checkEmailCode = (email: string, code: string) => {
  axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/email/verify/code`, {
      email: email,
      code: code,
    })
    .then((res) => {
      alert("인증번호가 확인되었습니다.");
    })
    .catch((err) => console.log(err));
};
// 이메일 인증번호 확인 api

export const join = (
  email: string,
  password: string,
  name: string,
  phone: number
) =>
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/join`, {
    email,
    password,
    name,
    phone,
  });

// 회원가입 api
