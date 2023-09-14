import React, { useState } from "react";
import { ParcelInput, ParcelTextbox, ButtonStyle } from "@/style/parcelStyle";
import axios from "axios";
export default function Input(props: {
  datalist: any;
  Token: string;
  idname: {
    id: number;

    type: string;
    lastModifiedBy: string;
    lastModifiedTime: string;
    recipientPhoneNum: string;
    instruction: string;
    processState: string;
    name: string;
  };
}) {
  const [name, setName] = useState<string>(props.datalist.lastModifiedBy);
  const [phone, setPhone] = useState<string>(props.datalist.recipientPhoneNum);
  const [content, setContent] = useState<string>(props.datalist.instruction);
  const [status, setStatus] = useState<string>(props.datalist.processState);
  const [idd, setIdd] = useState<number>(props.datalist.id);
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
      console.log(idd);
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API_URL}/undeliv-parcels/${idd}`,
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
          alert("성공적으로 수정 되었습니다.");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <div>
        <ParcelInput>
          <div>
            <label>이름</label>
            <input
              type="text"
              value={name}
              placeholder="이름"
              onChange={onChangeName}
            />
          </div>
          <div>
            <label>연락처</label>
            <input
              type="text"
              value={phone}
              placeholder="연락처"
              onChange={onChangePhone}
            />
          </div>
          <div>
            <label>처리내용</label>
            <select onChange={onChangeStatus} value={status}>
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
            <textarea value={content} onChange={onChangeContent} />
          </div>
        </ParcelTextbox>
      </div>
      <ButtonStyle>
        <button onClick={parcelUpload}>수정</button>
      </ButtonStyle>
    </div>
  );
}
