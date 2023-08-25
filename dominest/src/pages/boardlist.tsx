/** @jsxImportSource @emotion/react */
"use client";
import Navbar from "@/components/AdminNavbar";
import { globalStyles } from "./categoryManage";
import { css, Global } from "@emotion/react";
import { ListLi, ListUl, TopLevelDiv, TwiceLevelDiv } from "@/style/DivStyle";
import { useEffect, useState } from "react";
import { getCategory } from "@/utils/category";
import router from "next/router";
import { useAuth } from "@/utils/useAuth";

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
  const Token = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCategory(Token);
      setCategory(result.data.data.categories);
    };

    if (Token && category.length === 0) {
      fetchData();
    }
  }, [Token, category]);
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar page="게시판 리스트" />
      <div className="mainBox">
        <TopLevelDiv>
          <TwiceLevelDiv>
            <div
              css={css`
                font-size: 1.5rem;
                font-weight: bold;
                margin-bottom: 1rem;
                text-align: center;
              `}
            >
              카테고리 전체 조회
            </div>
            <hr css={hrStyled} />
            <ListUl>
              {category.map((item) => (
                <ListLi key={item.id}>
                  <div>
                    <span css={Listspan}>{item.id}</span>
                    <span>{item.name}</span>
                  </div>

                  <span>{item.explanation}</span>
                </ListLi>
              ))}
            </ListUl>
          </TwiceLevelDiv>
        </TopLevelDiv>
      </div>
    </>
  );
};
export default Boardlist;
