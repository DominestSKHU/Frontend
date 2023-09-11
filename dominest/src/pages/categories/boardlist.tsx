/** @jsxImportSource @emotion/react */
import Navbar from "@/components/AdminNavbar";
import { globalStyles } from "./categoryManage";
import { css, Global } from "@emotion/react";
import { TodoListLi, TodoListUl, TopLevelDiv, TwiceLevelDiv } from "@/style/homeStyle/DivStyle";
import { useEffect, useState } from "react";
import { getCategory } from "@/utils/cateogry/categoryUtil";
import router from "next/router";

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
      <Navbar page={""} />
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
            <TodoListUl>
              {category.map((item) => (
                <TodoListLi key={item.id}>
                  <div>
                    <span css={Listspan}>{item.id}</span>
                    <span>{item.name}</span>
                  </div>

                  <span>{item.explanation}</span>
                </TodoListLi>
              ))}
            </TodoListUl>
          </TwiceLevelDiv>
        </TopLevelDiv>
      </div>
    </>
  );
};
export default Boardlist;
