import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";
import Navbar from "@/components/AdminNavbar";
import styled from "@emotion/styled";
import axios from "axios";
import Link from "next/link";

export default function ImgBoard() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const { id, ...rest } = router.query;

  const fetchPosts = async (page) => {
    try {
      const response = await axios.get(
        `http://domidomi.duckdns.org/categories/${id[0]}/${id[1]}/${id[2]}?page=${page}`
      );
      setPosts(response.data.data.posts);
      setCurrentPage(response.data.data.page.currentPage);
      setTotalPages(response.data.data.page.totalPages);
      console.log(response.data.data.page);
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchPosts(1);
  }, [id]);

  return (
    <div>
      <Navbar />
      <Container>
        <h3>순찰일지</h3>
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
                    <Link href={`/imgform/${post.id}`}>{post.title}</Link>
                  </td>
                  <td>{post.writer}</td>
                  <td>{post.createTime}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </Table>
        <Pagination>
          {currentPage > 1 && (
            <button onClick={() => fetchPosts(currentPage - 1)}>
              이전 페이지
            </button>
          )}
          {currentPage < totalPages && (
            <button onClick={() => fetchPosts(currentPage + 1)}>
              다음 페이지
            </button>
          )}
        </Pagination>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  .id {
    width: 10%;
  }
  .title {
    width: 60%;
  }
  .titlecontent {
    text-align: left;
    width: 60%;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  tr {
    &:hover {
      background-color: #999999;
    }
    td {
      border: none;
      border-bottom: 1px solid #e5e5e5;
      padding: 8px;
      text-align: center;
    }
  }
  th {
    border-bottom: 1px solid black;
    background-color: white;
    padding: 8px;
    text-align: center;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 0 10px;
    padding: 5px 10px;
    cursor: pointer;
  }
`;
