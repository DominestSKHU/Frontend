import React, { useState } from "react";
import { ParcelInput, ParcelTextbox, ButtonStyle } from "@/style/parcelStyle";
import axios from "axios";
import { ComponentDiv3 } from "@/style/ComponentStyle";
export default function Input(props: {
  Token: string;
  idname: any[];
  title: string;
}) {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [status, setStatus] = useState<string>("처리 내용");

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
          `${process.env.NEXT_PUBLIC_API_URL}/posts/undelivered-parcel/${props.idname[1]}/`,
          {
            recipientName: name,
            recipientPhoneNum: phone,
            instruction: content,
            processState: status,
          },
          {
            headers: {
              Authorization: `Bearer ${props.Token}`,
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
    <ComponentDiv3>
      <div>
        <h1>{props.title}</h1>
        <ParcelInput>
          <div>
            <label>이름</label>
            <input type="text" placeholder="이름" onChange={onChangeName} />
          </div>
          <div>
            <label>연락처</label>
            <input type="text" placeholder="연락처" onChange={onChangePhone} />
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
    </ComponentDiv3>
  );
}
