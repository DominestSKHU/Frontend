import React, { useEffect, useState } from "react";
import { complainborderList } from "@/utils/border/borderlist";
import { Container, Table, ButtonContainer } from "@/style/border";
import { Button } from "@/style/InputStyle";
import axios from "axios";
import { useAuth } from "@/utils/useAuth/useAuth";
import ComplainEdit from "@/components/complain/ComplainEdit";

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

export default function ComplainList(props: any) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const Token = useAuth();
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [display, setDisplay] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await complainborderList(props.idname, currentPage);
        setPosts(response.data.data.complaints);
        setCurrentPage(response.data.data.page.currentPage);
        setTotalPages(response.data.data.page.totalPages);
        setCategoryName(response.data.data.category.categoryName);
      } catch (error) {
        console.error("에러 발생", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const deleteComplain = (id: number) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/complaints/${id}`, {
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

  const OnDisplay = (index: number) => {
    setDisplay(!display);
    setEditIndex(index === editIndex ? null : index);
  };

  return (
    <div>
      <Container>
        <h3>{categoryName}</h3>
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>방번호</th>
              <th>민원 결과</th>
              <th>민원 내역</th>
              <th>민원 답변</th>

              <th>민원인</th>
              <th>작성일</th>
              <th>수정/삭제</th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <React.Fragment key={post.id}>
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.roomNo}</td>
                    <td
                      style={{
                        color: post.processState === "처리중" ? "red" : "black",
                        fontWeight:
                          post.processState === "처리중" ? "bold" : "normal",
                      }}
                    >
                      {post.processState}
                    </td>
                    <td>{post.complaintCause}</td>
                    <td>{post.complaintResolution}</td>
                    <td>{post.name}</td>
                    <td>{post.date}</td>
                    <td>
                      <button onClick={() => OnDisplay(index)}>수정</button>
                      <button onClick={() => deleteComplain(post.id)}>
                        삭제
                      </button>
                    </td>
                  </tr>
                  {editIndex === index && (
                    <tr>
                      <td colSpan={8}>
                        <ComplainEdit Token={Token} post={post} />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan={8}>데이터가 없습니다.</td>
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
