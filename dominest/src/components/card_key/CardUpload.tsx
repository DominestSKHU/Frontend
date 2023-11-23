import React, { useState } from "react";
import { ButtonStyle, CardKeyTextbox, CardKeyInput } from "@/style/cardkey";
import axios from "axios";
import CardSerch from "./CardSerch";

export default function CardInput(props: { idname: any; Token: any }) {
  const [name, setName] = useState<string>("");
  const [issuedDate, setIssuedDate] = useState<string>("");
  const [roomNo, setRoomNo] = useState<string>("");
  const [reIssueCnt, setReIssueCnt] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [etc, setEtc] = useState<string>("");
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeIssuedDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIssuedDate(e.target.value);
  };
  const onChangeRoomNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomNo(e.target.value);
  };
  const onChangeReIssueCnt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReIssueCnt(e.target.value);
  };
  const onChangeDateOfBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(e.target.value);
  };
  const onChangeEtc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEtc(e.target.value);
  };
  // axios 업로드
  const cardupload = () => {
    if (
      name === "" ||
      issuedDate === "" ||
      roomNo === "" ||
      reIssueCnt === "" ||
      dateOfBirth === "" ||
      etc === ""
    ) {
      return alert("모든 항목을 입력해주세요.");
    } else {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/categories/${props.idname}/posts/card-key `,
          {
            name: name,
            issuedDate: issuedDate,
            roomNo: roomNo,
            reIssueCnt: reIssueCnt,
            dateOfBirth: dateOfBirth,
            etc: etc,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data.data);
          alert("성공적으로 업로드 되었습니다.");
          window.location.href = ``;
        })

        .catch((error) => {
          console.log(error);
          if (error.response.status === 401) {
            axios
              .post(
                `${process.env.NEXT_PUBLIC_API_URL}/user/token/reissue`,
                {},
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                      "refreshToken"
                    )}`,
                  },
                }
              )
              .then((response) => {
                console.log(response.data.data);
                localStorage.setItem(
                  "authToken",
                  response.data.data.accessToken
                );
                localStorage.setItem(
                  "refreshToken",
                  response.data.data.refreshToken
                );
                cardupload();
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
    }
  };

  return (
    <div>
      <div>
        <CardKeyInput>
          <div>
            <label>이름</label>
            <input type="text" placeholder="이름" onChange={onChangeName} />
          </div>
          <div>
            <label>날짜</label>
            <input
              type="text"
              placeholder="날짜"
              onChange={onChangeIssuedDate}
            />
          </div>
          <div>
            <label>호실</label>
            <input type="text" placeholder="호실" onChange={onChangeRoomNo} />
          </div>
        </CardKeyInput>
        <CardKeyInput>
          <div>
            <label>재발급 횟수</label>
            <input
              type="text"
              placeholder="재발급 횟수"
              onChange={onChangeReIssueCnt}
            />
          </div>
          <div>
            <label>생년월일</label>
            <input
              type="text"
              placeholder="생년월일"
              onChange={onChangeDateOfBirth}
            />
          </div>
        </CardKeyInput>
        <CardKeyTextbox>
          <div>
            <label>세부 내용</label>
            <textarea onChange={onChangeEtc} />
          </div>
        </CardKeyTextbox>
      </div>
      <ButtonStyle>
        <button onClick={cardupload}>업로드</button>
      </ButtonStyle>

      {name !== "" && <CardSerch idname={props.idname} name={name} />}
    </div>
  );
}
