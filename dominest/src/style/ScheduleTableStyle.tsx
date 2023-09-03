"use client";
/** @jsxImportSource @emotion/react */
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
  }
  & td {
    border: 1px solid black;
    padding: 0;
    margin: 0;
    text-align: center;
    width: 2.5rem;
    height: 2rem;
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
  width: 50%;
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
  margin: 1.5rem 0;
  border-radius: 15px;
  border: 0.5px solid black;
  &:hover {
    background-color: #c4c4c4;
  }
`;
