<<<<<<< HEAD:dominest/src/components/Navbar.tsx
;
import React, { useState, useEffect } from "react";
=======
import React, { useEffect } from "react";
import { useNavbar, onLogout } from "@/utils/useAuth/useAuth";
>>>>>>> domi_3:dominest/src/components/AdminNavbar.tsx
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

<<<<<<< HEAD:dominest/src/components/Navbar.tsx
const NavItem = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-left: 0px;
`;

const Navbar: React.FC = (props) => {
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");

  const router = useRouter();
  const [Token, setToken] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [catago, setCatago] = useState<any[]>([]);
=======
const Navber = (props: { page: string }) => {
  const { Name, Role, Token } = useNavbar();
  const [FavoritesList, setFavoritesList] = React.useState<any[]>([]);
  const [Catago, setCatago] = React.useState<any[]>([]);
>>>>>>> domi_3:dominest/src/components/AdminNavbar.tsx

  //즐겨찾기 목록
  useEffect(() => {
    const favoritesData = async () => {
      const favorites = await startList(Token);

<<<<<<< HEAD:dominest/src/components/Navbar.tsx
    setName(username);
    setRole(role);
    setToken(authToken);
    startList(authToken);
    categoriesList(authToken);
    if (!authToken) {
      router.push("/login");
    }
  }, []);
  const startSelect = (id:number) => {
    axios
      .post(`http://domidomi.duckdns.org/categories/${id}/favorites`, null, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((response) => {
        startList(Token);
        return alert("즐찾추가 우효 www");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const startList = (authToken: string | null) => {
    axios
      .get("http://domidomi.duckdns.org/favorites", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setData(response.data?.data?.favorites);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const categoriesList = (authToken: string | null) => {
    axios
      .get("http://domidomi.duckdns.org/my-categories", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setCatago(response.data?.data?.categories);
        console.log(response.data?.data?.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 로컬 스토리지에서 토큰 삭제
    localStorage.removeItem("authToken");
    // 로그아웃 후 로그인 페이지로 이동
    router.push("/login");
  };
=======
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
      const favorites = await startList(Token);
      setFavoritesList(favorites);
    };
>>>>>>> domi_3:dominest/src/components/AdminNavbar.tsx

    fetchData();
  }, [Token]);
  return (
    <NavStyle>
      <Link className="Link" href="/home">
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
                    <CiStar
                      size={20}
                      onClick={() => startSelect(Token, favorites.categoryId)}
                    />
                  </Link>
                </li>
              ))}
            </NavItem>
          </li>
          <li>
            <p>관리자 목록</p>

            <NavItem>
              <li>
                <Link href="/infodata/studentupload" className="Link">
                  <span>학생정보 업로드</span>
                  <CiStar size={20} />
                </Link>
              </li>
              <li>
                <Link href="/admissionform" className="Link">
                  <span>입관신청서</span>
                  <CiStar size={20} />
                </Link>
              </li>
              <li>
                <Link href="/departureform" className="Link">
                  <span>퇴관신청서</span>
                  <CiStar size={20} />
                </Link>
              </li>
            </NavItem>
          </li>
          <li>
            <p>근로생 목록</p>

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
