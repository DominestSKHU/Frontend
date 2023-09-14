import React, { useEffect, useState } from "react";
import {
  ClieanFloorListBoard,
  ClieanUploadBoard,
} from "@/utils/border/borderlist";
import { Container, Table, ButtonContainer } from "@/style/border";
import { Button } from "@/style/InputStyle";
import { useAuth } from "@/utils/useAuth/useAuth";
import axios from "axios";
import Navbar from "@/components/AdminNavbar";
import "../../app/globals.css";
import { useRouter } from "next/router";

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
  floor: string;
  auditLog: {
    lastModifiedBy: string;
    lastModifiedTime: string;
    createTime: string;
  };
}

export default function CleanFloorList() {
  const router = useRouter();
  const [idname, setIdname] = useState(router.query.id);
  const [posts, setPosts] = useState<Post[]>([]);
  const [categoryName, setCategoryName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const Token = useAuth();

  useEffect(() => {
    if (router.query.id !== undefined) {
      setIdname(router.query.id);
    }
  }, [router.query.id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ClieanFloorListBoard(idname);
        console.log(response.data.data);
        setPosts(response.data.data.posts);
        setCategoryName(response.data.data.category.categoryName);
      } catch (error) {
        console.error("에러 발생", error);
      }
    };
    console.log(idname);
    if (idname !== undefined && idname !== null && idname !== "") {
      fetchData();
    }
  }, [idname]);

  //axios 삭제
  const delite = (id: number) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/card-keys/${id}`, {
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

  const Edit = (id: number) => {
    setEditId(id);
  };

  return (
    <div>
      <Navbar page={"호실방역"} />
      <Container>
        <h3>호실방역</h3>
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>최종수정자</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {posts.length !== undefined && posts.length > 0 ? (
              posts.map((post, index: number) => (
                <React.Fragment key={post.id}>
                  <tr>
                    <td>{post.id}</td>
                    <td className="titlecontent">
                      <Link href={`/clean/${post.id}`}>{post.floor}</Link>
                    </td>

                    <td>{post.auditLog.lastModifiedBy}</td>
                    <td>{post.auditLog.lastModifiedTime}</td>
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
      </Container>
    </div>
  );
}
