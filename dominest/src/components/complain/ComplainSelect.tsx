import React, { useState, useEffect } from "react";
import { Table } from "@/style/border";
import { complainSelectList } from "@/utils/border/borderlist";

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
  createdBy: string;
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
          currentPage,
          props.selectedRoom
        );
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
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>방번호</th>
            <th>민원 내역</th>
            <th>민원 답변</th>
            <th>민원 결과</th>
            <th>작성자</th>
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
                <td>{post.createdBy}</td>
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
    </div>
  );
}
