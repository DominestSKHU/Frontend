import axios from "axios";

export const loginUtil = (email: string, password: string)=>
  axios
    .post("https://domidomi.duckdns.org/user/login", {
      email,
      password,
    })

export const tempPassword = (email: string) =>
  axios.post("https://domidomi.duckdns.org/email/change/password", {
    email,
  });

export const passwordResetEmail = (email:string)=>{
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  let email_verify =  emailRegEx.test(email);
  if(!email_verify){
    alert("이메일 형식이 올바르지 않습니다.")
  }
}