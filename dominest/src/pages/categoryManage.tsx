"use client";
import Navbar from "@/components/AdminNavbar";
import {
  formStyle,
  CategoryBox,
  Category,
  CaregorySub,
  CategoryPlus,
  CategoryMoveBox,
  SaveChange,
  explanInput,
} from "@/style/DragListStyle";
import { useRouter } from "next/navigation";
import { BsList } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import React, { FC, useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { css, Global } from "@emotion/react";
import { getCategory } from "@/utils/category";
/** @jsxImportSource @emotion/react */

export const globalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
  .mainBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 92vh;
  }
`;

interface CategoryPlusBoxProps {
  id: number;
  title: string;
  explan: string;
}
const categoryManage = () => {
  const router = useRouter();
  const [category, setCategory] = useState<CategoryPlusBoxProps[]>([

  ]);
  const [authToken, setAuthToken] = useState<string>("");
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    authToken && setAuthToken(authToken);
    if (!authToken) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    getCategory(authToken).then((res) => {
      setCategory(res.data);
    }).catch((err) => console.log(err));
  }, []);

  console.log(category);

  return (
    <>
      <Global styles={globalStyles} />
      <Navbar />
      <div className="mainBox">
        <form css={formStyle}>
          <h2
            css={css`
              font-weight: inherit;
              margin-left: 1%;
            `}
          >
            카테고리 관리
          </h2>
          <CategoryBox>
            <div className="boxComment">
              <span
                css={css`
                  font-size: large;
                `}
              >
                카테고리 순서를 변경하고 주제 연결을 설정할 수 있습니다.
                <br />
                각 카테고리를 드래그 하여 순서를 변경할 수 있습니다.
                <br />
              </span>
              <div className="control">
                <div className="lastPost">최종 수정자</div>
              </div>
            </div>
            <Category className="categoryBox">
              <CaregorySub>
                <div
                  css={css`
                    display: flex;
                    align-items: center;
                    margin: 1% 0%;
                  `}
                >
                  <div>
                    <BsList size={20} />
                  </div>
                  <span
                    css={css`
                      font-size: 1.5rem;
                      margin-left: 1%;
                    `}
                  >
                    분류
                  </span>
                </div>
                <CategoryMoveBox>
                  <ReactSortable list={category} setList={setCategory}>
                    {category.map((item) => (
                      <div
                        css={css`
                          display: flex;
                          border-bottom: 1px solid lightgrey;
                          align-items: center;
                          height: 14.1%;
                          background-color: white;
                        `}
                        key={item.id}
                      >
                        <div
                          className="moveBtn"
                          css={css`
                            background-color: #e3e3e3;
                            border: none;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 1%;
                          `}
                        >
                          <BsList size={25} />
                        </div>
                        <div
                          css={css`
                            display: flex;
                            align-items: center;
                            width: 96%;
                            height: 100%;
                            justify-content: space-evenly;
                          `}
                        >
                          <input
                            css={css`
                              width: 20em;
                              outline: none;
                              border: none;
                              font-size: 1.2rem;
                              font-weight: bold;
                              padding: 3px;
                              &:focus {
                                border: 1px solid black;
                              }
                            `}
                            value={item.title}
                            onChange={(e) => {
                              for (let i = 0; i < category.length; i++) {
                                if (category[i].id === item.id) {
                                  category[i].title = e.target.value;
                                }
                              }
                            }}
                          />

                          <RxDividerVertical size={40} color="#d4d4d4" />
                          <input
                            css={explanInput}
                            defaultValue={item.explan}
                          ></input>
                        </div>
                      </div>
                    ))}
                  </ReactSortable>
                </CategoryMoveBox>
                <CategoryPlus>
                  <div
                    className="leftPlusBlock"
                    css={css`
                      display: flex;
                      align-items: center;
                    `}
                  >
                    <AiOutlinePlus />
                    <span
                      css={css`
                        margin-left: 10px;
                      `}
                    >
                      카테고리 추가
                    </span>
                  </div>
                  <span className="rightPlus">22/500</span>
                </CategoryPlus>
              </CaregorySub>
              <div
                className="saveChange"
                css={css`
                  display: flex;
                  justify-content: flex-end;
                `}
              >
                <SaveChange>변경사항 저장</SaveChange>
              </div>
            </Category>
          </CategoryBox>
        </form>
      </div>
    </>
  );
};
export default categoryManage;
