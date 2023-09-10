import styled from "@emotion/styled";
import { TodoInput, TodoInputform } from "./DivStyle";
import { css } from "@emotion/react";

export const DateDiv = styled.div`
  text-align: center;
  font-size: 1.3rem;
  margin: 1rem 0;
`;

export const TodoListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AnnounceInput = css`
  ${TodoInput}
`;
export const AnnounceForm = css`
  ${TodoInputform}
  margin: 0 0 1rem 1rem;
  width: 80%;
  & .todoAdd {
    width: 10%; }
`;
