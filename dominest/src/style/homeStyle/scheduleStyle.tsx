import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ScheduleTable = styled.table`
  width: 100%;
  padding: 2%;
  border-radius: 10px;
  border-collapse: collapse;
  & th {
    border: 1px solid black;
    padding: 1%;
    text-align: center;
  }
  & td {
    border: 1px solid black;
    padding: 1%;
    margin: 0;
    text-align: center;
    width: 2.5rem;
    height: fit-content;
}
`;
export const ScheduleInput = css`
  width: 96%;
  height: 2rem;
  outline: none;
  border: none;
`;
export const StudentTable = styled.div`
  width: 96%;
  margin: 1rem 0;
  padding: 0 1%;
  height: 8rem;
`;
export const StudentInfo = styled.div`
  width: 80%;
  margin: 0.5rem 0;
  & > span {
    margin-right: 1rem;
  }
`;

export const ScheduleBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const ScheduleCommitBtn = styled.button`
  width: 7rem;
  height: 2rem;
  margin: 1.5rem 0 0 1rem;
  border-radius: 15px;
  border: 0.5px solid black;
  &:hover {
    background-color: #c4c4c4;
  }
`;
export const ScheduleAddBtn = styled(ScheduleCommitBtn)`
  height: 5vh;
  margin: 2% 0 0 0;
  background-color: #c4c4c4;
  color: black;
  font-size: large;
  &:hover {
    background-color: #787878;
    color: white;
    transition: 0.5s;
  }
`;
export const AddScheduleMain = styled.div`
  background-color: whitesmoke;
  width: 22vw;
  height: 28vh;
  padding: 1% 2% 2% 2%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 15%;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid black;
  box-shadow: 0px 0px 10px gray;
`;

export const AddSelectDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AddSelect = styled.select`
  padding: 2%;
  width: 30%;
  font-size: 1.1rem;
  margin: 2% 0;
  border-radius: 15px;
  outline: none;
  text-align: center;
`;
export const AddScheduleTitle = styled.div`
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;
