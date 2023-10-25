import styled from "@emotion/styled";
import { TodoInput, TodoInputform } from "./DivStyle";
import { css } from "@emotion/react";

export const DateDiv = styled.div`
  text-align: center;
  font-size: 1.3rem;
  align-items: center;
  margin: 1rem 0;
`;

export const TodoListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 3rem;
`;

export const AnnounceInput = css`
  ${TodoInput}
  padding: 0.5rem;
  border-bottom: none;
`;
export const AnnounceForm = css`
  ${TodoInputform}
  margin: 0 0 1rem 1rem;
  border-bottom: 1px solid #ddd;
  width: 90%;
  & .todoAdd {
    width: 30%;
  }
`;

export const CalendarStyle_UL = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const RecieverSelect = styled.select`
  width: 50%;
  text-align: center;
  outline: none;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin: 1rem 0 0 0;
  font-size: large;
  &:focus {
    border: 1px solid #2563eb;
  }
`;
