import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/AdminNavbar";
import { Container, Table, ButtonContainer } from "@/style/border";
import {
  FirstInput,
  LeftInput,
  RighttInput,
  TowInput,
} from "@/style/complainupload";
import "../../../app/globals.css";
import RoomSelector from "@/utils/room/roomnumber";
import ComplainSelect from "@/components/complain/ComplainSelect";
import axios from "axios";
import { useAuth } from "@/utils/useAuth/useAuth";

export default function ComplainUpload() {
  const router = useRouter();
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [idname, setIdname] = useState(router.query.id);
  const [name, setName] = useState("");
  const [selectresult, setSelectresult] = useState("처리중");
  const [complain, setComplain] = useState("");
  const [result, setResult] = useState("");
  const [date, setDate] = useState("");
  const Token = useAuth();

  useEffect(() => {
    if (router.query.id !== undefined) {
      setIdname(router.query.id);
    }
  }, [router.query.id]);

  const handleRoomChange = (roomNumber: number) => {
    setSelectedRoom(roomNumber);
  };
  const handleNameChange = (event: { target: { value: any } }) => {
    setName(event.target.value);
  };
  const handleSelectresultChange = (event: { target: { value: any } }) => {
    setSelectresult(event.target.value);
  };
  const handleComplainChange = (event: { target: { value: any } }) => {
    setComplain(event.target.value);
  };
  const handleResultChange = (event: { target: { value: any } }) => {
    setResult(event.target.value);
  };
  const handleDateChange = (event: { target: { value: any } }) => {
    setDate(event.target.value);
  };

  const complainUpload = async () => {
    if (selectedRoom === 0) {
      return alert("방번호를 선택해주세요");
    }
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      return alert("날짜를 0000-00-00 양식으로 입력해주세요");
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname}/posts/complaint`,
        {
          roomNo: selectedRoom,
          complaintCause: complain,
          complaintResolution: result,
          processState: selectresult,
          name: name,
          date: date,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      console.log(response);
      window.location.href = `/categories/${idname}/posts/complaint`;
      alert("작성완료");
    } catch (error) {
      console.error("게시판 오류 발생:", error);
      throw error;
    }
  };

  return (
    <div>
      <Navbar page="민원 작성" />
      <Container>
        <h3>민원 작성</h3>
        <div>
          <FirstInput>
            <LeftInput>
              <label>
                방번호
                <RoomSelector onRoomChange={handleRoomChange} />
              </label>

              <label>
                이름
                <input onChange={handleNameChange} />
              </label>

              <label>
                민원접수 일자
                <input onChange={handleDateChange} />
              </label>
            </LeftInput>
            <RighttInput>
              <label>
                처리결과
                <select onChange={handleSelectresultChange}>
                  <option value="처리중">처리중</option>
                  <option value="처리완료">처리완료</option>
                </select>
              </label>
            </RighttInput>
          </FirstInput>
          <TowInput>
            <div>
              <label>
                민원내용
                <textarea onChange={handleComplainChange} />
              </label>
            </div>
            <div>
              <label>
                처리내용
                <textarea onChange={handleResultChange} />
              </label>
            </div>
          </TowInput>
        </div>
        <ButtonContainer>
          <button onClick={complainUpload}>작성</button>
        </ButtonContainer>
        <br />
        <hr />
        {selectedRoom !== 0 && (
          <ComplainSelect idname={idname} selectedRoom={selectedRoom} />
        )}
      </Container>
    </div>
  );
}
