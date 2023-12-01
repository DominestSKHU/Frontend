import React, { useState, useEffect } from "react";
import { complainSelectList } from "@/utils/border/borderlist";
import { Button } from "@/style/InputStyle";
import { Table, ButtonContainer } from "@/style/border";

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

export default function ComplainSelect(props: any) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [status, setStatus] = useState("민원 조회");
  const [serch, setSerch] = useState("");
  const [statusresult, setStatusresult] = useState("처리중");
  const [roomNo, setRoomNo] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await complainSelectList(
          props.idname,
          props.selectedRoom,
          totalPages
        );
        setPosts(response.data.data.complaints);
        setCurrentPage(response.data.data.page.currentPage);
        setTotalPages(response.data.data.page.totalPages);
        setCategoryName(response.data.data.category.categoryName);
      } catch (error) {
        console.error("에러 발생", error);
      }
    };

    fetchData();
  }, [currentPage, props.selectedRoom]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>방번호</th>
            <th>처리결과</th>
            <th>민원내역</th>
            <th>민원답변</th>
            <th>민원인</th>
            <th>민원접수일</th>
            <th>수정/삭제</th>
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
    </div>
  );
}
