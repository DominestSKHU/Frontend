/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TodoUl = css`
  list-style: none;
  padding: 0;
  width: 90%;
  height: 17rem;
  overflow: scroll;
`;
export const TodoInput = css`
  margin: 1rem 0 0 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  width: 100%;
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
  width: 100%;

  height: 2.2rem;
  font-size: larger;
  background-color: white;
  border: none;
  outline: none;
  text-align: center;
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
  width: 60%;
  & > .todoAdd {
    width: 30%;
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

export const TodoListUl = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: scroll;
`;

export const TodoListLi = styled.li`
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
export const RecentBoxTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin: 0.5rem;
  text-align: center;
`;
export const RecentPostsUl = styled(TodoListUl)`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RecentPostsLi = styled(TodoListLi)`
  width: 94%;
  padding: 0 1rem;
  margin: 1% 0;
`;

export const ScheduleDiv = styled.div`
  width: 50vw;
  height: 50vh;
  padding: 15px;
  margin: 20px 10px 0 15px;
  border-radius: 15px;
  border: 2px solid #ddd;
  box-shadow: 0px 1px 5px gray;
  overflow: scroll;
`;

export const TodoDiv = styled(ScheduleDiv)`
  width: 42vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FixedDiv = styled(ScheduleDiv)`
  margin: 20px 10px 30px 15px;
`;

export const CalenderDiv = styled(ScheduleDiv)`
  width: 42vw;
  margin: 20px 10px 30px 15px;
`;

export const homeMainDiv = css`
  display: grid;
  grid-template-columns: 1.8fr 1.5fr;
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
