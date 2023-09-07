import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

export const pulseAnimation = keyframes`
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 360px;
  width: 360px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  box-shadow: 0px 0px 24px #cbcbcb;
`;

export const Title = styled.p`
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
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 6px;
`;

export const Label = styled.label`
  position: relative;
`;
export const Input = styled.input`
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
export const SubmitButton = styled.button`
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
export const Signin = styled.p`
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
export const passwordError = css`
  color: red;
  padding: 0%;
  margin: auto;
  font-size: 0.8em;
`;
