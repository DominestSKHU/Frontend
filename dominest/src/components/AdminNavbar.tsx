import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { css } from "@emotion/react";
import { HiOutlineUserCircle } from "react-icons/hi";
/** @jsxImportSource @emotion/react */

const ListStyle = styled.li`
  margin-left: 10%;
  width: 7rem;
  & > ul {
    display: inline-block;
    list-style: none;
    width: max-content;
    position: absolute;
    top: 32px;
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
  width: fit-content;
  padding: 0px 10px;
`;
const LogoutStyle = styled.div`
  margin-right: 10%;
  background-color: #dcdcdc;
  border-radius: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.147);
  width: fit-content;
`;
export default function Navber() {
  const [name, setName] = React.useState("이용ddd자");
  const [role, setRole] = React.useState("근로생");
  return (
    <div>
      <nav
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100vw;
          height: 10vh;
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
              font-size: 1.2em;
              font-weight: bold;
              margin-right: 10%;
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
                  <Link href="/login">땡땡이</Link>
                </li>
              </ul>
            </ListStyle>
            <ListStyle>
              <ul>
                <p>관리자 업무</p>
                <li>
                  <Link href="/login">권한 부여</Link>
                </li>
                <li>
                  <Link href="/login">땡땡이</Link>
                </li>
                <li>
                  <Link href="/login">빵빵이</Link>
                </li>
              </ul>
            </ListStyle>
            <ListStyle>
              <ul>
                <p>근로생 업무</p>
                <li>
                  <Link href="/login">땡땡이</Link>
                </li>
                <li>
                  <Link href="/login">빵빵이</Link>
                </li>
                <li>
                  <Link href="/login">옥지얌</Link>
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
        </LogoutStyle>
      </nav>
    </div>
  );
}
