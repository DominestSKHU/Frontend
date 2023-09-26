/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TodoUl = css`
  list-style: none;
  padding: 0;
  width: 90%;
  height: fit-content;
  max-height: 24rem;
  overflow: scroll;
`;
export const TodoInput = css`
  margin: 1rem 0 0 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-size: large;
  outline: none;
  border: none;
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
export const TodoTaskLi = css`
  ${TodoLi}
  & button {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
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
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px 30px 15px;
`;

export const FixedDiv = styled(ScheduleDiv)`
  margin: 20px 10px 30px 15px;
`;

export const CalenderDiv = styled(ScheduleDiv)`
  width: 42vw;
  margin-right: 20px;
  overflow: scroll;
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
export const CalendarStyle = styled.div`
  width: 100%;
  height: 100%;
  & .react-calendar {
    width: 100%;
    height: fit-content;
    border: 1px solid #a0a096;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    margin: 0;
  }
  & .react-calendar__navigation {
    display: flex;
    height: 50px;
    margin-bottom: 1em;
    border-bottom: 1px solid #a0a096;
  }

  & .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1em;
    padding: 5px;
    abbr[title] {
      text-decoration: none;
    }
  }
  & .react-calendar__tile {
    max-width: 100%;
    height: 3.1rem;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    line-height: 16px;
    vertical-align: middle;
    border-radius: 0;
    outline: none;
    &:enabled:hover,
    &:enabled:focus {
      background-color: #e6e6e6;
      box-shadow: 0px 0px 1px gray;
      color: black;
      transition: 0.5s;
      border-radius: 15px;
    }
  }
  & .react-calendar__tile--now {
    background: #727272;
    color: white;
    border-radius: 15px;
    &:enabled:hover,
    &:enabled:focus {
      box-shadow: 0px 0px 1px gray;
      transition: 0.5s;
    }
  }
`;
