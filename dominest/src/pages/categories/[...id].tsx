import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";
import Navbar from "@/components/AdminNavbar";
import { Container, Table, ButtonContainer } from "@/style/border";
import Link from "next/link";
import { borderList } from "@/utils/border/borderlist";
import { Button, Containerright } from "@/style/InputStyle";
import axios from "axios";
import { useAuth } from "@/utils/useAuth/useAuth";
interface Post {
  id: number;
  title: string;
  writer: string;
  createTime: string;
  type: string;
  lastModifiedBy: string;
  lastModifiedTime: string;
}
export default function ImgBoard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const [idname, setIdname] = useState(router.query.id);
  const [categoryName, setCategoryName] = useState("");
  const [type, setTyep] = useState("hello");
  const [urlLink, setUrlLink] = useState("");
  const [write, setWrite] = useState("");
  const Token = useAuth();

  useEffect(() => {
    if (router.query.id !== undefined) {
      setIdname(router.query.id);
      setUrlLink(`/${router.query.id[2]}/${router.query.id[0]}`);

      if (router.query.id[2] === "image-types") {
        setWrite("imgform");
      } else {
        setWrite("undelivered-parcel");
      }
    }
  }, [router.query.id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await borderList(idname, currentPage);
        setPosts(response.data.data.posts);
        console.log(response.data.data.posts);
        setCurrentPage(response.data.data.page.currentPage);
        setTotalPages(response.data.data.page.totalPages);
        setCategoryName(response.data.data.category.categoryName);
        setTyep(response.data.data.category.type);
      } catch (error) {
        console.error("에러 발생", error);
      }
    };

    if (typeof idname === "object" && idname.length > 2) {
      fetchData();
    }
  }, [idname, currentPage]);

  const onUpload = () => {
    if (typeof idname === "object" && idname.length > 2) {
      const formData = new FormData();
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/categories/${idname[0]}/posts/undelivered-parcel`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data.data);
          return alert("게시글이 생성되었습니다.");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <Navbar page={currentPage + " 페이지"} />
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
                    {typeof idname === "object" && idname.length > 2 && (
                      <Link href={`/${write}/${idname[0]}/${post.id}`}>
                        {post.title}
                      </Link>
                    )}
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

        <Containerright>
          {type === "IMAGE" && (
            <Link href={urlLink}>
              <Button>글 작성</Button>
            </Link>
          )}
          {type === "UNDELIVERED_PARCEL_REGISTER" && (
            <Button onClick={onUpload}>글 작성</Button>
          )}
        </Containerright>

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
