import React, { useEffect, useState } from "react";
import { CardkeyLists, CardkeySerch } from "@/utils/border/borderlist";
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

export default function CardSerch(props: { idname: any[]; name: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CardkeySerch(
          props.idname,
          currentPage,
          props.name
        );
        console.log(response.data.data.cardKeys);
        setPosts(response.data.data.cardKeys);
        setCurrentPage(response.data.data.page.currentPage);
        setTotalPages(response.data.data.page.totalPages);
        setCategoryName(response.data.data.category.categoryName);
      } catch (error) {
        console.error("에러 발생", error);
      }
    };

    fetchData();
  }, [currentPage, props.name]);

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
            </tr>
          </thead>
          <tbody>
            {posts.length !== undefined && posts.length > 0 ? (
              posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.issuedDate}</td>
                  <td>{post.roomNo}</td>
                  <td>{post.name}</td>
                  <td>{post.dateOfBirth}</td>
                  <td>{post.reIssueCnt}</td>
                  <td>{post.auditLog.lastModifiedBy}</td>
                  <td>{post.etc}</td>
                </tr>
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
