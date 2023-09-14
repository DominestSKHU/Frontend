import React, { useEffect, useState } from "react";
import { ClieanListBoard, ClieanUploadBoard } from "@/utils/border/borderlist";
import { Container, Table, ButtonContainer } from "@/style/border";
import { Button } from "@/style/InputStyle";
import { useAuth } from "@/utils/useAuth/useAuth";
import axios from "axios";

import Link from "next/link";
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
    createTime: string;
  };
}

export default function Cleanlist(props: { idname: any[] }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const Token = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ClieanListBoard(props.idname, currentPage);
        console.log(response.data.data);
        setPosts(response.data.data.posts);
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
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {posts.length !== undefined && posts.length > 0 ? (
              posts.map((post, index: number) => (
                <React.Fragment key={post.id}>
                  <tr>
                    <td>{post.id}</td>
                    <td className="titlecontent">
                      <Link href={`/clean/${post.id}`}>{post.title}</Link>
                    </td>

                    <td>{post.auditLog.lastModifiedBy}</td>
                    <td>{post.auditLog.createTime}</td>
                  </tr>
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan={5}>데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </Table>
        <Button onClick={() => ClieanUploadBoard(props.idname)}>생성</Button>
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
