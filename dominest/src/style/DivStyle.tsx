/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TopLevelDiv = styled.div`
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

export const TwiceLevelDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  height: 100%;
  margin: 2% 0.5%;
  padding: 2%;
  border-radius: 20px;
  background-color: white;
`;

export const ListUl = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: scroll;
`;

export const ListLi = styled.li`
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
  margin: 1%;
  &:hover,
  &:focus {
    background-color: #dedede;
    transform: scale(1.01);
    transition: all 0.3s ease-in-out;
  }
`;

export const ScheduleDiv = styled.div`
  width: 45vw;
  height: 40vh;
  padding: 15px;
  margin: 20px 15px;
  border-radius: 15px;
  border: 2px solid #ddd;
  box-shadow: 0px 1px 5px gray;
`;

export const TodoDiv = styled(ScheduleDiv)`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FixedDiv = styled(ScheduleDiv)``;

export const CalenderDiv = styled(ScheduleDiv)`
  width: 30vw;
`;

export const homeMainDiv = css`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  justify-items: center;
`;

export const datePickerStyle = css`
  border-radius: 15px;
  background-color: #e0e0e0;
  padding: 6px;
  border: none;
  text-align: center;
  font-size: larger;
  outline: none;
  box-shadow: 0px 1px 5px gray;
  &:hover,&:focus {
    box-shadow: 0px 0px 1px gray;
  }
`;
