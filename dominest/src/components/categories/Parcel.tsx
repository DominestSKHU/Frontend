import { Container, Table, ButtonContainer } from "@/style/border";
import React, { useState, useEffect } from "react";
import "../../app/globals.css";
import { Button, Containerright } from "@/style/InputStyle";
import { borderList } from "@/utils/border/borderlist";
import Link from "next/link";
import axios from "axios";
interface Post {
  auditLog: any;
  id: number;
  title: string;
  writer: string;
  createTime: string;
  type: string;
  lastModifiedBy: string;
  lastModifiedTime: string;
}

export default function Parcel(props: any) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const write = "undelivered-parcel";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await borderList(props.idname, currentPage);
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

  const onUpload = () => {
    const formData = new FormData();
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/categories/${props.idname[0]}/posts/undelivered-parcel`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${props.Token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.data);
        alert("게시글이 생성되었습니다.");
        return window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //게시글 삭제
  const deletePost = (id: number) => {
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_API_URL}/posts/undelivered-parcel/${id}`,
        {
          headers: {
            Authorization: `Bearer ${props.Token}`,
          },
        }
      )
      .then((response) => {
        alert("성공적으로 삭제 되었습니다.");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              <th>삭제</th>
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
                  <td>{post.auditLog.lastModifiedBy}</td>
                  <td>{post.auditLog.lastModifiedTime}</td>
                  <td>
                    <button onClick={() => deletePost(post.id)}>삭제</button>
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
          <Button onClick={onUpload}>글 생성</Button>
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
