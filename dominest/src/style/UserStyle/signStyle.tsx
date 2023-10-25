import { css } from "@emotion/react";

export const authConfirm = css`
  border: none;
  outline: none;
  background-color: #848484;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  width: 9em;
  &:hover {
    background-color: #6a6a6a;
  }
  &:buttondisabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
