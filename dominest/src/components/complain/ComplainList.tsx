import React, { useEffect, useState } from "react";
import { complainborderList } from "@/utils/border/borderlist";
import { Container, Table, ButtonContainer } from "@/style/border";
import { Button } from "@/style/InputStyle";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(currentPage);
        const response = await complainborderList(props.idname, currentPage);
        console.log(response.data.data);
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

  return (
    <div>
      <Container>
        <h3>{categoryName}</h3>
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>방번호</th>
              <th>민원 내역</th>
              <th>민원 답변</th>
              <th>민원 결과</th>
              <th>민원인</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 ? (
              posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.roomNo}</td>
                  <td>{post.complaintCause}</td>
                  <td>{post.complaintResolution}</td>
                  <td
                    style={{
                      color: post.processState === "처리중" ? "red" : "black",
                      fontWeight:
                        post.processState === "처리중" ? "bold" : "normal",
                    }}
                  >
                    {post.processState}
                  </td>
                  <td>{post.name}</td>
                  <td>{post.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>데이터가 없습니다.</td>
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
