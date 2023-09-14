import React from "react";
import { Table } from "@/style/border";
import Link from "next/link";

export default function Cleanlist() {
  const postss = {
    posts: [
      {
        id: 1,
        title: "방역 및 호실점검",
        writer: "김민수",
        createTime: "2021-08-01",
        type: "방역",
        lastModifiedBy: "김민수",
        lastModifiedTime: "2021-08-01",
      },
      {
        id: 2,
        title: "코로나 예방 수칙",
        writer: "이지영",
        createTime: "2021-08-05",
        type: "건강",
        lastModifiedBy: "이지영",
        lastModifiedTime: "2021-08-05",
      },
      {
        id: 3,
        title: "여름 휴가 추천지",
        writer: "박성우",
        createTime: "2021-08-10",
        type: "여행",
        lastModifiedBy: "박성우",
        lastModifiedTime: "2021-08-10",
      },
    ],
  };

  return (
    <div>
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
          {postss.length > 0 ? (
            postss.map((post) => (
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
    </div>
  );
}
