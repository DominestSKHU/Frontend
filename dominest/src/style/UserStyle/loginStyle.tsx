import styled from "@emotion/styled";

export const LoginMainForm = styled.form`
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  padding: 30px 30px 30px 30px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
  position: relative;
  overflow: hidden;
  &:before {
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: rgb(213, 213, 213);
    transform: rotate(45deg);
    left: -180px;
    bottom: 30px;
    z-index: 1;
    border-radius: 30px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.082);
  }
  & > p {
    font-size: 2em;
    color: #2e2e2e;
    font-weight: 700;
    margin: 5px 0 10px 0;
    z-index: 2;
  }
  & > div {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    & > input {
      width: 100%;
      height: 30px;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid rgb(173, 173, 173);
      margin: 10px 3px;
      color: black;
      font-size: 0.8em;
      font-weight: 500;
      box-sizing: border-box;
      padding-left: 30px;
      &:focus {
        outline: none;
        border-bottom: 2px solid rgb(199, 114, 255);
      }
      &::placeholder {
        color: rgb(80, 80, 80);
        font-size: 1em;
        font-weight: 500;
      }
    }
  }
  & > button {
    z-index: 2;
    position: relative;
    width: 100%;
    border: none;
    background-color: rgb(195, 195, 195);
    height: 30px;
    font-size: 0.8em;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 10px;
    cursor: pointer;
  }
  & > a {
    z-index: 2;
    font-weight: 500;
    color: rgb(44, 24, 128);
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 20px;
  }
`;
