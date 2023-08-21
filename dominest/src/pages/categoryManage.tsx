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
  DeleteCategory,
} from "@/style/DragListStyle";
import { useRouter } from "next/navigation";
import { BsList } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosRemove } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import React, { FC, useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { css, Global } from "@emotion/react";
import { deleteCategory, getCategory, postCategory } from "@/utils/category";
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
  categoryName: string;
  categoryType: string;
  explanation: string;
  name: string;
}

interface CategorySaveProps {
  id: number;
  categoryName: string;
}
const categoryManage = () => {
  const router = useRouter();
  const [category, setCategory] = useState<CategoryPlusBoxProps[]>([]);
  const [categorySave, setCategorySave] = useState([]); // 카테고리 저장용
  const [authToken, setAuthToken] = useState<string>("");
  const [total, setTotal] = useState<number>(0);


  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    authToken && setAuthToken(authToken);
    if (!authToken) {
      router.push("/login");
    };
  }, []);

  useEffect(() => {
    getCategory(authToken)
      .then((res) => {
        setCategory(res.data.data.categories);
        setTotal(res.data.data.categories.length);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddCategory = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newCategoryId = total + 1; // 임의로 아이디 생성, 필요에 따라 변경 가능
    const newCategory = {
      id: newCategoryId,
      categoryName: `${newCategoryId}번째 카테고리`,
      categoryType: "",
      explanation: "카테고리 설명을 입력해주세요",
      name: `${newCategoryId}번째 카테고리`,
    };

    setCategory((prevCategory) => [...prevCategory, newCategory]);
    setTotal((prevTotal) => prevTotal + 1);
  };

  const deleteInput = (
    e: React.MouseEvent<HTMLButtonElement>,
    categoryId: number
  ) => {
    e.preventDefault();

    const updatedCategory = category.filter((item) => item.id !== categoryId);

    setCategory(updatedCategory);

    deleteCategory(authToken, categoryId)
      .then((response) => {
        console.log(categoryId)
        console.log("카테고리 삭제 성공:", response.data);
      })
      .catch((error) => {
        console.error("카테고리 삭제 실패:", error);
      });
  };

  const fixCategory = (e: React.InputHTMLAttributes<HTMLInputElement>, category: any) => {
    const newCategory = category.map((item: any) => {
      return { id: item.id, categoryName: item.categoryName };
    });
    setCategorySave(newCategory);
  };


  const saveChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    postCategory(authToken, categorySave);
  };

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
                            defaultValue={item.categoryName}
                            onChange={(e) => {
                              const updatedCategory = category.map(catItem => {
                                if (catItem.id === item.id) {
                                  return { ...catItem, categoryName: e.target.value };
                                }
                                return catItem;
                              });
                              fixCategory(e, updatedCategory);
                            }}
                          />

                          <RxDividerVertical size={40} color="#d4d4d4" />
                          <input
                            css={explanInput}
                            defaultValue={item.explanation}
                            onChange={(e) => {
                              for (let i = 0; i < category.length; i++) {
                                if (category[i].id === item.id) {
                                  category[i].explanation = e.target.value;
                                }
                              }
                            }}
                          ></input>
                        </div>
                        <DeleteCategory
                          onClick={(e) => deleteInput(e, item.id)}
                        >
                          <IoIosRemove size={35} />
                        </DeleteCategory>
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
                    onClick={handleAddCategory}
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
                  <span className="rightPlus">{total}/500</span>
                </CategoryPlus>
              </CaregorySub>
              <div
                className="saveChange"
                css={css`
                  display: flex;
                  justify-content: flex-end;
                `}
              >
                <SaveChange onClick={saveChange}>변경사항 저장</SaveChange>
              </div>
            </Category>
          </CategoryBox>
        </form>
      </div>
    </>
  );
};
export default categoryManage;
