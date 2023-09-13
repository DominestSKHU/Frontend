import React, { useState, useEffect } from "react";
import { ButtonStyle, CardKeyTextbox, CardKeyInput } from "@/style/cardkey";
import axios from "axios";
import CardSerch from "./CardSerch";
import { CardkeyLists } from "@/utils/border/borderlist";

interface Post {
  id: number;
  title: string;
  roomNo: string;
  createTime: string;
  type: string;
  lastModifiedBy: string;
  lastModifiedTime: string;
  name: string;
  issuedDate: string;
  dateOfBirth: string;
  reIssueCnt: number;
  etc: string;
  auditLog: {
    lastModifiedBy: string;
    lastModifiedTime: string;
  };
}
export default function CardEdit(props: {
  idname: any;
  Token: any;
  post: Post;
}) {
  const [name, setName] = useState<string>(props.post.name);
  const [issuedDate, setIssuedDate] = useState<string>(props.post.issuedDate);
  const [roomNo, setRoomNo] = useState<string>(props.post.roomNo);
  const [reIssueCnt, setReIssueCnt] = useState<string>(
    props.post.reIssueCnt.toString()
  );
  const [dateOfBirth, setDateOfBirth] = useState<string>(
    props.post.dateOfBirth
  );
  const [etc, setEtc] = useState<string>(props.post.etc);
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryName, setCategoryName] = useState("");

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

  console.log(props.post);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CardkeyLists(props.idname, currentPage);
        setPosts(response.data.data.cardKeys);
        setCurrentPage(response.data.data.page.currentPage);
        setTotalPages(response.data.data.page.totalPages);
        setCategoryName(response.data.data.category.categoryName);
      } catch (error) {
        console.error("에러 발생", error);
      }
    };

    fetchData();
  }, [currentPage]);

  // axios 수정
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
        .patch(
          `${process.env.NEXT_PUBLIC_API_URL}/card-keys/${props.post.id}`,
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
    <div>
      <div key={props.idname[1]}>
        <CardKeyInput>
          <div>
            <label>이름</label>
            <input
              type="text"
              placeholder="이름"
              onChange={onChangeName}
              value={name}
            />
          </div>
          <div>
            <label>날짜</label>
            <input
              type="text"
              placeholder="날짜"
              onChange={onChangeIssuedDate}
              value={issuedDate}
            />
          </div>
          <div>
            <label>호실</label>
            <input
              type="text"
              placeholder="호실"
              onChange={onChangeRoomNo}
              value={roomNo}
            />
          </div>
        </CardKeyInput>
        <CardKeyInput>
          <div>
            <label>재발급 횟수</label>
            <input
              type="text"
              placeholder="재발급 횟수"
              onChange={onChangeReIssueCnt}
              value={reIssueCnt}
            />
          </div>
          <div>
            <label>생년월일</label>
            <input
              type="text"
              placeholder="생년월일"
              onChange={onChangeDateOfBirth}
              value={dateOfBirth}
            />
          </div>
        </CardKeyInput>
        <CardKeyTextbox>
          <div>
            <label>세부 내용</label>
            <textarea onChange={onChangeEtc} value={etc} />
          </div>
        </CardKeyTextbox>
      </div>
      <ButtonStyle>
        <button onClick={cardupload}>업로드</button>
      </ButtonStyle>
    </div>
  );
}
