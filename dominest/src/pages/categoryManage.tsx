"use client";
import Navbar from "@/components/AdminNavbar";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { BsList } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect } from "react";
/** @jsxImportSource @emotion/react */
const globalStyles = css`
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

const formStyle = css`
  width: 80vw;
  height: 85vh;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 0% 2% 2% 2%;
  margin: 4%;
`;

const CategoryBox = styled.div`
  background-color: white;
  border: 1px solid #cdcdcd;
  border-radius: 20px;
  padding: 2%;
  height: 88%;
  & > .boxComment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6%;
    & > .control {
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      & > .categoryCount {
        margin-right: 1%;
      }
      & > button {
        background-color: white;
        border: 1px solid lightgray;
        padding: 3%;
        font-size: 1em;
        border-radius: 8px;
        width: 7em;
        margin: 2%;
        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
  }
`;

const Category = styled.div`
  background-color: #f3f3f3;
  height: 90%;
  margin: 1% 0%;
  padding: 10px;
`;

const CaregorySub = styled.div`
  background-color: white;
  padding: 3%;
  border-radius: 20px;
  height: 80%;
`;

const CategoryPlus = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5%;
  font-size: 1.2em;
  border: 1px solid lightgrey;
  width: 100%;
  background-color: white;
`;

const SaveChange = styled.button`
  background-color: #ffffff;
  padding: 1%;
  border: 1px solid #aeaeae;
  border-radius: 10px;
  margin: 0.6% 2%;
  font-size: large;
`;

const CategoryMoveBox = styled.div`
  height: 82%;
  border: 1px solid lightgrey;
  overflow: scroll;
  & > .moveBtn {
    background-color: white;
  }
`;
const explanInput = css`
  width: 20em;
  font-size: 1.2em;
  outline: none;
  border: none;
  background-color: aliceblue;
`;

const CategoryPlusBox = () => {
  return (
    <div
      css={css`
        display: flex;
        border-bottom: 1px solid lightgrey;
        align-items: center;
        height: 14.1%;
      `}
    >
      <button
        className="moveBtn"
        css={css`
          background-color: #e3e3e3;
          border: none;
          height: 100%;
        `}
      >
        <BsList size={25} />
      </button>
      <div
        css={css`
          font-size: 1.2rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          width: 96%;
          height: 100%;
          justify-content: space-evenly;
        `}
      >
        <span
          css={css`
            width: 20em;
          `}
        >
          방역 및 호실 점검
        </span>

        <RxDividerVertical size={40} color="#d4d4d4" />
        <input css={explanInput}></input>
      </div>
    </div>
  );
};

const categoryManage = () => {
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      router.push("/login");
    }
  }, []);
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
                <div className="categoryCount">22/500</div>
                <button>전체 펼치기</button>
                <button>전체 접기</button>
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
                  <CategoryPlusBox></CategoryPlusBox>
                  <CategoryPlusBox></CategoryPlusBox>
                  <CategoryPlusBox></CategoryPlusBox>
                  <CategoryPlusBox></CategoryPlusBox>
                  <CategoryPlusBox></CategoryPlusBox>
                  <CategoryPlusBox></CategoryPlusBox>
                  <CategoryPlusBox></CategoryPlusBox>
                  <CategoryPlusBox></CategoryPlusBox>
                  <CategoryPlusBox></CategoryPlusBox>
                  <CategoryPlusBox></CategoryPlusBox>
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
