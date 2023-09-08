import axios from "axios";

export const loginUtil = (email: string, password: string)=>
  axios
    .post("http://domidomi.duckdns.org/user/login", {
      email,
      password,
    })

export const tempPassword = (email: string) =>
  axios.post("http://domidomi.duckdns.org/email/change/password", {
    email,
  });