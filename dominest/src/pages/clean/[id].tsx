import React, { useEffect, useState } from "react";
import {
  ClieanFloorListBoard,
  ClieanUploadBoard,
} from "@/utils/border/borderlist";
import { Container, Table, ButtonContainer } from "@/style/border";

import { useAuth } from "@/utils/useAuth/useAuth";

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
  const [idname, setIdname] = useState<number | string>(-1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [categoryName, setCategoryName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const Token = useAuth();

  useEffect(() => {
    if (router.query.id !== undefined) {
      const parsedId = parseInt(router.query.id as string, 10);
      if (!isNaN(parsedId)) {
        setIdname(parsedId);
      }
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

    if (idname !== undefined && idname !== null && idname !== -1) {
      fetchData();
    }
  }, [idname]);

  const download = (downloadid: number) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/posts/sanitation-check/${downloadid}/xlsx-all-data`;
    window.open(url);
  };
  const badDownload = (downloadid: number) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/posts/sanitation-check/${downloadid}/xlsx-penalty-residents`;
    window.open(url);
  };

  const badCounterDownload = (downloadid: number, counter: string) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/posts/sanitation-check/${downloadid}/xlsx-residents?passState=${counter}`;
    window.open(url);
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
                    <td>{index + 1}</td>
                    <td className="titlecontent">
                      <Link href={`/cleanfloor/${idname}/${post.id}`}>
                        {post.floor}
                      </Link>
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
            <tr>
              <td colSpan={5}>
                <Link href={`/nonpass/${idname}/`}>미통과자 모음집</Link>
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <button onClick={() => download(Number(idname))}>
                  전체 데이터 다운로드
                </button>
                <button onClick={() => badDownload(Number(idname))}>
                  벌점 부여자 명단 다운로드
                </button>
              </td>
            </tr>

            <tr>
              <td colSpan={5}>
                <button
                  onClick={() => badCounterDownload(Number(idname), "1차 통과")}
                >
                  1차 통과자 명단 다운로드
                </button>
                <button
                  onClick={() => badCounterDownload(Number(idname), "2차 통과")}
                >
                  2차 통과자 명단 다운로드
                </button>
                <button
                  onClick={() => badCounterDownload(Number(idname), "3차 통과")}
                >
                  3차 통과자 명단 다운로드
                </button>
                <button
                  onClick={() => badCounterDownload(Number(idname), "4차 통과")}
                >
                  4차 통과자 명단 다운로드
                </button>
                <button
                  onClick={() => badCounterDownload(Number(idname), "5차 통과")}
                >
                  5차 통과자 명단 다운로드
                </button>
              </td>
            </tr>

            <tr>
              <td colSpan={5}>
                <button
                  onClick={() => badCounterDownload(Number(idname), "6차 통과")}
                >
                  6차 통과자 명단 다운로드
                </button>
                <button
                  onClick={() => badCounterDownload(Number(idname), "7차 통과")}
                >
                  7차 통과자 명단 다운로드
                </button>
                <button
                  onClick={() => badCounterDownload(Number(idname), "8차 통과")}
                >
                  8차 통과자 명단 다운로드
                </button>
                <button
                  onClick={() => badCounterDownload(Number(idname), "9차 통과")}
                >
                  9차 통과자 명단 다운로드
                </button>
                <button
                  onClick={() =>
                    badCounterDownload(Number(idname), "10차 통과")
                  }
                >
                  10차 통과자 명단 다운로드
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
