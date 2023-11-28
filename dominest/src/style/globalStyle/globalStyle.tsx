import { css } from "@emotion/react";

export const globalMain = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(255, 255, 255);
`;

export const errorText = css`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin: auto;
`;

export const globalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
  .mainBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 94vh;
  }
`;
