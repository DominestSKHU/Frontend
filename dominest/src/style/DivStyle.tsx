import { css } from "@emotion/react";

export const topLevelDiv = css`
  background-color: #d7d7d7;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 1%;
  width: 86vw;
  height: 86%;
  border-radius: 20px;
`;

export const twiceLevelDiv = css`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  margin: 2% 0.5%;
  padding: 2%;
  border-radius: 20px;
  background-color: white;
`;

export const ListLi = css`
  width: 94%;
  height: 3rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 1rem;
  font-size: 1.3rem;
  border: 1px solid #b2b2b2;
  border-radius: 10px;
  &:hover,
  &:focus {
    background-color: #d0d0d0;
    transform: scale(1.01);
    transition: all 0.3s ease-in-out;
  }
`;
