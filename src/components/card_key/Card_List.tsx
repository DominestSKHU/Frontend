import React, { useEffect, useState } from "react";
import { CardkeyLists } from "@/utils/border/borderlist";
import { Container, Table, ButtonContainer } from "@/style/border";
import { Button } from "@/style/InputStyle";
import CardEdit from "./CardEdit";
import { useAuth } from "@/utils/useAuth/useAuth";
import axios from "axios";
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

export default function CardkeyList(props: { idname: any[] }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const Token = useAuth();
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

  //axios 삭제
  const delite = (id: number) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/card-keys/${id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        alert("성공적으로 삭제 되었습니다.");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Edit = (id: number) => {
    setEditId(id);
  };

  return (
    <div>
      <Container>
        <h3>{categoryName}</h3>
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>날짜</th>
              <th>호실</th>
              <th>이름</th>
              <th>생년월일</th>
              <th>재발급 횟수</th>
              <th>작성자</th>
              <th>기타사항</th>
              <th>수정/삭제</th>
            </tr>
          </thead>
          <tbody>
            {posts.length !== undefined && posts.length > 0 ? (
              posts.map((post, index: number) => (
                <React.Fragment key={post.id}>
                  <tr>
                    <td>{post.id}</td>
                    <td>{post.issuedDate}</td>
                    <td>{post.roomNo}</td>
                    <td>{post.name}</td>
                    <td>{post.dateOfBirth}</td>
                    <td>{post.reIssueCnt}</td>
                    <td>{post.auditLog.lastModifiedBy}</td>
                    <td>{post.etc}</td>
                    <td>
                      <button onClick={() => Edit(post.id)}>수정</button>
                      <button onClick={() => delite(post.id)}>삭제</button>
                    </td>
                  </tr>
                  {editId === post.id ? (
                    <>
                      <tr>
                        <td colSpan={9} key={post.id}>
                          <CardEdit
                            idname={props.idname}
                            Token={Token}
                            post={post}
                          />
                        </td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan={9}>데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </Table>

        {/* 페이지 넘기기 */}
        <ButtonContainer>
          {currentPage > 1 && (
            <Button onClick={() => setCurrentPage(currentPage - 1)}>
              이전 페이지
            </Button>
          )}
          {currentPage < totalPages && (
            <Button onClick={() => setCurrentPage(currentPage + 1)}>
              다음 페이지
            </Button>
          )}
        </ButtonContainer>
      </Container>
    </div>
  );
}
