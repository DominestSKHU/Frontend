import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/AdminNavbar";
import { ContainerComplainEdit, Table, ButtonContainer } from "@/style/border";
import {
  EditFirstInput,
  EditLeftInput,
  RighttInput,
  TowInput,
} from "@/style/complainupload";
import "../../app/globals.css";
import RoomSelector from "@/utils/room/roomnumber";
import ComplainSelect from "@/components/complain/ComplainSelect";
import axios from "axios";
import { useAuth } from "@/utils/useAuth/useAuth";

export default function ComplainUpload(props: any) {
  const router = useRouter();
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [idname, setIdname] = useState(router.query.id);
  const [name, setName] = useState(props.post.name);
  const [selectresult, setSelectresult] = useState(props.post.processState);
  const [complain, setComplain] = useState(props.post.complaintCause);
  const [result, setResult] = useState(props.post.complaintResolution);
  const [date, setDate] = useState(props.post.date);
  const Token = useAuth();
  console.log(props.post);
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

  const EditComplain = () => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_API_URL}/complaints/${props.post.id}`,
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
      )
      .then((response) => {
        console.log(response.data.data);
        alert("성공적으로 수정 되었습니다.");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <ContainerComplainEdit>
        <div>
          <EditFirstInput>
            <EditLeftInput>
              <label>
                방번호
                <RoomSelector onRoomChange={handleRoomChange} />
              </label>

              <label>
                이름
                <input value={name} onChange={handleNameChange} />
              </label>

              <label>
                민원접수 일자
                <input value={date} onChange={handleDateChange} />
              </label>
            </EditLeftInput>
            <RighttInput>
              <label>
                처리결과
                <select
                  value={selectresult}
                  onChange={handleSelectresultChange}
                >
                  <option value="처리중">처리중</option>
                  <option value="처리완료">처리완료</option>
                </select>
              </label>
            </RighttInput>
          </EditFirstInput>
          <TowInput>
            <div>
              <label>
                민원내용
                <textarea value={complain} onChange={handleComplainChange} />
              </label>
            </div>
            <div>
              <label>
                처리내용
                <textarea value={result} onChange={handleResultChange} />
              </label>
            </div>
          </TowInput>
        </div>
        <ButtonContainer>
          <button onClick={() => EditComplain()}>작성</button>
        </ButtonContainer>
        <br />
        <hr />
        {selectedRoom !== 0 && (
          <ComplainSelect idname={idname} selectedRoom={selectedRoom} />
        )}
      </ContainerComplainEdit>
    </div>
  );
}
