import React, { useEffect, useState } from "react";
import { ClieanFloorList } from "@/utils/border/borderlist";
import { Container, Table } from "@/style/border";
import { useAuth } from "@/utils/useAuth/useAuth";
import axios from "axios";
import Navbar from "@/components/AdminNavbar";
import "../../app/globals.css";
import { useRouter } from "next/router";

interface RoomData {
  id: number;
  assignedRoom: string;
  floor: string;
  emptyRoom: boolean;
  shower: boolean;
  etc: string | null;
  indoor: boolean;
  leavedTrash: boolean;
  prohibitedItem: boolean;
  toilet: boolean;
  passed: string;
  resident: {
    name: string;
    phon: string;
  } | null;

  auditLog: {
    lastModifiedBy: string;
    lastModifiedTime: string;
    createTime: string;
    createdBy: string;
  };
}

export default function CleanFloorSelect() {
  const router = useRouter();
  const [idname, setIdname] = useState<number[]>([]);
  const [rooms, setRooms] = useState<RoomData[]>([]);
  const [categoryName, setCategoryName] = useState("");

  const Token = useAuth();

  useEffect(() => {
    if (router.query.id !== undefined) {
      setIdname(router.query.id);
    }
  }, [router.query.id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (idname !== null) {
          const response = await ClieanFloorList(idname);
          console.log(response.data.data.checkedRooms);
          setRooms(response.data.data.checkedRooms);
          setCategoryName(response.data.data.category.categoryName);
        }
      } catch (error) {
        console.error("에러 발생", error);
      }
    };

    fetchData();
  }, [idname]);

  const handleCheckboxChange = async (roomId: any, field: any, value: any) => {
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/checked-rooms/${roomId}`,
        {
          [field]: value,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      const updatedRooms = rooms.map((room) => {
        if (room.id === roomId) {
          return { ...room, [field]: value };
        }
        return room;
      });
      setRooms(updatedRooms);
    } catch (error) {
      console.error("에러 발생", error);
    }
  };
  return (
    <div>
      <Navbar page={"호실방역"} />
      <Container>
        <h3>{categoryName}</h3>
        <Table>
          <thead>
            <tr>
              <th>호실</th>
              <th>거주자</th>
              <th>전화번호</th>
              <th>실내</th>
              <th>쓰레기 방치</th>
              <th>화장실</th>
              <th>샤워실</th>
              <th>보관금지</th>
              <th>통과내역</th>
              <th>점검자</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {rooms.length > 0 ? (
              rooms.map((room) => (
                <tr key={room.id}>
                  <td>{room.assignedRoom}</td>
                  <td>{room.resident ? room.resident.name : "빈방"}</td>
                  <td>{room.resident ? room.resident.phon : "빈방"}</td>

                  <td>
                    <input
                      type="checkbox"
                      checked={room.indoor}
                      onChange={(e) =>
                        handleCheckboxChange(
                          room.id,
                          "indoor",
                          e.target.checked
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={room.leavedTrash}
                      onChange={(e) =>
                        handleCheckboxChange(
                          room.id,
                          "leavedTrash",
                          e.target.checked
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={room.toilet}
                      onChange={(e) =>
                        handleCheckboxChange(
                          room.id,
                          "toilet",
                          e.target.checked
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={room.shower}
                      onChange={(e) =>
                        handleCheckboxChange(
                          room.id,
                          "shower",
                          e.target.checked
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={room.prohibitedItem}
                      onChange={(e) =>
                        handleCheckboxChange(
                          room.id,
                          "prohibitedItem",
                          e.target.checked
                        )
                      }
                    />
                  </td>
                  <td>
                    <select
                      value={room.passed}
                      onChange={(e) =>
                        handleCheckboxChange(
                          room.id,
                          "passState",
                          e.target.value
                        )
                      }
                    >
                      <option value="미통과">미통과</option>
                      <option value="1차 통과">1차 통과</option>
                      <option value="2차 통과">2차 통과</option>
                      <option value="3차 통과">3차 통과</option>
                      <option value="4차 통과">4차 통과</option>
                      <option value="5차 통과">5차 통과</option>
                    </select>
                  </td>
                  <td>
                    {room.auditLog.lastModifiedBy
                      ? room.auditLog.lastModifiedBy
                      : room.auditLog.createdBy}
                  </td>
                  <td>
                    <input value={room.etc ? room.etc : ""} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={11}>데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
