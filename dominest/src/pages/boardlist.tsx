"use client";
import Navbar from "@/components/AdminNavbar";
import { globalStyles } from "./categoryManage";
import { css, Global } from "@emotion/react";
import { ListLi, TopLevelDiv, TwiceLevelDiv } from "@/style/DivStyle";
import { useEffect, useState } from "react";
import { getCategory } from "@/utils/category";
import router from "next/router";
/** @jsxImportSource @emotion/react */

interface CategoryGetProps {
  id: number;
  name: string;
  type: string;
  explanation: string;
}

const hrStyled = css`
  color: black;
  width: 100%;
  height: 1px;
`;
const Listspan = css`
  margin-right: 1em;
`;
const Boardlist = () => {
  const [category, setCategory] = useState<CategoryGetProps[]>([]);
  const [authToken, setAuthToken] = useState<string>("");

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
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar />
      <div className="mainBox">
        <TopLevelDiv>
          <TwiceLevelDiv>
            <div>카테고리 전체 조회</div>
            <hr css={hrStyled} />
            <ul className="ulBox">
              {category.map((item) => (
                <ListLi key={item.id}>
                  <div>
                    <span css={Listspan}>{item.id}</span>
                    <span>{item.name}</span>
                  </div>

                  <span>{item.explanation}</span>
                </ListLi>
              ))}
            </ul>
          </TwiceLevelDiv>
        </TopLevelDiv>
      </div>
    </>
  );
};
export default Boardlist;
