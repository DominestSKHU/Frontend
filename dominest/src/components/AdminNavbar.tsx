// import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
/** @jsxImportSource @emotion/react */

const title = css`
  font-weight: bold;
  width: 10%;
  color: #575757;
  font-size: larger;
`;
const LeftNav = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 42%;
`;
const NavStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 10vh;
`;
const NavList = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding-left: 0px;
  width: 30vw;
`;
const NavItem = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-left: 0px;
`;
const LoginState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  & > .loginIcon,
  span {
    width: fit-content;
  }
  & > .logout {
    display: none;
  }
  &:hover {
    & > .loginIcon,
    span {
      display: none;
    }
    & > .logout {
      display: block;
    }
  }
`;

const Navber = () => {
  const [name, setName] = React.useState("이용ddd자");
  const [role, setRole] = React.useState("근로생");
  const [bookmark, setBookmark] = React.useState(false);
  const [admin, setAdmin] = React.useState(false);
  const [worker, setWorker] = React.useState(false);
  const router = useRouter();

  const onLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 로컬 스토리지에서 토큰 삭제
    localStorage.removeItem("authToken");
    // 로그아웃 후 로그인 페이지로 이동
    router.push("/login");
  };

  return (
    <div css={NavStyle}>
      <div css={LeftNav}>
        <div className="logo" css={title}>
          Dominest
        </div>
        <ul css={NavList}>
          <li>
            <button css={NavItem} onClick={() => setBookmark(!bookmark)}>
              <p>즐겨찾기</p>
            </button>
            {bookmark ? (
              <ul css={NavItem}>
                <li>
                  <Link
                    href="/login"
                    css={css`
                      display: flex;
                      align-items: center;
                    `}
                  >
                    <span>빵빵이</span>
                    <CiStar size={20} />
                  </Link>
                </li>
              </ul>
            ) : (
              <></>
            )}
            {/* 다른 즐겨찾기 아이템들 추가 */}
          </li>
          <li>
            <button css={NavItem} onClick={() => setAdmin(!admin)}>
              <p>관리자 목록</p>
            </button>
            {admin ? (
              <ul css={NavItem}>
                <li>
                  <Link
                    href="/login"
                    css={css`
                      display: flex;
                      align-items: center;
                    `}
                  >
                    <span>빵빵이</span>
                    <CiStar size={20} />
                  </Link>
                </li>
              </ul>
            ) : (
              <></>
            )}
          </li>
          <li>
            <button css={NavItem} onClick={() => setWorker(!worker)}>
              <p>근로생 목록</p>
            </button>
            {worker ? (
              <ul css={NavItem}>
                <li>
                  <Link
                    href="/login"
                    css={css`
                      display: flex;
                      align-items: center;
                    `}
                  >
                    <span>빵빵이</span>
                    <CiStar size={20} />
                  </Link>
                </li>
              </ul>
            ) : (
              <></>
            )}
            {/* 다른 근로생 목록 아이템들 추가 */}
          </li>
        </ul>
      </div>
      <LoginState>
        <HiOutlineUserCircle className="loginIcon" size={25} />
        {role === "근로생" ? <span>근로생</span> : <span>관리자</span>}
        <span
          css={css`
            color: green;
            margin-right: 5px;
          `}
        >
          {name}
        </span>
        <button className="logout" onClick={onLogout}>
          로그아웃 하기
        </button>
      </LoginState>
    </div>
  );
};

export default Navber;
