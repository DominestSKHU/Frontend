import React from "react";
import Navbar from "@/components/AdminNavbar";
import "../../app/globals.css";
import { ComponenComplaints } from "@/style/ComponentStyle";
import RoomSelector from "@/utils/room/roomnumber"; // 수정된 import 경로
export default function complaints() {
  return (
    <div>
      <Navbar page={"민원접수내역"} />
      <ComponenComplaints>
        <div>
          <h1>민원접수 내역</h1>
        </div>
        <div>
          <div>
            <select>
              <option value="전체 조회">전체 조회</option>
              <option value="호실 조회">호실 조회</option>
              <option value="민원 조회">민원 조회</option>
              <option value="처리 조회">처리 조회</option>
            </select>
            <RoomSelector />

            <input type="text" placeholder="검색어를 입력하세요" />
            <button>조회</button>
            <button>추가</button>
          </div>
        </div>
      </ComponenComplaints>
    </div>
  );
}
