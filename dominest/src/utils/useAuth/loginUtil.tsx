import axios from "axios";

export const loginUtil = (email: string, password: string) =>
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
    email,
    password,
  });

export const tempPassword = (email: string) =>
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/email/change/password`, {
    email,
  });
