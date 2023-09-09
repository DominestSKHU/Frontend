"use client";
import Navbar from "@/components/AdminNavbar";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { BsList } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useAuth } from "@/utils/useAuth/useAuth";
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
  height: 82.5%;
  & > .boxComment {
    display: flex;
    justify-content: space-between;
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
  background-color: aliceblue;
  height: 85%;
  margin: 1% 0%;
  padding: 2%;
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

const CategoryPlusBox = () => {
  return (
    <div>
      <button>
        <MdOutlineKeyboardArrowRight />
      </button>
      <div>방역 및 호실 점검</div>
    </div>
  );
};

const CategoryManage = () => {
  const router = useRouter();

  const Token = useAuth();
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar page="카테고리 관리" />
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
                <BsList size={20} />
                <span
                  css={css`
                    font-size: 1.5rem;
                    margin-left: 1%;
                  `}
                >
                  분류
                </span>
                <hr></hr>
                <CategoryPlusBox></CategoryPlusBox>
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
              <div className="saveChange">
                <button>변경사항 저장</button>
              </div>
            </Category>
          </CategoryBox>
        </form>
      </div>
    </>
  );
};
export default CategoryManage;
