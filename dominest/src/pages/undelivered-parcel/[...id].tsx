import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/AdminNavbar";
import "../../app/globals.css";
import { ComponentDiv } from "@/style/ComponentStyle";
import axios from "axios";
import { useAuth } from "@/utils/useAuth/useAuth";
import { Table } from "@/style/border";
import Input from "@/components/undelivered/Input";
import InputEdit from "@/components/undelivered/InputEdit";
interface List {
  id: number;
  instruction: string;
  lastModifiedBy: string;
  lastModifiedTime: string;
  processState: string;
  recipientName: string;
  recipientPhoneNum: string;
}

export default function Parcel() {
  const router = useRouter();
  const [idname, setIdname] = useState<any>(router.query.id);
  const [data, setData] = useState<any>([]);
  const [display, setDisplay] = useState<boolean>(false);
  const [datalist, setDatalist] = useState<List[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    if (router.query.id !== undefined) {
      setIdname(router.query.id);
    }
  }, [router.query.id]);

  const Token = useAuth();

  const OnDisplay = (index: number) => {
    setDisplay(!display);
    setEditIndex(index === editIndex ? null : index);
  };

  //게시글 목록 조회
  useEffect(() => {
    if (idname) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}/posts/undelivered-parcel/${idname[1]}`,
          {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }
        )
        .then((response) => {
          setData(response.data.data.postDetail);
          setDatalist(response.data.data.postDetail.undelivParcels);
        })
        .catch((error) => {
          console.error("게시물 상세 정보를 가져오는 동안 오류 발생:", error);
        });
    }
  }, [idname, Token]);

  //axios 삭제
  const deleteParcel = (id: number) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/undeliv-parcels/${id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((response) => {
        alert("성공적으로 삭제 되었습니다.");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar page={"장기 미수령 택배 대장"} />
      <ComponentDiv>
        {idname && <Input Token={Token} idname={idname} title={data.title} />}
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
              <th>연락처</th>
              <th>처리내용</th>
              <th className="manytext">세부내용</th>
              <th>수정/삭제</th>
            </tr>
          </thead>
          <tbody>
            {datalist.length > 0 ? (
              datalist.map((datalist, index) => (
                <React.Fragment key={datalist.id}>
                  <tr>
                    <td className="id">{index + 1}</td>
                    <td>{datalist.recipientName}</td>
                    <td>{datalist.recipientPhoneNum}</td>
                    <td>{datalist.processState}</td>
                    <td className="manytext">{datalist.instruction}</td>
                    <td>
                      <button onClick={() => OnDisplay(index)}>수정</button>
                      <button onClick={() => deleteParcel(datalist.id)}>
                        삭제
                      </button>
                    </td>
                  </tr>
                  {editIndex === index && (
                    <tr>
                      <td colSpan={6}>
                        <InputEdit
                          datalist={datalist}
                          Token={Token}
                          idname={idname}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan={6}>데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </ComponentDiv>
    </div>
  );
}
