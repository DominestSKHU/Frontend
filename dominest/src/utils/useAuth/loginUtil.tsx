import axios from "axios";


export const passwordResetEmail = (email:string)=>{
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  let email_verify =  emailRegEx.test(email);
  if(!email_verify){
    alert("이메일 형식이 올바르지 않습니다.")
  }
}

export const loginUtil = (email: string, password: string) =>
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
    email,
    password,
  });

export const tempPassword = (email: string) =>
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/email/change/password`, {
    email,
  });
