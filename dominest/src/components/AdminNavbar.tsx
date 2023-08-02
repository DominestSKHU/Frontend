// import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { NavStyle, LeftNav,NavList,LoginState} from "@/style/NavStyle";
/** @jsxImportSource @emotion/react */




const NavItem = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-left: 0px;
`;



const Navber = () => {
  const [name, setName] = React.useState("이용자");
  const [role, setRole] = React.useState("근로생");
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  const onLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 로컬 스토리지에서 토큰 삭제
    localStorage.removeItem("authToken");
    // 로그아웃 후 로그인 페이지로 이동
    router.push("/login");
  };

  return (
    <NavStyle>
           <h1>Dominest</h1>  
      <LeftNav>
     
        <NavList>
          <li>
              <p>즐겨찾기</p>
        
              <ol >
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
              </ol>
          
            
            {/* 다른 즐겨찾기 아이템들 추가 */}
          </li>
          <li>
          
              <p>관리자 목록</p>
           
           
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
          
          </li>
          <li>
           
              <p>근로생 목록</p>
           
         
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
          
            {/* 다른 근로생 목록 아이템들 추가 */}
          </li>
          </NavList>
      </LeftNav>
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
          로그아웃
        </button>
      </LoginState>
    </NavStyle>
  );
};

export default Navber;
