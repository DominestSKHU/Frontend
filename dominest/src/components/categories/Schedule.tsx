import React, { useState } from "react";
import Router from "next/router";
import "../../app/globals.css";
import styled from "@emotion/styled";

export default function Schedule(props: any) {
  const [selectedRoom2, setSelectedRoom2] = useState(false);
  const [selectedRoom3, setSelectedRoom3] = useState(false);

  return (
    <ScheduleDive>
      <div className="scheduleContain">
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
      </div>
      <div className="buttonContain">
        <button onClick={() => Router.push("/catagoris")}>
          다른 저장된 일정
        </button>

        <button onClick={() => setSelectedRoom2(true)}>반복일정 저장</button>
        <button onClick={() => setSelectedRoom3(true)}>적용</button>
      </div>
      {selectedRoom2 && (
        <div className="saveschedule">
          <div className="scheduletable">
            <div>
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
            <div className="inputDiv">
              <input type="text" placeholder="제목" />
              <button>일정 저장</button>
            </div>
            <div>
              <button onClick={() => setSelectedRoom2(false)}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </ScheduleDive>
  );
}

const ScheduleDive = styled.div`
border: 1px solid black;
border-radius: 5px;
margin: 20px;
.saveschedule{
  position: absolute;
  top: 20%;
  left: 10%;
  border: 1px solid black;
  border-radius: 5px;
  width: 80%;
  height: 60%;
  background-color: #dcdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  table{
    width: 100%;
    background-color: white;
    td {
      padding: 5px;
      border: 1px solid black;
    }
  }

}
.inputDiv{
  margin : 20px;
}
.buttonContain{
  display: flex;
  justify-content: space-between;
  padding: 30px;
  button{
    width: 30%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    &:hover {
        background-color: #dcdcdc;
      }
  }
}
  .scheduleContain{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    min-height: 500px;
  }

  .scheduletable{
    margin: 10px;
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
    text-align: center;
  }
  table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    
    td {
      padding: 5px;
      border: 1px solid black;
    }
  }
  
`;
