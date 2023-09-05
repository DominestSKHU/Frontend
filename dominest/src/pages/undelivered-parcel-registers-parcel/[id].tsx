import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/AdminNavbar";
import "../../app/globals.css";
import { ComponentDiv } from "@/style/ComponentStyle";
import { ParcelInput, ParcelTextbox, ButtonStyle } from "@/style/parcelStyle";
import axios from "axios";
import { useAuth } from "@/utils/useAuth/useAuth";
export default function parcel() {
  const router = useRouter();
  const [idname, setIdname] = useState<any>(router.query.id);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [status, setStatus] = useState<string>("처리 내용");
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

  // axios 업로드

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
                <option value="문자 발송">문자 발송</option>
                <option value="전화 완료">전화 완료</option>
                <option value="폐기 예정">폐기 예정</option>
                <option value="폐기 완료">폐기 완료</option>
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
          <button>업로드</button>
        </ButtonStyle>
      </ComponentDiv>
    </div>
  );
}
