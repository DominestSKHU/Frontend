import {
  FixedDiv,
  RecentBoxTitle,
  RecentPostsLi,
  RecentPostsUl,
} from "@/style/homeStyle/DivStyle";
import { css } from "@emotion/react";
import { useState } from "react";

interface RecentPostsProps {
  id: number;
  category: string;
  content: string;
  createdAt: string;
  link: string;
}
const RecentPosts = () => {
  const promRecentPosts = [
    {
      id: 1,
      category: "공지사항",
      content: "무언가를 수정했음",
      createdAt: "2021-10-13",
      createBy: "string",
      link: "/",
    },
    {
      id: 2,
      category: "카테고리",
      content: "어쨌든 수정 함",
      createdAt: "2021-10-13",
      createBy: "string",
      link: "/",
    },
  ];
  const [recentPosts, setRecentPosts] =
    useState<RecentPostsProps[]>(promRecentPosts);
  return (
    <FixedDiv>
      <RecentBoxTitle>최근 업로드 된 게시물</RecentBoxTitle>
      <RecentPostsUl>
        {recentPosts.map((item) => (
          <RecentPostsLi key={item.id}>
            <span>{item.category}</span>
            <span>{item.content}</span>
            <span>{item.createdAt}</span>
          </RecentPostsLi>
        ))}
      </RecentPostsUl>
    </FixedDiv>
  );
};

export default RecentPosts;
