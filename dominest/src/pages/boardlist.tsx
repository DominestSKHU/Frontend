"use client";
import Navbar from "@/components/AdminNavbar";
import { globalStyles } from "./categoryManage";
import { css, Global } from "@emotion/react";
import { topLevelDiv, twiceLevelDiv, ListLi } from "@/style/DivStyle";
import { use, useEffect, useState } from "react";
import { getCategory } from "@/utils/category";
import router from "next/router";
/** @jsxImportSource @emotion/react */
interface categoryProps {
  id: number;
  name: string;
  type: string;
  explanation: string;
}
const boardlist = () => {
  const [authToken, setAuthToken] = useState<string>("");
  const [category, setCategory] = useState<categoryProps[]>([]);

  useEffect(() => {
    const loginToken = localStorage.getItem("authToken");
    loginToken && setAuthToken(loginToken);
    if (!loginToken) {
      router.push("/login");
    }
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await getCategory(authToken);
      setCategory(result.data.data.categories);
    };
  
    if (authToken && category.length === 0) {
      fetchData();
    }
  }, [authToken, category]);
  
  console.log(category);
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar />
      <div className="mainBox">
        <div css={topLevelDiv}>
          <div className="insideBox" css={twiceLevelDiv}>
            <span>카테고리 전체 조회</span>
            <hr
              css={css`
                color: black;
                width: 100%;
                height: 1px;
              `}
            />
            <ul>
              <li css={ListLi}>
                <span>카테고리 이름</span>
                <span>카테고리 설명</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default boardlist;
