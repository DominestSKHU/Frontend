import { Container, Table, ButtonContainer } from "@/style/border";
import React, { useState, useEffect } from "react";
import "../../app/globals.css";
import { Button, Containerright } from "@/style/InputStyle";
import { borderList } from "@/utils/border/borderlist";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  writer: string;
  createTime: string;
  type: string;
  lastModifiedBy: string;
  lastModifiedTime: string;
}

export default function Img(props: any) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const write = "imgform";

  const urlLink = `/${props.idname[2]}/${props.idname[0]}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await borderList(props.idname, currentPage);
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
              <th className="id">번호</th>
              <th className="title">제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 ? (
              posts.map((post) => (
                <tr key={post.id}>
                  <td className="id">{post.id}</td>
                  <td className="titlecontent">
                    <Link href={`/${write}/${props.idname[0]}/${post.id}`}>
                      {post.title}
                    </Link>
                  </td>
                  <td>{post.writer ? post.writer : post.lastModifiedBy}</td>
                  <td>
                    {post.createTime ? post.createTime : post.lastModifiedTime}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </Table>

        {/* 글작성 버튼 */}
        <Containerright>
          <Link href={urlLink}>
            <Button>글 작성</Button>
          </Link>
        </Containerright>

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
      ;
    </div>
  );
}
