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
export default function ComplainUpload() {
  const router = useRouter();
  const [selectedRoom, setSelectedRoom] = useState(1);

  const [idname, setIdname] = useState(router.query.id);

  useEffect(() => {
    if (router.query.id !== undefined) {
      setIdname(router.query.id);
      console.log(router.query.id);
    }
  }, [router.query.id]);

  const handleRoomChange = (roomNumber: number) => {
    setSelectedRoom(roomNumber);
    console.log(roomNumber);
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
                <input />
              </label>
            </LeftInput>
            <RighttInput>
              <label>
                처리결과
                <select>
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
                <textarea />
              </label>
            </div>
            <div>
              <label>
                처리내용
                <textarea />
              </label>
            </div>
          </TowInput>
        </div>
        <ButtonContainer>
          <button>작성</button>
        </ButtonContainer>
        <br />
        <hr />
        <ComplainSelect idname={idname} />
      </Container>
    </div>
  );
}
