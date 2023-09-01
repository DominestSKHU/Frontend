/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TodoUl = css`
  list-style: none;
  padding: 0;
  width: 20rem;
  height: 17rem;
  overflow: scroll;
`;
export const TodoInput = css`
  margin: 1rem 0 0 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  width: 20rem;
  text-align: center;
  font-size: large;
  outline: none;
  border: none;
  border-bottom: 1px solid #ddd;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 1px gray;
  }
`;
export const TodoLi = css`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`;
export const TodoListBtnFalse = css`
  width: 18rem;
  font-size: larger;
  background-color: white;
  border: none;
  outline: none;
  text-align: left;
`;
export const TodoListBtnTrue = css`
  ${TodoListBtnFalse}
  text-decoration: line-through;
  color: #b2b2b2;
`;
export const TodoInputform = css`
  display: flex;
  align-items: center;
  justify-content: center;
  & > .todoAdd {
    width: 3rem;
    font-size: large;
    margin: 1rem 0 0 0;
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid #ddd;
    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px gray;
    }
  }
`;
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
  &:hover,
  &:focus {
    box-shadow: 0px 0px 1px gray;
  }
`;
