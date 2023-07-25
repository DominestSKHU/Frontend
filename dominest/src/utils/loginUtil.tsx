import axios from "axios";

export const loginUtil = (email: string, password: string)=>
  axios
    .post("http://domidomi.duckdns.org/user/login", {
      email,
      password,
    })

