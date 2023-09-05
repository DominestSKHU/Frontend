import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/AdminNavbar";
import "../../app/globals.css";
import { ComponentDiv } from "@/style/ComponentStyle";
import { ParcelInput, ParcelTextbox, ButtonStyle } from "@/style/parcelStyle";
import axios from "axios";
import { useAuth } from "@/utils/useAuth/useAuth";
import { Table } from "@/style/border";
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
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [status, setStatus] = useState<string>("처리 내용");
  const [data, setData] = useState<any>([]);
  const [datalist, setDatalist] = useState<List[]>([]);
  useEffect(() => {
    if (router.query.id !== undefined) {
      setIdname(router.query.id);
    }
  }, [router.query.id]);

  const Token = useAuth();

  // 입력부분 받기
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  //게시글 목록 조회
  useEffect(() => {
    if (idname) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname[0]}/posts/undelivered-parcel/${idname[1]}`,
          {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }
        )
        .then((response) => {
          setData(response.data.data.postDetail);
          setDatalist(response.data.data.postDetail.undelivParcels);
          console.log(response.data.data.postDetail.undelivParcels);
        })
        .catch((error) => {
          console.error("이미지 정보를 가져오는 동안 오류 발생:", error);
        });
    }
  }, [idname, Token]);

  // axios 업로드
  const parcelUpload = () => {
    if (
      name === "" ||
      phone === "" ||
      content === "" ||
      status === "처리 내용"
    ) {
      return alert("모든 항목을 입력해주세요.");
    } else {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname[0]}/posts/undelivered-parcel/${idname[1]}/`,
          {
            recipientName: name,
            recipientPhoneNum: phone,
            instruction: content,
            processState: status,
          },
          {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data.data);
          alert("성공적으로 업로드 되었습니다.");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Navbar page={"장기 미수령 택배 대장"} />
      <ComponentDiv>
        <div>
          <h1>장기 미수령 택배 대장</h1>
          <ParcelInput>
            <div>
              <label>이름</label>
              <input type="text" placeholder="이름" onChange={onChangeName} />
            </div>
            <div>
              <label>연락처</label>
              <input
                type="text"
                placeholder="연락처"
                onChange={onChangePhone}
              />
            </div>
            <div>
              <label>처리내용</label>
              <select onChange={onChangeStatus}>
                <option value="처리 내용">처리 내용</option>
                <option value="문자발송">문자 발송</option>
                <option value="전화완료">전화 완료</option>
                <option value="폐기예정">폐기 예정</option>
                <option value="폐기완료">폐기 완료</option>
              </select>
            </div>
          </ParcelInput>
          <ParcelTextbox>
            <div>
              <label>세부 내용</label>
              <textarea onChange={onChangeContent} />
            </div>
          </ParcelTextbox>
        </div>
        <ButtonStyle>
          <button onClick={parcelUpload}>업로드</button>
        </ButtonStyle>

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
                <tr key={datalist.id}>
                  <td className="id">{index + 1}</td>
                  <td>{datalist.recipientName}</td>
                  <td>{datalist.recipientPhoneNum}</td>
                  <td>{datalist.processState}</td>
                  <td className="manytext">{datalist.instruction}</td>
                  <td>
                    <button>수정</button>
                    <button>삭제</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </ComponentDiv>
    </div>
  );
}
