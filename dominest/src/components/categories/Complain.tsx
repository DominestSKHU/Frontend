import React, { useEffect, useState } from "react";
import "../../app/globals.css";
import { ComponenComplaints } from "@/style/ComponentStyle";
import RoomSelector from "@/utils/room/roomnumber";
import "../../app/globals.css";
import Link from "next/link";
import ComplainList from "@/components/complain/ComplainList";
import ComplainSelect from "../complain/ComplainSelect";
import { Container } from "@/style/border";
import ComplainText from "@/components/complain/ComplainText";
interface Post {
  id: number;
  title: string;
  roomNo: string;
  createTime: string;
  type: string;
  lastModifiedBy: string;
  lastModifiedTime: string;
  complaintCause: string;
  complaintResolution: string;
  processState: string;
  name: string;
  date: string;
}

export default function Complaints(props: any) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [status, setStatus] = useState("전체 조회");
  const urlLink = `/complain/complainupload/${props.idname[0]}`;
  const [serch, setSerch] = useState("");
  const [statusresult, setStatusresult] = useState("처리중");
  const [serchresult, setSerchresult] = useState("");

  const onChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };
  const onChangeSerch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerch(e.target.value);
  };
  const onChangeStatusresult = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusresult(e.target.value);
  };
  const handleRoomChange = (roomNumber: number) => {
    setSelectedRoom(roomNumber);
  };

  const complainsearch = () => {
    if (serch === "") {
      return alert("조회할 내용을 작성해주세요");
    }

    setSerchresult(serch);
  };

  return (
    <div>
      <ComponenComplaints>
        <div>
          <h1>민원접수 내역</h1>
        </div>
        <div>
          <div>
            <select onChange={onChangeStatus}>
              <option value="전체 조회">전체 조회</option>
              <option value="민원 조회">민원 조회</option>
              <option value="호실 조회">호실 조회</option>
              {/* <option value="처리 조회">처리 조회</option>*/}
            </select>
            {status === "전체 조회" ? (
              <div></div>
            ) : status === "민원 조회" ? (
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                onChange={onChangeSerch}
              />
            ) : status === "호실 조회" ? (
              <RoomSelector onRoomChange={handleRoomChange} />
            ) : (
              <select onChange={onChangeStatusresult}>
                <option value="처리중">처리중</option>
                <option value="처리완료">처리완료</option>
              </select>
            )}

            <Link href={urlLink}>
              <button>추가</button>
            </Link>
          </div>
        </div>
      </ComponenComplaints>

      {status === "전체 조회" && <ComplainList idname={props.idname[0]} />}
      {status === "민원 조회" && serch !== "" && (
        <ComplainText idname={props.idname[0]} serch={serch} />
      )}
      {selectedRoom !== 0 && status === "호실 조회" && (
        <Container>
          <ComplainSelect
            idname={props.idname[0]}
            selectedRoom={selectedRoom}
          />
        </Container>
      )}
    </div>
  );
}
