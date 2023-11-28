import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DormitoryYear } from "../InputStyle";

export const FloorFrame = styled.div`
  border: 1px solid black;
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
`;
export const SelectFloorBtn = styled.button`
  border: 1px solid black;
  border-bottom: 0;
  margin: 0.5rem;
  border-radius: 10px 10px 0 0;
  margin-bottom: 0;
  padding: 0.5rem;
  width: 10%;
  background-color: white;
  &:hover {
    background-color: #e9ecef;
    transform: scale(1.1);
  }
`;
export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  & > .floorbtnDiv {
    width: 60%;
    display: flex;
    justify-content: center;
  }
`;
export const SelectDegree = styled(DormitoryYear)`
  background-color: #f7f7f7;
  margin: 0 auto;
  border: 1px solid black;
  border-top: 0;
  width: 70%;
  & > select {
    background-color: white;
  }
`;
export const FloorTable = styled.div`
  padding: 1rem;
  display: flex;
  min-height: 53vh;
  align-items: flex-start;
  justify-content: center;
  font-size: 0.9rem;
  & > .unitFrame {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 56vh;
    & > .unitBox {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
export const unitColor = css`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: flex-end;
  margin-left: 3rem;
  flex-direction: column;
  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
export const FloorTableY = styled.div`
  width: 10%;
  transform: rotate(20deg);
  transform-origin: top left;
  flex-direction: column-reverse;
  margin-left: 1rem;
`;

export const yUnitDiv = css`
  padding: 0.5rem;
  width: 3rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0.7rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  background-color: #c0dfff;
  transition: all 1s ease-in-out;

  &:hover {
    transform: scale(1.2);
    font-size: small;
  }
`;
export const disabledUnit = css`
  ${yUnitDiv};
  background-color: #fdc397;
`;
export const studentNameUnit = css`
  ${yUnitDiv};
  background-color: #cfd5ff;
`;


