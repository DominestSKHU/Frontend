import axios from "axios";

//로그인
export const loginUtil = (email: string, password: string) =>
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
    email,
    password,
  });
