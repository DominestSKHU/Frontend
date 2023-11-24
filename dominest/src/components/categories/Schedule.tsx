import React from "react";

import "../../app/globals.css";
import styled from "@emotion/styled";

export default function Schedule(props: any) {
  return (
    <ScheduleDive>
      <div className="scheduletable">
        <h1>반복일정</h1>
        <table>
          <tr>
            <td>요일</td>
            <td>시간</td>
            <td>몇분 전 알림</td>
            <td>내용</td>
            <td>적용</td>
          </tr>
          <tr>
            <td>월</td>
            <td>09:00</td>
            <td>10분 전</td>
            <td>DUOS ON 업무 안내</td>
            <td>
              <button>적용</button>
            </td>
          </tr>
        </table>
      </div>
      <div className="scheduletable">
        <h1>개인일정 추가</h1>
        <table>
          <tr>
            <td>일자</td>
            <td>시간</td>
            <td>몇분 전 알림</td>
            <td>내용</td>
            <td>적용</td>
          </tr>
          <tr>
            <td>2021-09-01</td>
            <td>09:00</td>
            <td>10분 전</td>
            <td>DUOS ON 업무 안내</td>
            <td>
              <button>적용</button>
            </td>
          </tr>
        </table>
      </div>
    </ScheduleDive>
  );
}

const ScheduleDive = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  min-height: 500px;

  .scheduletable{

    margin: 10px;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
    text-align: center;
  }
  table {
    width: 90%;
    text-align: center;
    border: 1px solid black;
    border-collapse: collapse;
    td {
      border: 1px solid black;
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    button {
      margin: 5px;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid black;
      background-color: white;
      &:hover {
        background-color: #dcdcdc;
      }
    }
  }
`;
