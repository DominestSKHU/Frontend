import React, { useEffect } from "react";
import { useNavbar, onLogout } from "@/utils/useAuth/useAuth";
import { css } from "@emotion/react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import Link from "next/link";
import {
  NavStyle,
  LeftNav,
  NavList,
  LoginState,
  NavItem,
} from "@/style/NavStyle";
import { startList, startSelect } from "@/utils/navbar/favorites";
import { categoriesList } from "@/utils/navbar/categoriesList";
/** @jsxImportSource @emotion/react */

const Navbar = (props: { page: string }) => {
  const { Name, Role, Token } = useNavbar();
  const [FavoritesList, setFavoritesList] = React.useState<any[]>([]);
  const [Catago, setCatago] = React.useState<any[]>([]);

  //즐겨찾기 목록
  useEffect(() => {
    const favoritesData = async () => {
      const favorites = await startList();

      setFavoritesList(favorites);
    };

    const catagories = async () => {
      const catagories = await categoriesList(Token);
      setCatago(catagories);
    };

    catagories();
    favoritesData();
  }, [Token]);

  //카테고리 전체 조회
  useEffect(() => {
    const fetchData = async () => {
      const favorites = await startList();
      setFavoritesList(favorites);
    };

    fetchData();
  }, [Token]);
  return (
    <NavStyle>
      <Link className="Link" href="/user/home">
        <h1>Dominest</h1>
      </Link>

      <LeftNav>
        <NavList>
          <li>
            <p>즐겨찾기</p>
            <NavItem>
              {FavoritesList.map((favorites) => (
                <li key={favorites.id}>
                  <Link href={favorites.categoryLink} className="Link">
                    <span>{favorites.categoryName}</span>
                  </Link>
                  <CiStar
                    size={20}
                    onClick={() => startSelect(Token, favorites.categoryId)}
                  />
                </li>
              ))}
            </NavItem>
          </li>
          <li>
            <p>학생 정보관리</p>

            <NavItem>
              <li>
                <Link href="/infodata/studentupload" className="Link">
                  <span>학생정보 업로드</span>
                </Link>
                <CiStar size={20} />
              </li>
              <li>
                <Link href="/pdf/admissionform" className="Link">
                  <span>입관신청서</span>
                </Link>
                <CiStar size={20} />
              </li>
              <li>
                <Link href="/pdf/departureform" className="Link">
                  <span>퇴관신청서</span>
                </Link>
                <CiStar size={20} />
              </li>
              <li>
                <Link href="/categories/categoryManage" className="Link">
                  <span>카테고리 관리</span>
                </Link>
                <CiStar size={20} />
              </li>
            </NavItem>
          </li>
          <li>
            <p>주요 근로 목록</p>

            <NavItem>
              {Catago.map((categories) => (
                <li key={categories.id}>
                  <Link href={categories.categoryLink} className="Link">
                    <span>{categories.name}</span>
                  </Link>
                  <CiStar
                    size={20}
                    onClick={() => startSelect(Token, categories.id)}
                  />
                </li>
              ))}
            </NavItem>

            {/* 다른 근로생 목록 아이템들 추가 */}
          </li>
        </NavList>
      </LeftNav>
      <strong>{props.page}</strong>
      <LoginState>
        <HiOutlineUserCircle className="loginIcon" size={25} />
        <span
          css={css`
            color: green;
            font-weight: bold;
            font-size: 18px;
            margin-right: 5px;
            margin-left: 5px;
          `}
        >
          {Name}
        </span>
        {Role === "Admin" ? (
          <span
            css={css`
              font-weight: bold;
              font-size: 13px;
              margin-right: 5px;
              margin-left: 5px;
            `}
          >
            근로생
          </span>
        ) : (
          <span
            css={css`
              font-weight: bold;
              font-size: 13px;
              margin-right: 5px;
              margin-left: 5px;
            `}
          >
            관리자
          </span>
        )}

        <button className="logout" onClick={onLogout}>
          로그아웃
        </button>
      </LoginState>
    </NavStyle>
  );
};

export default Navbar;
