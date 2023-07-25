import React, { MouseEventHandler } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { css } from "@emotion/react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { useRouter } from 'next/navigation'

/** @jsxImportSource @emotion/react */

const ListStyle = styled.li`
  margin-left: 8vh;
  width: 7rem;
  & > ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: max-content;
    position: absolute;
    top: 2.3%;
    & > p {
      margin: 5px;
    }
    &:hover {
      & > li {
        display: block;
      }
    }
    & > li {
      background-color: rgb(202, 202, 202);
      margin-top: 5px;
      padding: 5px 10px;
      width: initial;
      border-radius: 5px;
      display: none;
      &:hover {
        background-color: rgb(189, 189, 189);
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.147);
      }
      & > a {
        text-decoration: none;
        color: black;
      }
    }
  }
`;
const UserStyle = styled.p`
  margin-right: 5px;
  font-weight: bold;
  width: fit-content;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  width: 11em;
  height: 3em;
  padding: 0px 10px;
`;

const LogoutStyle = styled.div`
  margin-right: 10%;
  background-color: #dcdcdc;
  border-radius: 20px;
  width: 10%;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.147);
  width: 11em;
  height: 3em;
  display: flex;
  align-items: center;
  &:hover,
  &:focus {
    & > .login {
      display: none;
    }
    & > .logout {
      display: flex;
      justify-content: center;
    }
    & {
      width: 150px;
    }
  }
`;
const Bookmark = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LinkP = styled.p`
  margin: 0px 5px;
`;
export default function Navber() {
  const [name, setName] = React.useState("이용ddd자");
  const [role, setRole] = React.useState("근로생");
  const [loginState, setLoginState] = React.useState(true);
  
  const router = useRouter();

  const onLogout: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  return (
    <div>
      <nav
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100vw;
          height: 8vh;
          background-color: rgb(173, 173, 173);
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: fit-content;
            padding-left: 10%;
          `}
        >
          <div
            className="logo"
            css={css`
              font-size: 1.7em;
              font-weight: bold;
            `}
          >
            Dominest
          </div>
          <ul
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              background-color: var(--background-color);
              padding: 8px 12px;
              list-style: none;
            `}
          >
            <ListStyle>
              <ul>
                <p>즐겨찾기</p>
                <li>
                  <Link href="/login" css={Bookmark}>
                    <LinkP>땡땡이</LinkP>
                    <CiStar size={20} />
                  </Link>
                </li>
              </ul>
            </ListStyle>
            <ListStyle>
              <ul>
                <p>관리자 업무</p>
                <li>
                  <Link href="/login" css={Bookmark}>
                    <LinkP>권한 부여</LinkP>
                    <CiStar size={20} />
                  </Link>
                </li>
                <li>
                  <Link href="/login" css={Bookmark}>
                    <LinkP>땡땡이</LinkP>
                    <CiStar size={20} />
                  </Link>
                </li>
                <li>
                  <Link href="/login" css={Bookmark}>
                    <LinkP>땡땡이</LinkP>
                    <CiStar size={20} />
                  </Link>
                </li>
              </ul>
            </ListStyle>
            <ListStyle>
              <ul>
                <p>근로생 업무</p>
                <li>
                  <Link href="/login" css={Bookmark}>
                    <LinkP>땡땡이</LinkP>
                    <CiStar size={20} />
                  </Link>
                </li>
                <li>
                  <Link href="/login" css={Bookmark}>
                    <LinkP>빵빵이</LinkP>
                    <CiStar size={20} />
                  </Link>
                </li>
                <li>
                  <Link href="/login" css={Bookmark}>
                    <LinkP>옥지얌</LinkP>
                    <CiStar size={20} />
                  </Link>
                </li>
              </ul>
            </ListStyle>
          </ul>
        </div>
        <LogoutStyle>
          <User className="login">
            <HiOutlineUserCircle
              className="loginIcon"
              size={25}
              css={css`
                margin-right: 5px;
              `}
            />
            {role === "근로생" ? (
              <UserStyle>근로생</UserStyle>
            ) : (
              <UserStyle>관리자</UserStyle>
            )}
            <UserStyle
              css={css`
                color: green;
              `}
            >
              {name}
            </UserStyle>
          </User>
          <User
            className="logout"
            css={css`
              display: none;
            `}
          >
            <button
              css={css`
                border: none;
                background-color: inherit;
                font-size: 1.3em;
                text-align: end;
              `}
              type="button"
              onClick={onLogout}
            >
              로그아웃 하기
            </button>
          </User>
        </LogoutStyle>
      </nav>
    </div>
  );
}
